import React, { useState } from "react";

const servicesData = [
  {
    id: "custom",
    title: "Custom WordPress Development",
    desc: "We create fully custom WordPress websites designed specifically around your business goals, branding, and functionality requirements. Every website is built for flexibility, speed, and long-term scalability.",
    points: [
      "Custom website design tailored to your brand",
      "Clean and scalable website architecture",
      " Fast-loading and optimized performance",
      "Flexible solutions built for future growth",
    ],
  },
  {
    id: "theme",
    title: "Theme Customization",
    desc: "Already have a WordPress theme? We customize and optimize it to match your brand identity, improve usability, and deliver a more professional user experience.",
    points: [
      "Personalized design customization",
      "Improved layout and user experience",
      " Responsive design adjustments",
      "Performance and speed optimization",
    ],
  },
  {
    id: "woocommerce",
    title: "WooCommerce Development",
    desc: "We build powerful WooCommerce stores that help businesses sell products online with smooth shopping experiences, secure payments, and easy store management.",
    points: [
      "Custom online store development",
      "Secure payment gateway integration",
      "Product and inventory management",
      "Conversion-focused eCommerce design",
    ],
  },
  {
    id: "plugin",
    title: "Plugin Development",
    desc: "Need advanced functionality for your website? We develop custom WordPress plugins that add the exact features your business needs without unnecessary complexity.",
    points: [
      " Custom feature development",
      " Lightweight and scalable plugins",
      "Secure and optimized coding",
      "Seamless WordPress integration",
    ],
  },
  {
    id: "optimization",
    title: "Website Optimization",
    desc: "A slow website can hurt rankings and conversions. We optimize WordPress websites for speed, performance, and user experience to help improve engagement and search visibility.",
    points: [
      "Faster website loading speed",
      " Image and code optimization",
      "Improved Core Web Vitals",
      "Better user experience and SEO performance",
    ],
  },
  {
    id: "seo",
    title: "SEO Setup",
    desc: "We implement SEO best practices directly into your WordPress website structure to help improve rankings, visibility, and organic traffic growth.",
    points: [
      "SEO-friendly website structure",
      "Meta tags and schema setup",
      " Speed and mobile optimization",
      "Technical SEO implementation",
    ],
  },
  {
    id: "migration",
    title: "WordPress Migration",
    desc: "We safely migrate your website to WordPress without data loss, downtime, or performance issues while ensuring a smooth transition.",
    points: [
      "Secure website migration",
      "Zero data loss process",
      "URL and SEO preservation",
      "Smooth platform transition",
    ],
  },
  {
    id: "support",
    title: "Maintenance & Support",
    desc: "Our support team helps keep your WordPress website secure, updated, and running smoothly so you can focus on growing your business.",
    points: [
      "Regular updates and monitoring",
      "Security and backup management",
      "Bug fixing and technical support",
      "Ongoing performance maintenance",
    ],
  },
];

const WordpressExpertiseDetails = () => {
  const [activeTab, setActiveTab] = useState(servicesData[0]);
  const [openAccordion, setOpenAccordion] = useState(servicesData[0].id);

  const toggleAccordion = (id) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <div className="react-expertise-section">
        <div className="auto-container">
          <h3 className="mb-5 text-center section-main-h3">
            Our WordPress Development Expertise
          </h3>

          {/* ── DESKTOP: same as before ── */}
          <div className="react-expertise-grid re-desktop-only">
            <div className="react-expertise-tabs">
              {servicesData.map((service) => (
                <button
                  key={service.id}
                  className={`react-expertise-tab-btn ${activeTab.id === service.id ? "active" : ""}`}
                  onClick={() => setActiveTab(service)}
                >
                  <h3 className="tab-btn-title">{service.title}</h3>
                  <span className="arrow-icon">
                    <i className="fas fa-arrow-right"></i>
                  </span>
                </button>
              ))}
            </div>

            <div className="react-expertise-content" key={activeTab.id}>
              <h3 className="react-expertise-content-title">
                {activeTab.title}
              </h3>
              <p className="react-expertise-content-desc">{activeTab.desc}</p>
              <ul className="react-expertise-content-list">
                {activeTab.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── MOBILE: accordion ── */}
          <div className="re-accordion re-mobile-only">
            {servicesData.map((service) => {
              const isOpen = openAccordion === service.id;
              return (
                <div
                  key={service.id}
                  className={`re-accordion-item ${isOpen ? "open" : ""}`}
                >
                  <button
                    className="re-accordion-header"
                    onClick={() => toggleAccordion(service.id)}
                  >
                    <span className="re-acc-title">{service.title}</span>
                    <span className="re-acc-icon">
                      <i
                        className={`fas fa-chevron-${isOpen ? "up" : "down"}`}
                      ></i>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="re-accordion-body">
                      <p className="re-acc-desc">{service.desc}</p>
                      <ul className="re-acc-list">
                        {service.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <style>{`
          /* ─────────────────────────────────────────
             REACT EXPERTISE — Desktop unchanged
             Mobile: accordion replaces grid
          ───────────────────────────────────────── */

          .react-expertise-section {
            background-color: var(--body-bg);
            padding: 100px 0;
          }

          /* visibility helpers */
          .re-desktop-only { display: grid; }
          .re-mobile-only  { display: none; }

          /* ── DESKTOP GRID (unchanged) ── */
          .react-expertise-grid {
            grid-template-columns: 1fr 1.2fr;
            gap: 30px;
            align-items: stretch;
          }

          .react-expertise-tabs {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
          }

           .react-expertise-tab-btn {
            background-color: var(--bg-color);
            border: 1px solid var(--border-color2-rgba);
            border-radius: 12px;
            padding: 18px 20px;
             min-height: 72px;
           color: var(--body-text-color);
           line-height: var(--body-line-height-default);
            text-align: left;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
          }


          .tab-btn-title {
          font-family: var(--heading-font-family) !important;
          font-size: 16px !important;
          font-weight: var(--body-font-weight-medium) !important;
           line-height: 1.45;
          letter-spacing: var(--body-letter-spacing);

          color: var(--heading-text-color);

          margin: 0;
          flex: 1;
          padding-right: 14px;

          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: geometricPrecision;
          }

          .react-expertise-tab-btn:hover {
            background-color: #1a1a1a;
            border-color: rgba(var(--theme-color1-rgb), 0.3);
            color: #fff;
          }

          .react-expertise-tab-btn.active {
            background-color: var(--bg-color);
            border: 1px solid var(--theme-color1);
            color: #fff;
            box-shadow: 0 8px 25px rgba(var(--theme-color1-rgb), 0.15);
          }

          .react-expertise-tab-btn.active .tab-btn-title {
            font-weight: 700 !important;
          }

          .react-expertise-tab-btn .arrow-icon {
            font-size: 14px;
            color: var(--theme-color1);
            opacity: 0.3;
            transition: 0.3s ease;
          }

          .react-expertise-tab-btn.active .arrow-icon {
            opacity: 1;
            transform: rotate(-45deg);
          }

          .react-expertise-content {
            background-color: var(--bg-color);
            border-radius: 20px;
            padding: 50px;
            border: 1px solid var(--border-color2-rgba);
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
          }

          .react-expertise-content-title {

            font-size: var(--h3-font-size);
            margin-bottom: 20px;
            font-weight: var(--h3-font-weight);
            line-height: 1.02;
            letter-spacing: var(--heading-letter-spacing);
            color: var(--heading-text-color);
            border-left: 4px solid var(--theme-color1);
            padding-left: 20px;
          }

          .react-expertise-content-desc {
            color: var(--body-text-color);
            opacity: 1;
            font-size: var(--body-font-size);
            line-height: var(--body-line-height-large);
            font-weight: var(--body-font-weight-regular);
            letter-spacing: var(--body-letter-spacing);
            margin-bottom: 30px;

          }

          .react-expertise-content-list {
            list-style: none;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .react-expertise-content-list li {
            font-size: 15px;
            color: var(--body-text-color);
            opacity: 1;
            display: flex;
            align-items: start;
            gap: 12px;

            line-height: var(--body-line-height-default);
            font-weight: var(--body-font-weight-regular);
            letter-spacing: var(--body-letter-spacing);
          }

          .react-expertise-content-list li::before {
            content: '✓';
            color: var(--theme-color1);
            font-weight: bold;
          }

          /* tablet: stack columns */
          @media (max-width: 1200px) {
            .react-expertise-grid { grid-template-columns: 1fr; }
          }

          /* ── MOBILE: swap to accordion ── */
          @media (max-width: 768px) {
            .react-expertise-section { padding: 60px 0; }

            .re-desktop-only { display: none !important; }
            .re-mobile-only  { display: flex; flex-direction: column; gap: 10px; }

            /* accordion item */
            .re-accordion-item {
              border: 1px solid var(--border-color2-rgba);
              border-radius: 12px;
              overflow: hidden;
              transition: border-color 0.3s ease;
            }
            .re-accordion-item.open {
              border-color: var(--theme-color1);
            }

            /* header */
            .re-accordion-header {
              width: 100%;
              background-color: var(--bg-color);
              border: none;
              padding: 18px 20px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              gap: 12px;
              cursor: pointer;
              text-align: left;
            }
            .re-accordion-item.open .re-accordion-header {
              border-bottom: 1px solid var(--border-color2-rgba);
            }

            .re-acc-title {

              font-size: 15px;
               color: var(--heading-text-color);
              font-weight: var(--body-font-weight-semibold);
              line-height: var(--body-line-height-default);
              letter-spacing: var(--body-letter-spacing);
              line-height: 1.4;
            }

            .re-acc-icon {
              font-size: 13px;
              color: var(--theme-color1);
              flex-shrink: 0;
            }

            /* body */
            .re-accordion-body {
              background-color: var(--bg-color);
              padding: 20px 20px 24px;
            }

            .re-acc-desc {

              font-size: 14px;
              color: var(--body-text-color);
              opacity: 1;
              line-height: var(--body-line-height-large);
              letter-spacing: var(--body-letter-spacing);
              margin-bottom: 16px;
            }

            .re-acc-list {
              list-style: none;
              padding: 0;
              margin: 0;
              display: flex;
              flex-direction: column;
              gap: 12px;
            }

            .re-acc-list li {

              font-size: 14px;
              color: var(--body-text-color);
              line-height: var(--body-line-height-default);
              letter-spacing: var(--body-letter-spacing);
              display: flex;
              align-items: flex-start;
              gap: 10px;
              line-height: 1.5;
            }

            .re-acc-list li::before {
              content: "✓";
              color: var(--theme-color1);
              font-weight: bold;
              flex-shrink: 0;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default WordpressExpertiseDetails;
