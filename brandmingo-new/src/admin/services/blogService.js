import API from "./api";

// ==============================
// GET ALL BLOGS (ADMIN)
// ==============================
export const getBlogs = async () => {
  const res = await API.get("/blogs");
  return res.data;
};

// ==============================
// GET SINGLE BLOG
// ==============================
export const getBlogById = async (id) => {
  const res = await API.get(`/blogs/${id}`);
  return res.data;
};

// ==============================
// CREATE BLOG
// ==============================
export const createBlog = async (blogData) => {
  const res = await API.post("/blogs", blogData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};

// ==============================
// UPDATE BLOG
// ==============================
export const updateBlog = async (id, blogData) => {
  const res = await API.put(`/blogs/${id}`, blogData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};

// ==============================
// DELETE BLOG
// ==============================
export const deleteBlog = async (id) => {
  const res = await API.delete(`/blogs/${id}`);
  return res.data;
};

// ==============================
// PUBLIC BLOGS (WEBSITE)
// ==============================
export const getPublicBlogs = async () => {
  const res = await API.get("/blogs/public");
  return res.data;
};

// ==============================
// BLOG DETAILS BY SLUG
// ==============================
export const getBlogBySlug = async (slug) => {
  const res = await API.get(`/blogs/slug/${slug}`);
  return res.data;
};
