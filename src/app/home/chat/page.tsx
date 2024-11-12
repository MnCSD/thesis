"use client";

import { redirect } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { useMutation } from "convex/react";
import { useCreateChat } from "@/features/chats/use-create-chat";
import { useEffect } from "react";

export default function ChatPage() {
  const newChatId = uuidv4();

  redirect(`/home/chat/${newChatId}`);
}
