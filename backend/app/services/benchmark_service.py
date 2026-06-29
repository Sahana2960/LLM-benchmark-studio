import time
import requests
import psutil

from app.database.database import get_connection

OLLAMA_URL = "http://localhost:11434/api/generate"


def save_benchmark(
    model,
    prompt,
    latency,
    cpu,
    ram,
    response_length,
):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        """
        INSERT INTO benchmarks (
            model,
            prompt,
            latency,
            cpu,
            ram,
            response_length
        )
        VALUES (?, ?, ?, ?, ?, ?)
        """,
        (
            model,
            prompt,
            latency,
            cpu,
            ram,
            response_length,
        ),
    )

    conn.commit()
    conn.close()


def benchmark_model(model: str, prompt: str):
    cpu_before = psutil.cpu_percent(interval=None)
    ram_before = psutil.virtual_memory().percent

    start = time.perf_counter()

    response = requests.post(
        OLLAMA_URL,
        json={
            "model": model,
            "prompt": prompt,
            "stream": False,
        },
        timeout=300,
    )

    end = time.perf_counter()

    cpu_after = psutil.cpu_percent(interval=None)
    ram_after = psutil.virtual_memory().percent

    response.raise_for_status()

    data = response.json()

    latency = round((end - start) * 1000, 2)

    response_text = data.get("response", "")

    response_length = len(response_text)

    save_benchmark(
        model=model,
        prompt=prompt,
        latency=latency,
        cpu=cpu_after,
        ram=ram_after,
        response_length=response_length,
    )

    return {
        "model": model,
        "response": response_text,
        "latency_ms": latency,
        "cpu_usage": cpu_after,
        "ram_usage": ram_after,
        "response_length": response_length,
    }