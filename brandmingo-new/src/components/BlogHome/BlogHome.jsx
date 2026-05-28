import React, { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
import "./BlogHome.css";
import { getPublicBlogs } from "../../admin/services/blogService";

/* ══════════════════════════════════════════
   ICONS
══════════════════════════════════════════ */
const ArrowIcon = () => (
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
const CalendarIcon = () => (
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
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const ClockIcon = () => (
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
);
const GradIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </svg>
);
const RocketIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);
const TrophyIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
    <path d="M7 4H4a2 2 0 0 0-2 2v3c0 2.2 1.4 4.1 3.5 4.8" />
    <path d="M17 4h3a2 2 0 0 1 2 2v3c0 2.2-1.4 4.1-3.5 4.8" />
    <path d="M7 2h10v11a5 5 0 0 1-10 0V2z" />
  </svg>
);
const MailIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

/* ══════════════════════════════════════════
   HELPERS
══════════════════════════════════════════ */
const calcReadTime = (content = "") => {
  const words = content
    .replace(/<[^>]+>/g, "")
    .trim()
    .split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
};
const formatDate = (dateStr) => {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
};
const getExcerpt = (content = "", max = 100) => {
  const text = content.replace(/<[^>]+>/g, "");
  return text.length > max ? text.slice(0, max).trimEnd() + "…" : text;
};

/* ══════════════════════════════════════════
   SKELETON
══════════════════════════════════════════ */
const BlogCardSkeleton = () => (
  <div className="bh-card bh-card--skeleton">
    <div className="bh-card-img-wrap bh-skel-box" />
    <div className="bh-card-body">
      <div className="bh-skel-line bh-skel-line--short" />
      <div className="bh-skel-line" />
      <div className="bh-skel-line bh-skel-line--med" />
    </div>
  </div>
);

/* ══════════════════════════════════════════
   BLOG CARD
══════════════════════════════════════════ */
const BlogCard = ({ blog }) => {
  const imgSrc =
    blog.featuredImage?.url ||
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80";
  const day = new Date(blog.createdAt).getDate();
  const month = new Date(blog.createdAt)
    .toLocaleString("en-US", { month: "short" })
    .toUpperCase();
  const readTime = calcReadTime(blog.content);
  const excerpt = getExcerpt(blog.content);

  return (
    <Link to={`/blogs/${blog.slug}`} className="bh-card">
      <div className="bh-card-img-wrap">
        <div className="bh-card-date-badge">
          <span className="bh-badge-day">{day}</span>
          <span className="bh-badge-month">{month}</span>
        </div>
        <img
          src={imgSrc}
          alt={blog.title}
          className="bh-card-img"
          loading="lazy"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80";
          }}
        />
        <div className="bh-card-img-overlay" />
      </div>
      <div className="bh-card-body">
        <div className="bh-card-meta">
          <span className="bh-card-cat">{blog.category || "Blog"}</span>
          <span className="bh-card-dot" />
          <span className="bh-card-time">
            <ClockIcon /> {readTime} MIN READ
          </span>
        </div>
        <h3 className="bh-card-title">{blog.title}</h3>
        <p className="bh-card-excerpt">{excerpt}</p>
        <div className="bh-card-footer">
          <div className="bh-card-author">
            <div className="bh-card-avatar">B</div>
            <span className="bh-card-author-name">Brandmingo</span>
            <span className="bh-card-sep">|</span>
            <span className="bh-card-date-text">
              <CalendarIcon /> {formatDate(blog.publishDate || blog.createdAt)}
            </span>
          </div>
          <div className="bh-card-arrow">
            <ArrowIcon />
          </div>
        </div>
      </div>
      <div className="bh-card-glow" />
    </Link>
  );
};

/* ══════════════════════════════════════════
   BLOG SLIDER
══════════════════════════════════════════ */
// const BlogSlider = ({ blogs, loading, error }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const timerRef = useRef(null);

//   const next = useCallback(() => {
//     setActiveIndex((prev) => (prev + 1) % blogs.length);
//   }, [blogs.length]);

//   useEffect(() => {
//     if (blogs.length <= 1) return;
//     timerRef.current = setInterval(next, 3500);
//     return () => clearInterval(timerRef.current);
//   }, [blogs.length, next]);

//   if (loading) {
//     return (
//       <div className="bh-slider-wrap">
//         {[1, 2, 3].map((n) => (
//           <BlogCardSkeleton key={n} />
//         ))}
//       </div>
//     );
//   }
//   if (error) {
//     return (
//       <div className="bh-state">
//         <p>Failed to load.</p>
//         <button onClick={() => window.location.reload()} className="bh-retry">
//           Retry
//         </button>
//       </div>
//     );
//   }
//   if (blogs.length === 0) {
//     return (
//       <div className="bh-state">
//         <p>No blogs yet.</p>
//       </div>
//     );
//   }

//   const visibleCount = Math.min(3, blogs.length);
//   const visibleBlogs = Array.from({ length: visibleCount }, (_, i) => {
//     const idx = (activeIndex + i) % blogs.length;
//     return { blog: blogs[idx], key: `${idx}-${i}` };
//   });

//   return (
//     <div className="bh-slider-wrap">
//       <AnimatePresence mode="popLayout" initial={false}>
//         {visibleBlogs.map(({ blog, key }, i) => (
//           <motion.div
//             key={key}
//             initial={{ opacity: 0, y: 60 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -60 }}
//             transition={{
//               duration: 0.55,
//               delay: i * 0.06,
//               ease: [0.25, 0.46, 0.45, 0.94],
//             }}
//           >
//             <BlogCard blog={blog} />
//           </motion.div>
//         ))}
//       </AnimatePresence>
//     </div>
//   );
// };

/* ══════════════════════════════════════════
   BLOG SLIDER — CONTINUOUS
══════════════════════════════════════════ */
const BlogSlider = ({ blogs, loading, error }) => {
  if (loading) {
    return (
      <div className="bh-slider-wrap">
        {[1, 2, 3].map((n) => (
          <BlogCardSkeleton key={n} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="bh-state">
        <p>Failed to load.</p>
        <button onClick={() => window.location.reload()} className="bh-retry">
          Retry
        </button>
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="bh-state">
        <p>No blogs yet.</p>
      </div>
    );
  }

  // Duplicate for infinite smooth scroll
  const duplicatedBlogs = [...blogs, ...blogs];

  return (
    <div className="bh-slider-mask">
      <motion.div
        className="bh-slider-track"
        animate={{
          y: ["0%", "-50%"],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedBlogs.map((blog, index) => (
          <div key={index} className="bh-slide-item">
            <BlogCard blog={blog} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

/* ══════════════════════════════════════════
   FLOATING STAT CARD
   ✅ Rendered INSIDE .bh-panel so position:absolute
   works relative to the dark panel, not the page
══════════════════════════════════════════ */
const StatCard = ({ icon, value, label, delay, className }) => (
  <motion.div
    className={`bh-stat-card ${className || ""}`}
    initial={{ opacity: 0, scale: 0.88, y: 14 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
  >
    <motion.div
      animate={{ y: [0, -5, 0] }}
      transition={{
        duration: 3.5 + delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="bh-stat-inner"
    >
      <div className="bh-stat-icon">{icon}</div>
      <div className="bh-stat-text">
        <span className="bh-stat-value">{value}</span>
        <span className="bh-stat-label">{label}</span>
      </div>
    </motion.div>
  </motion.div>
);

/* ── Stable dots ── */
const DOTS = [
  { l: "8%", t: "12%", s: 3, o: 0.18, d: 2.8, dl: 0 },
  { l: "22%", t: "5%", s: 2, o: 0.12, d: 3.2, dl: 0.5 },
  { l: "45%", t: "18%", s: 4, o: 0.22, d: 2.5, dl: 1 },
  { l: "70%", t: "8%", s: 2, o: 0.14, d: 3.8, dl: 0.3 },
  { l: "88%", t: "20%", s: 3, o: 0.2, d: 2.6, dl: 0.8 },
  { l: "15%", t: "40%", s: 2, o: 0.16, d: 3.5, dl: 0.2 },
  { l: "55%", t: "35%", s: 3, o: 0.18, d: 2.9, dl: 0.7 },
  { l: "80%", t: "45%", s: 4, o: 0.24, d: 3.1, dl: 0.4 },
  { l: "30%", t: "60%", s: 2, o: 0.12, d: 3.6, dl: 0.9 },
  { l: "65%", t: "65%", s: 3, o: 0.2, d: 2.7, dl: 0.1 },
  { l: "92%", t: "55%", s: 2, o: 0.15, d: 3.3, dl: 0.6 },
  { l: "5%", t: "75%", s: 4, o: 0.22, d: 2.4, dl: 0.3 },
  { l: "40%", t: "80%", s: 2, o: 0.14, d: 3.7, dl: 0.8 },
  { l: "75%", t: "85%", s: 3, o: 0.18, d: 2.9, dl: 0.5 },
  { l: "20%", t: "92%", s: 2, o: 0.12, d: 3.4, dl: 0.2 },
];

const DotsPattern = () => (
  <div className="bh-dots-pattern" aria-hidden="true">
    {DOTS.map((d, i) => (
      <motion.span
        key={i}
        className="bh-dot"
        style={{ left: d.l, top: d.t, width: d.s, height: d.s, opacity: d.o }}
        animate={{ opacity: [d.o, d.o * 2.8, d.o], scale: [1, 1.7, 1] }}
        transition={{
          duration: d.d,
          repeat: Infinity,
          delay: d.dl,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

/* ══════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════ */
const BlogHome = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });
  const controls = useAnimation();

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await getPublicBlogs();
        const sorted = (res.blogs || []).sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );
        setBlogs(sorted);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  });

  return (
    <section className="bh-section" ref={sectionRef}>
      {/* Outer bg glows */}
      <div className="bh-outer-glow bh-outer-glow--l" />
      <div className="bh-outer-glow bh-outer-glow--r" />

      <div className="bh-container">
        {/* ══ WHITE INNER CARD ══ */}
        <div className="bh-inner-card">
          {/* ════ LEFT ════ */}
          <div className="bh-left">
            {/* Top row */}
            <motion.div
              className="bh-top-row"
              variants={fadeUp(0.1)}
              initial="hidden"
              animate={controls}
            >
              <div className="bh-badge">
                <span className="bh-badge-dot" />
                LIVE EDUCATION UPDATES
              </div>
              <Link to="/blogs" className="bh-view-all">
                View All Blogs <ArrowIcon />
              </Link>
            </motion.div>

            {/* Heading */}
            <motion.div
              variants={fadeUp(0.2)}
              initial="hidden"
              animate={controls}
            >
              <h2 className="bh-heading">
                Latest <span className="bh-heading-hl">Insights</span> &amp;
                <br />
                Career Updates
              </h2>
              <div className="bh-heading-line" />
            </motion.div>

            {/* Sub */}
            <motion.p
              className="bh-subtext"
              variants={fadeUp(0.3)}
              initial="hidden"
              animate={controls}
            >
              Stay ahead with the latest digital marketing trends, expert tips,
              and industry insights from Brandmingo.
            </motion.p>

            {/* Blog Slider */}
            <motion.div
              variants={fadeUp(0.35)}
              initial="hidden"
              animate={controls}
              className="bh-slider-container"
            >
              <BlogSlider blogs={blogs} loading={loading} error={error} />
            </motion.div>

            {/* Explore */}
            <motion.div
              variants={fadeUp(0.5)}
              initial="hidden"
              animate={controls}
            >
              <Link to="/blogs" className="bh-explore-link">
                Explore All Articles <ArrowIcon />
              </Link>
            </motion.div>
          </div>

          {/* ════ RIGHT DARK PANEL ════ */}
          <motion.div
            className="bh-right"
            initial={{ opacity: 0, x: 36 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="bh-panel">
              <DotsPattern />
              <div className="bh-panel-glow" />

              {/*
        INNER WRAPPER — gives padding so image floats
        with margins on all sides except bottom
      */}
              <div className="bh-panel-inner">
                {/* LEFT COLUMN — stat cards stacked vertically */}
                <div className="bh-panel-stats-col">
                  <StatCard
                    icon={<GradIcon />}
                    value="5,000+"
                    label="Students Trained"
                    delay={0.4}
                    className="bh-stat--stacked"
                  />
                  <StatCard
                    icon={<RocketIcon />}
                    value="120+"
                    label="Live Projects"
                    delay={0.6}
                    className="bh-stat--stacked"
                  />
                  <StatCard
                    icon={<TrophyIcon />}
                    value="98%"
                    label="Success Rate"
                    delay={0.8}
                    className="bh-stat--stacked"
                  />
                </div>

                {/* RIGHT COLUMN — hero image with margins */}
                <div className="bh-panel-img-col">
                  <div className="bh-panel-img-area">
                    <div className="bh-panel-img-ring" />
                    <div className="bh-panel-img-ring bh-panel-img-ring--2" />
                    <img
                      src="https://res.cloudinary.com/dqqgpii8v/image/upload/v1779363510/bm_bvdbm1.png"
                      alt="Brandmingo Student"
                      className="bh-panel-hero-img"
                      loading="lazy"
                    />
                    {/* Gradient fade — behind CTA */}
                    <div className="bh-panel-img-fade" />
                  </div>
                </div>
              </div>
              {/* end .bh-panel-inner */}

              {/*
        CTA CARD — overlaps bottom of image
        position:absolute at bottom of .bh-panel
        left-aligned with margin, not full-width edge-to-edge
      */}
              <motion.div
                className="bh-cta-card"
                initial={{ opacity: 0, y: 22 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.95 }}
              >
                <div className="bh-cta-topline" />
                <div className="bh-cta-head">
                  <div className="bh-cta-icon-wrap">
                    <MailIcon />
                  </div>
                  <div className="bh-cta-head-text">
                    <div className="bh-cta-badge-row">
                      <span className="bh-cta-dot" />
                      <span className="bh-cta-label">READY TO GROW?</span>
                    </div>
                    <p className="bh-cta-text">
                      Join thousands of learners growing their{" "}
                      <em className="bh-cta-em">careers.</em>
                    </p>
                  </div>
                </div>
                <Link to="/contact" className="bh-cta-btn">
                  Join Brandmingo Academy <ArrowIcon />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogHome;
