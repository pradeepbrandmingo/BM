import React, { useEffect, useRef, useState } from "react";
import "./AboutTeam.css";

const TEAM_AVATARS = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/45.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/22.jpg",
];

const TEAM_IMAGE =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80";

const AboutTeam = ({ openPopup }) => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Lottie CDN
    if (!document.querySelector("script[data-lottie-wc]")) {
      const script = document.createElement("script");
      script.src =
        "https://unpkg.com/@lottiefiles/dotlottie-wc@0.9.10/dist/dotlottie-wc.js";
      script.type = "module";
      script.setAttribute("data-lottie-wc", "true");
      document.head.appendChild(script);
    }

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`at-wrapper${visible ? " at-wrapper--visible" : ""}`}
      ref={sectionRef}
    >
      {/* ══════════════════════════════════════
          SECTION 1 — Team
      ══════════════════════════════════════ */}
      <section className="at-section" aria-labelledby="at-heading">
        <div className="at-container">
          <div className="at-inner">
            {/* LEFT — Content */}
            <div className="at-left">
              <div className="at-eyebrow">
                <span className="at-eyebrow-dot" aria-hidden="true" />
                People Behind Brandmingo
              </div>

              <h2 className="at-heading" id="at-heading">
                A Team That Cares
                <br />
                About <em className="at-accent">Your Growth</em>
              </h2>

              <p className="at-desc">
                We're a team of strategists, designers, developers, and
                marketers passionate about what we do and invested in your
                success.
              </p>

              {/* Avatars row */}
              <div className="at-avatars" aria-label="Some of our team members">
                {TEAM_AVATARS.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Team member ${i + 1}`}
                    className="at-avatar"
                    style={{ zIndex: TEAM_AVATARS.length - i }}
                    width="40"
                    height="40"
                    loading="lazy"
                    decoding="async"
                  />
                ))}
                <div className="at-avatar-more" aria-label="50 plus experts">
                  <span>50+</span>
                </div>
                <div className="at-avatar-label">
                  <strong>50+</strong>
                  <span>Experts &amp; Growing</span>
                </div>
              </div>
            </div>

            {/* RIGHT — Image */}
            <div className="at-right" aria-hidden="true">
              {/* Decorative rings */}
              <div className="at-ring at-ring--1" />
              <div className="at-ring at-ring--2" />

              {/* Image card */}
              <div className="at-img-card">
                <img
                  src={TEAM_IMAGE}
                  alt="Brandmingo team collaborating"
                  className="at-img"
                  width="600"
                  height="400"
                  loading="lazy"
                  decoding="async"
                />
                {/* Culture badge */}
                <div className="at-culture-badge">
                  <div className="at-culture-icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </div>
                  <div>
                    <strong className="at-culture-title">Our Culture</strong>
                    <span className="at-culture-sub">
                      Where ideas grow
                      <br />
                      and people thrive.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2 — CTA Banner
      ══════════════════════════════════════ */}
      <section className="at-cta" aria-labelledby="at-cta-heading">
        <div className="at-container">
          <div className="at-cta-inner">
            {/* Left — Lottie */}
            <div className="at-cta-lottie" aria-hidden="true">
              <dotlottie-wc
                src="https://lottie.host/8715ee53-4ff2-40bd-9d18-11438f5c8688/tzcArkUoyL.lottie"
                autoplay
                loop
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            {/* Center — Text */}
            <div className="at-cta-text">
              <h3 className="at-cta-title" id="at-cta-heading">
                Ready to start your next big project with us?
              </h3>
              <p className="at-cta-sub">
                Let's create something amazing together.
              </p>
            </div>

            {/* Right — Button */}
            <button className="at-cta-btn" onClick={openPopup}>
              Let's Talk
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12,5 19,12 12,19" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutTeam;
