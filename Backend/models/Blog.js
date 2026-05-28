import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    content: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },
    
    tags: {
      type: [String],
      default: [],
    },

    featuredImage: {
      url: { type: String, default: "" },
      public_id: { type: String, default: "" },
    },

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },

    publishDate: {
      type: Date,
    },

    metaTitle: {
      type: String,
      trim: true,
      maxlength: 160,
    },

    metaDescription: {
      type: String,
      trim: true,
      maxlength: 300,
    },

    author: {
      type: String,
      default: "Marque Team",
    },

    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
