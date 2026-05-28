import React, { useState } from "react";
// import "./pricing-section.css";

const pricingFactors = [
  {
    icon: "fas fa-store",
    label: "Store Type & Complexity",
  },
  {
    icon: "fas fa-handshake",
    label: "Selected Engagement Model",
  },
  {
    icon: "fas fa-users",
    label: "Team Size & Expertise",
  },
  {
    icon: "fas fa-clock",
    label: "Timeline & Delivery Speed",
  },
  {
    icon: "fas fa-plug",
    label: "Plugins & Integrations",
  },
];

const estimateSteps = [
  {
    num: "01",
    title: "Requirement Discussion",
    desc: "We understand your store goals, products, and business requirements in detail.",
  },
  {
    num: "02",
    title: "Technical Assessment",
    desc: "Our team evaluates complexity, features, and the right approach for your store.",
  },
  {
    num: "03",
    title: "Effort & Timeline Planning",
    desc: "We define deliverables, milestones, and realistic timelines for execution.",
  },
  {
    num: "04",
    title: "Clear Cost Estimate",
    desc: "You receive a transparent pricing plan with no hidden costs or surprises.",
  },
];

const WoocommPricingSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="prc-section">
      <div className="auto-container">
        {/* ── Header ── */}
        <div className="prc-header">
          <div className="prc-eyebrow">Transparent Pricing</div>
          {/* h3 tag — sized via var(--h3-font-size) in CSS */}
          <h3 className="prc-title">WooCommerce Pricing & Cost Estimation</h3>
          <p className="prc-subtitle">
            Our WooCommerce development pricing is flexible, transparent, and
            tailored to your store needs — no hidden costs.
          </p>
        </div>

        {/* ════ BLOCK 1 — Pricing Depends On ════ */}
        <div className="prc-block">
          <div className="prc-block-label">Pricing Depends On</div>
          <div className="prc-factors">
            {pricingFactors.map((f, i) => (
              <div className="prc-factor-card" key={i}>
                <div className="prc-factor-icon">
                  <i className={f.icon} />
                </div>
                <span className="prc-factor-label">{f.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ════ BLOCK 2 — How We Estimate Cost ════ */}
        <div className="prc-block">
          <div className="prc-block-label">How We Estimate Cost</div>
          <div className="prc-steps-row">
            {estimateSteps.map((step, i) => (
              <div
                key={i}
                className={`prc-step${activeStep === i ? " active" : ""}`}
                onMouseEnter={() => setActiveStep(i)}
              >
                <div className="prc-step-num">{step.num}</div>
                <div className="prc-step-title">{step.title}</div>
                <p className="prc-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="prc-cta-wrap">
          <p className="prc-cta-note">
            Get a custom quote tailored to your project — no obligations.
          </p>
          <a href="#contact" className="prc-cta-btn">
            Get a Free Estimate
            <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default WoocommPricingSection;
