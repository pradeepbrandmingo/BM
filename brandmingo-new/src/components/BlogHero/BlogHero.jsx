import React, { useEffect, useRef, useState } from "react";
import "./BlogHero.css";

/* ── Right Decorative Panel ── */
const HeroDeco = ({ visible }) => (
  <div
    className={`bh-deco${visible ? " bh-deco--visible" : ""}`}
    aria-hidden="true"
  >
    <div className="bh-ring bh-ring--1" />
    <div className="bh-ring bh-ring--2" />
    <div className="bh-img-glow" />

    <dotlottie-wc
      src="https://lottie.host/f4ce0803-aa10-48d0-81ca-9cbf347059db/YytBIRIeLR.lottie"
      autoplay
      loop
      style={{ width: "100%", height: "100%", position: "relative", zIndex: 2 }}
    />

    {/* Floating chips */}
    <div className="bh-chip bh-chip--1">
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
      Expert Articles
    </div>
    <div className="bh-chip bh-chip--2">
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />
      </svg>
      Weekly Updates
    </div>
    <div className="bh-chip bh-chip--3">
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12,6 12,12 16,14" />
      </svg>
      Latest Insights
    </div>

    {/* Badge */}
    <div className="bh-stats-badge">
      <strong className="bh-stats-number">50+</strong>
      <span className="bh-stats-label">
        Blog
        <br />
        Articles
      </span>
    </div>
  </div>
);

/* ── Main Component ── */
const BlogHero = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!document.querySelector("script[data-lottie-wc]")) {
      const script = document.createElement("script");
      script.src =
        "https://unpkg.com/@lottiefiles/dotlottie-wc@0.9.10/dist/dotlottie-wc.js";
      script.type = "module";
      script.setAttribute("data-lottie-wc", "true");
      document.head.appendChild(script);
    }
    const timer = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`bh-section${visible ? " bh-section--visible" : ""}`}
      ref={sectionRef}
      aria-labelledby="bh-heading"
    >
      {/* Background */}
      <div className="bh-bg" aria-hidden="true">
        <div className="bh-bg-orb bh-bg-orb--1" />
        <div className="bh-bg-orb bh-bg-orb--2" />
      </div>

      <div className="bh-container">
        <div className="bh-inner">
          {/* ══ LEFT — Content ══ */}
          <div className="bh-content">
            {/* Eyebrow */}
            <div className="bh-eyebrow">
              <span className="bh-eyebrow-dot" />
              Our Blog
            </div>

            {/* Heading */}
            <h1 className="bh-heading" id="bh-heading">
              <span className="bh-heading-line1">Insights, Ideas &</span>
              <span className="bh-heading-line2">
                <em className="bh-heading-accent">Digital Trends.</em>
              </span>
            </h1>

            {/* Mobile deco */}
            <div className="bh-mobile-deco">
              <HeroDeco visible={visible} />
            </div>

            {/* Description */}
            <p className="bh-desc">
              Stay ahead of the curve with expert articles on digital marketing,
              web development, SEO, branding, and everything in between —
              crafted by the Brandmingo team.
            </p>

            {/* Tags row */}
            <div className="bh-tags">
              {[
                "Digital Marketing",
                "SEO",
                "Web Dev",
                "Branding",
                "Design",
              ].map((tag, i) => (
                <span
                  className="bh-tag"
                  key={i}
                  style={{ transitionDelay: `${0.55 + i * 0.08}s` }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="bh-cta-row">
              <a href="/contact-us" className="bh-btn-primary">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon
                    points="10,8 16,12 10,16"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
                Start Reading
              </a>
              <a href="#blog-list" className="bh-btn-secondary">
                Browse All Posts
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </div>
          </div>

          {/* ══ RIGHT — Decorative ══ */}
          <HeroDeco visible={visible} />
        </div>
      </div>

      <div className="bh-bottom-fade" aria-hidden="true" />
    </section>
  );
};

export default BlogHero;
