import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BlogsAdmin.css";
import { getBlogs, deleteBlog } from "../services/blogService";

/* ── SVG Icons ── */
const IconEdit = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const IconDelete = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="3,6 5,6 21,6" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <path d="M10 11v6M14 11v6" />
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
  </svg>
);

const IconPosts = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14,2 14,8 20,8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10,9 9,9 8,9" />
  </svg>
);

const IconPublished = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22,4 12,14.01 9,11.01" />
  </svg>
);

const IconDraft = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
);

const IconViews = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const BlogsAdmin = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const data = await getBlogs();
      setBlogs(data.blogs);
      setFilteredBlogs(data.blogs);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let updated = [...blogs];
    if (search)
      updated = updated.filter((b) =>
        b.title.toLowerCase().includes(search.toLowerCase()),
      );
    if (category !== "All")
      updated = updated.filter((b) => b.category === category);
    if (status !== "All") {
      updated = updated.filter(
        (b) => b.status.toLowerCase() === status.toLowerCase(),
      );
    }
    setFilteredBlogs(updated);
  }, [search, category, status, blogs]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this blog?")) return;
    try {
      await deleteBlog(id);
      fetchBlogs();
    } catch (error) {
      console.log(error);
    }
  };

  const categories = ["All", ...new Set(blogs.map((b) => b.category))];

  /* ── Derived stats ── */
  const totalPosts = blogs.length;
  const totalPublished = blogs.filter(
    (b) => b.status?.toLowerCase() === "published",
  ).length;
  const totalDrafts = blogs.filter(
    (b) => b.status?.toLowerCase() === "draft",
  ).length;

  return (
    <div className="blogs-admin">
      {/* HEADER */}
      <div className="blogs-top">
        <div>
          <h1>Manage Articles</h1>
          <p>Manage all published blogs</p>
        </div>
        <Link to="/admin/blogs/create" className="create-btn">
          + Write New Blog
        </Link>
      </div>

      {/* STATS CARDS */}
      <div className="blogs-stats">
        <div className="stat-card">
          <div className="stat-card__icon">
            <IconPosts />
          </div>
          <div className="stat-card__body">
            <span className="stat-card__label">Total Posts</span>
            <span className="stat-card__value">{totalPosts}</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-card__icon">
            <IconPublished />
          </div>
          <div className="stat-card__body">
            <span className="stat-card__label">Published</span>
            <span className="stat-card__value">{totalPublished}</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-card__icon">
            <IconDraft />
          </div>
          <div className="stat-card__body">
            <span className="stat-card__label">Drafts</span>
            <span className="stat-card__value">{totalDrafts}</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-card__icon">
            <IconViews />
          </div>
          <div className="stat-card__body">
            <span className="stat-card__label">Total Views</span>
            <span className="stat-card__value">
              {blogs.reduce((acc, blog) => acc + (blog.views || 0), 0)}
            </span>
          </div>
        </div>
      </div>

      {/* FILTERS */}
      <div className="blogs-filters">
        <input
          type="text"
          placeholder="Search title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat, i) => (
            <option key={i}>{cat}</option>
          ))}
        </select>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="All">All</option>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>
      </div>

      {/* TABLE */}
      <div className="blogs-table">
        {loading ? (
          <p>Loading blogs...</p>
        ) : filteredBlogs.length === 0 ? (
          <p>No blogs found.</p>
        ) : (
          <table>
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
            </colgroup>
            <thead>
              <tr>
                <th>Article</th>
                <th>Category</th>
                <th>Status</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredBlogs.map((blog) => (
                <tr key={blog._id}>
                  <td>
                    <div className="blog-info">
                      {/* <img src={blog.featuredimage?.url} alt={blog.title} /> */}
                      <img
                        src={blog.featuredImage?.url || "/placeholder.jpg"}
                        alt={blog.title}
                      />
                      <div>
                        <h4>{blog.title}</h4>
                        <p>/{blog.slug}</p>
                      </div>
                    </div>
                  </td>
                  <td>{blog.category}</td>
                  <td>
                    <span className={`status ${blog.status.toLowerCase()}`}>
                      {blog.status.charAt(0).toUpperCase() +
                        blog.status.slice(1)}
                    </span>
                  </td>
                  <td>{new Date(blog.publishDate).toLocaleDateString()}</td>
                  <td>
                    <div className="actions">
                      <Link
                        to={`/admin/blogs/edit/${blog._id}`}
                        className="ab-action-btn"
                        title="Edit blog"
                      >
                        <IconEdit />
                      </Link>
                      <button
                        className="delete-btn"
                        title="Delete blog"
                        onClick={() => handleDelete(blog._id)}
                      >
                        <IconDelete />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default BlogsAdmin;
