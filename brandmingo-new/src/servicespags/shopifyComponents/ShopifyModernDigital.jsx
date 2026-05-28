import React, { useState } from "react";

const serviceImages = {
  enterprise:
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=520&q=80&auto=format&fit=crop",
  legacy:
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=520&q=80&auto=format&fit=crop",
  pwa: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=520&q=80&auto=format&fit=crop",
  api: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=520&q=80&auto=format&fit=crop",
  ecommerce:
    "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=520&q=80&auto=format&fit=crop",
  spa: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=520&q=80&auto=format&fit=crop",
  migration:
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=520&q=80&auto=format&fit=crop",
  payment:
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=520&q=80&auto=format&fit=crop",
};

const servicesData = [
  {
    id: "enterprise",
    title: "Custom ReactJS Development",
    desc: "As a leading ReactJS web development company, we build stable and easy-to-maintain enterprise apps. Our solutions develop secure, organized front ends and create modular components for a consistent user experience.",
  },
  {
    id: "legacy",
    title: "Legacy Application Modernization",
    desc: "Transform outdated applications into modern, high-performance systems using ReactJS. We migrate old codebases to modern React architecture, significantly improving performance and user experience while reducing maintenance costs.",
  },
  {
    id: "pwa",
    title: "React PWA Development",
    desc: "Build Progressive Web Apps that offer a native app-like experience directly in the web browser. We ensure offline functionality, fast loading times, and enable push notifications to increase user engagement.",
  },
  {
    id: "api",
    title: "Third-Party APIs Integration",
    desc: "Enhance React applications by seamlessly connecting them with powerful third-party services. We integrate payment gateways, social media, CRM, ERP, and marketing automation tools ensuring secure data exchange.",
  },
  {
    id: "ecommerce",
    title: "Ecommerce Development Solutions",
    desc: "Create dynamic and engaging online stores that drive sales. We build fast-loading product catalogs, intuitive shopping carts, and integrate secure payment solutions, optimizing everything for mobile devices.",
  },
  {
    id: "spa",
    title: "React SPA Development",
    desc: "Delivering focused, efficient ReactJS web development services for single-page applications. We create dynamic screens without full page reloads, improving speed, usability, and supporting real-time interactions.",
  },
  {
    id: "migration",
    title: "ReactJS Migration",
    desc: "Smoothly transition your existing web applications to ReactJS with minimal disruption. We analyze existing application structure, develop detailed migration plans, and execute with data integrity.",
  },
  {
    id: "payment",
    title: "Payment Gateway Integration",
    desc: "Integrate robust and secure payment processing solutions directly into your React applications. We support multiple payment methods, ensure PCI compliance, and provide a seamless checkout experience.",
  },
];

const ShopifyModernDigital = () => {
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
          ReactJS Development Services for Modern Digital Apps
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

export default ShopifyModernDigital;
