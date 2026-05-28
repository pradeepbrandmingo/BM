import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

/* ── Inline SVG icons ── */
const IconPhone = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="20"
    height="20"
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
  </svg>
);
const IconEnvelope = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="20"
    height="20"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const IconTwitter = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
  </svg>
);
const IconFacebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);
const IconLinkedin = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M20.447 20.452h-3.554V14.83c0-1.342-.027-3.067-1.868-3.067-1.868 0-2.154 1.459-2.154 2.966v5.723H9.317V9h3.414v1.561h.049c.476-.9 1.637-1.848 3.37-1.848 3.602 0 4.269 2.372 4.269 5.456v6.283zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM6.89 20.452H3.782V9H6.89v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.272V1.723C24 .771 23.2 0 22.222 0h.003z" />
  </svg>
);
const IconInstagram = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="15"
    height="15"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const IconChevronDown = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="12"
    height="12"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
const IconChevronUp = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="12"
    height="12"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

/* ── Mega menu service data ── */
const MEGA_SERVICES = [
  {
    category: "Web Development",
    to: "/web-development-new",
    icon: "fa-solid fa-code",
    desc: "We build fast, secure and responsive websites that not only look great but also deliver exceptional performance and user experience.",
    items: [
      {
        label: "Wordpress Website",
        to: "/wordpress",
        icon: "fa-brands fa-wordpress",
        desc: "Custom WordPress websites that are easy to manage and built for growth.",
      },
      {
        label: "Woocommerce Website",
        to: "/woocommerce",
        icon: "fa-solid fa-cart-shopping",
        desc: "Powerful eCommerce stores with WooCommerce for seamless online selling.",
      },
      {
        label: "Shopify Website",
        to: "/shopify",
        icon: "fa-brands fa-shopify",
        desc: "High-converting Shopify stores that drive sales and customer loyalty.",
      },
      {
        label: "React Development",
        to: "/react",
        icon: "fa-brands fa-react",
        desc: "Scalable and dynamic web applications using the latest React technologies.",
      },
      {
        label: "PHP Development",
        to: "/php",
        icon: "fa-brands fa-php",
        desc: "Scalable and dynamic web applications using the latest React technologies.",
      },
      {
        label: "CRM Development",
        to: "/crm-development",
        icon: "fa-solid fa-database",
        desc: "Scalable and dynamic web applications using the latest React technologies.",
      },
    ],
  },
  {
    category: "Ads And Campaigns",
    to: "/ads-and-campaigns",
    icon: "fa-solid fa-bullhorn",
    desc: "Data-driven advertising campaigns that maximize ROI and put your brand in front of the right audience at the right time.",
    items: [
      {
        label: "Performance Marketing",
        to: "/performance-marketing",
        icon: "fa-solid fa-chart-line",
        desc: "Results-driven marketing strategies focused on measurable outcomes.",
      },
      {
        label: "Google Ads",
        to: "/google-ads",
        icon: "fa-brands fa-google",
        desc: "Targeted Google Ads campaigns that bring high-intent customers.",
      },
      {
        label: "Facebook / Instagram Ads",
        to: "/facebook-instagram-ads",
        icon: "fa-brands fa-meta",
        desc: "Social ads that capture attention and convert at scale.",
      },
      {
        label: "Linkedin Ads",
        to: "/linkedin-ads",
        icon: "fa-brands fa-linkedin",
        desc: "B2B focused LinkedIn campaigns to reach decision makers.",
      },
    ],
  },
  {
    category: "Social Media Management",
    to: "/social-media-management",
    icon: "fa-solid fa-share-nodes",
    desc: "Complete social media management to build your brand presence, grow your audience, and drive real engagement.",
    items: [
      {
        label: "Brand Awareness",
        to: "/brand-awareness",
        icon: "fa-solid fa-star",
        desc: "Build a recognizable brand that stands out in the market.",
      },
      {
        label: "Strategy & Planning",
        to: "/strategy-planning",
        icon: "fa-solid fa-heart",
        desc: "Foster meaningful connections with your target audience.",
      },
      {
        label: "Content Creation & Publishing",
        to: "/content-creation-publishing",
        icon: "fa-solid fa-pen-to-square",
        desc: "Consistent, creative content that keeps your feed active.",
      },
      {
        label: "Engagement & Growth",
        to: "/engagement-growth",
        icon: "fa-solid fa-rocket",
        desc: "Amplify your best content to reach a wider audience fast.",
      },
    ],
  },
  {
    category: "UI/UX And Audits",
    to: "/ui-ux-audits",
    icon: "fa-solid fa-pen-ruler",
    desc: "User-centered design that creates intuitive, beautiful interfaces and comprehensive UX audits to improve your product.",
    items: [
      {
        label: "Custom Web Design",
        to: "/custom-web-design",
        icon: "fa-solid fa-palette",
        desc: "Unique, on-brand web designs crafted for your business goals.",
      },
      {
        label: "Corporate Branding",
        to: "/corporate-branding",
        icon: "fa-solid fa-building",
        desc: "Cohesive brand identity that communicates professionalism.",
      },
      {
        label: "Mobile App Design",
        to: "/mobile-app-design",
        icon: "fa-solid fa-mobile-screen",
        desc: "Intuitive mobile app interfaces with seamless user flows.",
      },
      {
        label: "Product Design",
        to: "/product-design",
        icon: "fa-solid fa-cube",
        desc: "End-to-end product design from concept to final delivery.",
      },
    ],
  },
  {
    category: "SEO Optimizing",
    to: "/seo-optimizing",
    icon: "fa-solid fa-magnifying-glass-chart",
    desc: "Proven SEO strategies that improve your search rankings, drive organic traffic, and grow your business sustainably.",
    items: [
      {
        label: "Organic Traffic",
        to: "/organic-traffic",
        icon: "fa-solid fa-seedling",
        desc: "Sustainable traffic growth through white-hat SEO techniques.",
      },
      {
        label: "Local Search Dominance",
        to: "/local-search-dominance",
        icon: "fa-solid fa-location-dot",
        desc: "Dominate local search results and capture nearby customers.",
      },
    ],
  },
  {
    category: "Ecommerce Management",
    to: "/ecommerce-management",
    icon: "fa-solid fa-bag-shopping",
    desc: "Full-service ecommerce management across major platforms to maximize your online sales and streamline operations.",
    items: [
      {
        label: "Amazon Management",
        to: "/amazon-management-services",
        icon: "fa-brands fa-amazon",
        desc: "Optimize your Amazon store for maximum visibility and sales.",
      },
      {
        label: "Flipkart Management",
        to: "/flipkart-management-services",
        icon: "fa-solid fa-store",
        desc: "Complete Flipkart store setup, listing, and management.",
      },
      {
        label: "Shopsy Management",
        to: "/shopsy-management-services",
        icon: "fa-solid fa-cart-shopping",
        desc: "Grow your Shopsy presence with expert account management.",
      },
      {
        label: "Snapdeal Management",
        to: "/snapdeal-management-services",
        icon: "fa-solid fa-tags",
        desc: "Boost Snapdeal sales with optimized listings and ads.",
      },
    ],
  },
  {
    category: "Graphic Designing",
    to: "/graphic-designing",
    icon: "fa-solid fa-award",
    desc: "Craft a powerful, memorable brand identity that resonates with your audience and sets you apart from the competition.",
    items: [
      {
        label: "Logo Design",
        to: "/logo-design",
        icon: "fa-solid fa-pen-nib",
        desc: "Distinctive logos that capture your brand's essence.",
      },
      {
        label: "Package & Label Designing",
        to: "/label-designing",
        icon: "fa-solid fa-print",
        desc: "Eye-catching promotional materials that drive engagement.",
      },
      {
        label: "Corporate Identity Designing",
        to: "/corporate-identity-designing",
        icon: "fa-solid fa-id-card",
        desc: "Unified corporate identity across all touchpoints.",
      },
      {
        label: "Brand Identity Design",
        to: "/brand-identity-design",
        icon: "fa-solid fa-display",
        desc: "Professional presentations that win clients and close deals.",
      },
    ],
  },
];

export default function Navbar({ openPopup }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const location = useLocation();

  const toggleMobileMenu = () => {
    const next = !mobileMenuOpen;
    setMobileMenuOpen(next);
    document.body.dataset.navOpen = next ? "true" : "false";
    if (next) document.body.classList.add("mobile-menu-visible");
    else {
      document.body.classList.remove("mobile-menu-visible");
      setOpenDropdowns({});
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.dataset.navOpen = "false";
    document.body.classList.remove("mobile-menu-visible");
    setOpenDropdowns({});
  };

  const handleMegaClose = () => setIsMegaOpen(false);

  const toggleDropdown = (key) =>
    setOpenDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));

  const isActive = (path) => (location.pathname === path ? "current" : "");

  useEffect(() => {
    closeMobileMenu();
    setIsMegaOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`main-header header-style-one header-1${isSticky ? " scrolled" : ""}`}
      >
        <div className="container">
          <div className="header-lower">
            <div className="main-box">
              {/* Logo */}
              <div className="logo">
                <Link to="/" onClick={closeMobileMenu}>
                  <img
                    src="https://res.cloudinary.com/dpdn7kzll/image/upload/v1774440484/Group-19-2-1024x199_pnnsp8.png"
                    alt="Logo"
                  />
                </Link>
              </div>

              {/* Nav */}
              <div className="nav-outer">
                <nav className="nav main-menu">
                  <ul className="navigation">
                    <li className={`dropdown ${isActive("/")}`}>
                      <Link to="/">Home</Link>
                    </li>

                    <li className={isActive("/about")}>
                      <Link to="/about" onClick={closeMobileMenu}>
                        About
                      </Link>
                    </li>

                    {/* ══ MEGA MENU ══ */}
                    <li
                      className={`dropdown has-mega ${isMegaOpen ? "active" : ""}`}
                      onMouseEnter={() => setIsMegaOpen(true)}
                      onMouseLeave={() => {
                        setIsMegaOpen(false);
                        setActiveCategory(0);
                      }}
                    >
                      <Link to="/services" onClick={handleMegaClose}>
                        Services
                      </Link>

                      <div className={`mega-menu${isMegaOpen ? " show" : ""}`}>
                        <div className="mega-inner">
                          {/* LEFT sidebar */}
                          <div className="mega-sidebar">
                            <p className="mega-sidebar-label">Our Services</p>
                            {MEGA_SERVICES.map((s, i) => (
                              <Link
                                key={i}
                                to={s.to}
                                className={`mega-cat-item${activeCategory === i ? " mega-cat-active" : ""}`}
                                onMouseEnter={() => setActiveCategory(i)}
                                onClick={handleMegaClose}
                              >
                                <span className="mega-cat-icon">
                                  <i className={s.icon} />
                                </span>
                                <span className="mega-cat-label">
                                  {s.category}
                                </span>
                                <svg
                                  className="mega-cat-arrow"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  width="14"
                                  height="14"
                                >
                                  <polyline points="9 18 15 12 9 6" />
                                </svg>
                              </Link>
                            ))}
                          </div>

                          {/* RIGHT panel */}
                          <div className="mega-panel">
                            <div className="mega-panel-header">
                              <div className="mega-panel-hrow">
                                <div className="mega-panel-hicon">
                                  <i
                                    className={
                                      MEGA_SERVICES[activeCategory].icon
                                    }
                                  />
                                </div>
                                <Link
                                  to={MEGA_SERVICES[activeCategory].to}
                                  className="mega-panel-title"
                                  onClick={handleMegaClose}
                                >
                                  {MEGA_SERVICES[activeCategory].category}
                                </Link>
                              </div>
                              <p className="mega-panel-desc">
                                {MEGA_SERVICES[activeCategory].desc}
                              </p>
                              <div className="mega-panel-divider" />
                            </div>

                            <div
                              className={`mega-panel-cards${MEGA_SERVICES[activeCategory].items.length <= 2 ? " mega-panel-cards--few" : ""}`}
                            >
                              {MEGA_SERVICES[activeCategory].items.map(
                                (item, j) => (
                                  <Link
                                    key={j}
                                    to={item.to}
                                    onClick={handleMegaClose}
                                    className="mega-sub-card"
                                  >
                                    <div className="mega-sub-icon">
                                      <i className={item.icon} />
                                    </div>
                                    <div className="mega-sub-body">
                                      <span className="mega-sub-title">
                                        {item.label}
                                      </span>
                                      <span className="mega-sub-desc">
                                        {item.desc}
                                      </span>
                                    </div>
                                    <svg
                                      className="mega-sub-arrow"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      width="14"
                                      height="14"
                                    >
                                      <polyline points="9 18 15 12 9 6" />
                                    </svg>
                                  </Link>
                                ),
                              )}
                            </div>

                            <div className="mega-panel-cta">
                              <Link
                                to="/contact"
                                onClick={handleMegaClose}
                                className="mega-cta-btn"
                              >
                                Get a Free Quote
                                <svg
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  width="14"
                                  height="14"
                                >
                                  <polyline points="9 18 15 12 9 6" />
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className={isActive("/blogs")}>
                      <Link to="/blogs" onClick={closeMobileMenu}>
                        Blogs
                      </Link>
                    </li>

                    <li className={isActive("/contact-us")}>
                      <Link to="/contact-us" onClick={closeMobileMenu}>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>

                <div className="outer-box">
                  <div className="ui-btn-outer">
                    <div className="ui-btn-search">
                      <button
                        className="contact-btn"
                        onClick={() => {
                          openPopup();
                          closeMobileMenu();
                        }}
                      >
                        Let's Talk
                      </button>
                    </div>
                  </div>
                  <div
                    className={`mobile-nav-toggler${mobileMenuOpen ? " active" : ""}`}
                    onClick={toggleMobileMenu}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══ MOBILE MENU ══ */}
        <div
          className={`mobile-menu${mobileMenuOpen ? " mobile-menu-visible" : ""}`}
        >
          <div className="menu-backdrop" onClick={closeMobileMenu}></div>
          <nav className="menu-box">
            <div className="upper-box">
              <div className="nav-logo">
                <Link to="/" onClick={closeMobileMenu}>
                  <img
                    src="https://res.cloudinary.com/dpdn7kzll/image/upload/v1774440484/Group-19-2-1024x199_pnnsp8.png"
                    alt="Logo"
                  />
                </Link>
              </div>
              <div className="close-btn" onClick={closeMobileMenu}>
                ✕
              </div>
            </div>

            <ul className="navigation clearfix">
              <li className={isActive("/")}>
                <Link to="/" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className={isActive("/about")}>
                <Link to="/about" onClick={closeMobileMenu}>
                  About
                </Link>
              </li>

              <li className="dropdown">
                <div className="mob-nav-row">
                  <Link to="/services" onClick={closeMobileMenu}>
                    Services
                  </Link>
                  <span
                    className="mob-arrow"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown("services");
                    }}
                  >
                    {openDropdowns["services"] ? (
                      <IconChevronUp />
                    ) : (
                      <IconChevronDown />
                    )}
                  </span>
                </div>
                {openDropdowns["services"] && (
                  <div className="mob-services-list">
                    {MEGA_SERVICES.map((s, i) => (
                      <div key={i} className="mob-services-list-item">
                        <Link
                          to={s.to}
                          onClick={closeMobileMenu}
                          className="mob-service-parent"
                        >
                          <span className="mob-service-icon">
                            <i className={s.icon} />
                          </span>
                          <span>{s.category}</span>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </li>

              <li>
                <Link to="/blogs" onClick={closeMobileMenu}>
                  Blogs
                </Link>
              </li>
              <li className={isActive("/contact-us")}>
                <Link to="/contact-us" onClick={closeMobileMenu}>
                  Contact
                </Link>
              </li>
            </ul>

            <ul className="contact-list-one">
              <li>
                <div className="contact-info-box">
                  <span className="icon">
                    <IconPhone />
                  </span>
                  <span className="title">Call Now</span>
                  <a href="tel:+919990613140">+91 99906 13140</a>
                </div>
              </li>
              <li>
                <div className="contact-info-box">
                  <span className="icon">
                    <IconEnvelope />
                  </span>
                  <span className="title">Send Email</span>
                  <a href="mailto:hello@brandmingo.com">hello@brandmingo.com</a>
                </div>
              </li>
            </ul>

            <ul className="social-links">
              <li>
                <a href="https://x.com/brandmingo" aria-label="Twitter">
                  <IconTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/brandmingo/"
                  aria-label="Facebook"
                >
                  <IconFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/brandmingo/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/brandmingo?igsh=MWRjY2h5ZHJxMGZseQ%3D%3D"
                  aria-label="Instagram"
                >
                  <IconInstagram />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
