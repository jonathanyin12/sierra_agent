import json

from dotenv import load_dotenv
from openai import AsyncOpenAI
from openai.types.chat.chat_completion_message_param import ChatCompletionMessageParam

from ..models import Message
from .tools import call_function, get_available_tools

load_dotenv()

client = AsyncOpenAI()


def system_message() -> str:
    return "You are a helpful assistant that can answer questions and help with tasks."


async def excute_agent_loop(messages: list[ChatCompletionMessageParam]) -> str:
    available_tools = get_available_tools()
    completion = await client.chat.completions.create(
        messages=messages,
        model="gpt-4o",
        tools=available_tools,
    )

    max_iterations = 5
    iteration = 0
    while completion.choices[0].message.tool_calls and iteration < max_iterations:
        # append model's function call message
        messages.append(completion.choices[0].message)
        # iterate over the tool calls
        for tool_call in completion.choices[0].message.tool_calls:
            name = tool_call.function.name
            args = json.loads(tool_call.function.arguments)
            result = call_function(name, args)  # call the function
            # append the result to the messages
            messages.append(
                {"role": "tool", "tool_call_id": tool_call.id, "content": result}
            )
        # call the model again with the new messages
        completion = await client.chat.completions.create(
            model="gpt-4o",
            messages=messages,
            tools=available_tools,
        )
        iteration += 1

    if iteration >= max_iterations and completion.choices[0].message.tool_calls:
        raise RuntimeError(f"Agent exceeded maximum iterations ({max_iterations})")

    return completion.choices[0].message.content


async def get_agent_response(messages: list[Message]) -> str:
    chat_messages = [
        {"role": "system", "content": system_message()}
    ]  # prepend system message
    for msg in messages:
        chat_messages.append({"role": msg.role, "content": msg.content})

    try:
        return await excute_agent_loop(messages)
    except Exception as e:
        print(e)
        return "I'm sorry, I encountered an error. Please try again later."
