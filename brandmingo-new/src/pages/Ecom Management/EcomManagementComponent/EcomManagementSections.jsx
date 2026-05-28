import React, { useEffect, useRef, useState } from "react";
// import "./webdev-sections.css";
import { openEnquiryPopup } from "../../../utils/popup";

/* ── DATA ── */

const WEBSITE_TYPES = [
  {
    fa: "fa-solid fa-box",
    num: "01",
    title: "Product & Catalog Management",
    desc: "Optimize product listings, pricing, and categories to boost sales.",
  },
  {
    fa: "fa-solid fa-screwdriver-wrench",
    num: "02",
    title: "Store Optimization",
    desc: "Enhance store design, speed, and UX for better conversions.",
  },
  {
    fa: "fa-solid fa-cart-shopping",
    num: "03",
    title: "Order & Inventory Management",
    desc: "Manage orders and inventory efficiently for smooth operations.",
  },
  {
    fa: "fa-solid fa-chart-line",
    num: "04",
    title: "Sales & Performance Tracking",
    desc: "Track performance data to improve conversions and revenue.",
  },
];

const TECHNOLOGIES = [
  {
    fa: "fa-solid fa-store",
    title: "Ecommerce Platforms",
    desc: "Manage and scale your store on Shopify, WooCommerce, and more.",
  },
  {
    fa: "fa-solid fa-chart-line",
    title: "Sales Analytics Tools",
    desc: "Track sales, orders, and performance with accurate data insights.",
  },
  {
    fa: "fa-solid fa-box",
    title: "Inventory Management Tools",
    desc: "Monitor stock, products, and orders for smooth operations.",
  },
  {
    fa: "fa-solid fa-screwdriver-wrench",
    title: "Store Optimization Tools",
    desc: "Improve speed, UX, and conversions for better sales performance.",
  },
];
const PROCESS_STEPS = [
  {
    num: "01",
    fa: "fa-solid fa-magnifying-glass",
    title: "Store Audit & Analysis",
    desc: "We analyze your store, products, and competitors to identify opportunities.",
  },
  {
    num: "02",
    fa: "fa-solid fa-clipboard-list",
    title: "Strategy & Planning",
    desc: "We define pricing, product strategy, and growth direction.",
  },
  {
    num: "03",
    fa: "fa-solid fa-box",
    title: "Product & Store Optimization",
    desc: "We optimize listings, store design, and user experience.",
  },
  {
    num: "04",
    fa: "fa-solid fa-chart-line",
    title: "Performance Optimization",
    desc: "We improve conversions and scale high-performing products.",
  },
  {
    num: "05",
    fa: "fa-solid fa-chart-pie",
    title: "Tracking & Growth",
    desc: "We monitor performance and continuously optimize for higher sales.",
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
            <h3 className="wds-types-heading">Types of Ecommerce We Manage</h3>
            <p className="wds-types-desc">
              Not every store needs the same strategy — and that’s where most
              sellers go wrong. We analyze your business first, then implement
              the right ecommerce approach for maximum sales and growth.
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
            <h3 className="wdt-heading">Ecommerce Tools & Platforms We Use</h3>
            <p className="wdt-desc">
              We don’t rely on guesswork. We use proven ecommerce tools and
              platforms optimized for performance, order management, and
              measurable sales growth — tailored to your business goals.
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
            <h3 className="wdp-heading"> Our Ecommerce Process</h3>
            <p className="wdp-desc">
              Successful ecommerce growth is never random. We follow a
              structured, data-driven approach to increase sales, optimize store
              performance, and ensure long-term business growth.
            </p>

            {/* CTA box */}
            <div className="wdp-cta">
              <div className="wdp-cta-icon">
                <i className="fa-solid fa-comments" />
              </div>
              <div className="wdp-cta-text">
                <h4>Have an ecommerce project in mind?</h4>
                <p>
                  Let’s build a high-performing store that drives sales and real
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
const EcomManagementSections = () => (
  <>
    <WebDevTypes />
    <WebDevTech />
    <WebDevProcess />
  </>
);

export default EcomManagementSections;
