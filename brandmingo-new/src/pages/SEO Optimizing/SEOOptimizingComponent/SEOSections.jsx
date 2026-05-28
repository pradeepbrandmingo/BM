import React, { useEffect, useRef, useState } from "react";
// import "./webdev-sections.css";
import { openEnquiryPopup } from "../../../utils/popup";

/* ── DATA ── */

const WEBSITE_TYPES = [
  {
    fa: "fa-solid fa-magnifying-glass",
    num: "01",
    title: "On-Page SEO",
    desc: "Optimize pages, content, and keywords to improve rankings and visibility.",
  },
  {
    fa: "fa-solid fa-screwdriver-wrench",
    num: "02",
    title: "Technical SEO",
    desc: "Enhance speed, indexing, and site structure for better performance.",
  },
  {
    fa: "fa-solid fa-link",
    num: "03",
    title: "Off-Page SEO",
    desc: "Build authority through backlinks to boost trust and search rankings.",
  },
  {
    fa: "fa-solid fa-map-location-dot",
    num: "04",
    title: "Local SEO",
    desc: "Improve local visibility to attract nearby customers and searches.",
  },
];

const TECHNOLOGIES = [
  {
    fa: "fa-brands fa-google",
    title: "Google Search",
    desc: "Optimize your website to rank higher and capture high-intent organic traffic.",
  },
  {
    fa: "fa-solid fa-chart-line",
    title: "SEO Analytics Tools",
    desc: "Track rankings, traffic, and performance with accurate data insights.",
  },
  {
    fa: "fa-solid fa-key",
    title: "Keyword Research Tools",
    desc: "Identify high-performing keywords to target the right audience effectively.",
  },
  {
    fa: "fa-solid fa-screwdriver-wrench",
    title: "Technical SEO Tools",
    desc: "Improve site health, speed, and indexing for better search visibility.",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    fa: "fa-solid fa-magnifying-glass",
    title: "SEO Audit & Analysis",
    desc: "We analyze your website, competitors, and keywords to identify opportunities.",
  },
  {
    num: "02",
    fa: "fa-solid fa-clipboard-list",
    title: "Strategy & Keyword Planning",
    desc: "We define SEO strategy, target keywords, and content direction.",
  },
  {
    num: "03",
    fa: "fa-solid fa-pen-nib",
    title: "On-Page & Technical Setup",
    desc: "We optimize content, structure, and technical aspects for better rankings.",
  },
  {
    num: "04",
    fa: "fa-solid fa-chart-line",
    title: "Optimization & Link Building",
    desc: "We improve performance and build authority through backlinks.",
  },
  {
    num: "05",
    fa: "fa-solid fa-chart-pie",
    title: "Tracking & Growth",
    desc: "We monitor results and continuously optimize for long-term growth.",
  },
];

/* ══════════════════════════════════════════
   SECTION 1 — Types of Websites
══════════════════════════════════════════ */
const WebDevTypes = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="wds" ref={ref}>
      <div className="wds-container">
        <div className="wds-types-grid">
          {/* Left */}
          <div className="wds-types-left">
            <div className="wds-section-label">WHAT WE OPTIMIZE</div>
            <h3 className="wds-types-heading">Types of SEO We Optimize</h3>
            <p className="wds-types-desc">
              Not every business needs the same SEO strategy — and that’s where
              most brands go wrong. We analyze your goals first, then implement
              the right SEO approach for maximum visibility and growth.
            </p>

            {/* Decorative dot grid + arc */}
            <div className="wds-deco" aria-hidden="true">
              <svg
                width="240"
                height="190"
                viewBox="0 0 240 190"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient id="dotFade" cx="20%" cy="20%" r="80%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                  <mask id="gridMask">
                    <rect width="240" height="190" fill="url(#dotFade)" />
                  </mask>
                  <radialGradient id="glowDot" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="1" />
                    <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Dot grid */}
                <g mask="url(#gridMask)">
                  {Array.from({ length: 10 }, (_, row) =>
                    Array.from({ length: 13 }, (_, col) => (
                      <circle
                        key={`${row}-${col}`}
                        cx={col * 20 + 4}
                        cy={row * 20 + 4}
                        r="1.4"
                        fill="#f97316"
                        opacity="0.5"
                      />
                    )),
                  )}
                </g>

                {/* Arc curve */}
                <path
                  d="M 0 190 Q 180 150 230 20"
                  stroke="#f97316"
                  strokeWidth="1.2"
                  fill="none"
                  opacity="0.45"
                  strokeLinecap="round"
                />

                {/* Glowing dot on arc */}
                <circle cx="205" cy="72" r="5" fill="#f97316" opacity="0.9" />
                <circle cx="205" cy="72" r="10" fill="#f97316" opacity="0.2" />
                <circle cx="205" cy="72" r="16" fill="#f97316" opacity="0.08" />
              </svg>
            </div>
          </div>

          {/* Right 2×2 cards */}
          <div className="wds-types-cards">
            {WEBSITE_TYPES.map((item, i) => (
              <div
                key={i}
                className={`wds-type-card${visible ? " wds-anim" : ""}`}
                style={visible ? { animationDelay: `${i * 0.1}s` } : {}}
              >
                <span className="wds-card-num">{item.num}</span>
                <div className="wds-card-icon">
                  <i className={item.fa} />
                </div>
                <h4 className="wds-card-title">{item.title}</h4>
                <p className="wds-card-desc">{item.desc}</p>
                <a href="#contact" className="wds-card-link">
                  Learn More <i className="fa-solid fa-arrow-right" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════
   SECTION 2 — Technologies We Use
══════════════════════════════════════════ */
const WebDevTech = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="wdt" ref={ref}>
      <div className="wdt-container">
        <div className="wdt-grid">
          {/* Left */}
          <div className="wdt-left">
            <div className="wds-section-label">BUILT WITH POWERFUL TOOLS</div>
            <h3 className="wdt-heading">SEO Tools & Platforms We Use</h3>
            <p className="wdt-desc">
              We don’t rely on guesswork. We use proven SEO tools and platforms
              optimized for performance, keyword insights, and measurable
              organic growth — tailored to your business goals.
            </p>
          </div>

          {/* Right tech cards */}
          <div className="wdt-cards">
            {TECHNOLOGIES.map((item, i) => (
              <div
                key={i}
                className={`wdt-card${visible ? " wds-anim" : ""}`}
                style={visible ? { animationDelay: `${i * 0.1}s` } : {}}
              >
                <div className="wdt-card-icon">
                  <i className={item.fa} />
                </div>
                <div className="wdt-card-content">
                  <h4 className="wdt-card-title">{item.title}</h4>
                  <p className="wdt-card-desc">{item.desc}</p>
                  <div className="wdt-card-line" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════
   SECTION 3 — Web Development Process
══════════════════════════════════════════ */
const WebDevProcess = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="wdp" ref={ref}>
      <div className="wdp-container">
        <div className="wdp-grid">
          {/* Left */}
          <div className="wdp-left">
            <div className="wds-section-label">OUR WORKFLOW</div>
            <h3 className="wdp-heading"> Our SEO Process</h3>
            <p className="wdp-desc">
              Successful SEO is never random. We follow a structured,
              data-driven approach to improve rankings, drive organic traffic,
              and ensure long-term business growth.
            </p>

            {/* CTA box */}
            <div className="wdp-cta">
              <div className="wdp-cta-icon">
                <i className="fa-solid fa-comments" />
              </div>
              <div className="wdp-cta-text">
                <h4>Have an SEO project in mind?</h4>
                <p>
                  Let’s build a strong SEO strategy that drives traffic and real
                  growth.
                </p>
                <button
                  className="wdp-cta-btn"
                  type="button"
                  onClick={openEnquiryPopup}
                >
                  Let's Talk
                  <i className="fa-solid fa-arrow-right" />
                </button>
              </div>
            </div>
          </div>

          {/* Right steps */}
          <div className="wdp-steps">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={i}
                className={`wdp-step${visible ? " wds-anim" : ""}`}
                style={visible ? { animationDelay: `${i * 0.1}s` } : {}}
              >
                <div className="wdp-step-num">{step.num}</div>
                <div className="wdp-step-icon">
                  <i className={step.fa} />
                </div>
                <div className="wdp-step-body">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════
   DEFAULT EXPORT — all three sections
══════════════════════════════════════════ */
const SEOSections = () => (
  <>
    <WebDevTypes />
    <WebDevTech />
    <WebDevProcess />
  </>
);

export default SEOSections;
