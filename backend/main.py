import asyncio
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from openai import AsyncOpenAI

from pydantic import BaseModel
from dotenv import load_dotenv
 
load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
class ChatRequest(BaseModel):
    message: str


class Message(BaseModel):
    role: str  # "user" or "assistant"
    content: str

class ChatRequest(BaseModel):
    messages: list[Message]


    
client = AsyncOpenAI()

@app.post("/chat")
async def chat(request: ChatRequest):
    openai_messages = [{"role": msg.role, "content": msg.content} for msg in request.messages]
    chat_completion = await client.chat.completions.create(
        messages=openai_messages,
        model="gpt-4o",
    )
    return {"response": chat_completion.choices[0].message.content}
