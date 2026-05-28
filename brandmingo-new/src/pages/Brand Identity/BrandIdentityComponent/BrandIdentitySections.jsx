import React, { useEffect, useRef, useState } from "react";
// import "./webdev-sections.css";
import { openEnquiryPopup } from "../../../utils/popup";

/* ── DATA ── */

const WEBSITE_TYPES = [
  {
    fa: "fa-solid fa-pen-nib",
    num: "01",
    title: "Logo & Visual Identity",
    desc: "Design logos, colors, and visuals that define your brand identity.",
  },
  {
    fa: "fa-solid fa-layer-group",
    num: "02",
    title: "Brand Guidelines",
    desc: "Create consistent brand rules for design, tone, and communication.",
  },
  {
    fa: "fa-solid fa-id-card",
    num: "03",
    title: "Corporate Identity Design",
    desc: "Build business cards, letterheads, and professional brand assets.",
  },
  {
    fa: "fa-solid fa-bullhorn",
    num: "04",
    title: "Marketing & Brand Assets",
    desc: "Design creatives that maintain consistency across campaigns.",
  },
];

const TECHNOLOGIES = [
  {
    fa: "fa-solid fa-pen-ruler",
    title: "Design Tools",
    desc: "Create logos, visuals, and brand assets with precision and creativity.",
  },
  {
    fa: "fa-solid fa-chart-line",
    title: "Brand Strategy Tools",
    desc: "Analyze positioning, audience, and brand direction for clarity.",
  },
  {
    fa: "fa-solid fa-layer-group",
    title: "Brand Asset Systems",
    desc: "Organize and manage brand elements for consistency across platforms.",
  },
  {
    fa: "fa-solid fa-swatchbook",
    title: "Visual Identity Tools",
    desc: "Define colors, typography, and styles for a cohesive brand look.",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    fa: "fa-solid fa-magnifying-glass",
    title: "Brand Audit & Research",
    desc: "We analyze your business, audience, and competitors to find opportunities.",
  },
  {
    num: "02",
    fa: "fa-solid fa-lightbulb",
    title: "Strategy & Positioning",
    desc: "We define brand voice, messaging, and positioning for clarity.",
  },
  {
    num: "03",
    fa: "fa-solid fa-pen-nib",
    title: "Visual Identity Design",
    desc: "We create logos, colors, and visuals that represent your brand.",
  },
  {
    num: "04",
    fa: "fa-solid fa-layer-group",
    title: "Brand Consistency",
    desc: "We ensure consistent design and messaging across all touchpoints.",
  },
  {
    num: "05",
    fa: "fa-solid fa-chart-line",
    title: "Growth & Evolution",
    desc: "We refine and evolve your brand as your business grows.",
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
            <div className="wds-section-label">WHAT WE CREATE</div>
            <h3 className="wds-types-heading">
              Types of Brand Identity We Create
            </h3>
            <p className="wds-types-desc">
              Not every brand needs the same identity — and that’s where most
              businesses go wrong. We analyze your vision first, then craft the
              right brand identity for maximum recognition and impact.
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
            <h3 className="wdt-heading">
              Brand Identity Tools & Platforms We Use
            </h3>
            <p className="wdt-desc">
              We don’t rely on guesswork. We use proven branding tools and
              platforms optimized for creativity, consistency, and impactful
              brand development — tailored to your business goals.
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
            <h3 className="wdp-heading"> Our Branding Process</h3>
            <p className="wdp-desc">
              Successful branding is never random. We follow a structured,
              strategic approach to build a strong identity, ensure consistency,
              and create long-term brand impact.
            </p>

            {/* CTA box */}
            <div className="wdp-cta">
              <div className="wdp-cta-icon">
                <i className="fa-solid fa-comments" />
              </div>
              <div className="wdp-cta-text">
                <h4>Have a branding project in mind?</h4>
                <p>
                  Let’s build a powerful brand identity that creates impact and
                  long-term value.
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
const BrandIdentitySections = () => (
  <>
    <WebDevTypes />
    <WebDevTech />
    <WebDevProcess />
  </>
);

export default BrandIdentitySections;
