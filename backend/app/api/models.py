from fastapi import APIRouter
from app.services.ollama_service import get_models

router = APIRouter(prefix="/api/models", tags=["Models"])


@router.get("/")
def list_models():
    return {
        "models": get_models()
    }