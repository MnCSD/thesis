import { motion } from "framer-motion";
import { useState } from "react";
import { Copy, Check, Code2 } from "lucide-react";

interface CodeBlockProps {
  content: string;
  language: string;
}

export function CodeBlock({ content, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative my-4 rounded-lg overflow-hidden transform transition-all duration-300"
      style={{
        background:
          "linear-gradient(145deg, rgba(42,42,42,0.9) 0%, rgba(28,28,28,0.95) 100%)",
        boxShadow: isHovered
          ? "0 8px 30px rgba(85,220,73,0.2), 0 0 0 1px rgba(85,220,73,0.1), inset 0 0 80px rgba(85,220,73,0.03)"
          : "0 4px 20px rgba(0,0,0,0.2), inset 0 0 60px rgba(0,0,0,0.2)",
        transform: isHovered
          ? "scale(1.02) translateY(-2px)"
          : "scale(1) translateY(0)",
      }}
    >
      <div className="flex justify-between items-center px-4 py-2">
        <span className="text-sm text-[#55DC49] flex items-center gap-2 font-mono">
          <Code2 className="h-4 w-4" />
          <span className="opacity-80">{language}</span>
        </span>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCopy}
          className="p-1.5 rounded-md transition-all duration-300 relative group"
          style={{
            background: copied ? "rgba(85,220,73,0.1)" : "transparent",
            border: "1px solid rgba(85,220,73,0.1)",
          }}
        >
          {copied ? (
            <Check className="h-4 w-4 text-[#55DC49]" />
          ) : (
            <Copy className="h-4 w-4 text-gray-400 group-hover:text-[#55DC49] transition-colors duration-300" />
          )}
        </motion.button>
      </div>

      <pre className="p-4 overflow-x-auto">
        <code className="text-sm text-gray-300 whitespace-pre font-mono leading-relaxed">
          {content.split("\n").map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="hover:bg-[rgba(85,220,73,0.03)] px-2 -mx-2 rounded"
            >
              {line}
            </motion.div>
          ))}
        </code>
      </pre>
    </motion.div>
  );
}
