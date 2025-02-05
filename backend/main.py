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

client = AsyncOpenAI()

@app.post("/chat")
async def chat(request: ChatRequest):
    print(request.message)
    chat_completion = await client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": "Say this is a test",
            }
        ],
        model="gpt-4o",
    )
    print(chat_completion)
    return {"response": "Hello, world!"}
