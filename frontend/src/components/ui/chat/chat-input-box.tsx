import { CornerDownLeft } from "lucide-react";
import { useState } from "react";
import { ChatInput } from "@/components/ui/chat/chat-input";
import { Button } from "@/components/ui/button";

export default function ChatInputBox() {
  const [input, setInput] = useState("");
  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
    }
  };
  return (
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
  );
}
