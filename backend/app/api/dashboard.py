from fastapi import APIRouter
from app.database.database import get_connection

router = APIRouter(
    prefix="/api/dashboard",
    tags=["Dashboard"]
)


@router.get("/")
def dashboard():

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("SELECT COUNT(*) FROM benchmarks")
    total = cursor.fetchone()[0]

    cursor.execute("SELECT COUNT(DISTINCT model) FROM benchmarks")
    models = cursor.fetchone()[0]

    cursor.execute("SELECT ROUND(AVG(latency),2) FROM benchmarks")
    latency = cursor.fetchone()[0] or 0

    cursor.execute("SELECT ROUND(AVG(cpu),2) FROM benchmarks")
    cpu = cursor.fetchone()[0] or 0

    cursor.execute("SELECT ROUND(AVG(ram),2) FROM benchmarks")
    ram = cursor.fetchone()[0] or 0

    conn.close()

    return {
        "benchmarks": total,
        "models": models,
        "latency": latency,
        "cpu": cpu,
        "ram": ram
    }