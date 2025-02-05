from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .models import ChatRequest
from .utils import get_agent_response

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/chat")
async def chat(request: ChatRequest):
    response = await get_agent_response(request.messages)
    return {"response": response}
