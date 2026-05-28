import React, { useEffect, useRef, useState } from "react";
import "./AboutHero.css";

/* ── Right Decorative Panel ── */
const HeroDeco = ({ visible }) => (
  <div
    className={`ah-deco${visible ? " ah-deco--visible" : ""}`}
    aria-hidden="true"
  >
    {/* Rotating rings */}
    <div className="ah-ring ah-ring--1" />
    <div className="ah-ring ah-ring--2" />

    {/* Center ambient glow */}
    <div className="ah-img-glow" />

    {/* Lottie Animation */}
    <dotlottie-wc
      src="https://lottie.host/07a71137-46ea-4e83-9f58-1193078138f3/TroGomAsTM.lottie"
      autoplay
      loop
      style={{ width: "100%", height: "100%", position: "relative", zIndex: 2 }}
    />

    {/* Floating chips */}
    <div className="ah-chip ah-chip--1">
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
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
      Trusted Agency
    </div>
    <div className="ah-chip ah-chip--2">
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
      Result Driven
    </div>
    <div className="ah-chip ah-chip--3">
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
      10+ Yrs Experience
    </div>

    {/* Stats badge */}
    <div className="ah-stats-badge">
      <strong className="ah-stats-number">10+</strong>
      <span className="ah-stats-label">
        Years of
        <br />
        Excellence
      </span>
    </div>
  </div>
);

/* ── Main Component ── */
const AboutHero = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Lottie CDN script dynamically load
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
      className={`ah-section${visible ? " ah-section--visible" : ""}`}
      ref={sectionRef}
      aria-labelledby="ah-heading"
    >
      {/* Background */}
      <div className="ah-bg" aria-hidden="true">
        <div className="ah-bg-orb ah-bg-orb--1" />
        <div className="ah-bg-orb ah-bg-orb--2" />
      </div>

      <div className="ah-container">
        <div className="ah-inner">
          {/* ══ LEFT — Content ══ */}
          <div className="ah-content">
            {/* Eyebrow */}
            <div className="ah-eyebrow">
              <span className="ah-eyebrow-dot" />
              About Us
            </div>

            {/* Heading */}
            <h1 className="ah-heading" id="ah-heading">
              <span className="ah-heading-line1">We're More Than</span>
              <span className="ah-heading-line2">
                A <em className="ah-heading-accent">Digital Agency.</em>
              </span>
            </h1>

            {/* Mobile-only deco — heading ke baad, desc se pehle */}
            <div className="ah-mobile-deco">
              <HeroDeco visible={visible} />
            </div>

            {/* Description */}
            <p className="ah-desc">
              We are your growth partners, committed to building digital
              experiences that drive real results. Strategy, creativity, and
              technology — working together to elevate your brand.
            </p>

            {/* CTA */}
            <div className="ah-cta-row">
              <a href="/contact-us" className="ah-btn-primary">
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
                Our Story
              </a>
            </div>
          </div>

          {/* ══ RIGHT — Decorative ══ */}
          <HeroDeco visible={visible} />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="ah-bottom-fade" aria-hidden="true" />
    </section>
  );
};

export default AboutHero;
