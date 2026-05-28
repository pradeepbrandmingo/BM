import React, { useEffect, useRef, useState, useMemo } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./BlogDetails.css";
import {
  getBlogBySlug,
  getPublicBlogs,
} from "../../../admin/services/blogService";

/* ── Icons ── */
const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);
const BackIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);
const CalendarIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const ClockIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
);
const EyeIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
const ShareIcon = () => (
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
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);
const CopyIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);
const CheckIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const SearchIcon = () => (
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
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

/* ── Lottie CTA ── */
const CtaLottie = () => {
  useEffect(() => {
    if (!document.querySelector("script[data-lottie-wc]")) {
      const s = document.createElement("script");
      s.src =
        "https://unpkg.com/@lottiefiles/dotlottie-wc@0.9.10/dist/dotlottie-wc.js";
      s.type = "module";
      s.setAttribute("data-lottie-wc", "true");
      document.head.appendChild(s);
    }
  }, []);
  return (
    <dotlottie-wc
      src="https://lottie.host/8715ee53-4ff2-40bd-9d18-11438f5c8688/tzcArkUoyL.lottie"
      autoplay
      loop
      style={{ width: "72px", height: "72px" }}
    />
  );
};

/* ── Read time calculator ── */
const calcReadTime = (content = "") => {
  const text = content.replace(/<[^>]+>/g, "");
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
};

/* ── Format date ── */
const formatDate = (dateStr) => {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

/* ── Share handlers ── */
const shareOn = (platform, url, title) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const links = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
  };
  window.open(links[platform], "_blank", "width=600,height=400");
};

/* ══════════════════════════════════════════
   SKELETON LOADER
══════════════════════════════════════════ */
const DetailSkeleton = () => (
  <div className="bd-skeleton-wrapper">
    <div className="bd-skeleton-body">
      <div className="bd-skel bd-skel--title" />
      <div className="bd-skel bd-skel--meta" />
    </div>
    <div className="bd-skeleton-hero" />
    <div className="bd-skeleton-body">
      <div className="bd-skel" />
      <div className="bd-skel" />
      <div className="bd-skel bd-skel--short" />
      <div className="bd-skel" />
      <div className="bd-skel" />
      <div className="bd-skel bd-skel--med" />
    </div>
  </div>
);

/* ══════════════════════════════════════════
   RELATED CARD
══════════════════════════════════════════ */
const RelatedCard = ({ blog }) => {
  const day = new Date(blog.createdAt).getDate();
  const month = new Date(blog.createdAt)
    .toLocaleString("en-US", { month: "short" })
    .toUpperCase();
  const imgSrc =
    blog.featuredImage?.url ||
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&q=80";

  return (
    <Link to={`/blogs/${blog.slug}`} className="bd-related-card">
      <div className="bd-related-img-wrap">
        <div className="bd-related-date">
          <span>{day}</span>
          <span>{month}</span>
        </div>
        <img
          src={imgSrc}
          alt={blog.title}
          loading="lazy"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&q=80";
          }}
        />
        <div className="bd-related-overlay" />
      </div>
      <div className="bd-related-body">
        <span className="bd-related-cat">{blog.category || "Blog"}</span>
        <h4 className="bd-related-title">{blog.title}</h4>
        <span className="bd-related-read">
          Read More <ArrowIcon />
        </span>
      </div>
      <div className="bd-related-accent" />
    </Link>
  );
};

/* ══════════════════════════════════════════
   SIDEBAR
══════════════════════════════════════════ */
const Sidebar = ({ allBlogs, currentSlug, tags, categories }) => {
  const [searchVal, setSearchVal] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchVal.trim()) {
      navigate(`/blogs?search=${encodeURIComponent(searchVal.trim())}`);
    }
  };

  const recentBlogs = useMemo(
    () => allBlogs.filter((b) => b.slug !== currentSlug).slice(0, 4),
    [allBlogs, currentSlug],
  );

  return (
    <aside className="bd-sidebar">
      {/* Search */}
      <div className="bd-widget">
        <h3 className="bd-widget-title">
          <span className="bd-widget-bar" />
          Search
        </h3>
        <form className="bd-search-wrap" onSubmit={handleSearch}>
          <input
            className="bd-search-input"
            type="text"
            placeholder="Type keywords..."
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
          <button className="bd-search-btn" type="submit">
            <SearchIcon />
          </button>
        </form>
      </div>

      {/* Categories */}
      {categories.length > 0 && (
        <div className="bd-widget">
          <h3 className="bd-widget-title">
            <span className="bd-widget-bar" />
            Categories
          </h3>
          <ul className="bd-cat-list">
            {categories.map((cat, i) => (
              <li key={i} className="bd-cat-item">
                <Link
                  to={`/blogs?category=${encodeURIComponent(cat.name)}`}
                  className="bd-cat-link"
                >
                  <span className="bd-cat-arrow">
                    <ArrowIcon />
                  </span>
                  <span>{cat.name}</span>
                </Link>
                <span className="bd-cat-count">
                  {String(cat.count).padStart(2, "0")}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tags */}
      {tags.length > 0 && (
        <div className="bd-widget">
          <h3 className="bd-widget-title">
            <span className="bd-widget-bar" />
            Tags
          </h3>
          <div className="bd-tags-wrap">
            {tags.map((tag, i) => (
              <Link
                key={i}
                to={`/blogs?tag=${encodeURIComponent(tag)}`}
                className="bd-tag"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Recent Posts */}
      {recentBlogs.length > 0 && (
        <div className="bd-widget">
          <h3 className="bd-widget-title">
            <span className="bd-widget-bar" />
            Recent Posts
          </h3>
          <div className="bd-recent-list">
            {recentBlogs.map((blog) => {
              const imgSrc =
                blog.featuredImage?.url ||
                "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&q=60";
              return (
                <Link
                  key={blog._id}
                  to={`/blogs/${blog.slug}`}
                  className="bd-recent-item"
                >
                  <div className="bd-recent-img">
                    <img
                      src={imgSrc}
                      alt={blog.title}
                      loading="lazy"
                      onError={(e) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&q=60";
                      }}
                    />
                  </div>
                  <div className="bd-recent-info">
                    <span className="bd-recent-cat">{blog.category}</span>
                    <p className="bd-recent-title">{blog.title}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="bd-cta-card">
        <div className="bd-cta-topline" />
        <div className="bd-cta-glow" />
        {/* ✅ Yeh add karo */}
        <div className="bd-cta-lottie-wrap">
          <CtaLottie />
        </div>
        <div className="bd-cta-badge">
          <span className="bd-cta-dot" />
          Ready to grow?
        </div>
        <h3 className="bd-cta-title">
          Start your next big project <em>with us</em>
        </h3>
        <p className="bd-cta-desc">
          Let's create something amazing that drives real results.
        </p>
        <a href="/contact" className="bd-cta-btn">
          Let's Talk
          <ArrowIcon />
        </a>
      </div>
    </aside>
  );
};

/* ══════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════ */
const BlogDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  const [blog, setBlog] = useState(null);
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [readProgress, setReadProgress] = useState(0);

  /* ── Fetch blog ── */
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    setError(null);
    setVisible(false);

    const fetchData = async () => {
      try {
        const [blogRes, blogsRes] = await Promise.all([
          getBlogBySlug(slug),
          getPublicBlogs(),
        ]);
        setBlog(blogRes.blog);
        setAllBlogs(blogsRes.blogs || []);
        setTimeout(() => setVisible(true), 100);
      } catch (err) {
        console.error(err);
        setError("Blog not found or failed to load.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  /* ── Read progress ── */
  useEffect(() => {
    if (!blog) return;
    const handleScroll = () => {
      const el = contentRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight;
      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(100, (scrolled / total) * 100);
      setReadProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [blog]);

  /* ── Derived ── */
  const readTime = useMemo(() => calcReadTime(blog?.content), [blog]);

  const categories = useMemo(() => {
    const map = {};
    allBlogs.forEach((b) => {
      const cat = b.category?.trim();
      if (cat) map[cat] = (map[cat] || 0) + 1;
    });
    return Object.entries(map)
      .sort((a, b) => b[1] - a[1])
      .map(([name, count]) => ({ name, count }));
  }, [allBlogs]);

  const tags = useMemo(() => {
    const set = new Set();
    allBlogs.forEach((b) => {
      if (Array.isArray(b.tags)) b.tags.forEach((t) => set.add(t.trim()));
    });
    return [...set].sort();
  }, [allBlogs]);

  const relatedBlogs = useMemo(() => {
    if (!blog) return [];
    return allBlogs
      .filter((b) => b.slug !== blog.slug && b.category === blog.category)
      .slice(0, 3);
  }, [blog, allBlogs]);

  /* ── Copy URL ── */
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  /* ── Render content safely ── */
  const renderContent = (content = "") => {
    // If plain text (no HTML tags), wrap in paragraphs
    if (!/<[a-z][\s\S]*>/i.test(content)) {
      return content
        .split(/\n\n+/)
        .filter(Boolean)
        .map((para, i) => `<p key="${i}">${para.replace(/\n/g, "<br/>")}</p>`)
        .join("");
    }
    return content;
  };

  /* ── Loading ── */
  if (loading) {
    return (
      <div className="bd-page">
        <div className="bd-progress-bar" style={{ width: "40%" }} />
        <div className="bd-container">
          <div className="bd-layout">
            <DetailSkeleton />
            <div className="bd-sidebar-skeleton">
              <div className="bd-widget">
                <div className="bd-skel bd-skel--widget" />
              </div>
              <div className="bd-widget">
                <div className="bd-skel bd-skel--widget" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ── Error ── */
  if (error || !blog) {
    return (
      <div className="bd-page">
        <div className="bd-container">
          <div className="bd-not-found">
            <div className="bd-not-found-icon">404</div>
            <h2>Blog Not Found</h2>
            <p>
              The article you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/blogs" className="bd-back-btn">
              <BackIcon /> Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const currentUrl = window.location.href;
  const publishDate = blog.publishDate || blog.createdAt;
  const imgSrc =
    blog.featuredImage?.url ||
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&q=80";

  return (
    <div className={`bd-page${visible ? " bd-page--visible" : ""}`}>
      {/* ── Read Progress Bar ── */}
      <div className="bd-progress-bar" style={{ width: `${readProgress}%` }} />

      {/* ── Breadcrumb ── */}
      <div className="bd-breadcrumb-wrap">
        <div className="bd-container">
          <nav className="bd-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/blogs">Blog</Link>
            <span>/</span>
            <span className="bd-breadcrumb-current">{blog.category}</span>
          </nav>
        </div>
      </div>

      <div className="bd-container">
        <div className="bd-layout">
          {/* ════ MAIN CONTENT ════ */}
          <main className="bd-main" ref={contentRef}>
            {/* ── Article Header: Category + Title + Meta (BEFORE image) ── */}
            <div className="bd-article-head">
              <span className="bd-article-head-cat">{blog.category}</span>
              <h1 className="bd-title">{blog.title}</h1>

              <div className="bd-meta-row">
                <div className="bd-author">
                  <div className="bd-author-avatar">B</div>
                  <div className="bd-author-info">
                    <span className="bd-author-label">Written by</span>
                    <span className="bd-author-name">
                      {blog.author || "Brandmingo Team"}
                    </span>
                  </div>
                </div>

                <div className="bd-meta-stats">
                  <span className="bd-meta-item">
                    <CalendarIcon />
                    {formatDate(publishDate)}
                  </span>
                  <span className="bd-meta-divider" />
                  <span className="bd-meta-item">
                    <ClockIcon />
                    {readTime} min read
                  </span>
                  <span className="bd-meta-divider" />
                  <span className="bd-meta-item">
                    <EyeIcon />
                    {blog.views || 0} views
                  </span>
                </div>
              </div>

              <div className="bd-head-divider" />
            </div>

            {/* ── Hero Image (AFTER header) ── */}
            <div className="bd-hero" ref={heroRef}>
              <div className="bd-hero-img-wrap">
                <img
                  src={imgSrc}
                  alt={blog.title}
                  className="bd-hero-img"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&q=80";
                  }}
                />
                <div className="bd-hero-overlay" />
              </div>
            </div>

            {/* ── Article Content ── */}
            <div
              className="bd-content"
              dangerouslySetInnerHTML={{ __html: renderContent(blog.content) }}
            />

            {/* ── Tags + Share ── */}
            <div className="bd-footer-row">
              {/* Tags */}
              {blog.tags?.length > 0 && (
                <div className="bd-tags-section">
                  <span className="bd-tags-label">TAGS:</span>
                  <div className="bd-tags-list">
                    {blog.tags.map((tag, i) => (
                      <Link
                        key={i}
                        to={`/blogs?tag=${encodeURIComponent(tag)}`}
                        className="bd-article-tag"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Share */}
              <div className="bd-share-section">
                <span className="bd-share-label">SHARE:</span>
                <div className="bd-share-btns">
                  <button
                    className="bd-share-btn bd-share-btn--fb"
                    onClick={() => shareOn("facebook", currentUrl, blog.title)}
                    aria-label="Share on Facebook"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </button>
                  <button
                    className="bd-share-btn bd-share-btn--tw"
                    onClick={() => shareOn("twitter", currentUrl, blog.title)}
                    aria-label="Share on Twitter"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                  </button>
                  <button
                    className="bd-share-btn bd-share-btn--li"
                    onClick={() => shareOn("linkedin", currentUrl, blog.title)}
                    aria-label="Share on LinkedIn"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </button>
                  <button
                    className={`bd-share-btn bd-share-btn--copy${copied ? " bd-share-btn--copied" : ""}`}
                    onClick={handleCopy}
                    aria-label="Copy link"
                  >
                    {copied ? <CheckIcon /> : <CopyIcon />}
                  </button>
                </div>
              </div>
            </div>

            {/* ── Related Posts ── */}
            {relatedBlogs.length > 0 && (
              <div className="bd-related-section">
                <div className="bd-section-head">
                  <span className="bd-widget-bar" />
                  <h2 className="bd-section-title">Related Articles</h2>
                </div>
                <div className="bd-related-grid">
                  {relatedBlogs.map((rb) => (
                    <RelatedCard key={rb._id} blog={rb} />
                  ))}
                </div>
              </div>
            )}
          </main>

          {/* ════ SIDEBAR ════ */}
          <Sidebar
            allBlogs={allBlogs}
            currentSlug={slug}
            tags={tags}
            categories={categories}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
