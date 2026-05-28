import React, { useEffect, useRef, useState } from "react";
// import "./webdev-extra.css";

/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */

const DIFF_FEATURES = [
  {
    fa: "fa-solid fa-user-check",
    title: "User-Focused Experience Analysis",
    desc: "We analyse real user behaviour and interaction patterns to improve usability and create smoother digital experiences.",
  },
  {
    fa: "fa-solid fa-chart-line",
    title: "Conversion-Oriented UX Strategy",
    desc: "Our audits are designed to optimize user journeys, improve engagement, and increase conversion rates across your platform.",
  },
  {
    fa: "fa-solid fa-database",
    title: "Data-Driven UX Insights",
    desc: "Every recommendation is backed by analytics, behaviour tracking, heatmaps, and usability research for smarter decisions.",
  },
  {
    fa: "fa-solid fa-route",
    title: "User Journey & Navigation Optimization",
    desc: "We refine navigation flow and interaction paths to reduce friction and improve accessibility and usability.",
  },
  {
    fa: "fa-solid fa-file-lines",
    title: "Clear & Actionable UX Reports",
    desc: "Receive easy-to-understand reports with practical recommendations and prioritised improvement strategies.",
  },
];

const ECOM_ALLOWS = [
  "Identify usability gaps and friction points  ",
  "Improve navigation and user interaction flow",
  "Increase engagement, retention, and conversions",
  "Enhance accessibility and overall user experience",
];

const ECOM_PROVIDES = [
  " Complete usability and UX analysis",
  "User journey and interaction mapping",
  " Conversion-focused optimisation insights",
  "Detailed audit reports with actionable recommendations",
];

const PLATFORMS = [
  {
    fa: "fa-solid fa-user-check",
    title: "Usability Audit",
    sub: "BEST FOR",
    desc: "Navigation issues, usability gaps, and poor user interaction experiences.",
  },
  {
    fa: "fa-solid fa-route",
    title: "User Journey Audit",
    sub: "BEST FOR",
    desc: "Optimising user flow, interaction paths, and customer journey experiences",
  },
  {
    fa: "fa-solid fa-filter",
    title: "Conversion Funnel Audit",
    sub: "BEST FOR",
    desc: "Improving conversion rates, reducing abandonment, and optimising key user actions.",
  },
  {
    fa: "fa-solid fa-gauge-high",
    title: "Performance UX Audit",
    sub: "BEST FOR",
    desc: "Website speed, responsiveness, and overall digital performance optimization",
  },
];

const FAQS = [
  {
    fa: "fa-solid fa-magnifying-glass",
    q: "What is a UI/UX audit?",
    a: "A UI/UX audit is a detailed analysis of your website or application to identify usability issues, user experience gaps, navigation problems, and conversion barriers that affect overall performance.",
  },
  {
    fa: "fa-solid fa-user-check",
    q: "How do I know if my website needs a UI/UX audit?",
    a: "If your website has high bounce rates, low engagement, poor conversions, or confusing navigation, a UI/UX audit can help uncover the issues impacting user experience and performance.",
  },
  {
    fa: "fa-solid fa-clock",
    q: "How long does a UI/UX audit take?",
    a: "The timeline depends on the complexity and size of your platform. Most UI/UX audits are completed within a few days to provide detailed insights and actionable recommendations.",
  },
  {
    fa: "fa-solid fa-file-lines",
    q: "What will I receive after the audit?",
    a: "You will receive a detailed UX audit report including usability findings, user journey analysis, performance insights, and practical recommendations to improve engagement and conversions.",
  },
];
/* ── shared intersection hook ── */
const useVisible = (threshold = 0.1) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return [ref, visible];
};

/* ══════════════════════════════════════════
   SECTION 1 — What Makes Our Websites Different
══════════════════════════════════════════ */
const WebDevDiff = () => {
  const [ref, visible] = useVisible(0.08);
  return (
    <section className="wde" ref={ref}>
      <div className="wde-container">
        <div className="wde-grid">
          {/* Left */}
          <div className="wde-left">
            <div className="wds-section-label">OUR APPROACH</div>
            <h3 className="wde-heading">
              What Makes Our UI/UX Audits <span>Different?</span>
            </h3>
            <p className="wde-desc">
              Most websites look visually appealing but fail to deliver a
              seamless user experience. Our UI/UX audit services focus on
              usability, user behaviour, and performance optimisation to improve
              engagement, retention, and conversions through data-driven
              insights.
            </p>
            <div className="wde-gradient-bar" />
          </div>

          {/* Right */}
          <div className="wde-right">
            <div className="wde-features">
              {DIFF_FEATURES.map((f, i) => (
                <div
                  key={i}
                  className={`wde-feat${visible ? " wde-anim" : ""}`}
                  style={visible ? { animationDelay: `${i * 0.1}s` } : {}}
                >
                  <div className="wde-feat-icon">
                    <i className={f.fa} />
                  </div>
                  <div className="wde-feat-body">
                    <h5>{f.title}</h5>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="wde-note">
              <div className="wde-note-icon">
                <i className="fa-solid fa-rocket" />
              </div>
              <p>
                If your user experience isn’t optimized, your business is
                already
                <em>losing engagement, trust, and conversions.</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════
   SECTION 2 — E-commerce
══════════════════════════════════════════ */
const WebDevEcom = () => {
  const [ref, visible] = useVisible(0.08);
  return (
    <section className="wdec" ref={ref}>
      <div className="wdec-container">
        <div className="wdec-grid">
          {/* Left */}
          <div className="wdec-left">
            <div className="wds-section-label">GROW YOUR BUSINESS</div>
            <h3 className="wdec-heading">
              Why Your Business
              <span> Needs a UI/UX Audit </span>
            </h3>
            <div className="wdec-divider" />
            <p className="wdec-desc">
              If your website or application is not delivering the expected
              engagement or conversions, poor user experience could be the
              reason. A UI/UX audit helps identify usability issues, optimise
              user journeys, and improve overall digital performance to create
              seamless customer experiences that drive real business growth.
            </p>
          </div>

          {/* Right — two cards */}
          <div className="wdec-cards">
            <div
              className={`wdec-card${visible ? " wde-anim" : ""}`}
              style={visible ? { animationDelay: "0.1s" } : {}}
            >
              <div className="wdec-card-icon">
                <i className="fa-solid fa-circle-dot" />
              </div>
              <h4>
                UI/UX Audit <span>Helps You To:</span>
              </h4>
              <ul className="wdec-list">
                {ECOM_ALLOWS.map((item, i) => (
                  <li key={i}>
                    <i className="fa-solid fa-arrow-right" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`wdec-card${visible ? " wde-anim" : ""}`}
              style={visible ? { animationDelay: "0.2s" } : {}}
            >
              <div className="wdec-card-icon">
                <i className="fa-solid fa-gift" />
              </div>
              <h4>What We Deliver:</h4>
              <ul className="wdec-list wdec-list--dot">
                {ECOM_PROVIDES.map((item, i) => (
                  <li key={i}>
                    <i className="fa-solid fa-circle" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════
   SECTION 3 — Which Platform is Best
   Desktop: Left sticky col | Right 2×2 grid + full-width note
   Mobile: stacked single col
══════════════════════════════════════════ */
const WebDevPlatform = () => {
  const [ref, visible] = useVisible(0.08);
  return (
    <section className="wdpl" ref={ref}>
      <div className="wdpl-container">
        <div className="wdpl-grid">
          {/* Left */}
          <div className="wdpl-left">
            <div className="wds-section-label">CHOOSE WHAT’S RIGHT</div>
            <h3 className="wdpl-heading">
              Which UI/UX Audit is
              <span>Best</span> for Your Business?
            </h3>
            <p className="wdpl-desc">
              Every digital product has different user behaviours, usability
              challenges, and performance goals. Choosing the right UI/UX audit
              service helps uncover critical issues, improve user experience,
              and maximise conversions through targeted optimisation strategies.
            </p>
          </div>

          {/* Right — 2×2 grid + full-width note below */}
          <div className="wdpl-right">
            <div className="wdpl-cards">
              {PLATFORMS.map((p, i) => (
                <div
                  key={i}
                  className={`wdpl-card${visible ? " wde-anim" : ""}`}
                  style={visible ? { animationDelay: `${i * 0.1}s` } : {}}
                >
                  {/* Icon + text */}
                  <div className="wdpl-card-inner">
                    <div className="wdpl-card-icon">
                      <i className={p.fa} />
                    </div>
                    <div className="wdpl-card-body">
                      <h5>{p.title}</h5>
                      <span className="wdpl-sub">{p.sub}</span>
                      <p>{p.desc}</p>
                    </div>
                  </div>
                  {/* Arrow */}
                  <div className="wdpl-arrow">
                    <i className="fa-solid fa-arrow-right" />
                  </div>
                </div>
              ))}
            </div>

            {/* Full-width note below the 2×2 grid */}
            <div
              className={`wdpl-note${visible ? " wde-anim" : ""}`}
              style={visible ? { animationDelay: "0.45s" } : {}}
            >
              <div className="wdpl-note-icon">
                <i className="fa-solid fa-lightbulb" />
              </div>
              <p>
                The right UI/UX audit depends on your business goals and we help
                you choose the most effective strategy for maximum impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════
   SECTION 4 — FAQ (DARK accordion)
══════════════════════════════════════════ */
const WebDevFaq = () => {
  const [ref, visible] = useVisible(0.08);
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section className="wdfq" ref={ref}>
      <div className="wdfq-container">
        <div className="wds-section-label">QUESTIONS? WE'VE GOT ANSWERS</div>
        <h3 className="wdfq-heading">Frequently Asked Questions</h3>

        <div className="wdfq-list">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`wdfq-item${open === i ? " open" : ""}${visible ? " wde-anim" : ""}`}
              style={visible ? { animationDelay: `${i * 0.1}s` } : {}}
              onClick={() => toggle(i)}
            >
              <div className="wdfq-q">
                <div className="wdfq-icon">
                  <i className={faq.fa} />
                </div>
                <span>{faq.q}</span>
                <div className="wdfq-plus">
                  <i
                    className={`fa-solid ${open === i ? "fa-minus" : "fa-plus"}`}
                  />
                </div>
              </div>
              {open === i && (
                <div className="wdfq-a">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════
   DEFAULT EXPORT
══════════════════════════════════════════ */
const UiUxExtra = () => (
  <>
    <WebDevDiff />
    <WebDevEcom />
    <WebDevPlatform />
    <WebDevFaq />
  </>
);

export default UiUxExtra;
