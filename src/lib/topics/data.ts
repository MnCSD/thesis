import {
  Brain,
  Code,
  Calculator,
  FlaskConical,
  Globe,
  BookOpen,
  Music,
  Palette,
  ChartBar,
  GraduationCap,
  Atom,
  Dna,
} from "lucide-react";
import { computerScienceModules } from "./modules/computer-science";

export interface TopicContent {
  id: string;
  title: string;
  sections: {
    id: string;
    title: string;
    content: string;
    quiz?: {
      question: string;
      options: string[];
      correctAnswer: number;
    };
  }[];
}

export interface ModuleContent {
  id: string;
  title: string;
  description: string;
  duration: string;
  slides: {
    id: string;
    title: string;
    content: string;
    quiz?: {
      question: string;
      options: string[];
      correctAnswer: number;
    };
  }[];
}

// Import module contents

// Topic contents for backward compatibility
export const topicContents: Record<string, TopicContent> = {
  "Computer Science": {
    id: "computer-science",
    title: "Computer Science",
    sections: computerScienceModules[0].slides,
  },
};

// Module contents for new module-based system
export const moduleContents: Record<string, ModuleContent[]> = {
  "Computer Science": computerScienceModules,
};

export const getTopicContent = (topicId: string): TopicContent | undefined => {
  return topicContents[topicId];
};

export const getModuleContent = (
  topicId: string,
  moduleId: string
): ModuleContent | undefined => {
  const modules = moduleContents[topicId];
  if (!modules) return undefined;
  return modules.find((m) => m.title === moduleId);
};
