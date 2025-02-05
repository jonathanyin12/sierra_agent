"use client";

import {
  AgentMessage,
  LoadingMessage,
  UserMessage,
} from "@/components/ui/chat/message";
import ChatInputBox from "@/components/ui/chat/chat-input-box";
import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
import { Button } from "@/components/ui/button";
import { useChat } from "@/hooks/useChat";

export default function Chat() {
  const { messages, isResponding, sendMessage, resetChat } = useChat();

  return (
    <div className="page-container">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="text-2xl font-bold">
          {"Conversation with Sierra Outfitters"}
        </div>
        <Button onClick={resetChat}>Reset Chat</Button>
      </div>
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
      <ChatInputBox onSendMessage={sendMessage} disabled={isResponding} />
    </div>
  );
}
