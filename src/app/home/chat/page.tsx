"use client";

import { motion } from "framer-motion";
import { NotebookBackground } from "./components/notebook-background";
import { ChatContainer } from "./components/chat-container";
import { useState } from "react";

export default function ChatPage() {
  const [messageCount, setMessageCount] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen bg-[#0F0F0F]"
    >
      <NotebookBackground messagesLength={messageCount} />
      <ChatContainer onMessageCountChange={setMessageCount} />
    </motion.div>
  );
}
