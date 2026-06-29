import csv

from fastapi import APIRouter
from fastapi.responses import FileResponse

from app.database.database import get_connection

router = APIRouter(
    prefix="/api/export",
    tags=["Export"]
)


@router.get("/csv")
def export_csv():

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM benchmarks")

    rows = cursor.fetchall()

    conn.close()

    filename="benchmark_history.csv"

    with open(filename,"w",newline="") as file:

        writer=csv.writer(file)

        writer.writerow([
            "ID",
            "Model",
            "Prompt",
            "Latency",
            "CPU",
            "RAM",
            "Response Length",
            "Created At"
        ])

        for row in rows:

            writer.writerow(row)

    return FileResponse(
        filename,
        filename=filename,
        media_type="text/csv"
    )