import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";

export const create = mutation({
  args: {
    title: v.string(),
    uuid: v.string(),
  },
  handler: async (ctx, { title, uuid }) => {
    const userId = await getAuthUserId(ctx);

    if (!userId) {
      throw new Error("Unauthorized");
    }

    const chatId = await ctx.db.insert("chats", {
      userId: userId,
      title,
      uuid,
    });

    return chatId;
  },
});

export const get = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);

    if (!userId) {
      return [];
    }

    return await ctx.db.query("chats").collect();
  },
});
