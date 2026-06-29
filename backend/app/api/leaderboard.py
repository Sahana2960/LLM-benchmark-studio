from fastapi import APIRouter
from app.database.database import get_leaderboard

router = APIRouter(
    prefix="/api/leaderboard",
    tags=["Leaderboard"]
)


@router.get("/")
def leaderboard():
    return get_leaderboard()