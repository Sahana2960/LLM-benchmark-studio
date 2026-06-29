from fastapi import APIRouter

from app.schemas.benchmark import BenchmarkRequest
from app.services.benchmark_service import benchmark_model

router = APIRouter(
    prefix="/api/benchmark",
    tags=["Benchmark"],
)

@router.post("/")
def run_benchmark(request: BenchmarkRequest):
    return benchmark_model(
        request.model,
        request.prompt,
    )