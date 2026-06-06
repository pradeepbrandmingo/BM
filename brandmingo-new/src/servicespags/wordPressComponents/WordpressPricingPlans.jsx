import { useEffect, useRef } from "react";
import { openEnquiryPopup } from "../../utils/popup";

const plans = [
  {
    name: "Starter",
    desc: "Perfect for startups & local businesses",
    price: "₹18,000",
    features: [
      "Up to 5 Pages Website",
      "Mobile Responsive Design",
      " Basic SEO Setup",
      "Contact Form Integration",
      "WhatsApp Integration",
      "Speed Optimization",
      " 1 Month Support",
    ],
    popular: false,
    delay: "0.1s",
  },
  {
    name: "Growth",
    desc: "Best for growing businesses",
    price: "₹30,000",
    features: [
      "Up to 10 Pages Website",
      "Advanced SEO Optimization",
      "Custom UI/UX Design",
      "Lead Generation Forms",
      "Blog Setup",
      "Social Media Integration",
      "Performance Optimization",
      "3 Months Support",
    ],
    popular: true,
    delay: "0.2s",
  },
  {
    name: "Premium",
    desc: "Custom project pricing",
    price: "₹65,000",
    features: [
      "Custom Website Development",
      "eCommerce Functionality",
      "Advanced UI/UX Experience",
      "Full SEO + Analytics Setup",
      "CRM/API Integrations",
      "Priority Support",
      "High-Speed Optimization",
      "6 Months Support",
    ],
    popular: false,
    delay: "0.3s",
  },
];

const WordpressPricingPlans = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("pp-active");
        });
      },
      { threshold: 0.08 },
    );
    const items = sectionRef.current?.querySelectorAll(".pp-reveal");
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pp-section" ref={sectionRef}>
      <div className="auto-container">
        {/* Header */}
        <div className="pp-header pp-reveal">
          <div className="pp-tag">
            <span className="pp-dot" />
            Pricing Plans
          </div>
          {/* h2 tag — picks up style.css h2 vars automatically */}
          <h3 className="pp-title">Choose Your Plan</h3>
          <p className="pp-subtitle">
            Flexible website packages designed for startups, growing businesses,
            and premium brands.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="pp-grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pp-card pp-reveal${plan.popular ? " pp-popular" : ""}`}
              style={{ transitionDelay: plan.delay }}
            >
              {plan.popular && <div className="pp-badge">⭐ Most Popular</div>}

              {/* h3 tag — uses style.css h3 vars, overridden to h4 size via .pp-plan-name */}
              <h3 className="pp-plan-name">{plan.name}</h3>
              <p className="pp-plan-desc">{plan.desc}</p>

              <div className="pp-price-wrap">
                <span className="pp-price">{plan.price}</span>
                <span className="pp-price-note">One-time project pricing</span>
              </div>

              <ul className="pp-features">
                {plan.features.map((feat) => (
                  <li key={feat}>
                    <span className="pp-feat-icon">
                      <i className="fa-solid fa-check" />
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="pp-btn"
                onClick={(e) => {
                  e.preventDefault();
                  openEnquiryPopup();
                }}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WordpressPricingPlans;
