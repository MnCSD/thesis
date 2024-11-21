import Groq from "groq-sdk";
import Error from "next/error";

const groq = new Groq({
  apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

let lastCallTime = 0;
const RATE_LIMIT_DELAY = 1000;

export async function getQuestionExplanation(
  question: string,
  context: string
): Promise<string> {
  const now = Date.now();
  if (now - lastCallTime < RATE_LIMIT_DELAY) {
    await new Promise((resolve) => setTimeout(resolve, RATE_LIMIT_DELAY));
  }
  lastCallTime = Date.now();

  const prompt = `You are a knowledgeable AI tutor. Explain the following question in detail:

Context: ${context}
Question: ${question}

Provide a clear, comprehensive explanation that helps the student understand the concept deeply. Include examples if relevant.`;

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
      "I apologize, but I'm having trouble generating an explanation. Please try again."
    );
  } catch (error: unknown) {
    console.error("Groq API Error:", error);

    return "I apologize, but I'm having trouble generating an explanation. Please try again.";
  }
}
