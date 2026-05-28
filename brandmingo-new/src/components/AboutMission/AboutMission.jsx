import React, { useEffect, useRef, useState } from "react";
import "./AboutMission.css";
import { Link } from "react-router-dom";

const FEATURES = [
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Trusted By Top Brands",
    desc: "We've earned the trust of industry leaders by delivering consistent quality and measurable results.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />
      </svg>
    ),
    title: "Result-Driven Approach",
    desc: "Everything we do is focused on delivering outcomes that matter to your business.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="2" />
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    title: "Creative & Innovative",
    desc: "We bring fresh ideas and creative solutions to help your brand stand out in a crowded market.",
  },
  {
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: "Reliable & Transparent",
    desc: "Clear communication, on-time delivery, and complete transparency at every step.",
  },
];

const AboutMission = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
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
    <section
      className={`am-section${visible ? " am-section--visible" : ""}`}
      ref={sectionRef}
      aria-labelledby="am-heading"
    >
      <div className="am-container">
        <div className="am-inner">
          {/* ══ LEFT ══ */}
          <div className="am-left">
            <div className="am-eyebrow">
              <span className="am-eyebrow-dot" aria-hidden="true" />
              Why Choose Us?
            </div>

            <h2 className="am-heading" id="am-heading">
              Your Success Is <em className="am-heading-accent">Our Mission</em>
            </h2>

            <p className="am-desc">
              We blend innovation with data-driven strategies to create
              impactful solutions that fuel business growth and long-term
              success.
            </p>

            <Link
              to="/services"
              className="am-btn"
              aria-label="Get in touch with Brandmingo"
            >
              Let's Work Together
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12,5 19,12 12,19" />
              </svg>
            </Link>
          </div>

          {/* ══ RIGHT — Feature cards ══ */}
          <div className="am-right" role="list">
            {FEATURES.map((f, i) => (
              <article
                className="am-card"
                key={i}
                role="listitem"
                style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
              >
                <div className="am-card-icon" aria-hidden="true">
                  {f.icon}
                </div>
                <div className="am-card-body">
                  <h3 className="am-card-title">{f.title}</h3>
                  <p className="am-card-desc">{f.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
