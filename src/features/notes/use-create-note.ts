import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";

export const useCreateNote = () => {
  const createNote = useMutation(api.notes.createNote);

  const create = async ({
    userId,
    chatId,
    messageId,
    content,
    title,
    tags,
  }: {
    userId: Id<"users">;
    chatId?: Id<"chats">;
    messageId?: Id<"messages">;
    content: string;
    title: string;
    tags?: string[];
  }) => {
    try {
      const noteId = await createNote({
        userId,
        chatId,
        messageId,
        content,
        title,
        tags,
      });
      return noteId;
    } catch (error) {
      console.error("Failed to create note:", error);
      throw error;
    }
  };

  return { create };
};
