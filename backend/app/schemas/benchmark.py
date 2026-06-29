from pydantic import BaseModel


class BenchmarkRequest(BaseModel):
    model: str
    prompt: str