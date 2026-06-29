import sqlite3

DATABASE_NAME = "benchmark.db"


def get_connection():
    conn = sqlite3.connect(DATABASE_NAME)
    conn.row_factory = sqlite3.Row
    return conn


def create_tables():
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS benchmarks (

            id INTEGER PRIMARY KEY AUTOINCREMENT,

            model TEXT,

            prompt TEXT,

            latency REAL,

            cpu REAL,

            ram REAL,

            response_length INTEGER,

            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

        )
    """)

    conn.commit()
    conn.close()


def get_benchmark_history():
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT *
        FROM benchmarks
        ORDER BY created_at DESC
    """)

    rows = cursor.fetchall()

    conn.close()

    return [dict(row) for row in rows]

def get_leaderboard():
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT
            model,
            COUNT(*) AS runs,
            ROUND(AVG(latency), 2) AS avg_latency,
            ROUND(AVG(cpu), 2) AS avg_cpu,
            ROUND(AVG(ram), 2) AS avg_ram
        FROM benchmarks
        GROUP BY model
        ORDER BY avg_latency ASC
    """)

    rows = cursor.fetchall()
    conn.close()

    return [dict(row) for row in rows]