import { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      maxLength: 200,
    },
    content: {
      type: String,
      required: true,
      maxLength: 10_000,
    },
    author: {
      type: String,
      required: true,
      maxLength: 50,
    },
    categories: {
      type: [String],
      required: true,
    },
    upvotes: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const Post = model("Post", postSchema);
