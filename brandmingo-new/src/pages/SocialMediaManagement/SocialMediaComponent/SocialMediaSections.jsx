import React, { useEffect, useRef, useState } from "react";
// import "./webdev-sections.css";
import { openEnquiryPopup } from "../../../utils/popup";
/* ── DATA ── */

const WEBSITE_TYPES = [
  {
    fa: "fa-solid fa-pen-to-square",
    num: "01",
    title: "Content Creation & Posting",
    desc: "Create engaging posts, reels, and content designed to attract and engage your audience.",
  },
  {
    fa: "fa-solid fa-bullhorn",
    num: "02",
    title: "Social Media Strategy",
    desc: "Plan and execute content strategies tailored to your brand and target audience.",
  },
  {
    fa: "fa-solid fa-comments",
    num: "03",
    title: "Audience Engagement",
    desc: "Interact with your audience, respond to queries, and build strong relationships.",
  },
  {
    fa: "fa-solid fa-chart-line",
    num: "04",
    title: "Growth & Analytics",
    desc: "Track performance, analyze insights, and optimize for better reach and growth.",
  },
];

const TECHNOLOGIES = [
  {
    fa: "fa-brands fa-google",
    title: "Google Ads",
    desc: "Capture high-intent users actively searching for your services with ROI-focused campaigns.",
  },
  {
    fa: "fa-brands fa-facebook",
    title: "Meta Ads (Facebook & Instagram)",
    desc: "Reach, engage, and convert your audience with highly targeted social media ads.",
  },
  {
    fa: "fa-brands fa-youtube",
    title: "YouTube Ads",
    desc: "Boost brand awareness and drive conversions through high-impact video ad campaigns.",
  },
  {
    fa: "fa-solid fa-chart-pie",
    title: "Performance Analytics",
    desc: "Track, analyze, and optimize campaigns using real-time data for better ROI.",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    fa: "fa-solid fa-magnifying-glass-chart",
    title: "Understanding Your Brand",
    desc: "We analyze your business, audience, and competitors to build a strong and data-driven social media foundation.",
  },
  {
    num: "02",
    fa: "fa-solid fa-calendar-check",
    title: "Content Strategy & Planning",
    desc: "We create content calendars, define posting strategy, and plan high-performing content for consistent growth.",
  },
  {
    num: "03",
    fa: "fa-solid fa-photo-film",
    title: "Content Creation & Posting",
    desc: "We design engaging posts, reels, and creatives that reflect your brand and capture audience attention.",
  },
  {
    num: "04",
    fa: "fa-solid fa-comments",
    title: "Engagement & Community Growth",
    desc: "We actively engage with your audience, respond to interactions, and build strong and loyal brand communities.",
  },
  {
    num: "05",
    fa: "fa-solid fa-chart-pie",
    title: "Analytics & Optimization",
    desc: "We track performance, analyze insights, and continuously optimize content for better reach and growth.",
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
            <div className="wds-section-label">WHAT WE MANAGE</div>
            <h3 className="wds-types-heading">
              {" "}
              Types of Social Media Services We Manage
            </h3>
            <p className="wds-types-desc">
              Not every business needs the same social media strategy — and
              that’s where most brands go wrong. We analyze your goals first,
              then create the right content and growth strategy for maximum
              results.
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
            <div className="wds-section-label">
              BUILT WITH POWERFUL PLATFORMS
            </div>
            <h3 className="wdt-heading">Platforms We Use</h3>
            <p className="wdt-desc">
              We don’t rely on guesswork. We use proven advertising platforms
              and advanced tools that are optimized for performance,
              scalability, and measurable growth — tailored to your business
              goals.
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
            <h3 className="wdp-heading"> Our Social Process</h3>
            <p className="wdp-desc">
              Strong social media growth is never random. We follow a
              structured, content-driven approach to build your brand presence,
              engage your audience, and drive consistent growth across
              platforms.
            </p>

            {/* CTA box */}
            <div className="wdp-cta">
              <div className="wdp-cta-icon">
                <i className="fa-solid fa-comments" />
              </div>
              <div className="wdp-cta-text">
                <h4>Have a brand to grow?</h4>
                <p>
                  Let’s build engaging content and strategies that turn your
                  audience into loyal customers.
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
const SocialMediaSections = () => (
  <>
    <WebDevTypes />
    <WebDevTech />
    <WebDevProcess />
  </>
);

export default SocialMediaSections;
