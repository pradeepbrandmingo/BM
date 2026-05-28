import React, { useState } from "react";
// import "./engagement-models.css";

const engagementData = [
  {
    id: "dedicated",
    icon: "fas fa-bullseye",
    title: "Dedicated Marketing Team",
    desc: "A fully committed performance marketing team working exclusively on your campaigns to drive consistent growth and ROI.",
    points: [
      "Continuous campaign performance optimization",
      "Dedicated account manager for support",
      "Scalable campaign growth and management",
      "Focused strategy for long-term results",
    ],
    tag: "Most Popular",
  },
  {
    id: "time",
    icon: "fas fa-chart-line",
    title: "Time & Performance Based",
    desc: "Pay based on actual campaign performance with complete flexibility to scale and optimize as your business grows.",
    points: [
      "Pay based on measurable campaign results",
      "Flexible scaling as performance improves",
      "Agile execution with quick adjustments",
      "Decisions driven by real-time data insights",
    ],
    tag: null,
  },
  {
    id: "fixed",
    icon: "fas fa-coins",
    title: "Fixed Monthly Retainer",
    desc: "A predictable monthly model for managing and optimizing your performance marketing campaigns with consistent results.",
    points: [
      "Fixed monthly pricing with no surprises",
      "Consistent campaign tracking and monitoring",
      "Detailed reports with actionable insights",
      "Ongoing optimization for better performance",
    ],
    tag: null,
  },
  {
    id: "hybrid",
    icon: "fas fa-layer-group",
    title: "Hybrid Growth Model",
    desc: "A balanced approach combining fixed management with performance-based incentives for maximum ROI and scalability.",
    points: [
      "Combination of fixed and performance pricing",
      "Flexible strategy based on campaign needs",
      "Scalable model for consistent business growth",
      "Focused approach for maximum ROI outcomes",
    ],
    tag: null,
  },
];

const FlipkartEngagementModels = () => {
  const [activeCard, setActiveCard] = useState("dedicated");

  return (
    <section className="eng-section">
      <div className="auto-container">
        {/* ── Header ── */}
        <div className="eng-header">
          <div className="eng-eyebrow">How We Work</div>
          {/* h3 tag — uses style.css h3 vars via .eng-title override */}
          <h3 className="eng-title">
            Our Performance Marketing
            <br />
            Engagement Models
          </h3>
          <p className="eng-subtitle">
            We offer flexible marketing engagement models designed to align with
            your business goals, budget, and growth strategy.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="eng-grid">
          {engagementData.map((card) => (
            <div
              key={card.id}
              className={`eng-card${activeCard === card.id ? " active" : ""}`}
              onMouseEnter={() => setActiveCard(card.id)}
            >
              {card.tag && <span className="eng-badge">{card.tag}</span>}

              <div className="eng-icon">
                <i className={card.icon} />
              </div>

              {/* h3 tag for card title — semantic heading, sized via CSS */}
              <h3 className="eng-card-title">{card.title}</h3>
              <p className="eng-card-desc">{card.desc}</p>

              <div className="eng-divider" />

              <ul className="eng-points">
                {card.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="eng-cta-wrap">
          <p className="eng-cta-note">
            Not sure which model suits you? Let's talk and find the perfect fit.
          </p>
          <a href="#contact" className="eng-cta-btn">
            Request a Free Quote
            <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FlipkartEngagementModels;
