from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.history import router as history_router
from app.api.models import router as models_router
from app.api.benchmark import router as benchmark_router
from app.api.leaderboard import router as leaderboard_router
from app.database.database import create_tables
from app.api.dashboard import router as dashboard_router
from app.api.charts import router as charts_router
from app.api.export import router as export_router
create_tables()
app = FastAPI(
    title="LLM Benchmark Studio API",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(models_router)
app.include_router(benchmark_router)
app.include_router(history_router)
app.include_router(leaderboard_router)
app.include_router(dashboard_router)
app.include_router(charts_router)
app.include_router(export_router)
@app.get("/")
def root():
    return {
        "message": "LLM Benchmark Studio API"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }