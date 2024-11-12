"use client";

import { motion } from "framer-motion";
import { NotebookBackground } from "../components/notebook-background";
import { ChatContainer } from "../components/chat-container";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import { useCurrentUser } from "@/features/auth/hooks/use-current-user";

export default function ChatPage() {
  const [messageCount, setMessageCount] = useState(0);
  const params = useParams();
  const router = useRouter();
  const uuid = params.chatId as string;
  const { data: user, isLoading: isUserLoading } = useCurrentUser();
  const createChat = useMutation(api.messages.createChat);
  const existingChat = useQuery(api.messages.getChatByUuid, { uuid });

  useEffect(() => {
    const initializeChat = async () => {
      if (!existingChat && !isUserLoading && user) {
        try {
          await createChat({
            title: "New Chat",
            uuid,
            userId: user._id,
          });
        } catch (error) {
          console.error("Failed to create chat:", error);
          router.push("/home");
        }
      }
    };

    initializeChat();
  }, [existingChat, createChat, uuid, user, isUserLoading, router]);

  if (isUserLoading) {
    return null;
  }

  if (!user) {
    router.push("/login");
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen bg-[#0F0F0F]"
    >
      <NotebookBackground messagesLength={messageCount} />
      <ChatContainer chatId={uuid} onMessageCountChange={setMessageCount} />
    </motion.div>
  );
}
