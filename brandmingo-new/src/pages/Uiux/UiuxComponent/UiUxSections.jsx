import React, { useEffect, useRef, useState } from "react";
// import "./webdev-sections.css";
import { openEnquiryPopup } from "../../../utils/popup";
/* ── DATA ── */

const WEBSITE_TYPES = [
  {
    fa: "fa-solid fa-user-check",
    num: "01",
    title: "Interface Usability Audit",
    desc: "Evaluate your website’s usability, navigation structure, and accessibility to create smoother and more intuitive user experiences.",
  },
  {
    fa: "fa-solid fa-sitemap",
    num: "02",
    title: "User Flow & Journey Audit",
    desc: "Analyse how users move through your platform and optimize key touchpoints for better engagement and conversion performance.",
  },
  {
    fa: "fa-solid fa-filter",
    num: "03",
    title: "Conversion Optimization Audit",
    desc: "Review landing pages, CTAs, and conversion funnels to improve lead generation and reduce customer drop-offs.",
  },
  {
    fa: "fa-solid fa-gauge-high",
    num: "04",
    title: "Website Performance & UX Audit",
    desc: "Assess responsiveness, speed, and overall digital experience to deliver fast, seamless, and user-friendly interactions.",
  },
];

const TECHNOLOGIES = [
  {
    fa: "fa-solid fa-user-group",
    title: "User Behavior Research",
    desc: "Understand how users interact with your website through behavioural analysis, feedback, and usability insights.",
  },
  {
    fa: "fa-solid fa-route",
    title: "User Flow Analysis",
    desc: "Map and optimize user journeys to create smoother navigation and seamless interaction across your platform.",
  },
  {
    fa: "fa-solid fa-flask",
    title: "UX & Usability Testing",
    desc: "Test real-world interactions to identify usability issues and improve accessibility and engagement.",
  },
  {
    fa: "fa-solid fa-chart-simple",
    title: "Analytics & Performance Insights",
    desc: "Use analytics, heatmaps, and performance tracking tools to make smarter UX optimisation decisions.",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    fa: "fa-solid fa-user",
    title: "User Behavior Discovery",
    desc: "We analyse your target audience, user interactions, and business objectives to uncover key UX challenges and experience gaps.",
  },
  {
    num: "02",
    fa: "fa-solid fa-magnifying-glass-chart",
    title: "UX Research & Data Analysis",
    desc: "Using analytics, heatmaps, and behavioural insights, we evaluate how users navigate your platform and identify friction points.",
  },
  {
    num: "03",
    fa: "fa-solid fa-flask",
    title: " Interface & Usability Testing",
    desc: "We test real user interactions to identify usability issues, accessibility problems, and navigation inconsistencies affecting engagement.",
  },
  {
    num: "04",
    fa: "fa-solid fa-lightbulb",
    title: "UX Optimization Strategy",
    desc: "We provide actionable recommendations to improve user flow, interface design, responsiveness, and conversion-focused experiences.",
  },
  {
    num: "05",
    fa: "fa-solid fa-chart-line",
    title: "Reporting & Continuous Improvements",
    desc: "Receive detailed UX audit reports with insights, improvement priorities, and long-term optimisation strategies for better performance.",
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
            <div className="wds-section-label">WHAT WE AUDIT</div>
            <h3 className="wds-types-heading">
              Types of UI/UX Audits We Perform
            </h3>
            <p className="wds-types-desc">
              Every digital product has unique user behaviours, interaction
              patterns, and usability challenges. Our UI/UX audit services are
              designed to identify friction points, improve usability, and
              optimize the overall user experience for better engagement and
              conversions.
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
              BUILT WITH UX INSIGHTS & TOOLS
            </div>
            <h3 className="wdt-heading">Tools & Methods We Use</h3>
            <p className="wdt-desc">
              We combine advanced UX research methods, behaviour analysis, and
              performance-focused tools to identify usability gaps and improve
              digital experiences. Our process is designed to optimise user
              journeys, enhance engagement, and increase conversions through
              data-driven UI/UX decisions.
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
            <h3 className="wdp-heading"> Our UI/UX Audit Process</h3>
            <p className="wdp-desc">
              A successful digital experience starts with understanding how
              users interact with your platform. Our structured UI/UX audit
              process helps identify usability issues, optimise user journeys,
              and improve overall website performance for better engagement and
              conversions.
            </p>

            {/* CTA box */}
            <div className="wdp-cta">
              <div className="wdp-cta-icon">
                <i className="fa-solid fa-comments" />
              </div>
              <div className="wdp-cta-text">
                <h4>Need to Improve Your User Experience?</h4>
                <p>
                  Let’s identify usability gaps, optimise user journeys, and
                  create smoother digital experiences that increase engagement
                  and conversions.
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
const UiUxSections = () => (
  <>
    <WebDevTypes />
    <WebDevTech />
    <WebDevProcess />
  </>
);

export default UiUxSections;
