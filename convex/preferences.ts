import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";

export const create = mutation({
  args: {
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
  },
  handler: async (ctx, { subject, learningFrequency, learningLevel }) => {
    const userId = await getAuthUserId(ctx);

    if (!userId) {
      throw new Error("Unauthorized");
    }

    const preferenceId = await ctx.db.insert("preferences", {
      userId,
      subject,
      learningFrequency,
      learningLevel,
    });

    return preferenceId;
  },
});

export const get = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);

    if (!userId) {
      return [];
    }

    return await ctx.db
      .query("preferences")
      .withIndex("by_user_id", (q) => q.eq("userId", userId))
      .collect();
  },
});
