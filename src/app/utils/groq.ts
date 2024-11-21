import Groq from "groq-sdk";
import { Message } from "../types";

const groq = new Groq({
  apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

// Simple cache for basic responses
const COMMON_RESPONSES = new Map([
  ["hello", "Hi there! How can I help you today?"],
  ["hi", "Hello! What would you like to learn about?"],
  ["good morning", "Good morning! Ready to learn something new?"],
  ["good afternoon", "Good afternoon! What shall we explore today?"],
  ["good evening", "Good evening! What would you like to study?"],
  ["bye", "Goodbye! Keep learning and stay curious!"],
  ["thanks", "You're welcome! Let me know if you need anything else."],
  ["thank you", "You're welcome! Feel free to ask more questions."],
]);

// Rate limiting implementation
let lastCallTime = 0;
const RATE_LIMIT_DELAY = 1000; // 1 second between calls

export async function getAIResponse(
  userMessage: string,
  messageHistory: Message[]
): Promise<string> {
  // Check for common greetings/phrases first
  const lowercaseMessage = userMessage.toLowerCase().trim();
  if (COMMON_RESPONSES.has(lowercaseMessage)) {
    return COMMON_RESPONSES.get(lowercaseMessage)!;
  }

  // Rate limiting check
  const now = Date.now();
  if (now - lastCallTime < RATE_LIMIT_DELAY) {
    await new Promise((resolve) => setTimeout(resolve, RATE_LIMIT_DELAY));
  }
  lastCallTime = Date.now();

  // Get recent context, excluding greetings
  const context = messageHistory
    .slice(-3)
    .filter((msg) => !COMMON_RESPONSES.has(msg.content.toLowerCase().trim()))
    .map((msg) => `${msg.sender}: ${msg.content}`)
    .join("\n");

  const prompt = `You are a friendly and knowledgeable tutor. Keep responses natural and conversational.

${context ? `Previous conversation:\n${context}\n` : ""}
Student: ${userMessage}

Respond naturally and helpfully. If it's a greeting, be casual. If it's a question, provide a clear explanation. If it's a problem, help solve it step by step.`;

  try {
    const completion = await groq.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "mixtral-8x7b-32768",
      temperature: 0.7,
      max_tokens: 500,
      top_p: 1,
      stop: null,
    });

    return (
      completion.choices[0]?.message?.content ||
      "Could you rephrase that? I want to make sure I understand correctly."
    );
  } catch (error: unknown) {
    console.error("Groq API Error:", error);
    return "I'm having trouble thinking clearly. Could you try asking again?";
  }
}
