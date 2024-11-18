import { getAuthUserId } from "@convex-dev/auth/server";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getProgress = query({
  args: {
    moduleId: v.string(),
    topicId: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);

    if (!userId) {
      throw new Error("Unauthorized");
    }

    const progress = await ctx.db
      .query("moduleProgress")
      .withIndex("by_user_topic_module", (q) =>
        q
          .eq("userId", userId)
          .eq("topicId", args.topicId)
          .eq("moduleId", args.moduleId)
      )
      .first();

    const stats = await ctx.db
      .query("moduleStats")
      .withIndex("by_user_module", (q) =>
        q.eq("userId", userId).eq("moduleId", args.moduleId)
      )
      .first();

    return {
      progress,
      stats,
    };
  },
});

export const updateProgress = mutation({
  args: {
    moduleId: v.string(),
    topicId: v.string(),
    timeSpent: v.number(),
    progress: v.number(),
    currentSlide: v.number(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);

    if (!userId) {
      throw new Error("Unauthorized");
    }

    const existingProgress = await ctx.db
      .query("moduleProgress")
      .withIndex("by_user_topic_module", (q) =>
        q
          .eq("userId", userId)
          .eq("topicId", args.topicId)
          .eq("moduleId", args.moduleId)
      )
      .first();

    if (!existingProgress) {
      return await ctx.db.insert("moduleProgress", {
        userId,
        moduleId: args.moduleId,
        topicId: args.topicId,
        status: "in_progress",
        progress: 0,
        currentSlide: 0,
        timeSpent: args.timeSpent,
        lastAccessedAt: Date.now(),
      });
    }

    return await ctx.db.patch(existingProgress._id, {
      timeSpent: existingProgress.timeSpent + args.timeSpent,
      progress: args.progress,
      currentSlide: args.currentSlide,
      lastAccessedAt: Date.now(),
    });
  },
});

export const submitQuizAnswer = mutation({
  args: {
    moduleId: v.string(),
    questionId: v.string(),
    selectedAnswer: v.number(),
    isCorrect: v.boolean(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);

    if (!userId) {
      throw new Error("Unauthorized");
    }

    await ctx.db.insert("quizAttempts", {
      userId,
      moduleId: args.moduleId,
      questionId: args.questionId,
      selectedAnswer: args.selectedAnswer,
      isCorrect: args.isCorrect,
      attemptedAt: Date.now(),
    });

    const stats = await ctx.db
      .query("moduleStats")
      .withIndex("by_user_module", (q) =>
        q.eq("userId", userId).eq("moduleId", args.moduleId)
      )
      .first();

    if (!stats) {
      await ctx.db.insert("moduleStats", {
        userId,
        moduleId: args.moduleId,
        totalQuestions: 1,
        correctAnswers: args.isCorrect ? 1 : 0,
        accuracy: args.isCorrect ? 100 : 0,
        bestStreak: args.isCorrect ? 1 : 0,
        xpEarned: args.isCorrect ? 10 : 0,
        updatedAt: Date.now(),
      });
    } else {
      const totalQuestions = stats.totalQuestions + 1;
      const correctAnswers = stats.correctAnswers + (args.isCorrect ? 1 : 0);
      await ctx.db.patch(stats._id, {
        totalQuestions,
        correctAnswers,
        accuracy: (correctAnswers / totalQuestions) * 100,
        xpEarned: stats.xpEarned + (args.isCorrect ? 10 : 0),
        updatedAt: Date.now(),
      });
    }
  },
});

export const completeModule = mutation({
  args: {
    moduleId: v.string(),
    topicId: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);

    if (!userId) {
      throw new Error("Unauthorized");
    }

    const progress = await ctx.db
      .query("moduleProgress")
      .withIndex("by_user_topic_module", (q) =>
        q
          .eq("userId", userId)
          .eq("topicId", args.topicId)
          .eq("moduleId", args.moduleId)
      )
      .first();

    if (progress) {
      await ctx.db.patch(progress._id, {
        status: "completed",
        progress: 100,
        completedAt: Date.now(),
      });
    } else {
      await ctx.db.insert("moduleProgress", {
        userId,
        topicId: args.topicId,
        moduleId: args.moduleId,
        status: "completed",
        progress: 100,
        timeSpent: 0,
        lastAccessedAt: Date.now(),
        completedAt: Date.now(),
        currentSlide: 10,
      });
    }
  },
});
