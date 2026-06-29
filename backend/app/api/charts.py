from fastapi import APIRouter
from app.database.database import get_connection

router = APIRouter(
    prefix="/api/charts",
    tags=["Charts"]
)


@router.get("/")
def chart_data():

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT
            created_at,
            latency,
            cpu,
            ram
        FROM benchmarks
        ORDER BY created_at
    """)

    rows = cursor.fetchall()
    conn.close()

    return [dict(row) for row in rows]