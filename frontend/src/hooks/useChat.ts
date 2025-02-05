import { useState } from "react";
import { Message, Role } from "@/types/chat";
import { sendChatMessage } from "@/services/chat-service";

export function useChat() {
  const [isResponding, setIsResponding] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = async (message: string) => {
    try {
      setIsResponding(true);
      const newMessages: Message[] = [
        ...messages,
        { id: Date.now().toString(), content: message, role: Role.USER },
      ];
      setMessages(newMessages);

      const response = await sendChatMessage(newMessages);
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: Date.now().toString(), content: response, role: Role.ASSISTANT },
      ]);
    } catch (error) {
      console.error("Failed to send message:", error);
    } finally {
      setIsResponding(false);
    }
  };

  const resetChat = () => setMessages([]);

  return {
    messages,
    isResponding,
    sendMessage,
    resetChat,
  };
}
