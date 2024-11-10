export interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
  isLoading?: boolean;
}

export interface MathProblem {
  question: string;
  solution: string;
  explanation: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

export interface TutorResponse {
  content: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}
