import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";

export const useNotes = () => {
  const useGetNote = (noteId: Id<"notes">) => {
    const note = useQuery(api.notes.getNote, { id: noteId });
    const isLoading = note === undefined;

    return {
      note,
      isLoading,
    };
  };

  const useGetNotesByUser = (userId: Id<"users">) => {
    const notes = useQuery(api.notes.getNotesByUser, { userId });
    const isLoading = notes === undefined;

    return {
      notes,
      isLoading,
    };
  };

  const useGetNotesByChat = (chatId: Id<"chats">) => {
    const notes = useQuery(api.notes.getNotesByChat, { chatId });
    const isLoading = notes === undefined;

    return {
      notes,
      isLoading,
    };
  };

  const useGetNoteByMessage = (messageId: Id<"messages">) => {
    const note = useQuery(api.notes.getNotesByMessage, { messageId });
    const isLoading = note === undefined;

    return {
      note,
      isLoading,
    };
  };

  return {
    useGetNote,
    useGetNotesByUser,
    useGetNotesByChat,
    useGetNoteByMessage,
  };
};
