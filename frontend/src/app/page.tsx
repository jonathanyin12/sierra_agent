"use client";

import { useState } from "react";
import { CornerDownLeft } from "lucide-react";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "@/components/ui/chat/chat-bubble";
import { ChatInput } from "@/components/ui/chat/chat-input";
import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
import { Button } from "@/components/ui/button";

export default function Home() {
  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      // if (isGenerating || isLoading || !input) return;
      // setIsGenerating(true);
      // onSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
    }
  };

  const [input, setInput] = useState("");

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
        <ChatBubble variant="sent">
          <ChatBubbleAvatar fallback="US" />
          <ChatBubbleMessage variant="sent">
            Hello, how has your day been? I hope you are doing well.
          </ChatBubbleMessage>
        </ChatBubble>
        <ChatBubble variant="received">
          <ChatBubbleAvatar fallback="AI" />
          <ChatBubbleMessage variant="received">
            Hi, I am doing well, thank you for asking. How can I help you today?
          </ChatBubbleMessage>
        </ChatBubble>
        <ChatBubble variant="sent">
          <ChatBubbleAvatar fallback="US" />
          <ChatBubbleMessage variant="sent">
            Hello, how has your day been? I hope you are doing well.
          </ChatBubbleMessage>
        </ChatBubble>
        <ChatBubble variant="received">
          <ChatBubbleAvatar fallback="AI" />
          <ChatBubbleMessage variant="received">
            Hi, I am doing well, thank you for asking. How can I help you today?
          </ChatBubbleMessage>
        </ChatBubble>
        <ChatBubble variant="sent">
          <ChatBubbleAvatar fallback="US" />
          <ChatBubbleMessage variant="sent">
            Hello, how has your day been? I hope you are doing well.
          </ChatBubbleMessage>
        </ChatBubble>
        <ChatBubble variant="received">
          <ChatBubbleAvatar fallback="AI" />
          <ChatBubbleMessage variant="received">
            Hi, I am doing well, thank you for asking. How can I help you today?
          </ChatBubbleMessage>
        </ChatBubble>
        {/* <ChatBubble variant="received">
          <ChatBubbleAvatar fallback="AI" />
          <ChatBubbleMessage isLoading />
        </ChatBubble> */}
      </ChatMessageList>
      <div className="m-4 relative rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring">
        <ChatInput
          placeholder="Message Sierra Outfitters"
          value={input}
          onKeyDown={onKeyDown}
          onChange={(e) => setInput(e.target.value)}
          className="rounded-lg bg-background border-0 shadow-none focus-visible:ring-0"
        ></ChatInput>
        <div className="flex items-center p-3 pt-0">
          <Button
            disabled={!input}
            type="submit"
            size="sm"
            className="ml-auto gap-1.5"
          >
            Send Message
            <CornerDownLeft className="size-3.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
