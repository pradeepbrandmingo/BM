import React, { useEffect, useRef, useState } from "react";
// import "./webdev-extra.css";

/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */

const DIFF_FEATURES = [
  {
    fa: "fa-solid fa-bullseye",
    title: "Highly Targeted SEO",
    desc: "Reach the right audience with precise keyword targeting strategies.",
  },
  {
    fa: "fa-solid fa-chart-line",
    title: "ROI-Focused SEO",
    desc: "Optimized to deliver long-term value and measurable organic growth.",
  },
  {
    fa: "fa-solid fa-chart-pie",
    title: "Data-Driven Optimization",
    desc: "Continuous analysis and improvements to boost rankings and traffic.",
  },
  {
    fa: "fa-solid fa-magnifying-glass",
    title: "Conversion-Focused Approach",
    desc: "Designed to turn organic visitors into leads and customers.",
  },
  {
    fa: "fa-solid fa-sliders",
    title: "Easy SEO Management",
    desc: "Transparent reporting and clear insights for better decisions.",
  },
];
const ECOM_ALLOWS = [
  "Improve rankings & visibility",
  "Drive consistent organic traffic  ",
  "Target high-intent users effectively ",
  "Build long-term business growth ",
];

const ECOM_PROVIDES = [
  "Keyword research & strategy  ",
  " On-page & technical SEO  ",
  "Content optimization  ",
  "Performance tracking & optimization",
];

const PLATFORMS = [
  {
    fa: "fa-solid fa-magnifying-glass",
    title: "On-Page SEO",
    sub: "BEST FOR",
    desc: "Improving rankings & content visibility",
  },
  {
    fa: "fa-solid fa-screwdriver-wrench",
    title: "Technical SEO",
    sub: "BEST FOR",
    desc: "Site performance & indexing improvements",
  },
  {
    fa: "fa-solid fa-link",
    title: "Off-Page SEO",
    sub: "BEST FOR",
    desc: "Building authority & backlinks",
  },
  {
    fa: "fa-solid fa-map-location-dot",
    title: "Local SEO",
    sub: "BEST FOR",
    desc: "Local visibility & nearby customers",
  },
];

const FAQS = [
  {
    fa: "fa-solid fa-magnifying-glass",
    q: "What SEO services do you offer?",
    a: "We provide on-page, technical, off-page, and local SEO tailored to your business goals.",
  },
  {
    fa: "fa-solid fa-chart-line",
    q: "Which SEO strategy is best for my business?",
    a: "It depends on your goals — we analyze your business and create a custom SEO strategy.",
  },
  {
    fa: "fa-solid fa-clock",
    q: "How soon can I see results from SEO?",
    a: "SEO takes time, but you can start seeing improvements in traffic and rankings within a few weeks.",
  },
  {
    fa: "fa-solid fa-gear",
    q: "How do you improve rankings and traffic?",
    a: "We optimize content, fix technical issues, build backlinks, and continuously track performance.",
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
            <div className="wds-section-label">OUR PROMISE</div>
            <h3 className="wde-heading">
              What Makes Our SEO <span>Different?</span>
            </h3>
            <p className="wde-desc">
              Most websites get traffic — but don’t convert. We focus on
              performance. Our SEO strategies are built to drive real traffic,
              qualified leads, and measurable growth for your business.
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
                If your website is not ranking, <em>— you’re losing </em>
                ,potential customers.
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
              Do You Need
              <span>SEO Optimization?</span>
            </h3>
            <div className="wdec-divider" />
            <p className="wdec-desc">
              If your website is not ranking and relying only on paid traffic —
              you’re limiting your growth. SEO helps you attract the right
              audience organically and generate consistent traffic and leads
              over time.
            </p>
          </div>

          {/* Right — two cards */}
          <div className="wdec-cards">
            <div
              className={`wdec-card${visible ? " wde-anim" : ""}`}
              style={visible ? { animationDelay: "0.1s" } : {}}
            >
              <div className="wdec-card-icon">
                <i className="fa-solid fa-magnifying-glass" />
              </div>
              <h4>
                SEO Optimization <span>Allows You To:</span>
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
              <h4>We Provide:</h4>
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
              Which SEO Strategy is <span>Best</span> for You?
            </h3>
            <p className="wdpl-desc">
              Choosing the right SEO approach is crucial. Every business needs a
              different strategy — and using the wrong one can slow growth. We
              help you choose the right SEO path for maximum results.
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
                The right SEO strategy depends on your goals — and we help you
                grow in the right direction from day one.
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
const SEOExtra = () => (
  <>
    <WebDevDiff />
    <WebDevEcom />
    <WebDevPlatform />
    <WebDevFaq />
  </>
);

export default SEOExtra;
