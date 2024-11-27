import { biologyModules } from "./modules/biology";
import { computerScienceModules } from "./modules/computer-science";
import { mathematicsModules } from "./modules/mathematics";
import { physicsModules } from "./modules/physics";

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
  Mathematics: {
    id: "mathematics",
    title: "Mathematics",
    sections: mathematicsModules[0].slides,
  },
  Biology: {
    id: "biology",
    title: "Biology",
    sections: biologyModules[0].slides,
  },
  Physics: {
    id: "physics",
    title: "Physics",
    sections: physicsModules[0].slides,
  },
};

// Module contents for new module-based system
export const moduleContents: Record<string, ModuleContent[]> = {
  "Computer Science": computerScienceModules,
  Mathematics: mathematicsModules,
  Biology: biologyModules,
  Physics: physicsModules,
};

export const getTopicContent = (topicId: string): TopicContent | undefined => {
  return topicContents[topicId];
};

export const getModuleContent = (
  topicId: string,
  moduleId: string
): ModuleContent | undefined => {
  const modules = moduleContents[topicId];
  console.log(modules.find((m) => m.title === moduleId));
  if (!modules) return undefined;
  return modules.find((m) => m.title === moduleId);
};
