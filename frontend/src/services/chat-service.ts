import { Message } from "@/types/chat";

export async function sendChatMessage(messages: Message[]): Promise<string> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ messages }),
  });

  if (!response.ok) {
    throw new Error("Failed to send message");
  }

  const data = await response.json();
  return data.response;
}
