import React, { useState } from "react";

const serviceImages = {
  custom:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1780319468/wordpress_website_developement_banner_Brandmingo2_csiqxh.png",
  theme:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1780319468/wordpress_website_developement_banner_Brandmingo2_csiqxh.png",
  woocommerce:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1780319468/wordpress_website_developement_banner_Brandmingo2_csiqxh.png",
  plugin:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1780319468/wordpress_website_developement_banner_Brandmingo2_csiqxh.png",
  optimization:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1780319468/wordpress_website_developement_banner_Brandmingo2_csiqxh.png",
  seo: "https://res.cloudinary.com/dqqgpii8v/image/upload/v1780319468/wordpress_website_developement_banner_Brandmingo2_csiqxh.png",
  migration:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1780319468/wordpress_website_developement_banner_Brandmingo2_csiqxh.png",
  support:
    "https://res.cloudinary.com/dqqgpii8v/image/upload/v1780319468/wordpress_website_developement_banner_Brandmingo2_csiqxh.png",
};

const servicesData = [
  {
    id: "custom",
    title: "Custom WordPress Development",
    desc: "We create fully customized WordPress websites built around your business goals, branding, and functionality requirements. Every website is designed for flexibility, speed, and long-term growth.",
  },
  {
    id: "theme",
    title: "Theme Customization",
    desc: "We customize WordPress themes to match your brand identity, improve design consistency, and deliver a better user experience across all devices.",
  },
  {
    id: "woocommerce",
    title: "WooCommerce Development",
    desc: "Build powerful WooCommerce stores with secure payment systems, smooth shopping experiences, and easy product management designed to increase online sales.",
  },
  {
    id: "plugin",
    title: "Plugin Development",
    desc: "We develop custom WordPress plugins that add advanced functionality and business-specific features without affecting website performance.",
  },
  {
    id: "optimization",
    title: "Website Optimization",
    desc: "Improve your website’s speed, performance, and user experience with advanced optimization techniques focused on faster loading and better engagement.",
  },
  {
    id: "seo",
    title: "SEO Setup",
    desc: "Our SEO setup helps your WordPress website achieve better search visibility with optimized structure, metadata, mobile responsiveness, and technical SEO practices.",
  },
  {
    id: "migration",
    title: "WordPress Migration",
    desc: "We safely migrate websites to WordPress while protecting your data, preserving SEO performance, and ensuring a smooth transition without downtime.",
  },
  {
    id: "support",
    title: "Maintenance & Support",
    desc: "Keep your website secure, updated, and running smoothly with ongoing WordPress maintenance, monitoring, and technical support services.",
  },
];

const WordpressModernDigital = () => {
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

export default WordpressModernDigital;
