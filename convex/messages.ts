import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { Doc, Id } from "./_generated/dataModel";

export const createChat = mutation({
  args: {
    title: v.string(),
    uuid: v.string(),
    userId: v.id("users"),
  },
  handler: async (ctx, args) => {
    // Check if chat already exists
    const existingChat = await ctx.db
      .query("chats")
      .withIndex("by_uuid", (q) => q.eq("uuid", args.uuid))
      .first();

    if (existingChat) {
      return existingChat._id;
    }

    // Create new chat if it doesn't exist
    const chatId = await ctx.db.insert("chats", {
      userId: args.userId,
      title: args.title,
      uuid: args.uuid,
      timestamp: Date.now(),
    });
    return chatId;
  },
});

export const getChatByUuid = query({
  args: {
    uuid: v.string(),
  },
  handler: async (ctx, args) => {
    const chat = await ctx.db
      .query("chats")
      .withIndex("by_uuid", (q) => q.eq("uuid", args.uuid))
      .first();
    return chat;
  },
});

export const listChats = query({
  args: {
    userId: v.id("users"),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("chats")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .order("desc")
      .collect();
  },
});

export const send = mutation({
  args: {
    content: v.string(),
    chatId: v.id("chats"),
    sender: v.union(v.literal("user"), v.literal("ai")),
    difficulty: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const message = await ctx.db.insert("messages", {
      content: args.content,
      chatId: args.chatId,
      sender: args.sender,
      timestamp: Date.now(),
      difficulty: args.difficulty,
    });

    // Update chat title if this is the first user message
    if (args.sender === "user") {
      const messages = await ctx.db
        .query("messages")
        .withIndex("by_chat", (q) => q.eq("chatId", args.chatId))
        .collect();

      if (messages.length <= 2) {
        // Generate a title from the first user message
        const title =
          args.content.length > 30
            ? args.content.substring(0, 30) + "..."
            : args.content;

        await ctx.db.patch(args.chatId, { title });
      }
    }

    return message;
  },
});

export const list = query({
  args: {
    chatId: v.id("chats"),
  },
  handler: async (ctx, args) => {
    const messages = await ctx.db
      .query("messages")
      .withIndex("by_chat", (q) => q.eq("chatId", args.chatId))
      .order("desc")
      .collect();
    return messages;
  },
});
