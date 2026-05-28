import React, { useState } from "react";
// import "./engagement-models.css";

const engagementData = [
  {
    id: "dedicated",
    icon: "fas fa-users",
    title: "Dedicated Team",
    desc: "A fully dedicated WordPress team working exclusively on your website, ensuring focus and consistent quality.",
    points: [
      "Seamless collaboration",
      "Scalable team size",
      "Ideal for long-term projects",
      "Full website ownership",
    ],
    tag: "Most Popular",
  },
  {
    id: "time",
    icon: "fas fa-clock",
    title: "Time & Material",
    desc: "Pay only for the work delivered with flexibility to adjust features and scope as your needs evolve.",
    points: [
      "Transparent billing",
      "Agile & adaptive workflow",
      "Flexible scope changes",
      "Quick feature updates",
    ],
    tag: null,
  },
  {
    id: "fixed",
    icon: "fas fa-shield-alt",
    title: "Fixed Price",
    desc: "Predictable cost and timelines for clearly defined WordPress projects with complete transparency.",
    points: [
      "Pre-defined scope",
      "No hidden costs",
      "On-time delivery",
      "Clear project roadmap",
    ],
    tag: null,
  },
  {
    id: "hybrid",
    icon: "fas fa-layer-group",
    title: "Hybrid Model",
    desc: "A balanced mix of structure and flexibility tailored to match your website requirements and growth goals.",
    points: [
      "Flexible + fixed approach",
      "Easy resource scaling",
      "Optimized cost control",
      "Best of both models",
    ],
    tag: null,
  },
];

const PHPEngagementModels = () => {
  const [activeCard, setActiveCard] = useState("dedicated");

  return (
    <section className="eng-section">
      <div className="auto-container">
        {/* ── Header ── */}
        <div className="eng-header">
          <div className="eng-eyebrow">How We Work</div>
          {/* h3 tag — uses style.css h3 vars via .eng-title override */}
          <h3 className="eng-title">
            Our Engagement Models
            <br />
            for Brandmingo Services
          </h3>
          <p className="eng-subtitle">
            Choose flexible engagement models designed to match your project
            requirements, timelines, and business goals.
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
            Not sure which model suits you? Let’s help you choose the right one.
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

export default PHPEngagementModels;
