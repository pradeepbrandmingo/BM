import Blog from "../models/Blog.js";
import cloudinary from "../config/cloudinary.js";

// IMAGE UPLOAD HELPER
const uploadToCloudinary = (buffer, folder) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      },
    );
    stream.end(buffer);
  });
};

// CREATE BLOG
export const createBlog = async (req, res) => {
  try {
    const {
      title,
      slug,
      content,
      category,
      tags,
      status,
      publishDate,
      metaTitle,
      metaDescription,
    } = req.body;

    // SLUG UNIQUE CHECK
    const existing = await Blog.findOne({ slug });
    if (existing) {
      return res
        .status(400)
        .json({ success: false, message: "Slug already exists" });
    }

    let featuredImage = { url: "", public_id: "" };

    // IMAGE UPLOAD
    if (req.file) {
      const result = await uploadToCloudinary(req.file.buffer, "marque-blogs");
      featuredImage = { url: result.secure_url, public_id: result.public_id };
    }

    const blog = await Blog.create({
      title,
      slug,
      content,
      category,
      // tags: tags ? tags.split(",").map((t) => t.trim()) : [],
      tags: tags
        ? tags
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean)
        : [],
      status: status || "draft",
      publishDate: publishDate || null,
      metaTitle,
      metaDescription,
      featuredImage,
    });

    res.status(201).json({ success: true, message: "Blog created", blog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// GET ALL BLOGS (Admin - with filters)
export const getAllBlogs = async (req, res) => {
  try {
    const { status, category, search, page = 1, limit = 10 } = req.query;

    const query = {};
    if (status) query.status = status;
    if (category) query.category = category;
    if (search) query.title = { $regex: search, $options: "i" };

    const skip = (page - 1) * limit;

    const [blogs, total] = await Promise.all([
      Blog.find(query).sort({ createdAt: -1 }).skip(skip).limit(Number(limit)),
      Blog.countDocuments(query),
    ]);

    const totalPosts = await Blog.countDocuments();
    const published = await Blog.countDocuments({ status: "published" });
    const drafts = await Blog.countDocuments({ status: "draft" });

    res.status(200).json({
      success: true,
      blogs,
      pagination: {
        total,
        page: Number(page),
        pages: Math.ceil(total / limit),
      },
      stats: { totalPosts, published, drafts },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// GET SINGLE BLOG BY ID (Admin edit)
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog)
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });
    res.status(200).json({ success: true, blog });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// GET BLOG BY SLUG (Public - website pe)
export const getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({
      slug: req.params.slug,
      status: "published",
    });
    if (!blog)
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });

    // VIEW COUNT
    blog.views += 1;
    await blog.save();

    res.status(200).json({ success: true, blog });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// UPDATE BLOG
export const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog)
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });

    const {
      title,
      slug,
      content,
      category,
      tags,
      status,
      publishDate,
      metaTitle,
      metaDescription,
    } = req.body;

    // SLUG CHECK (skip if same blog)
    if (slug && slug !== blog.slug) {
      const existing = await Blog.findOne({ slug });
      if (existing) {
        return res
          .status(400)
          .json({ success: false, message: "Slug already exists" });
      }
    }

    // NEW IMAGE UPLOAD
    if (req.file) {
      // DELETE OLD IMAGE
      if (blog.featuredImage.public_id) {
        await cloudinary.uploader.destroy(blog.featuredImage.public_id);
      }
      const result = await uploadToCloudinary(req.file.buffer, "marque-blogs");
      blog.featuredImage = {
        url: result.secure_url,
        public_id: result.public_id,
      };
    }

    blog.title = title || blog.title;
    blog.slug = slug || blog.slug;
    blog.content = content || blog.content;
    blog.category = category || blog.category;
    // blog.tags = tags ? tags.split(",").map((t) => t.trim()) : blog.tags;
    blog.tags = tags
      ? tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean)
      : blog.tags;
    blog.status = status || blog.status;
    blog.publishDate = publishDate || blog.publishDate;
    blog.metaTitle = metaTitle || blog.metaTitle;
    blog.metaDescription = metaDescription || blog.metaDescription;

    await blog.save();

    res.status(200).json({ success: true, message: "Blog updated", blog });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// DELETE BLOG
export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog)
      return res
        .status(404)
        .json({ success: false, message: "Blog not found" });

    // DELETE IMAGE FROM CLOUDINARY
    if (blog.featuredImage.public_id) {
      await cloudinary.uploader.destroy(blog.featuredImage.public_id);
    }

    await blog.deleteOne();

    res.status(200).json({ success: true, message: "Blog deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// PUBLIC BLOG LIST (website ke liye)
export const getPublicBlogs = async (req, res) => {
  try {
    const { category, search, page = 1, limit = 10 } = req.query;

    const query = { status: "published" };
    if (category) query.category = category;
    if (search) query.title = { $regex: search, $options: "i" };

    const skip = (page - 1) * limit;

    const [blogs, total] = await Promise.all([
      Blog.find(query)
        .sort({ publishDate: -1, createdAt: -1 })
        .skip(skip)
        .limit(Number(limit)),
      Blog.countDocuments(query),
    ]);

    res.status(200).json({
      success: true,
      blogs,
      pagination: {
        total,
        page: Number(page),
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
