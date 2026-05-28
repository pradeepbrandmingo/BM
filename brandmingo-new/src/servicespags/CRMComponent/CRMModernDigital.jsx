import React, { useState } from "react";

const serviceImages = {
  custom:
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=520&q=80&auto=format&fit=crop",
  theme:
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=520&q=80&auto=format&fit=crop",
  woocommerce:
    "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=520&q=80&auto=format&fit=crop",
  plugin:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=520&q=80&auto=format&fit=crop",
  optimization:
    "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=520&q=80&auto=format&fit=crop",
  seo: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=520&q=80&auto=format&fit=crop",
  migration:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=520&q=80&auto=format&fit=crop",
  support:
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=520&q=80&auto=format&fit=crop",
};

const servicesData = [
  {
    id: "custom",
    title: "Custom WordPress Development",
    desc: "We build fast, scalable, and fully customized WordPress websites tailored to your business needs and brand identity.",
  },
  {
    id: "theme",
    title: "Theme Customization",
    desc: "Customize WordPress themes to match your design, improve usability, and deliver a seamless user experience.",
  },
  {
    id: "woocommerce",
    title: "WooCommerce Development",
    desc: "Create powerful online stores with secure payments, smooth checkout, and optimized shopping experience.",
  },
  {
    id: "plugin",
    title: "Plugin Development",
    desc: "Develop and integrate custom plugins to extend your website’s functionality and automate processes.",
  },
  {
    id: "optimization",
    title: "Website Optimization",
    desc: "Improve website speed, performance, and Core Web Vitals for better user experience and engagement.",
  },
  {
    id: "seo",
    title: "SEO Setup",
    desc: "Optimize your WordPress website structure to improve rankings, visibility, and organic traffic.",
  },
  {
    id: "migration",
    title: "WordPress Migration",
    desc: "Migrate your website safely to WordPress without data loss, downtime, or performance issues.",
  },
  {
    id: "support",
    title: "Maintenance & Support",
    desc: "Keep your website secure, updated, and running smoothly with ongoing support and improvements.",
  },
];

const CRMModernDigital = () => {
  const [activeTab, setActiveTab] = useState(servicesData[0]);
  const [animKey, setAnimKey] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(servicesData[0].id);

  const handleTabClick = (service) => {
    setActiveTab(service);
    setAnimKey((k) => k + 1);
  };

  const toggleAccordion = (id) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <div className="ret-section">
      <div className="auto-container">
        {/* Heading — h3 tag, style.css vars apply automatically */}
        <h3 className="ret-heading text-center mb-5">
          WordPress Development Services{" "}
        </h3>

        {/* ── DESKTOP ── */}
        <div className="ret-grid ret-desktop-only">
          {/* Left: tab buttons */}
          <div className="ret-tabs">
            {servicesData.map((service) => (
              <button
                key={service.id}
                className={`ret-tab-btn ${activeTab.id === service.id ? "active" : ""}`}
                onClick={() => handleTabClick(service)}
              >
                <span className="ret-tab-label">{service.title}</span>
                <span className="ret-arrow">
                  <i className="fas fa-arrow-right" />
                </span>
              </button>
            ))}
          </div>

          {/* Right: content panel */}
          <div className="ret-content" key={animKey}>
            <h4 className="ret-content-title">{activeTab.title}</h4>
            <div className="ret-content-body">
              <p className="ret-content-desc">{activeTab.desc}</p>
              <div className="ret-image-wrap">
                <div className="ret-image-badge">
                  <i className="fas fa-code" />
                </div>
                <div className="ret-image-inner">
                  <img
                    src={serviceImages[activeTab.id]}
                    alt={activeTab.title}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── MOBILE accordion ── */}
        <div className="ret-mobile-only">
          {servicesData.map((service) => {
            const isOpen = openAccordion === service.id;
            return (
              <div
                key={service.id}
                className={`ret-mob-item ${isOpen ? "open" : ""}`}
              >
                <button
                  className="ret-mob-header"
                  onClick={() => toggleAccordion(service.id)}
                >
                  <span className="ret-mob-title">{service.title}</span>
                  <span className="ret-mob-icon">
                    <i className={`fas fa-chevron-${isOpen ? "up" : "down"}`} />
                  </span>
                </button>

                {isOpen && (
                  <div className="ret-mob-body">
                    <p className="ret-mob-desc">{service.desc}</p>
                    <div className="ret-mob-img-wrap">
                      <img
                        src={serviceImages[service.id]}
                        alt={service.title}
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CRMModernDigital;
