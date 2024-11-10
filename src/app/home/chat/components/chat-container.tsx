import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChatMessage } from "./chat-message";
import { ChatInput } from "./chat-input";
import { Message } from "@/app/types";
import { generateTutorResponse } from "@/app/utils/tutor-utils";

interface ChatContainerProps {
  onMessageCountChange: (count: number) => void;
}

export function ChatContainer({ onMessageCountChange }: ChatContainerProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollTimeout = useRef<NodeJS.Timeout>();

  const scrollToBottom = useCallback((behavior: ScrollBehavior = "smooth") => {
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    scrollTimeout.current = setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior, block: "end" });
    }, 100);
  }, []);

  useEffect(() => {
    scrollToBottom();
    onMessageCountChange(messages.length);

    return () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [messages, onMessageCountChange, scrollToBottom]);

  const formatCodeBlocks = (content: string) => {
    return content.replace(/```(\w+)?\n([\s\S]*?)```/g, (_, language, code) => {
      return `\n\`\`\`${language || ""}\n${code.trim()}\n\`\`\`\n`;
    });
  };

  const handleSendMessage = useCallback(
    async (content: string) => {
      if (isLoading) return;

      const userMessage: Message = {
        id: Date.now().toString(),
        content,
        sender: "user",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);
      scrollToBottom("auto");

      try {
        const response = await generateTutorResponse(content, messages);
        const formattedContent = formatCodeBlocks(response.content);

        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: formattedContent,
          sender: "ai",
          timestamp: new Date(),
          ...(response.difficulty && { difficulty: response.difficulty }),
        };

        setMessages((prev) => [...prev, aiMessage]);
        scrollToBottom();
      } catch (error) {
        console.error("Error generating response:", error);
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: "I'm having a moment. Could you try asking again?",
          sender: "ai",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    },
    [messages, isLoading, scrollToBottom]
  );

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 min-h-full flex flex-col max-w-4xl mx-auto px-6"
    >
      <div className="flex-1 py-8">
        {messages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 mb-8"
          >
            <p className="text-lg">Hi! I'm here to help you learn.</p>
            <p className="text-sm">What would you like to explore today?</p>
          </motion.div>
        )}

        <div className="space-y-6 mb-6 overflow-y-auto scrollbar-hide">
          <AnimatePresence>
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message}
                isLoading={
                  isLoading && message === messages[messages.length - 1]
                }
              />
            ))}
          </AnimatePresence>
          <div ref={messagesEndRef} className="h-px" />
        </div>
      </div>

      <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
    </motion.div>
  );
}
