from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.models import router as models_router

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