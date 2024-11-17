import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

const schema = defineSchema({
  ...authTables,
  preferences: defineTable({
    userId: v.id("users"),
    subject: v.optional(
      v.union(
        v.literal("Mathematics"),
        v.literal("Science"),
        v.literal("Coding"),
        v.literal("Language Arts"),
        v.literal("Other")
      )
    ),
    learningLevel: v.optional(
      v.union(
        v.literal("beginner"),
        v.literal("intermediate"),
        v.literal("advanced")
      )
    ),
    learningFrequency: v.optional(
      v.union(v.literal("daily"), v.literal("weekly"), v.literal("monthly"))
    ),
  }).index("by_user_id", ["userId"]),

  moduleProgress: defineTable({
    userId: v.id("users"),
    topicId: v.string(),
    moduleId: v.string(),
    status: v.union(
      v.literal("not_started"),
      v.literal("in_progress"),
      v.literal("completed")
    ),
    progress: v.number(),
    currentSlide: v.number(),
    timeSpent: v.number(),
    lastAccessedAt: v.number(),
    completedAt: v.optional(v.number()),
  })
    .index("by_user", ["userId"])
    .index("by_user_topic", ["userId", "topicId"])
    .index("by_user_module", ["userId", "moduleId"]),

  quizAttempts: defineTable({
    userId: v.id("users"),
    moduleId: v.string(),
    questionId: v.string(),
    selectedAnswer: v.number(),
    isCorrect: v.boolean(),
    attemptedAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_user_module", ["userId", "moduleId"]),

  moduleStats: defineTable({
    userId: v.id("users"),
    moduleId: v.string(),
    totalQuestions: v.number(),
    correctAnswers: v.number(),
    accuracy: v.number(),
    bestStreak: v.number(),
    xpEarned: v.number(),
    updatedAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_user_module", ["userId", "moduleId"]),

  chats: defineTable({
    userId: v.id("users"),
    title: v.string(),
    uuid: v.string(),
    timestamp: v.optional(v.number()),
  }).index("by_uuid", ["uuid"]),

  messages: defineTable({
    chatId: v.id("chats"),
    content: v.string(),
    sender: v.union(v.literal("user"), v.literal("ai")),
    timestamp: v.number(),
    difficulty: v.optional(v.string()),
  }).index("by_chat", ["chatId"]),

  notes: defineTable({
    userId: v.id("users"),
    chatId: v.optional(v.id("chats")),
    messageId: v.optional(v.id("messages")),
    content: v.string(),
    timestamp: v.number(),
    tags: v.optional(v.array(v.string())),
    title: v.string(),
  })
    .index("by_user", ["userId"])
    .index("by_chat", ["chatId"])
    .index("by_message", ["messageId"]),
});

export default schema;
