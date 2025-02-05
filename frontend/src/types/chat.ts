export type Message = {
  id: string;
  content: string;
  role: Role;
};

export enum Role {
  USER = "user",
  ASSISTANT = "assistant",
}
