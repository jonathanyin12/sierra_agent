"use client";

import { useState } from "react";

import {
  AgentMessage,
  LoadingMessage,
  UserMessage,
} from "@/components/ui/chat/message";
import ChatInputBox from "@/components/ui/chat/chat-input-box";
import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
import { Message } from "@/types/chat";

export default function Chat() {
  const [isResponding, setIsResponding] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hi! I'm planning a backpacking trip in the Sierra Nevada next month. Could you help me figure out what gear I need?",
      role: "user",
    },
    {
      id: "2",
      content:
        "Of course! I'd be happy to help you plan your gear for backpacking in the Sierra Nevada. To provide the best recommendations, could you tell me a few things: How many days are you planning to be out? What time of year exactly? And do you have any backpacking experience?",
      role: "agent",
    },
    {
      id: "3",
      content:
        "I'm planning a 3-day trip in mid-July. I've done some day hiking but this will be my first overnight backpacking trip!",
      role: "user",
    },
    {
      id: "4",
      content:
        "That's exciting! The Sierra Nevada is beautiful in July. For a first-time backpacker, I'd recommend focusing on the essentials: a lightweight tent or shelter, a sleeping bag rated for ~30°F nights, a reliable backpack (65L should be good for 3 days), and proper layers. Would you like me to break down the specific gear recommendations in more detail?",
      role: "agent",
    },
  ]);

  const handleSendMessage = (message: string) => {
    setIsResponding(true);
    const newMessages: Message[] = [
      ...messages,
      { id: Date.now().toString(), content: message, role: "user" },
    ];
    setMessages(newMessages);

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((data) => {
        handleResponse(data.response);
      });
  };

  const handleResponse = (message: string) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: Date.now().toString(), content: message, role: "agent" },
    ]);
    setIsResponding(false);
  };

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        height: "100dvh",
        maxHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ChatMessageList>
        {messages.map((message) =>
          message.role === "user" ? (
            <UserMessage key={message.id} message={message.content} />
          ) : (
            <AgentMessage key={message.id} message={message.content} />
          )
        )}
        {isResponding && <LoadingMessage />}
      </ChatMessageList>
      <ChatInputBox onSendMessage={handleSendMessage} disabled={isResponding} />
    </div>
  );
}
