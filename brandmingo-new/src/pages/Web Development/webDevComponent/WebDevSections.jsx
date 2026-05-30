import React, { useEffect, useRef, useState } from "react";
import { openEnquiryPopup } from "../../../utils/popup";
// import "./webdev-sections.css";

/* ── DATA ── */
const WEBSITE_TYPES = [
  {
    fa: "fa-solid fa-briefcase",
    num: "01",
    title: "Business Website",
    desc: "Professional business websites designed to build trust, showcase services, and generate quality leads online.",
  },
  {
    fa: "fa-solid fa-cart-shopping",
    num: "02",
    title: "eCommerce Website",
    desc: "Powerful online stores with secure payments, smooth checkout, and seamless shopping experiences.",
  },
  {
    fa: "fa-solid fa-palette",
    num: "03",
    title: "Portfolio Website",
    desc: "Creative portfolio websites that showcase your work professionally and help attract new opportunities.",
  },
  {
    fa: "fa-solid fa-gear",
    num: "04",
    title: "Custom Web Applications",
    desc: "Custom-built web platforms, dashboards, and systems designed to simplify operations and scale your business.",
  },
];

const TECHNOLOGIES = [
  {
    fa: "fa-brands fa-react",
    title: "React Development",
    desc: "Fast and interactive web applications built with modern React technology for smooth user experiences.",
  },
  {
    fa: "fa-brands fa-shopify",
    title: "Shopify Development",
    desc: "High-converting Shopify stores designed for seamless shopping and better online sales performance.",
  },
  {
    fa: "fa-brands fa-wordpress",
    title: "WordPress Development",
    desc: "Flexible and SEO-friendly WordPress websites built for easy management and business growth.",
  },
  {
    fa: "fa-brands fa-php",
    title: "PHP Development",
    desc: "Secure and scalable backend development for custom websites and web applications.",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    fa: "fa-solid fa-magnifying-glass-chart",
    title: "Understanding Your Business",
    desc: "We understand your goals, audience, and business needs before starting the development process.",
  },
  {
    num: "02",
    fa: "fa-solid fa-file-lines",
    title: "Planning & Structure",
    desc: "We create the website structure and user flow to ensure a smooth and intuitive experience.",
  },
  {
    num: "03",
    fa: "fa-solid fa-pen-ruler",
    title: "UI/UX Design",
    desc: "Modern and user-focused designs crafted to reflect your brand and improve engagement.",
  },
  {
    num: "04",
    fa: "fa-solid fa-code",
    title: "Development",
    desc: "We build fast, responsive, and scalable websites using modern development technologies.",
  },
  {
    num: "05",
    fa: "fa-solid fa-rocket",
    title: "Testing & Launch",
    desc: "Every website is tested carefully to ensure smooth performance before going live.",
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
              Every business is different, and your website should reflect that.
              We create tailored web solutions designed around your goals,
              audience, and growth strategy.
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
                <button
                  type="button"
                  className="wds-card-link"
                  onClick={openEnquiryPopup}
                >
                  Learn More <i className="fa-solid fa-arrow-right" />
                </button>
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
            <div className="wds-section-label">BUILT WITH MODERN TECH</div>
            <h3 className="wdt-heading">
              Tech That Power High-Performance Websites
            </h3>
            <p className="wdt-desc">
              We use modern and scalable technologies to build fast, secure, and
              future-ready websites tailored to your business goals and growth
              needs.
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
              Every successful website starts with a clear strategy. Our
              step-by-step development process helps us create websites that are
              fast, user-focused, and built for business growth.
            </p>

            {/* CTA box */}
            <div className="wdp-cta">
              <div className="wdp-cta-icon">
                <i className="fa-solid fa-comments" />
              </div>
              <div className="wdp-cta-text">
                <h4>Have a project in mind?</h4>
                <p>
                  Let’s build a powerful digital experience that helps your
                  business grow online.
                </p>
                <button
                  className="wdp-cta-btn"
                  onClick={openPopup}
                  type="button"
                >
                  Let’s Talk <i className="fa-solid fa-arrow-right" />
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
