import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChatMessage } from "./chat-message";
import { ChatInput } from "./chat-input";
import { CreateNoteDialog } from "./create-note-dialog";
import { generateTutorResponse } from "@/app/utils/tutor-utils";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import { useCurrentUser } from "@/features/auth/hooks/use-current-user";
import { Id } from "../../../../../convex/_generated/dataModel";

interface ChatContainerProps {
  chatId: string;
  onMessageCountChange: (count: number) => void;
}

export function ChatContainer({
  chatId,
  onMessageCountChange,
}: ChatContainerProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMessageId, setSelectedMessageId] =
    useState<Id<"messages"> | null>(null);
  const [selectedContent, setSelectedContent] = useState("");
  const [isNoteDialogOpen, setIsNoteDialogOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollTimeout = useRef<NodeJS.Timeout>();
  const { data: user } = useCurrentUser();

  const chat = useQuery(api.messages.getChatByUuid, { uuid: chatId });
  const sendMessage = useMutation(api.messages.send);
  const messages =
    useQuery(api.messages.list, chat ? { chatId: chat._id } : "skip") || [];

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
  }, [messages.length, onMessageCountChange, scrollToBottom]);

  const formatCodeBlocks = (content: string) => {
    return content.replace(/```(\w+)?\n([\s\S]*?)```/g, (_, language, code) => {
      return `\n\`\`\`${language || ""}\n${code.trim()}\n\`\`\`\n`;
    });
  };

  const handleSendMessage = useCallback(
    async (content: string) => {
      if (isLoading || !chat) return;

      setIsLoading(true);
      scrollToBottom("auto");

      try {
        // Save user message
        await sendMessage({
          content,
          chatId: chat._id,
          sender: "user",
        });

        // Generate and save AI response
        // @ts-ignore
        const response = await generateTutorResponse(content, messages);
        const formattedContent = formatCodeBlocks(response.content);

        await sendMessage({
          content: formattedContent,
          chatId: chat._id,
          sender: "ai",
          difficulty: response.difficulty,
        });

        scrollToBottom();
      } catch (error) {
        console.error("Error generating response:", error);
        await sendMessage({
          content: "I'm having a moment. Could you try asking again?",
          chatId: chat._id,
          sender: "ai",
        });
      } finally {
        setIsLoading(false);
      }
    },
    [chat, sendMessage, messages, isLoading, scrollToBottom]
  );

  const handleMessageSelection = (
    messageId: Id<"messages">,
    selectedText: string
  ) => {
    setSelectedMessageId(messageId);
    setSelectedContent(selectedText);
    setIsNoteDialogOpen(true);
  };

  if (!chat) return null;

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 min-h-full flex flex-col max-w-5xl mx-auto px-6"
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
            {messages
              .slice()
              .reverse()
              .map((message) => (
                <ChatMessage
                  key={message._id}
                  message={{
                    id: message._id,
                    content: message.content,
                    sender: message.sender,
                    timestamp: new Date(message.timestamp),
                    difficulty: message.difficulty,
                  }}
                  isLoading={
                    isLoading && message === messages[messages.length - 1]
                  }
                  onSelect={handleMessageSelection}
                  isSelected={message._id === selectedMessageId}
                />
              ))}
          </AnimatePresence>
          <div ref={messagesEndRef} className="h-px" />
        </div>
      </div>

      <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />

      {user && chat && (
        <CreateNoteDialog
          isOpen={isNoteDialogOpen}
          onClose={() => {
            setIsNoteDialogOpen(false);
            setSelectedMessageId(null);
            setSelectedContent("");
          }}
          selectedContent={selectedContent}
          chatId={chat._id}
          messageId={selectedMessageId!}
          userId={user._id}
        />
      )}
    </motion.div>
  );
}
