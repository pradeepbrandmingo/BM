import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import "./BlogList.css";
import { getPublicBlogs } from "../../admin/services/blogService";
import { Link } from "react-router-dom";

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
const CloseIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
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

/* ── Blog Card ── */
const BlogCard = ({ blog, index, visible }) => {
  const day = new Date(blog.createdAt).getDate();
  const month = new Date(blog.createdAt)
    .toLocaleString("en-US", { month: "short" })
    .toUpperCase();

  const imgSrc =
    blog.featuredImage?.url ||
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80";

  const excerpt =
    blog.excerpt ||
    (blog.content?.replace(/<[^>]+>/g, "")?.slice(0, 140) ?? "");

  return (
    <article
      className={`bl-card${visible ? " bl-card--visible" : ""}`}
      style={{ transitionDelay: `${0.1 + index * 0.15}s` }}
    >
      {/* Image */}
      <div className="bl-card-img-wrap">
        <div className="bl-card-date" aria-label={`Published ${day} ${month}`}>
          <span className="bl-card-day">{day}</span>
          <span className="bl-card-month">{month}</span>
        </div>
        <img
          src={imgSrc}
          alt={blog.title}
          className="bl-card-img"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80";
          }}
        />
        <div className="bl-card-img-overlay" aria-hidden="true" />
      </div>

      {/* Body */}
      <div className="bl-card-body">
        <div className="bl-card-meta">
          <span className="bl-card-cat">{blog.category || "Blog"}</span>
          <span className="bl-card-dot" aria-hidden="true" />
          <span className="bl-card-time">
            <svg
              width="12"
              height="12"
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
            5 MIN READ
          </span>
        </div>

        <h2 className="bl-card-title">
          <Link to={`/blogs/${blog.slug}`}>{blog.title}</Link>
        </h2>
        <p className="bl-card-excerpt">{excerpt}</p>

        <div className="bl-card-footer">
          <div className="bl-card-author">
            <div className="bl-card-avatar" aria-hidden="true">
              B
            </div>
            <span className="bl-card-author-name">Brandmingo</span>
          </div>
          <Link
            to={`/blogs/${blog.slug}`}
            className="bl-card-read-more"
            aria-label={`Read more: ${blog.title}`}
          >
            Read More <ArrowIcon />
          </Link>
        </div>
      </div>

      <div className="bl-card-accent" aria-hidden="true" />
    </article>
  );
};

/* ── CTA Card ── */
const CtaCard = () => (
  <div className="bl-cta-card">
    <div className="bl-cta-card-topline" aria-hidden="true" />
    <div className="bl-cta-card-glow" aria-hidden="true" />
    <div className="bl-cta-lottie-wrap">
      <CtaLottie />
    </div>
    <div className="bl-cta-badge">
      <span className="bl-cta-badge-dot" aria-hidden="true" />
      Ready to grow?
    </div>
    <h3 className="bl-cta-title">
      Start your next big project <em>with us</em>
    </h3>
    <p className="bl-cta-desc">
      Let's create something amazing that drives real results.
    </p>
    <a href="/contact" className="bl-cta-main-btn">
      Let's Talk
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
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </a>
  </div>
);

/* ── Skeleton ── */
const SkeletonCard = () => (
  <div className="bl-skeleton">
    <div className="bl-skeleton-img" />
    <div className="bl-skeleton-body">
      <div className="bl-skeleton-line bl-skeleton-line--short" />
      <div className="bl-skeleton-line" />
      <div className="bl-skeleton-line" />
      <div className="bl-skeleton-line bl-skeleton-line--med" />
    </div>
  </div>
);

/* ══════════════════════════════════════════
   SIDEBAR
══════════════════════════════════════════ */
const Sidebar = ({
  visible,
  categories, // [{ name, count }] — from backend
  tags, // string[]          — from backend
  activeCategory,
  activeTag,
  searchQuery,
  onCategory,
  onTag,
  onSearch,
  totalCount,
  filteredCount,
}) => {
  const [inputVal, setInputVal] = useState(searchQuery);

  /* sync external reset */
  useEffect(() => {
    setInputVal(searchQuery);
  }, [searchQuery]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const handleClear = () => {
    setInputVal("");
    onSearch("");
  };

  return (
    <aside className={`bl-sidebar${visible ? " bl-sidebar--visible" : ""}`}>
      {/* ── Search ── */}
      <div className="bl-widget">
        <h3 className="bl-widget-title">
          <span className="bl-widget-bar" />
          Search
        </h3>
        <form
          className="bl-search-wrap"
          onSubmit={handleSearchSubmit}
          role="search"
        >
          <input
            className="bl-search-input"
            type="text"
            placeholder="Type keywords..."
            value={inputVal}
            onChange={(e) => {
              const value = e.target.value;
              setInputVal(value);
              onSearch(value);
            }}
            aria-label="Search blog posts"
          />
          {inputVal && (
            <button
              type="button"
              className="bl-search-clear"
              onClick={handleClear}
              aria-label="Clear search"
            >
              <CloseIcon />
            </button>
          )}
          <button
            className="bl-search-btn"
            type="submit"
            aria-label="Submit search"
          >
            <SearchIcon />
          </button>
        </form>
      </div>

      {/* ── Active Filters Banner ── */}
      {(activeCategory || activeTag || searchQuery) && (
        <div className="bl-active-filters">
          <div className="bl-active-filters-top">
            <span className="bl-active-filters-label">Active filters</span>
            <button
              className="bl-clear-all"
              onClick={() => {
                onCategory("");
                onTag("");
                onSearch("");
                setInputVal("");
              }}
            >
              Clear all
            </button>
          </div>
          <div className="bl-active-chips">
            {activeCategory && (
              <span className="bl-chip">
                {activeCategory}
                <button
                  onClick={() => onCategory("")}
                  aria-label="Remove category filter"
                >
                  <CloseIcon />
                </button>
              </span>
            )}
            {activeTag && (
              <span className="bl-chip bl-chip--tag">
                {activeTag}
                <button
                  onClick={() => onTag("")}
                  aria-label="Remove tag filter"
                >
                  <CloseIcon />
                </button>
              </span>
            )}
            {searchQuery && (
              <span className="bl-chip bl-chip--search">
                "{searchQuery}"
                <button
                  onClick={() => {
                    onSearch("");
                    setInputVal("");
                  }}
                  aria-label="Remove search filter"
                >
                  <CloseIcon />
                </button>
              </span>
            )}
          </div>
          <p className="bl-results-count">
            Showing <strong>{filteredCount}</strong> of{" "}
            <strong>{totalCount}</strong> posts
          </p>
        </div>
      )}

      {/* ── Categories (from backend) ── */}
      <div className="bl-widget">
        <h3 className="bl-widget-title">
          <span className="bl-widget-bar" />
          Categories
        </h3>
        {categories.length === 0 ? (
          <p className="bl-widget-empty">No categories found.</p>
        ) : (
          <ul className="bl-cat-list">
            {categories.map((cat, i) => (
              <li key={i} className="bl-cat-item">
                <button
                  className={`bl-cat-link${activeCategory === cat.name ? " bl-cat-link--active" : ""}`}
                  onClick={() =>
                    onCategory(activeCategory === cat.name ? "" : cat.name)
                  }
                  aria-pressed={activeCategory === cat.name}
                >
                  <span className="bl-cat-arrow">
                    <ArrowIcon />
                  </span>
                  <span>{cat.name}</span>
                </button>
                <span className="bl-cat-count">
                  {String(cat.count).padStart(2, "0")}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* ── Tags (from backend) ── */}
      <div className="bl-widget">
        <h3 className="bl-widget-title">
          <span className="bl-widget-bar" />
          Tags
        </h3>
        {tags.length === 0 ? (
          <p className="bl-widget-empty">No tags found.</p>
        ) : (
          <div className="bl-tags-wrap">
            {tags.map((tag, i) => (
              <button
                key={i}
                className={`bl-tag${activeTag === tag ? " bl-tag--active" : ""}`}
                onClick={() => onTag(activeTag === tag ? "" : tag)}
                aria-pressed={activeTag === tag}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>

      <CtaCard />
    </aside>
  );
};

/* ══════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════ */
const BlogList = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [allBlogs, setAllBlogs] = useState([]); // all from API
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* Filter state */
  const [activeCategory, setActiveCategory] = useState("");
  const [activeTag, setActiveTag] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  /* ── Fetch once ── */
  useEffect(() => {
    fetchBlogs();

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.05 },
    );
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await getPublicBlogs();
      setAllBlogs(res.blogs || []);
    } catch (err) {
      console.error("Blog fetch error:", err);
      setError("Failed to load blogs. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  /* ── Derive categories from backend data ── */
  const categories = useMemo(() => {
    const map = {};
    allBlogs.forEach((b) => {
      const cat = b.category?.trim();
      if (cat) map[cat] = (map[cat] || 0) + 1;
    });
    return Object.entries(map)
      .sort((a, b) => b[1] - a[1]) // sort by count desc
      .map(([name, count]) => ({ name, count }));
  }, [allBlogs]);

  /* ── Derive tags from backend data ── */
  const tags = useMemo(() => {
    const set = new Set();
    allBlogs.forEach((b) => {
      if (Array.isArray(b.tags)) b.tags.forEach((t) => set.add(t.trim()));
      else if (typeof b.tags === "string") {
        b.tags.split(",").forEach((t) => {
          const v = t.trim();
          if (v) set.add(v);
        });
      }
    });
    return [...set].sort();
  }, [allBlogs]);

  /* ── Filter blogs ── */
  const filteredBlogs = useMemo(() => {
    let result = allBlogs;

    /* Category filter */
    if (activeCategory) {
      result = result.filter(
        (b) =>
          b.category?.trim().toLowerCase() === activeCategory.toLowerCase(),
      );
    }

    /* Tag filter */
    if (activeTag) {
      result = result.filter((b) => {
        if (Array.isArray(b.tags))
          return b.tags.some(
            (t) => t.trim().toLowerCase() === activeTag.toLowerCase(),
          );
        if (typeof b.tags === "string")
          return b.tags.toLowerCase().includes(activeTag.toLowerCase());
        return false;
      });
    }

    /* Search filter — title + excerpt + content */
    if (searchQuery) {
      const q = searchQuery.trim().toLowerCase();

      result = result.filter((b) => {
        const title = b.title?.toLowerCase() || "";
        const excerpt = b.excerpt?.toLowerCase() || "";
        const category = b.category?.toLowerCase() || "";

        const content = b.content?.replace(/<[^>]+>/g, "").toLowerCase() || "";

        const tags = Array.isArray(b.tags)
          ? b.tags.join(" ").toLowerCase()
          : (b.tags || "").toLowerCase();

        return (
          title.includes(q) ||
          excerpt.includes(q) ||
          category.includes(q) ||
          content.includes(q) ||
          tags.includes(q)
        );
      });
    }

    return result;
  }, [allBlogs, activeCategory, activeTag, searchQuery]);

  /* ── Handlers ── */
  const handleCategory = useCallback((cat) => {
    setActiveCategory(cat);
    setActiveTag(""); // reset tag when category changes
  }, []);

  const handleTag = useCallback((tag) => {
    setActiveTag(tag);
    setActiveCategory(""); // reset category when tag changes
  }, []);

  const handleSearch = useCallback((q) => {
    setSearchQuery(q);
  }, []);

  return (
    <section
      className={`bl-section${visible ? " bl-section--visible" : ""}`}
      ref={sectionRef}
      id="blog-list"
    >
      <div className="bl-container">
        <div className="bl-layout">
          {/* ── Cards column ── */}
          <div className="bl-cards-col">
            {loading ? (
              [1, 2, 3].map((n) => <SkeletonCard key={n} />)
            ) : error ? (
              <div className="bl-error">
                <i className="fa-solid fa-triangle-exclamation" />
                <p>{error}</p>
                <button onClick={fetchBlogs} className="bl-retry-btn">
                  Try Again
                </button>
              </div>
            ) : filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog, i) => (
                <BlogCard
                  key={blog._id}
                  blog={blog}
                  index={i}
                  visible={visible}
                />
              ))
            ) : (
              <div className="bl-empty">
                <i className="fa-solid fa-magnifying-glass" />
                <p>
                  {searchQuery
                    ? `No results for "${searchQuery}"`
                    : activeCategory
                      ? `No posts in "${activeCategory}"`
                      : activeTag
                        ? `No posts tagged "${activeTag}"`
                        : "No blogs published yet."}
                </p>
                {(searchQuery || activeCategory || activeTag) && (
                  <button
                    className="bl-retry-btn"
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("");
                      setActiveTag("");
                    }}
                  >
                    Clear filters
                  </button>
                )}
              </div>
            )}
          </div>

          {/* ── Sidebar ── */}
          <Sidebar
            visible={visible}
            categories={categories}
            tags={tags}
            activeCategory={activeCategory}
            activeTag={activeTag}
            searchQuery={searchQuery}
            onCategory={handleCategory}
            onTag={handleTag}
            onSearch={handleSearch}
            totalCount={allBlogs.length}
            filteredCount={filteredBlogs.length}
          />
        </div>
      </div>
    </section>
  );
};

export default BlogList;
