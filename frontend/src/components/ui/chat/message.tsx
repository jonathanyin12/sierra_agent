import ReactMarkdown from "react-markdown";
import { ChatBubbleAvatar, ChatBubbleMessage, ChatBubble } from "./chat-bubble";

interface MessageProps {
  message: string;
}

const markdownComponents = {
  h1: ({ ...props }) => <h1 className="text-3xl font-bold" {...props} />,
  h2: ({ ...props }) => <h2 className="text-2xl font-semibold" {...props} />,
  h3: ({ ...props }) => <h3 className="text-xl font-semibold" {...props} />,
  h4: ({ ...props }) => <h4 className="text-lg font-semibold" {...props} />,
  a: ({ ...props }) => (
    <a className="text-blue-500 underline" target="_blank" {...props} />
  ),
};

export const AgentMessage = ({ message }: MessageProps) => {
  return (
    <ChatBubble variant="received">
      <ChatBubbleAvatar src={"sierra.svg"} />
      <ChatBubbleMessage variant="received">
        <ReactMarkdown components={markdownComponents}>{message}</ReactMarkdown>
      </ChatBubbleMessage>
    </ChatBubble>
  );
};

export const UserMessage = ({ message }: MessageProps) => {
  return (
    <ChatBubble variant="sent">
      <ChatBubbleAvatar src={"sama.jpeg"} />
      <ChatBubbleMessage variant="sent">
        <ReactMarkdown components={markdownComponents}>{message}</ReactMarkdown>
      </ChatBubbleMessage>
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
