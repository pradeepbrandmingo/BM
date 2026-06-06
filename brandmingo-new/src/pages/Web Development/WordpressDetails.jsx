import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import { useLocation } from "react-router-dom";
import d1 from "../../assets/images/resource/service-d1.jpg";
import d2 from "../../assets/images/resource/service-d2.jpg";
import RelatedServices from "../../components/RelatedServices/RelatedServices";
import PortfolioSlider from "../../components/PortfolioSlider/PortfolioSlider";
import WordpressDetailsHero from "../../servicespags/wordPressComponents/WordpressDetailsHero";
import WordpressExpertiseDetails from "../../servicespags/wordPressComponents/WordpressExpertiseDetails";
import WordpressProcessSection from "../../servicespags/wordPressComponents/WordpressProcessSection";
import WordpressModernDigital from "../../servicespags/wordPressComponents/WordpressModernDigital";
import WordpressCtaBanner from "../../servicespags/wordPressComponents/WordpressCtaBanner";
import WordpressPricingPlans from "../../servicespags/wordPressComponents/WordpressPricingPlans";
import WordpressWhyChooseBm from "../../servicespags/wordPressComponents/WordpressWhyChooseBm";
import WordpressEngagementModels from "../../servicespags/wordPressComponents/WordpressEngagementModels";
import WordpressPricingSection from "../../servicespags/wordPressComponents/WordpressPricingSection";
// popup from
import { openEnquiryPopup } from "../../utils/popup";

const THEME = "#ff6b1e";

const WordpressDetails = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const swiper = new Swiper(".project-image-slider", {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: true,
      autoHeight: false,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
      },
    });

    return () => {
      if (swiper && swiper.destroy) {
        swiper.destroy(true, true);
      }
    };
  }, []);

  return (
    <div className="page-wrapper">
      <style>{`
  .wd-outer {
    display: flex;
    align-items: flex-start;   /* ZARURI hai */
  }

  .wd-sidebar-col {
    width: 320px;
    flex-shrink: 0;
    position: sticky;
    top: 100px;
    align-self: flex-start;   /* ZARURI hai */
  }

  .wd-content-col {
    flex: 1;
    min-width: 0;
    padding-left: 30px;
  }

  @media (max-width: 991px) {
    .wd-outer { flex-direction: column; }
    .wd-sidebar-col { width: 100%; position: static; margin-bottom: 40px; }
    .wd-content-col { padding-left: 0; }
  }
`}</style>

      {/* HERO */}
      <WordpressDetailsHero />

      {/* MAIN */}
      <section
        className="services-details pt-120 pb-120"
        style={{ marginTop: "40px", marginBottom: "120px" }}
      >
        <div className="service-details-page">
          <div className="container">
            <div className="wd-outer">
              <div className="wd-content-col">
                <div className="services-details__content">
                  {/* S1 */}
                  <div className="react-build-section mt-5">
                    <div className="row align-items-center">
                      {/* Left Side: Content */}
                      <div className="col-lg-6 col-md-12">
                        <div className="react-build-content">
                          <h3 className="mt-0 mb-3 theme-h3">
                            Build with WordPress
                          </h3>
                          <p className="text mb-3">
                            WordPress gives businesses the freedom to create
                            websites that are powerful, flexible, and easy to
                            scale. Whether you need a business website, service
                            platform, or content-driven site, WordPress offers
                            the perfect balance of performance, customization,
                            and control.
                          </p>

                          <p className="text mb-4">
                            We develop modern WordPress websites that are
                            visually engaging, optimized for search engines, and
                            simple to manage. From design to functionality,
                            every element is built to help your business create
                            a stronger online presence and convert more visitors
                            into customers.
                          </p>

                          {/* Stats Row */}
                          <div className="react-stats-row">
                            <div className="react-stat-item">
                              <span className="react-stat-num">10x</span>
                              <span className="react-stat-label">
                                Performance
                              </span>
                            </div>
                            <div className="react-stat-divider" />
                            <div className="react-stat-item">
                              <span className="react-stat-num">98%</span>
                              <span className="react-stat-label">
                                Client Satisfaction
                              </span>
                            </div>
                            <div className="react-stat-divider" />
                            <div className="react-stat-item">
                              <span className="react-stat-num">500+</span>
                              <span className="react-stat-label">
                                Projects Delivered
                              </span>
                            </div>
                          </div>

                          {/* Feature Tag */}
                          <div className="react-feature-tag">
                            <i className="fas fa-bolt spin-icon"></i>
                            <span>SEO & Growth Focused</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Side: Creative Image Box */}
                      <div className="col-lg-6 col-md-12">
                        <div className="react-build-image-wrapper">
                          <div className="image-glass-card">
                            <img
                              src="https://res.cloudinary.com/dqqgpii8v/image/upload/v1780338730/wordpress_website_developement_banner_Brandmingo_qtrv5c.png"
                              alt="React Development"
                              className="main-react-img"
                            />
                            <div className="floating-badge top-right">
                              <i
                                className="fas fa-bolt"
                                style={{ marginRight: "5px" }}
                              />
                              Fast
                            </div>
                            <div className="floating-badge bottom-left">
                              <i
                                className="fas fa-expand-arrows-alt"
                                style={{ marginRight: "5px" }}
                              />
                              Scalable
                            </div>
                          </div>

                          <div className="corner-accent top-left-accent" />
                          <div className="corner-accent bottom-right-accent" />
                          <div className="bg-glow-circle" />
                        </div>
                      </div>
                    </div>

                    <style>{`
    .react-build-section {
      position: relative;
      padding: 40px 0;
    }

    .react-build-content {
      padding-right: 30px;
    }

    /* ── Stats Row ── */
    .react-stats-row {
      display: flex;
      align-items: center;
      gap: 0;
      margin-bottom: 28px;
      background: linear-gradient(
        125deg,
        #e85c0d 0%,
        #ff6b1e 40%,
        #ff9a5c 75%,
        #ff6b1e 100%
      );
      border-radius: 16px;
      overflow: hidden;
    }

    .react-stat-item {
      display: flex;
      flex-direction: column;
      gap: 4px;
      flex: 1;
      text-align: center;
      padding: 20px 24px;
    }

    .react-stat-num {

       font-size: var(--h4-font-size);
       font-size: var(--h4-font-size);
       color: var(--heading-text-color);
       line-height: var(--heading-line-height);
    }

    .react-stat-label {

      font-size: 12px;
      color: var(--body-text-color);
      letter-spacing: var(--body-letter-spacing);
      line-height: var(--body-line-height-default);
    }

    .react-stat-divider {
      width: 1px;
      height: 36px;
      background: rgba(255,255,255,0.25);
      flex-shrink: 0;
    }

    /* ── Feature Tag ── */
    .react-feature-tag {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: rgba(var(--theme-color1-rgb), 0.1);
      border: 1px solid rgba(var(--theme-color1-rgb), 0.2);
      padding: 8px 16px;
      border-radius: 50px;

      font-size: 13px;
      font-weight: var(--body-font-weight-semibold);
       color: var(--theme-color1);
      letter-spacing: var(--body-letter-spacing);
      line-height: var(--body-line-height-default);
    }

    .spin-icon {
      animation: fa-spin 5s linear infinite;
    }

    /* ── Image Wrapper ── */
    .react-build-image-wrapper {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 30px;
    }

    .corner-accent {
      position: absolute;
      width: 60px;
      height: 60px;
      z-index: 0;
    }

    .top-left-accent {
      top: 10px;
      left: 10px;
      border-top: 2px solid var(--theme-color1);
      border-left: 2px solid var(--theme-color1);
      border-radius: 4px 0 0 0;
      opacity: 0.5;
    }

    .bottom-right-accent {
      bottom: 10px;
      right: 10px;
      border-bottom: 2px solid var(--theme-color1);
      border-right: 2px solid var(--theme-color1);
      border-radius: 0 0 4px 0;
      opacity: 0.5;
    }

    /* ── Glass Card ── */
    .image-glass-card {
      position: relative;
      z-index: 2;
      border-radius: 24px;
      padding: 15px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255,255,255,0.08);
      backdrop-filter: blur(10px);
      transition: transform 0.5s ease;
    }

    .main-react-img {
      width: 100%;
      height: auto;
      border-radius: 18px;
      display: block;
      box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    }

    .image-glass-card:hover {
      transform: translateY(-10px) rotate(1deg);
    }

    /* ── Floating Badges ── */
    .floating-badge {
      position: absolute;
      background: var(--theme-color1);
      color: var(--heading-text-color);
      padding: 6px 18px;
      border-radius: 50px;

      font-weight: var(--h4-font-weight);
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: var(--body-letter-spacing);
      line-height: var(--heading-line-height);
      box-shadow: 0 10px 20px rgba(var(--theme-color1-rgb), 0.3);
      z-index: 3;
      display: flex;
      align-items: center;
    }

    .top-right { top: -10px; right: -10px; }
    .bottom-left { bottom: 20px; left: -20px; }

    /* ── Floating Code Card ── */
    .floating-code-card {
      position: absolute;
      bottom: -18px;
      right: -18px;
      background: #1a1a2e;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 12px;
      padding: 12px 16px;
      z-index: 4;
      min-width: 160px;
      box-shadow: 0 12px 32px rgba(0,0,0,0.4);
    }

    .floating-code-card p {
      margin: 0;
      font-family: monospace;
      font-size: 11px;
      line-height: 1.7;
    }

    .code-dot {
      display: inline-block;
      width: 8px; height: 8px;
      border-radius: 50%;
      margin-right: 4px;
      margin-bottom: 8px;
    }
    .red    { background: #ff5f57; }
    .yellow { background: #febc2e; }
    .green  { background: #28c840; }

    .code-blue   { color: #79b8ff; }
    .code-orange { color: var(--theme-color1, #ff6b1e); }
    .code-white  { color: rgba(255,255,255,0.8); }
    .code-line   { margin: 0 !important; }

    /* ── Back Glow ── */
    .bg-glow-circle {
      position: absolute;
      width: 300px;
      height: 300px;
      background: var(--theme-color1);
      filter: blur(100px);
      opacity: 0.12;
      z-index: 1;
    }

    @media (max-width: 991px) {
      .react-build-content { padding-right: 0; text-align: center; margin-bottom: 50px; }
      .react-build-image-wrapper { max-width: 500px; margin: 0 auto; }
      .react-feature-tag { justify-content: center; }
      .react-stats-row { justify-content: center; }
      .floating-code-card { display: none; }
    }
  `}</style>
                  </div>

                  {/* S2 */}
                  <h3 style={{ marginTop: "60px" }} className="mb-2 ">
                    What is WordPress Development?
                  </h3>
                  <p className="text mb-3">
                    WordPress development is the process of creating modern,
                    flexible, and easy-to-manage websites using one of the
                    world’s most trusted content management systems. It helps
                    businesses build professional websites without depending on
                    complex technical management for every update.
                  </p>
                  <p className="text mb-2">
                    With WordPress, your website becomes easier to scale,
                    simpler to manage, and better optimized for performance,
                    user experience, and search engine visibility.
                  </p>
                  {/* <div className="row g-2 mb-3"> */}
                  <div className="row g-4 mb-4">
                    {[
                      { icon: "fas fa-bolt", label: "Fast Loading" },
                      {
                        icon: "fas fa-mobile-screen",
                        label: "Fully Responsive",
                      },
                      { icon: "fas fa-pen-to-square", label: "Easy to Manage" },
                      {
                        icon: "fas fa-magnifying-glass",
                        label: "SEO Friendly",
                      },
                    ].map((item, i) => (
                      <div className="col-12 col-sm-6" key={i}>
                        <div className="benefit-card">
                          <div className="benefit-icon-wrap">
                            <i className={item.icon}></i>
                          </div>
                          <span className="benefit-label">{item.label}</span>
                        </div>
                      </div>
                    ))}

                    <style>{`
                    .benefit-card {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    padding: 16px 20px;
                background: var(--theme-color-white); /* #ffffff */
      border-radius: 14px;
      /* Border matches your style.css border settings but for light bg */
      border: 1.5px solid rgba(0, 0, 0, 0.05);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
      transition: all 0.3s ease;
      cursor: default;
    }

    .benefit-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
      border-color: var(--theme-color1); /* #ff6b1e */
    }

    .benefit-icon-wrap {
      width: 46px;
      height: 46px;
      min-width: 46px;
      border-radius: 12px;
      /* Using your theme color and gradient-1 logic */
      background: linear-gradient(135deg, var(--theme-color1), #ff8d4d);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 10px rgba(255, 107, 30, 0.2);
      transition: all 0.3s ease;
    }

    .benefit-card:hover .benefit-icon-wrap {
      transform: rotate(-10deg) scale(1.1);
    }

    .benefit-icon-wrap i {
      font-size: 18px;
      color: #ffffff; /* Always white on orange bg */
    }

    // .benefit-label {

    //    font-size: var(--body-font-size);
    //    font-size: var(--body-font-size);
    //    color: var(--heading-text-light);
    //    letter-spacing: var(--body-letter-spacing);
    //    line-height: var(--body-line-height-default);
    // }

    .benefit-label {
  font-size: var(--body-font-size);
  font-family: var(--body-font-family);
  font-weight: 600;
  color: var(--heading-light);
  line-height: var(--line-height-default);
  letter-spacing: var(--letter-spacing-default);
}

    /* Footer Text Styling */
    .benefit-footer-text {

      font-size: var(--body-font-size);
      line-height: var(--body-line-height);
      font-style: italic;
      opacity: 1;
      color: var(--body-text-color);
      line-height: var(--body-line-height-large);
      letter-spacing: var(--body-letter-spacing);
      border-top: 1px solid var(--border-color2-rgba);
      padding-top: 18px;
      margin-top: 8px;
    }
                        `}</style>
                  </div>

                  <p className="benefit-footer-text mb-4">
                    In simple words, WordPress helps businesses build websites
                    that are flexible, user-friendly, and built for long-term
                    online growth.
                  </p>

                  {/* SLIDER */}
                  <div
                    className="swiper project-image-slider pb-0"
                    style={{ width: "100%" }}
                  >
                    <div className="swiper-wrapper">
                      {[
                        {
                          img: d1,
                          cap: "",
                        },
                        {
                          img: d2,
                          cap: "",
                        },
                      ].map((s, i) => (
                        <div className="swiper-slide" key={i}>
                          <div
                            style={{
                              width: "100%",
                              height: "220px",
                              overflow: "hidden",
                              borderRadius: "6px",
                            }}
                          >
                            <img
                              src={s.img}
                              alt=""
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                              }}
                            />
                          </div>
                          <p className="text mt-2">{s.cap}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* S3 — CTA image Section */}
                  <section className="discuss-wrap mt-4">
                    <div className="auto-container">
                      <div className="row">
                        <div className="col-lg-9 col-12">
                          <div className="discuss-content">
                            {/* h3 = style.css se auto apply hoga — koi custom override nahi */}
                            <h3>
                              Build Your High-Performance WordPress Website with
                              a Leading WordPress Development Company.
                            </h3>

                            <button
                              type="button"
                              className="discuss-cta"
                              onClick={openEnquiryPopup}
                            >
                              Let’s Build Your Website
                              <i className="fas fa-arrow-right"></i>
                            </button>
                            {/* <a href="/contact" className="discuss-cta">
                              Let’s Build Your Website{" "}
                              <i className="fas fa-arrow-right"></i>
                            </a> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* S4 */}
                  {/* --- WHAT YOU GET / DELIVERABLES SECTION --- */}
                  <div className="mt-0" style={{ paddingTop: "70px" }}>
                    <h3 className="mb-2">
                      What You Get with Our WordPress Development Services
                    </h3>
                    <p className="text mb-4">
                      We build WordPress websites that are fast, scalable,
                      SEO-friendly, and designed to help your business grow
                      online.
                    </p>

                    <div className="deliverables-outer-card">
                      <div className="deliverables-accent-glow deliverables-accent-glow--top"></div>
                      <div className="deliverables-accent-glow deliverables-accent-glow--bottom"></div>

                      <div className="deliverables-subtitle-row">
                        <span className="deliverables-subtitle-bar"></span>
                        <p className="deliverables-subtitle">
                          Our Deliverables
                        </p>
                      </div>

                      <div className="deliverables-grid">
                        {[
                          {
                            icon: (
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#fff"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M12 20h9" />
                                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                              </svg>
                            ),
                            label: "Custom WordPress Design",
                            desc: "Designed to match your brand identity",
                          },
                          {
                            icon: (
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#fff"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <rect
                                  x="5"
                                  y="2"
                                  width="14"
                                  height="20"
                                  rx="2"
                                />
                                <line x1="12" y1="18" x2="12.01" y2="18" />
                              </svg>
                            ),
                            label: "Mobile Responsive Website",
                            desc: "Optimized for all screen sizes",
                          },
                          {
                            icon: (
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#fff"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15,3 21,3 21,9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                              </svg>
                            ),
                            label: "SEO-Friendly Development",
                            desc: "Built for better Google visibility",
                          },
                          {
                            icon: (
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#fff"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />
                              </svg>
                            ),
                            label: "Plugins & Integrations",
                            desc: "Extended website functionality",
                          },
                          {
                            icon: (
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#fff"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                              </svg>
                            ),
                            label: "Speed Optimization",
                            desc: "Fast-loading website performance",
                          },
                          {
                            icon: (
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#fff"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                                <polyline points="16,11 18,13 22,9" />
                              </svg>
                            ),
                            label: "Easy Website Management",
                            desc: "Simple and user-friendly backend",
                          },
                        ].map((item, i) => (
                          <div className="deliverable-white-card" key={i}>
                            <div className="deliverable-icon-box">
                              {item.icon}
                            </div>
                            <div className="deliverable-text-group">
                              <span className="deliverable-label">
                                {item.label}
                              </span>
                              <span className="deliverable-desc">
                                {item.desc}
                              </span>
                            </div>
                            <div className="deliverable-arrow">
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="var(--theme-color1)"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12,5 19,12 12,19" />
                              </svg>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="react-expertise-section">
                    <WordpressExpertiseDetails />
                  </div>

                  {/* S6 */}
                  <div className="process-section-wrapper">
                    <WordpressProcessSection />
                  </div>

                  <div className="modern-cta-section">
                    <WordpressModernDigital />
                    <WordpressCtaBanner />
                  </div>

                  {/* PricingPlans */}
                  <div className="pricing-section">
                    <WordpressPricingPlans />
                  </div>

                  <div className="why-brandmingo-section">
                    <WordpressWhyChooseBm />
                  </div>

                  <div className="engagement-section">
                    <WordpressEngagementModels />
                  </div>

                  <div className="pricing-final-section">
                    <WordpressPricingSection />
                  </div>

                  {/* FAQ */}
                  <div className="faq-content mt-2">
                    <h3 className="mb-3">Frequently Asked Question</h3>
                    <ul className="accordion-box mt-40">
                      {[
                        {
                          q: "Frequently Asked Question",
                          a: "WordPress is used to build websites like business sites, blogs, portfolios, and e-commerce stores with easy management.",
                        },
                        {
                          q: "Is WordPress better than custom development?",
                          a: "WordPress is ideal for fast, cost-effective websites, while custom development is better for advanced features and scalability.",
                        },
                        {
                          q: "Is WordPress SEO-friendly?",
                          a: "Yes, WordPress is highly SEO-friendly with proper structure, plugins, and optimization techniques to rank on Google.",
                        },
                        {
                          q: "How much does a WordPress website cost?",
                          a: "The cost depends on features, design, and complexity. We provide flexible pricing based on your business needs.",
                        },
                      ].map((item, index) => (
                        <li
                          key={index}
                          className={`accordion block ${activeIndex === index ? "active-block" : ""}`}
                        >
                          <div
                            className="acc-btn"
                            onClick={() =>
                              setActiveIndex(
                                activeIndex === index ? null : index,
                              )
                            }
                          >
                            {item.q}
                            <div
                              className={`icon fa ${activeIndex === index ? "fa-minus" : "fa-plus"}`}
                            ></div>
                          </div>
                          <div
                            className={`acc-content ${activeIndex === index ? "current" : ""}`}
                          >
                            <div className="text">{item.a}</div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="related-portfolio-section">
          <RelatedServices />
        </div>

        <div className="portfolio-slider-section">
          <PortfolioSlider />
        </div>
      </section>
    </div>
  );
};

export default WordpressDetails;
