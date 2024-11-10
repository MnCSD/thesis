import { Message } from "../types";
import { getAIResponse } from "./groq";

interface TutorResponse {
  content: string;
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
}

function shouldAssignDifficulty(message: string): boolean {
  // Only assign difficulty for actual questions/problems
  const isQuestion =
    message.includes("?") ||
    /how|what|why|when|where|can you|could you|solve|help|explain/i.test(
      message
    );

  // Exclude common greetings and simple phrases
  const isSimplePhrase =
    /^(hi|hello|thanks|thank you|bye|good|ok|yes|no)[\s!.]*$/i.test(
      message.trim()
    );

  return isQuestion && !isSimplePhrase;
}

function determineDifficulty(
  message: string
): "Beginner" | "Intermediate" | "Advanced" | undefined {
  if (!shouldAssignDifficulty(message)) {
    return undefined;
  }

  const lowerMessage = message.toLowerCase();

  // Keywords indicating advanced topics
  if (
    /calculus|quantum|advanced|complex|theorem|proof|algorithm/i.test(
      lowerMessage
    )
  ) {
    return "Advanced";
  }

  // Keywords indicating intermediate topics
  if (/equation|function|analysis|concept|formula|solve/i.test(lowerMessage)) {
    return "Intermediate";
  }

  return "Beginner";
}

export async function generateTutorResponse(
  message: string,
  messageHistory: Message[]
): Promise<TutorResponse> {
  const aiResponse = await getAIResponse(message, messageHistory);
  const difficulty = determineDifficulty(message);

  return {
    content: aiResponse,
    ...(difficulty && { difficulty }),
  };
}
