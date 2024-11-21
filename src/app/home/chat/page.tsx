"use client";

import { redirect } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

export default function ChatPage() {
  const newChatId = uuidv4();

  redirect(`/home/chat/${newChatId}`);
}
