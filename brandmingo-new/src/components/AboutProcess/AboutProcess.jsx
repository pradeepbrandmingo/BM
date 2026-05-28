import React, { useEffect, useRef, useState } from "react";
import "./AboutProcess.css";

const STEPS = [
  {
    number: "01",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
    title: "Discover",
    desc: "We understand your business, goals, and target audience to build a solid foundation.",
  },
  {
    number: "02",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    title: "Strategy",
    desc: "We craft a data-driven strategy tailored to your unique needs and market position.",
  },
  {
    number: "03",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Design & Develop",
    desc: "Our team brings ideas to life with stunning design and robust, scalable development.",
  },
  {
    number: "04",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 2L11 13" />
        <path d="M22 2L15 22l-4-9-9-4 20-7z" />
      </svg>
    ),
    title: "Launch",
    desc: "We ensure a smooth, tested launch and everything works perfectly from day one.",
  },
  {
    number: "05",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" />
        <polyline points="17,6 23,6 23,12" />
      </svg>
    ),
    title: "Grow",
    desc: "We optimize and scale your digital presence for continuous, measurable growth.",
  },
];

const AboutProcess = () => {
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
      className={`ap-section${visible ? " ap-section--visible" : ""}`}
      ref={sectionRef}
      aria-labelledby="ap-heading"
    >
      <div className="ap-container">
        {/* Header */}
        <header className="ap-header">
          <div className="ap-eyebrow">
            <span className="ap-eyebrow-dot" aria-hidden="true" />
            Our Process
          </div>
          <h2 className="ap-heading" id="ap-heading">
            From <em className="ap-accent">Idea</em> To{" "}
            <em className="ap-accent">Impact</em>
          </h2>
        </header>

        {/* Steps */}
        <div className="ap-steps" role="list">
          {/* Connector line — desktop only */}
          <div className="ap-connector" aria-hidden="true">
            <div className="ap-connector-line" />
          </div>

          {STEPS.map((step, i) => (
            <article
              className="ap-step"
              key={i}
              role="listitem"
              style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
            >
              {/* Number badge */}
              <div className="ap-step-badge" aria-hidden="true">
                {step.number}
              </div>

              {/* Card */}
              <div className="ap-card">
                <div className="ap-card-icon" aria-hidden="true">
                  {step.icon}
                </div>
                <h3 className="ap-card-title">{step.title}</h3>
                <p className="ap-card-desc">{step.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutProcess;
