import requests

OLLAMA_URL = "http://localhost:11434/api/tags"


def get_models():
    """
    Fetch installed models from Ollama and remove duplicate digests.
    """

    response = requests.get(OLLAMA_URL, timeout=10)
    response.raise_for_status()

    data = response.json()

    seen = set()
    models = []

    for model in data.get("models", []):
        digest = model["digest"]

        if digest not in seen:
            seen.add(digest)

            models.append({
                "name": model["name"],
                "size": model["size"],
                "family": model["details"]["family"],
                "parameters": model["details"]["parameter_size"]
            })

    return models