import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./EditBlog.css";
import { getBlogById, updateBlog } from "../services/blogService";

/* ── SVG Icons ── */
const IconGlobe = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);
const IconLayers = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12,2 2,7 12,12 22,7" />
    <polyline points="2,17 12,22 22,17" />
    <polyline points="2,12 12,17 22,12" />
  </svg>
);
const IconSearch = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const IconImage = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21,15 16,10 5,21" />
  </svg>
);
const IconUpload = () => (
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
    <polyline points="16,16 12,12 8,16" />
    <line x1="12" y1="12" x2="12" y2="21" />
    <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
  </svg>
);
const IconX = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const IconPlus = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
const IconArrow = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12,5 19,12 12,19" />
  </svg>
);
const IconSpinner = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    className="eb-spin"
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

/* ── Default categories ── */
const DEFAULT_CATEGORIES = [
  "SEO",
  "Google Ads",
  "Meta Ads",
  "Social Media Marketing",
  "Web Development",
  "Shopify",
  "Branding",
  "Performance Marketing",
  "Content Marketing",
  "UI/UX Design",
  "Business Growth",
  "Case Studies",
];

/* ── Slug generator ── */
const generateSlug = (title) =>
  title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

/* ── Format datetime-local ── */
const formatDatetimeLocal = (dateStr) => {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (isNaN(d)) return "";
  return d.toISOString().slice(0, 16);
};

/* ══════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════ */
const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  /* ── Form state ── */
  const [form, setForm] = useState({
    title: "",
    slug: "",
    content: "",
    category: "",
    tags: [],
    status: "draft",
    publishDate: "",
    metaTitle: "",
    metaDescription: "",
  });

  /* ── Image state ── */
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [existingImage, setExistingImage] = useState("");
  const [imageDrag, setImageDrag] = useState(false);

  /* ── Tags ── */
  const [tagInput, setTagInput] = useState("");

  /* ── Category ── */
  const [categories, setCategories] = useState(DEFAULT_CATEGORIES);
  const [showCustomCat, setShowCustomCat] = useState(false);
  const [customCatInput, setCustomCatInput] = useState("");

  /* ── UI ── */
  const [fetchLoading, setFetchLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [charCount, setCharCount] = useState({ metaTitle: 0, metaDesc: 0 });
  const [slugManual, setSlugManual] = useState(true); // edit mode mein manual by default
  const [successMsg, setSuccessMsg] = useState("");

  /* ── Fetch existing blog data ── */
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setFetchLoading(true);
        const data = await getBlogById(id);
        const blog = data.blog;

        /* Populate form */
        setForm({
          title: blog.title || "",
          slug: blog.slug || "",
          content: blog.content || "",
          category: blog.category || "",
          tags: blog.tags || [],
          status: blog.status || "draft",
          publishDate: formatDatetimeLocal(blog.publishDate),
          metaTitle: blog.metaTitle || "",
          metaDescription: blog.metaDescription || "",
        });

        setCharCount({
          metaTitle: (blog.metaTitle || "").length,
          metaDesc: (blog.metaDescription || "").length,
        });

        /* Existing image */
        if (blog.featuredImage?.url) {
          setExistingImage(blog.featuredImage.url);
          setImagePreview(blog.featuredImage.url);
        }

        /* Add category if not in list */
        if (blog.category && !DEFAULT_CATEGORIES.includes(blog.category)) {
          setCategories((p) => [...p, blog.category]);
        }
      } catch (err) {
        console.error(err);
        setErrors({
          fetch: "Failed to load blog. Please go back and try again.",
        });
      } finally {
        setFetchLoading(false);
      }
    };

    if (id) fetchBlog();
  }, [id]);

  /* ── Handlers ── */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: "" }));
    if (name === "metaTitle")
      setCharCount((p) => ({ ...p, metaTitle: value.length }));
    if (name === "metaDescription")
      setCharCount((p) => ({ ...p, metaDesc: value.length }));
  };

  const handleSlugChange = (e) => {
    setSlugManual(true);
    setForm((p) => ({
      ...p,
      slug: e.target.value.toLowerCase().replace(/\s+/g, "-"),
    }));
    setErrors((p) => ({ ...p, slug: "" }));
  };

  /* ── Tags ── */
  const addTag = () => {
    const t = tagInput.trim();
    if (t && !form.tags.includes(t) && form.tags.length < 10)
      setForm((p) => ({ ...p, tags: [...p.tags, t] }));
    setTagInput("");
  };
  const removeTag = (tag) =>
    setForm((p) => ({ ...p, tags: p.tags.filter((t) => t !== tag) }));
  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag();
    }
    if (e.key === "Backspace" && !tagInput && form.tags.length)
      removeTag(form.tags[form.tags.length - 1]);
  };

  /* ── Custom category ── */
  const addCustomCategory = () => {
    const cat = customCatInput.trim();
    if (!cat) return;
    if (!categories.includes(cat)) setCategories((p) => [...p, cat]);
    setForm((p) => ({ ...p, category: cat }));
    setCustomCatInput("");
    setShowCustomCat(false);
  };

  /* ── Image ── */
  const handleImageFile = (file) => {
    if (!file || !file.type.startsWith("image/")) return;
    setImageFile(file);
    const reader = new FileReader();
    reader.onload = (e) => setImagePreview(e.target.result);
    reader.readAsDataURL(file);
  };
  const handleImageInput = (e) => handleImageFile(e.target.files[0]);
  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setImageDrag(false);
    handleImageFile(e.dataTransfer.files[0]);
  }, []);
  const handleDragOver = (e) => {
    e.preventDefault();
    setImageDrag(true);
  };
  const handleDragLeave = () => setImageDrag(false);

  const removeImage = () => {
    setImageFile(null);
    setImagePreview("");
    setExistingImage("");
  };

  /* ── Validation ── */
  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = "Blog title is required.";
    if (!form.slug.trim()) e.slug = "Slug is required.";
    if (!form.content.trim()) e.content = "Content cannot be empty.";
    if (!form.category) e.category = "Please select a category.";
    return e;
  };

  /* ── Submit ── */
  // const handleSubmit = async (blogStatus) => {
  //   const errs = validate();
  //   if (Object.keys(errs).length) {
  //     setErrors(errs);
  //     return;
  //   }

  //   const fd = new FormData();
  //   fd.append("title", form.title);
  //   fd.append("slug", form.slug);
  //   fd.append("content", form.content);
  //   fd.append("category", form.category);
  //   fd.append("tags", form.tags.join(","));
  //   fd.append("status", blogStatus);
  //   fd.append("publishDate", form.publishDate);
  //   fd.append("metaTitle", form.metaTitle);
  //   fd.append("metaDescription", form.metaDescription);
  //   if (imageFile) fd.append("featuredImage", imageFile);

  //   try {
  //     setLoading(true);
  //     setErrors({});
  //     await updateBlog(id, fd);
  //     setSuccessMsg("Blog updated successfully!");
  //     setTimeout(() => navigate("/admin/blogs"), 1200);
  //   } catch (err) {
  //     console.error(err);
  //     setErrors({ submit: "Failed to update blog. Please try again." });
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (blogStatus) => {
    // PENDING TAG FLUSH
    let finalTags = [...form.tags];
    if (tagInput.trim()) {
      const t = tagInput.trim();
      if (!finalTags.includes(t) && finalTags.length < 10) {
        finalTags = [...finalTags, t];
      }
      setTagInput("");
    }

    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    const fd = new FormData();
    fd.append("title", form.title);
    fd.append("slug", form.slug);
    fd.append("content", form.content);
    fd.append("category", form.category);
    fd.append("tags", finalTags.join(",")); // finalTags use karo
    fd.append("status", blogStatus);
    fd.append("publishDate", form.publishDate);
    fd.append("metaTitle", form.metaTitle);
    fd.append("metaDescription", form.metaDescription);
    if (imageFile) fd.append("featuredImage", imageFile);

    try {
      setLoading(true);
      setErrors({});
      await updateBlog(id, fd);
      setSuccessMsg("Blog updated successfully!");
      setTimeout(() => navigate("/admin/blogs"), 1200);
    } catch (err) {
      console.error(err);
      setErrors({ submit: "Failed to update blog. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  /* ── Loading skeleton ── */
  if (fetchLoading) {
    return (
      <div className="eb-wrapper">
        <div className="eb-skeleton-header">
          <div className="eb-skel eb-skel--title" />
          <div className="eb-skel eb-skel--btn" />
        </div>
        <div className="eb-grid">
          <div className="eb-col-main">
            <div className="eb-card">
              <div className="eb-skel eb-skel--field" />
              <div className="eb-skel eb-skel--field" />
            </div>
            <div className="eb-card">
              <div className="eb-skel eb-skel--content" />
            </div>
          </div>
          <div className="eb-col-side">
            <div className="eb-card">
              <div className="eb-skel eb-skel--side" />
            </div>
            <div className="eb-card">
              <div className="eb-skel eb-skel--side" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ── Fetch error ── */
  if (errors.fetch) {
    return (
      <div className="eb-wrapper">
        <div className="eb-fetch-error">
          <p>{errors.fetch}</p>
          <Link to="/admin/blogs" className="eb-btn-cancel">
            ← Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  /* ── Render ── */
  return (
    <div className="eb-wrapper">
      {/* Header */}
      <div className="eb-header">
        <div className="eb-header-left">
          <div className="eb-header-badge">Editing</div>
          <h1 className="eb-header-title">Edit Blog</h1>
          <p className="eb-header-breadcrumb">
            <Link to="/admin/blogs">Blogs</Link>
            <span>/</span>
            <span className="eb-breadcrumb-active">
              {form.title
                ? form.title.substring(0, 40) +
                  (form.title.length > 40 ? "..." : "")
                : "Edit"}
            </span>
          </p>
        </div>
        <div className="eb-header-actions">
          <Link to="/admin/blogs" className="eb-btn-cancel">
            Cancel
          </Link>
          <button
            className="eb-btn-publish"
            onClick={() => handleSubmit("published")}
            disabled={loading}
          >
            {loading ? (
              <>
                <IconSpinner /> Updating...
              </>
            ) : (
              <>
                Update & Publish <IconArrow />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Success message */}
      {successMsg && <div className="eb-success-banner">{successMsg}</div>}

      {/* Submit error */}
      {errors.submit && <div className="eb-error-banner">{errors.submit}</div>}

      {/* Main grid */}
      <div className="eb-grid">
        {/* ════ LEFT ════ */}
        <div className="eb-col-main">
          {/* Title + Slug */}
          <div className="eb-card">
            <div className="eb-field">
              <label className="eb-label" htmlFor="eb-title">
                Blog Title <span className="eb-req">*</span>
              </label>
              <input
                id="eb-title"
                name="title"
                type="text"
                className={`eb-input${errors.title ? " eb-input--error" : ""}`}
                placeholder="Enter blog title..."
                value={form.title}
                onChange={handleChange}
                maxLength={200}
              />
              {errors.title && (
                <span className="eb-field-error">{errors.title}</span>
              )}
            </div>

            <div className="eb-field">
              <label className="eb-label" htmlFor="eb-slug">
                Slug (URL) <span className="eb-req">*</span>
              </label>
              <div className="eb-slug-wrap">
                <span className="eb-slug-prefix">domain.com/blog/</span>
                <input
                  id="eb-slug"
                  name="slug"
                  type="text"
                  className={`eb-input eb-input--slug${errors.slug ? " eb-input--error" : ""}`}
                  placeholder="slug-url"
                  value={form.slug}
                  onChange={handleSlugChange}
                />
              </div>
              {errors.slug && (
                <span className="eb-field-error">{errors.slug}</span>
              )}
              <p className="eb-field-hint">
                Changing slug may break existing links.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="eb-card">
            <div className="eb-field">
              <label className="eb-label" htmlFor="eb-content">
                Content <span className="eb-req">*</span>
              </label>
              <textarea
                id="eb-content"
                name="content"
                className={`eb-textarea${errors.content ? " eb-input--error" : ""}`}
                placeholder="Write your article..."
                value={form.content}
                onChange={handleChange}
                rows={16}
              />
              {errors.content && (
                <span className="eb-field-error">{errors.content}</span>
              )}
              <p className="eb-field-hint">{form.content.length} characters</p>
            </div>
          </div>

          {/* SEO */}
          <div className="eb-card">
            <div className="eb-card-head">
              <IconSearch />
              <h3 className="eb-card-title">SEO Settings</h3>
            </div>

            <div className="eb-field">
              <label className="eb-label" htmlFor="eb-metaTitle">
                Meta Title
                <span className="eb-char-count">{charCount.metaTitle}/160</span>
              </label>
              <input
                id="eb-metaTitle"
                name="metaTitle"
                type="text"
                className="eb-input"
                placeholder="SEO optimized title..."
                value={form.metaTitle}
                onChange={handleChange}
                maxLength={160}
              />
            </div>

            <div className="eb-field">
              <label className="eb-label" htmlFor="eb-metaDesc">
                Meta Description
                <span className="eb-char-count">{charCount.metaDesc}/300</span>
              </label>
              <textarea
                id="eb-metaDesc"
                name="metaDescription"
                className="eb-textarea eb-textarea--sm"
                placeholder="Brief description for search engines..."
                value={form.metaDescription}
                onChange={handleChange}
                rows={3}
                maxLength={300}
              />
            </div>
          </div>
        </div>

        {/* ════ RIGHT ════ */}
        <div className="eb-col-side">
          {/* Publish */}
          <div className="eb-card">
            <div className="eb-card-head">
              <IconGlobe />
              <h3 className="eb-card-title">Publish</h3>
            </div>

            <div className="eb-field">
              <label className="eb-label" htmlFor="eb-status">
                Status
              </label>
              <select
                id="eb-status"
                name="status"
                className="eb-select"
                value={form.status}
                onChange={handleChange}
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>

            <div className="eb-field">
              <label className="eb-label" htmlFor="eb-publishDate">
                Publish Date
              </label>
              <input
                id="eb-publishDate"
                name="publishDate"
                type="datetime-local"
                className="eb-input"
                value={form.publishDate}
                onChange={handleChange}
              />
            </div>

            <button
              className="eb-btn-draft"
              onClick={() => handleSubmit("draft")}
              disabled={loading}
            >
              {loading ? "Saving..." : "Save as Draft"}
            </button>
          </div>

          {/* Organization */}
          <div className="eb-card">
            <div className="eb-card-head">
              <IconLayers />
              <h3 className="eb-card-title">Organization</h3>
            </div>

            <div className="eb-field">
              <label className="eb-label" htmlFor="eb-category">
                Category
              </label>
              <select
                id="eb-category"
                name="category"
                className={`eb-select${errors.category ? " eb-input--error" : ""}`}
                value={form.category}
                onChange={handleChange}
              >
                {categories.map((cat, i) => (
                  <option key={i} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              {errors.category && (
                <span className="eb-field-error">{errors.category}</span>
              )}

              {!showCustomCat ? (
                <button
                  className="eb-btn-add-cat"
                  onClick={() => setShowCustomCat(true)}
                  type="button"
                >
                  <IconPlus /> Add custom category
                </button>
              ) : (
                <div className="eb-custom-cat">
                  <input
                    type="text"
                    className="eb-input"
                    placeholder="New category name..."
                    value={customCatInput}
                    onChange={(e) => setCustomCatInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addCustomCategory()}
                    autoFocus
                  />
                  <div className="eb-custom-cat-actions">
                    <button
                      className="eb-btn-cat-add"
                      onClick={addCustomCategory}
                      type="button"
                    >
                      Add
                    </button>
                    <button
                      className="eb-btn-cat-cancel"
                      onClick={() => {
                        setShowCustomCat(false);
                        setCustomCatInput("");
                      }}
                      type="button"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="eb-field">
              <label className="eb-label">
                Tags{" "}
                <span className="eb-char-count">{form.tags.length}/10</span>
              </label>
              <div className="eb-tags-wrap">
                {form.tags.map((tag, i) => (
                  <span className="eb-tag" key={i}>
                    {tag}
                    <button
                      className="eb-tag-remove"
                      onClick={() => removeTag(tag)}
                      type="button"
                      aria-label={`Remove ${tag}`}
                    >
                      <IconX />
                    </button>
                  </span>
                ))}
                <input
                  className="eb-tags-input"
                  placeholder={
                    form.tags.length < 10
                      ? "Add tag, press Enter..."
                      : "Max reached"
                  }
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleTagKeyDown}
                  disabled={form.tags.length >= 10}
                />
              </div>
              <p className="eb-field-hint">Press Enter or comma to add tags.</p>
            </div>
          </div>

          {/* Featured Image */}
          <div className="eb-card">
            <div className="eb-card-head">
              <IconImage />
              <h3 className="eb-card-title">Featured Image</h3>
            </div>

            {/* Current image indicator */}
            {existingImage && !imageFile && (
              <div className="eb-existing-img-note">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                Current image saved. Upload new to replace.
              </div>
            )}

            <div
              className={`eb-dropzone${imageDrag ? " eb-dropzone--drag" : ""}${imagePreview ? " eb-dropzone--has-img" : ""}`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              {imagePreview ? (
                <>
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="eb-img-preview"
                  />
                  <button
                    className="eb-img-remove"
                    onClick={removeImage}
                    type="button"
                    aria-label="Remove image"
                  >
                    <IconX />
                  </button>
                </>
              ) : (
                <div className="eb-dropzone-inner">
                  <IconUpload />
                  <p>
                    Drag & drop or{" "}
                    <label className="eb-dropzone-link" htmlFor="eb-img-input">
                      browse
                    </label>
                  </p>
                  <span>PNG, JPG, WEBP — max 5MB</span>
                </div>
              )}
              <input
                id="eb-img-input"
                type="file"
                accept="image/*"
                className="eb-img-input"
                onChange={handleImageInput}
              />
            </div>

            {imageFile && (
              <p className="eb-field-hint" style={{ marginTop: 8 }}>
                New: {imageFile.name} ({(imageFile.size / 1024).toFixed(0)} KB)
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="eb-bottom-bar">
        <Link to="/admin/blogs" className="eb-btn-cancel">
          Cancel
        </Link>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            className="eb-btn-draft"
            onClick={() => handleSubmit("draft")}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save as Draft"}
          </button>
          <button
            className="eb-btn-publish"
            onClick={() => handleSubmit("published")}
            disabled={loading}
          >
            {loading ? (
              <>
                <IconSpinner /> Updating...
              </>
            ) : (
              <>
                Update & Publish <IconArrow />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
