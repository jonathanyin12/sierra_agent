import { ChatBubbleAvatar, ChatBubbleMessage, ChatBubble } from "./chat-bubble";

interface MessageProps {
  message: string;
}

export const AgentMessage = ({ message }: MessageProps) => {
  return (
    <ChatBubble variant="received">
      <ChatBubbleAvatar src={"sierra.svg"} />
      <ChatBubbleMessage variant="received">{message}</ChatBubbleMessage>
    </ChatBubble>
  );
};

export const UserMessage = ({ message }: MessageProps) => {
  return (
    <ChatBubble variant="sent">
      <ChatBubbleAvatar src={"sama.jpeg"} />
      <ChatBubbleMessage variant="sent">{message}</ChatBubbleMessage>
    </ChatBubble>
  );
};

export const LoadingMessage = () => {
  return (
    <ChatBubble variant="received">
      <ChatBubbleAvatar src={"sierra.svg"} />
      <ChatBubbleMessage isLoading />
    </ChatBubble>
  );
};
