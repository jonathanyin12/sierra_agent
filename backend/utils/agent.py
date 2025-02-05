import json

from dotenv import load_dotenv
from openai import AsyncOpenAI
from openai.types.chat.chat_completion_message_param import ChatCompletionMessageParam

from ..models import Message
from .tools import call_function, get_available_tools

load_dotenv()


class SierraAgent:
    MODEL_NAME = "gpt-4o"
    MAX_ITERATIONS = 5

    def __init__(self):
        self.client = AsyncOpenAI()

    @staticmethod
    def _system_message() -> str:
        return """You are a friendly and helpful customer support agent for the company Sierra Outfitters.
     
# Background about Sierra Outfitters:
Sierra Outfitters is an emerging retailer competing with Patagonia, Cotopaxi, and REI. Their
CEO left a high-profile job as a leader at HubSpot to pursue her dreams of leading a retail
brand.


# Response Guidelines:
- Sierra Outfitters wants their agents to make frequent references to the outdoors. Think mountain emojis, enthusiastic phrases like "Onward into the unknown!" and more.
- Always respond in the same language as the user's message.
- If you don't know the answer, say you don't know. DO NOT make up an answer!
- If the user's message is not related to Sierra Outfitters, politely decline to answer.


# Specific Instructions:
- When asked about an order, use the "get_order_status_and_tracking_link" tool. Make sure you share the order status and full tracking link with the user.
"""

    async def _execute_agent_loop(
        self, messages: list[ChatCompletionMessageParam]
    ) -> str:
        available_tools = get_available_tools()
        completion = await self.client.chat.completions.create(
            messages=messages,
            model=self.MODEL_NAME,
            tools=available_tools,
        )

        iteration = 0
        while (
            completion.choices[0].message.tool_calls and iteration < self.MAX_ITERATIONS
        ):
            messages.append(completion.choices[0].message)

            for tool_call in completion.choices[0].message.tool_calls:
                name = tool_call.function.name
                args = json.loads(tool_call.function.arguments)
                result = call_function(name, args)
                messages.append(
                    {"role": "tool", "tool_call_id": tool_call.id, "content": result}
                )

            completion = await self.client.chat.completions.create(
                model=self.MODEL_NAME,
                messages=messages,
                tools=available_tools,
            )
            iteration += 1

        if (
            iteration >= self.MAX_ITERATIONS
            and completion.choices[0].message.tool_calls
        ):
            raise RuntimeError(
                f"Agent exceeded maximum iterations ({self.MAX_ITERATIONS})"
            )

        return completion.choices[0].message.content

    async def get_response(self, messages: list[Message]) -> str:
        chat_messages = [{"role": "system", "content": self._system_message()}]
        for msg in messages:
            chat_messages.append({"role": msg.role, "content": msg.content})

        try:
            return await self._execute_agent_loop(chat_messages)
        except Exception as e:
            print(e)
            return "I'm sorry, I encountered an error. Please try again later."
