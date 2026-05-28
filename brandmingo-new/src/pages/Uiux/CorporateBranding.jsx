import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import d1 from "../../assets/images/resource/service-d1.jpg";
import d2 from "../../assets/images/resource/service-d2.jpg";
import RelatedServices from "../../components/RelatedServices/RelatedServices";
import PortfolioSlider from "../../components/PortfolioSlider/PortfolioSlider";
import ReactExpertiseDetails from "../../components/ReactExpertiseDetails/ReactExpertiseDetails";
import ReactDetailsHero from "../../servicespags/ReactComponents/ReactDetailsHero";
import CorporateBrandingHero from "../../servicespags/CorporateBrandingComponent/CorporateBrandingHero";
import CorporateBrandingExpertiseDetails from "../../servicespags/CorporateBrandingComponent/CorporateBrandingExpertiseDetails";
import CorporateBrandingProcessSection from "../../servicespags/CorporateBrandingComponent/CorporateBrandingProcessSection";
import CorporateBrandingModernDigital from "../../servicespags/CorporateBrandingComponent/CorporateBrandingModernDigital";
import CorporateBrandingCtaBanner from "../../servicespags/CorporateBrandingComponent/CorporateBrandingCtaBanner";
import CorporateBrandingPricingPlans from "../../servicespags/CorporateBrandingComponent/CorporateBrandingPricingPlans";
import WhyChooseBMCorporateBranding from "../../servicespags/CorporateBrandingComponent/WhyChooseBMCorporateBranding";
import CorporateBrandingEngagementModels from "../../servicespags/CorporateBrandingComponent/CorporateBrandingEngagementModels";
import CorporateBrandingPricingSection from "../../servicespags/CorporateBrandingComponent/CorporateBrandingPricingSection";

const THEME = "#ff6b1e";

const CorporateBranding = () => {
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
      <CorporateBrandingHero />

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
                            Scale with Performance Marketing
                          </h3>
                          <p className="text mb-3">
                            Performance marketing is the process of running
                            data-driven campaigns that focus on measurable
                            results like leads, conversions, and revenue. Now
                            understand this clearly — if your ads are generating
                            clicks but not conversions
                          </p>

                          <p className="text mb-4">
                            We help you build high-converting campaigns that
                            target the right audience, reduce cost per lead, and
                            maximize return on investment.
                          </p>

                          {/* Stats Row */}
                          <div className="react-stats-row">
                            <div className="react-stat-item">
                              <span className="react-stat-num">5x</span>
                              <span className="react-stat-label">
                                ROI Growth
                              </span>
                            </div>
                            <div className="react-stat-divider" />
                            <div className="react-stat-item">
                              <span className="react-stat-num">90%</span>
                              <span className="react-stat-label">
                                Campaign Optimization
                              </span>
                            </div>
                            <div className="react-stat-divider" />
                            <div className="react-stat-item">
                              <span className="react-stat-num">300+</span>
                              <span className="react-stat-label">
                                Campaigns Managed
                              </span>
                            </div>
                          </div>

                          {/* Feature Tag */}
                          <div className="react-feature-tag">
                            <i className="fas fa-bullhorn spin-icon"></i>
                            <span>High Performance Guaranteed</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Side: Creative Image Box */}
                      <div className="col-lg-6 col-md-12">
                        <div className="react-build-image-wrapper">
                          <div className="image-glass-card">
                            <img
                              src="https://res.cloudinary.com/dpdn7kzll/image/upload/v1776862328/Untitled_design_1_fl799a.png"
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

                            <div className="floating-code-card">
                              <span className="code-dot red" />
                              <span className="code-dot yellow" />
                              <span className="code-dot green" />
                              <p className="code-line">
                                <span className="code-blue">const</span> App{" "}
                                <span className="code-white">= () =&gt;</span>{" "}
                                <span className="code-orange">&#123;</span>
                              </p>
                              <p
                                className="code-line"
                                style={{ paddingLeft: "12px" }}
                              >
                                <span className="code-blue">return</span>{" "}
                                <span className="code-orange">
                                  &lt;React /&gt;
                                </span>
                              </p>
                              <p className="code-line">
                                <span className="code-orange">&#125;</span>
                              </p>
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
      font-family: var(--heading-font-family);
      font-size: 26px;
      font-weight: 700;
      color: #ffffff;
      line-height: 1;
    }

    .react-stat-label {
      font-family: var(--body-font-family);
      font-size: 12px;
      color: rgba(255,255,255,0.75);
      letter-spacing: 0.3px;
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
      font-family: var(--heading-font-family);
      font-size: 13px;
      font-weight: 600;
      color: var(--theme-color1);
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
      color: #fff;
      padding: 6px 18px;
      border-radius: 50px;
      font-family: var(--heading-font-family);
      font-weight: 700;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 1px;
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
                    What is Performance Marketing?
                  </h3>
                  <p className="text mb-3">
                    Performance marketing is a digital marketing strategy where
                    you pay only for measurable results like clicks, leads, or
                    sales.
                  </p>
                  <p className="text mb-2">
                    Let’s simplify this — instead of spending money blindly on
                    ads, performance marketing focuses on tracking every action
                    and optimizing campaigns for better results. This helps your
                    business:
                  </p>
                  {/* <div className="row g-2 mb-3"> */}
                  <div className="row g-4 mb-4">
                    {[
                      { icon: "fas fa-arrow-trend-up", label: "Higher ROI" },
                      { icon: "fas fa-crosshairs", label: "Better Targeting" },
                      {
                        icon: "fas fa-user-plus",
                        label: "Generate Leads 24/7",
                      },
                      {
                        icon: "fas fa-chart-pie",
                        label: "Data-Driven Decisions",
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

    .benefit-label {
      font-family: var(--heading-font-family); /* Beatrice Trial */
      font-size: 16px; /* body-font-size */
      font-weight: 600;
      color: #151515; /* Using your --bg-color as text color for white bg */
      letter-spacing: -0.2px;
    }

    /* Footer Text Styling */
    .benefit-footer-text {
      font-family: var(--body-font-family);
      font-size: var(--body-font-size);
      line-height: var(--body-line-height);
      font-style: italic;
      opacity: 0.85;
      color: var(--text-color); /* Kept as white for dark outer section */
      border-top: 1px solid var(--border-color2-rgba);
      padding-top: 18px;
      margin-top: 8px;
    }
  `}</style>
                  </div>

                  <p className="benefit-footer-text mb-4">
                    So in simple terms — performance marketing helps you turn
                    your ad spend into predictable growth, not just traffic.
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
                              Scale Your Business with High-Performance
                              Marketing Campaigns
                            </h3>

                            <a href="/contact" className="discuss-cta">
                              Let's Discuss Your Project{" "}
                              <i className="fas fa-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* S4 */}
                  {/* --- WHAT YOU GET / DELIVERABLES SECTION --- */}
                  <div className="mt-0" style={{ paddingTop: "70px" }}>
                    <h3 className="mb-2">
                      What You Get with Performance Marketing Services
                    </h3>
                    <p className="text mb-4">
                      We don’t just run ads — we build result-driven marketing
                      systems that generate leads, sales, and measurable growth.
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
                              // Strategy = idea / planning
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
                                <path d="M9 18h6" />
                                <path d="M10 22h4" />
                                <path d="M12 2a7 7 0 0 0-4 12c1 1 2 2 2 4h4c0-2 1-3 2-4a7 7 0 0 0-4-12z" />
                              </svg>
                            ),
                            label: "Campaign Strategy & Planning",
                            desc: "Tailored marketing roadmap for your business",
                          },

                          {
                            icon: (
                              // Targeting = bullseye 🎯
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#fff"
                                strokeWidth="2.2"
                              >
                                <circle cx="12" cy="12" r="10" />
                                <circle cx="12" cy="12" r="6" />
                                <circle cx="12" cy="12" r="2" />
                              </svg>
                            ),
                            label: "Audience Targeting & Research",
                            desc: "Reach the right people at the right time",
                          },

                          {
                            icon: (
                              // Creative = pen/design
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#fff"
                                strokeWidth="2.2"
                              >
                                <path d="M12 20h9" />
                                <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                              </svg>
                            ),
                            label: "Ad Creatives & Copywriting",
                            desc: "High-converting ad designs and messaging",
                          },

                          {
                            icon: (
                              // Tracking = graph
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#fff"
                                strokeWidth="2.2"
                              >
                                <line x1="3" y1="17" x2="9" y2="11" />
                                <line x1="9" y1="11" x2="13" y2="15" />
                                <line x1="13" y1="15" x2="21" y2="7" />
                              </svg>
                            ),
                            label: "Conversion Tracking Setup",
                            desc: "Track every click, lead, and sale",
                          },

                          {
                            icon: (
                              // Retargeting = refresh/loop
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#fff"
                                strokeWidth="2.2"
                              >
                                <polyline points="23 4 23 10 17 10" />
                                <polyline points="1 20 1 14 7 14" />
                                <path d="M3.5 9a9 9 0 0 1 14-3L23 10" />
                                <path d="M20.5 15a9 9 0 0 1-14 3L1 14" />
                              </svg>
                            ),
                            label: "Retargeting Campaigns",
                            desc: "Convert visitors into paying customers",
                          },

                          {
                            icon: (
                              // Optimization = settings/gear
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#fff"
                                strokeWidth="2.2"
                              >
                                <circle cx="12" cy="12" r="3" />
                                <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0A1.7 1.7 0 0 0 10 3.2V3a2 2 0 1 1 4 0v.2a1.7 1.7 0 0 0 1 1.5h0a1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.2a1.7 1.7 0 0 0-1.5 1z" />
                              </svg>
                            ),
                            label: "Performance Optimization",
                            desc: "Continuous improvement for better ROI",
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
                    <CorporateBrandingExpertiseDetails />
                  </div>

                  {/* S6 */}
                  <div className="process-section-wrapper">
                    <CorporateBrandingProcessSection />
                  </div>

                  <div className="modern-cta-section">
                    <CorporateBrandingModernDigital />
                    <CorporateBrandingCtaBanner />
                  </div>

                  {/* PricingPlans */}
                  <div className="pricing-section">
                    <CorporateBrandingPricingPlans />
                  </div>

                  <div className="why-brandmingo-section">
                    <WhyChooseBMCorporateBranding />
                  </div>

                  <div className="engagement-section">
                    {/* <EngagementModels /> */}
                    <CorporateBrandingEngagementModels />
                  </div>

                  <div className="pricing-final-section">
                    <CorporateBrandingPricingSection />
                  </div>

                  {/* FAQ */}
                  <div className="faq-content mt-2">
                    <h3 className="mb-3">Frequently Asked Question</h3>
                    <ul className="accordion-box mt-40">
                      {[
                        {
                          q: "What is performance marketing?",
                          a: "Performance marketing is a digital marketing strategy where you pay only for measurable results like clicks, leads, or sales. It focuses on data, tracking, and ROI-driven campaigns.",
                        },
                        {
                          q: "How does performance marketing help my business?",
                          a: "It helps you generate qualified leads, increase sales, and track every rupee spent. You can measure results in real-time and optimize campaigns for better ROI.",
                        },
                        {
                          q: "Which platforms are used in performance marketing?",
                          a: "We use platforms like Google Ads, Facebook Ads (Meta), Instagram Ads, and other tools like Google Analytics and Tag Manager for tracking and optimization.",
                        },
                        {
                          q: "How much does performance marketing cost?",
                          a: "Cost depends on your business goals, ad budget, and campaign complexity. We offer flexible pricing models like monthly retainers and performance-based plans.",
                        },
                        {
                          q: "How long does it take to see results?",
                          a: "You can start seeing initial results within a few days of campaign launch, but consistent and scalable results usually take a few weeks of optimization.",
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

export default CorporateBranding;
