import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AddBlog.css";
import { createBlog } from "../services/blogService";

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

/* ── Default categories (from schema) ── */
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

/* ══════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════ */
const AddBlog = () => {
  const navigate = useNavigate();

  /* ── Form state ── */
  const [form, setForm] = useState({
    title: "",
    slug: "",
    content: "",
    category: "Career Advice",
    tags: [],
    status: "draft",
    publishDate: "",
    metaTitle: "",
    metaDescription: "",
  });

  /* ── Image state ── */
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [imageDrag, setImageDrag] = useState(false);

  /* ── Tags state ── */
  const [tagInput, setTagInput] = useState("");

  /* ── Custom category state ── */
  const [categories, setCategories] = useState(DEFAULT_CATEGORIES);
  const [showCustomCat, setShowCustomCat] = useState(false);
  const [customCatInput, setCustomCatInput] = useState("");

  /* ── UI state ── */
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [charCount, setCharCount] = useState({ metaTitle: 0, metaDesc: 0 });
  const [slugManual, setSlugManual] = useState(false);

  /* ── Auto-generate slug from title ── */
  useEffect(() => {
    if (!slugManual && form.title) {
      setForm((p) => ({ ...p, slug: generateSlug(form.title) }));
    }
  }, [form.title, slugManual]);

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

  /* ── Tag handlers ── */
  const addTag = () => {
    const t = tagInput.trim();
    if (t && !form.tags.includes(t) && form.tags.length < 10) {
      setForm((p) => ({ ...p, tags: [...p.tags, t] }));
    }
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

  /* ── Image handlers ── */
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
  //   console.log("Tags before submit:", form.tags);
  //   console.log("Tags joined:", form.tags.join(","));
  //   const fd = new FormData();

  //   fd.append("title", form.title);
  //   fd.append("slug", form.slug);
  //   fd.append("content", form.content);

  //   fd.append("category", form.category);

  //   fd.append("tags", form.tags.join(","));

  //   // FIXED STATUS
  //   fd.append("status", blogStatus);

  //   fd.append("publishDate", form.publishDate);

  //   fd.append("metaTitle", form.metaTitle);

  //   fd.append("metaDescription", form.metaDescription);

  //   if (imageFile) {
  //     fd.append("featuredImage", imageFile);
  //   }

  //   try {
  //     setLoading(true);

  //     await createBlog(fd);

  //     navigate("/admin/blogs");
  //   } catch (err) {
  //     console.error(err);

  //     setErrors({
  //       submit: "Failed to save blog. Please try again.",
  //     });
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (blogStatus) => {
    // PENDING TAG FLUSH - agar tagInput me kuch likha hai Enter nahi kiya
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
      await createBlog(fd);
      navigate("/admin/blogs");
    } catch (err) {
      console.error(err);
      setErrors({ submit: "Failed to save blog. Please try again." });
    } finally {
      setLoading(false);
    }
  };
  /* ── Render ── */
  return (
    <div className="ab-wrapper">
      {/* ── Page header ── */}
      <div className="ab-header">
        <div className="ab-header-left">
          <h1 className="ab-header-title">Write New Blog</h1>
          <p className="ab-header-breadcrumb">
            <Link to="/admin/blogs">Blogs</Link>
            <span>/</span>
            <span>Create</span>
          </p>
        </div>
        <div className="ab-header-actions">
          <Link to="/admin/blogs" className="ab-btn-cancel">
            Cancel
          </Link>
          <button
            className="ab-btn-publish"
            onClick={() => handleSubmit("published")}
            disabled={loading}
          >
            {loading ? "Publishing..." : "Publish Post"}
            {!loading && <IconArrow />}
          </button>
        </div>
      </div>

      {/* ── Submit error ── */}
      {errors.submit && <div className="ab-error-banner">{errors.submit}</div>}

      {/* ── Main grid ── */}
      <div className="ab-grid">
        {/* ════ LEFT COLUMN ════ */}
        <div className="ab-col-main">
          {/* Blog Title */}
          <div className="ab-card">
            <div className="ab-field">
              <label className="ab-label" htmlFor="ab-title">
                Blog Title <span className="ab-req">*</span>
              </label>
              <input
                id="ab-title"
                name="title"
                type="text"
                className={`ab-input${errors.title ? " ab-input--error" : ""}`}
                placeholder="e.g. 5 Tips to Crack JEE Main 2026"
                value={form.title}
                onChange={handleChange}
                maxLength={200}
              />
              {errors.title && (
                <span className="ab-field-error">{errors.title}</span>
              )}
            </div>

            {/* Slug */}
            <div className="ab-field">
              <label className="ab-label" htmlFor="ab-slug">
                Slug (URL) <span className="ab-req">*</span>
              </label>
              <div className="ab-slug-wrap">
                <span className="ab-slug-prefix">domain.com/blog/</span>
                <input
                  id="ab-slug"
                  name="slug"
                  type="text"
                  className={`ab-input ab-input--slug${errors.slug ? " ab-input--error" : ""}`}
                  placeholder="auto-generated-from-title"
                  value={form.slug}
                  onChange={handleSlugChange}
                />
              </div>
              {errors.slug && (
                <span className="ab-field-error">{errors.slug}</span>
              )}
              <p className="ab-field-hint">
                Auto-generated from title. Edit if needed.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="ab-card">
            <div className="ab-field">
              <label className="ab-label" htmlFor="ab-content">
                Content <span className="ab-req">*</span>
              </label>
              <textarea
                id="ab-content"
                name="content"
                className={`ab-textarea${errors.content ? " ab-input--error" : ""}`}
                placeholder="Start writing your article..."
                value={form.content}
                onChange={handleChange}
                rows={16}
              />
              {errors.content && (
                <span className="ab-field-error">{errors.content}</span>
              )}
              <p className="ab-field-hint">{form.content.length} characters</p>
            </div>
          </div>

          {/* SEO Settings */}
          <div className="ab-card">
            <div className="ab-card-head">
              <IconSearch />
              <h3 className="ab-card-title">SEO Settings</h3>
            </div>

            <div className="ab-field">
              <label className="ab-label" htmlFor="ab-metaTitle">
                Meta Title
                <span className="ab-char-count">{charCount.metaTitle}/160</span>
              </label>
              <input
                id="ab-metaTitle"
                name="metaTitle"
                type="text"
                className="ab-input"
                placeholder="SEO optimized title..."
                value={form.metaTitle}
                onChange={handleChange}
                maxLength={160}
              />
            </div>

            <div className="ab-field">
              <label className="ab-label" htmlFor="ab-metaDesc">
                Meta Description
                <span className="ab-char-count">{charCount.metaDesc}/300</span>
              </label>
              <textarea
                id="ab-metaDesc"
                name="metaDescription"
                className="ab-textarea ab-textarea--sm"
                placeholder="Brief description for search engines..."
                value={form.metaDescription}
                onChange={handleChange}
                rows={3}
                maxLength={300}
              />
            </div>
          </div>
        </div>

        {/* ════ RIGHT COLUMN ════ */}
        <div className="ab-col-side">
          {/* Publish */}
          <div className="ab-card">
            <div className="ab-card-head">
              <IconGlobe />
              <h3 className="ab-card-title">Publish</h3>
            </div>

            <div className="ab-field">
              <label className="ab-label" htmlFor="ab-status">
                Status
              </label>
              <select
                id="ab-status"
                name="status"
                className="ab-select"
                value={form.status}
                onChange={handleChange}
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>

            <div className="ab-field">
              <label className="ab-label" htmlFor="ab-publishDate">
                Publish Date
              </label>
              <input
                id="ab-publishDate"
                name="publishDate"
                type="datetime-local"
                className="ab-input"
                value={form.publishDate}
                onChange={handleChange}
              />
            </div>

            <button
              className="ab-btn-draft"
              onClick={() => handleSubmit("draft")}
              disabled={loading}
            >
              {loading ? "Saving..." : "Save as Draft"}
            </button>
          </div>

          {/* Organization */}
          <div className="ab-card">
            <div className="ab-card-head">
              <IconLayers />
              <h3 className="ab-card-title">Organization</h3>
            </div>

            {/* Category */}
            <div className="ab-field">
              <label className="ab-label" htmlFor="ab-category">
                Category
              </label>
              <select
                id="ab-category"
                name="category"
                className={`ab-select${errors.category ? " ab-input--error" : ""}`}
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
                <span className="ab-field-error">{errors.category}</span>
              )}

              {/* Custom category toggle */}
              {!showCustomCat ? (
                <button
                  className="ab-btn-add-cat"
                  onClick={() => setShowCustomCat(true)}
                  type="button"
                >
                  <IconPlus /> Add custom category
                </button>
              ) : (
                <div className="ab-custom-cat">
                  <input
                    type="text"
                    className="ab-input"
                    placeholder="New category name..."
                    value={customCatInput}
                    onChange={(e) => setCustomCatInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addCustomCategory()}
                    autoFocus
                  />
                  <div className="ab-custom-cat-actions">
                    <button
                      className="ab-btn-cat-add"
                      onClick={addCustomCategory}
                      type="button"
                    >
                      Add
                    </button>
                    <button
                      className="ab-btn-cat-cancel"
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

            {/* Tags */}
            <div className="ab-field">
              <label className="ab-label">
                Tags
                <span className="ab-char-count">{form.tags.length}/10</span>
              </label>
              <div className="ab-tags-wrap">
                {form.tags.map((tag, i) => (
                  <span className="ab-tag" key={i}>
                    {tag}
                    <button
                      className="ab-tag-remove"
                      onClick={() => removeTag(tag)}
                      type="button"
                      aria-label={`Remove tag ${tag}`}
                    >
                      <IconX />
                    </button>
                  </span>
                ))}
                <input
                  className="ab-tags-input"
                  placeholder={
                    form.tags.length < 10
                      ? "Add tag, press Enter..."
                      : "Max tags reached"
                  }
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleTagKeyDown}
                  disabled={form.tags.length >= 10}
                />
              </div>
              <p className="ab-field-hint">Press Enter or comma to add tags.</p>
            </div>
          </div>

          {/* Featured Image */}
          <div className="ab-card">
            <div className="ab-card-head">
              <IconImage />
              <h3 className="ab-card-title">Featured Image</h3>
            </div>

            {/* Drop zone */}
            <div
              className={`ab-dropzone${imageDrag ? " ab-dropzone--drag" : ""}${imagePreview ? " ab-dropzone--has-img" : ""}`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              {imagePreview ? (
                <>
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="ab-img-preview"
                  />
                  <button
                    className="ab-img-remove"
                    onClick={() => {
                      setImageFile(null);
                      setImagePreview("");
                    }}
                    type="button"
                    aria-label="Remove image"
                  >
                    <IconX />
                  </button>
                </>
              ) : (
                <div className="ab-dropzone-inner">
                  <IconUpload />
                  <p>
                    Drag & drop or{" "}
                    <label className="ab-dropzone-link" htmlFor="ab-img-input">
                      browse
                    </label>
                  </p>
                  <span>PNG, JPG, WEBP — max 5MB</span>
                </div>
              )}
              <input
                id="ab-img-input"
                type="file"
                accept="image/*"
                className="ab-img-input"
                onChange={handleImageInput}
              />
            </div>

            {imageFile && (
              <p className="ab-field-hint" style={{ marginTop: 8 }}>
                {imageFile.name} ({(imageFile.size / 1024).toFixed(0)} KB)
              </p>
            )}
          </div>
        </div>
      </div>

      {/* ── Bottom action bar ── */}
      <div className="ab-bottom-bar">
        <Link to="/admin/blogs" className="ab-btn-cancel">
          Cancel
        </Link>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            className="ab-btn-draft"
            onClick={() => handleSubmit("draft")}
            disabled={loading}
          >
            {loading ? "Saving..." : "Save as Draft"}
          </button>
          <button
            className="ab-btn-publish"
            onClick={() => handleSubmit("published")}
            disabled={loading}
          >
            {loading ? "Publishing..." : "Save & Publish"}
            {!loading && <IconArrow />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
