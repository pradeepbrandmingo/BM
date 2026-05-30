import React, { useEffect, useRef, useState } from "react";
// import "./webdev-sections.css";

/* ── DATA ── */
const WEBSITE_TYPES = [
  {
    fa: "fa-solid fa-briefcase",
    num: "01",
    title: "Business Website",
    desc: "A professional website designed to showcase your services, build credibility, and help potential customers understand your offerings with clarity.",
  },
  {
    fa: "fa-solid fa-cart-shopping",
    num: "02",
    title: "E-commerce Website",
    desc: "Sell your products online with a powerful eCommerce platform featuring secure payments, smooth checkout, and seamless order management.",
  },
  {
    fa: "fa-solid fa-palette",
    num: "03",
    title: "Portfolio Website",
    desc: "Showcase your work, projects, and achievements through a visually engaging portfolio that builds trust and attracts new opportunities.",
  },
  {
    fa: "fa-solid fa-gear",
    num: "04",
    title: "Custom Web Applications",
    desc: "Tailor-made web solutions such as dashboards, booking systems, and CRM tools built to streamline operations and scale your business.",
  },
];

const TECHNOLOGIES = [
  {
    fa: "fa-brands fa-react",
    title: "React Development",
    desc: "Build lightning-fast, interactive, and scalable web applications with modern UI experiences powered by React.",
  },
  {
    fa: "fa-brands fa-shopify",
    title: "Shopify Development",
    desc: "Create high-converting eCommerce stores with seamless user experience, secure payment integration, and easy management.",
  },
  {
    fa: "fa-brands fa-wordpress",
    title: "WordPress Development",
    desc: "Develop flexible and SEO-friendly websites with powerful customization options tailored to your business needs.",
  },
  {
    fa: "fa-brands fa-php",
    title: "PHP Development",
    desc: "Robust backend development for custom web applications, ensuring performance, security, and scalability.",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    fa: "fa-solid fa-magnifying-glass-chart",
    title: "Understanding Your Business",
    desc: "We dive deep into your business goals, target audience, and market landscape to build a strong strategic foundation before development begins.",
  },
  {
    num: "02",
    fa: "fa-solid fa-file-lines",
    title: " Planning & Structure",
    desc: "We map out the complete website architecture, user flow, and content structure to ensure a smooth and intuitive user experience.",
  },
  {
    num: "03",
    fa: "fa-solid fa-pen-ruler",
    title: "UI/UX Design",
    desc: "We create visually engaging, user-focused designs that reflect your brand identity and are optimized for usability and conversions.",
  },
  {
    num: "04",
    fa: "fa-solid fa-code",
    title: "Development",
    desc: "Using modern technologies, we build fast, secure, and fully responsive websites tailored to your business requirements.",
  },
  {
    num: "05",
    fa: "fa-solid fa-rocket",
    title: "Testing & Launch",
    desc: "We rigorously test your website across devices and browsers to ensure flawless performance before a smooth and successful launch.",
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
            <div className="wds-section-label">What We Build</div>
            <h3 className="wds-types-heading">
              Website Solutions Tailored to Your Business Needs
            </h3>
            <p className="wds-types-desc">
              Every business has different goals and your website should reflect
              that. We don’t believe in one-size-fits-all solutions. Instead, we
              understand your requirements and build the right type of website
              that aligns with your growth strategy, audience, and industry.
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
              BUILT WITH MODERN TECHNOLOGIES
            </div>
            <h3 className="wdt-heading">
              Technologies That Power High-Performance Websites
            </h3>
            <p className="wdt-desc">
              We leverage modern, scalable, and performance-driven technologies
              to build websites that are fast, secure, and future-ready. Every
              technology we use is carefully selected based on your business
              requirements to ensure maximum efficiency, flexibility, and
              long-term growth.
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
const WebDevProcess = ({ openPopup }) => {
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
            <h3 className="wdp-heading">Our Proven Web Development Process</h3>
            <p className="wdp-desc">
              A successful website is built on strategy, not guesswork. Our
              step-by-step web development process ensures every project is
              delivered with clarity, precision, and performance in mind — from
              initial planning to final launch.
            </p>

            {/* CTA box */}
            <div className="wdp-cta">
              <div className="wdp-cta-icon">
                <i className="fa-solid fa-comments" />
              </div>
              <div className="wdp-cta-text">
                <h4>Have a project in mind?</h4>
                <p>
                  Let’s turn your ideas into a powerful digital experience that
                  delivers real results.
                </p>
                <button
                  className="wdp-cta-btn"
                  onClick={openPopup}
                  type="button"
                >
                  Let's Talk <i className="fa-solid fa-arrow-right" />
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
const WebDevSections = ({ openPopup }) => (
  <>
    <WebDevTypes />
    <WebDevTech />
    <WebDevProcess openPopup={openPopup} />
  </>
);

export default WebDevSections;
