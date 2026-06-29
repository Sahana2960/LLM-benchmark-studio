from fastapi import APIRouter
from app.database.database import get_benchmark_history

router = APIRouter(
    prefix="/api/history",
    tags=["History"]
)


@router.get("/")
def history():
    return get_benchmark_history()
from app.database.database import get_connection

@router.delete("/clear")
def clear_history():
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("DELETE FROM benchmarks")

    conn.commit()
    conn.close()

    return {"message": "History cleared successfully"}