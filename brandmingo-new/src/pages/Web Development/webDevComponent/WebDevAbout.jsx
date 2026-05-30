import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const webDevHero = "https://i.ibb.co/3YFS8j0N/BM-Site-Images.jpg";

const NAV = [
  { fa: "fa-solid fa-code", label: "React Development", to: "/react" },
  { fa: "fa-brands fa-shopify", label: "Shopify Website", to: "/shopify" },
  {
    fa: "fa-brands fa-wordpress",
    label: "WordPress Website",
    to: "/wordpress",
  },
  {
    fa: "fa-solid fa-cart-shopping",
    label: "WooCommerce Website",
    to: "/woocommerce",
  },
  { fa: "fa-brands fa-php", label: "PHP Development", to: "/php" },
  { fa: "fa-solid fa-database", label: "Custom CRM", to: "/crm-development" },
];

const REASONS = [
  {
    fa: "fa-solid fa-shield-halved",
    title: "Build Instant Trust",
    desc: "Create a professional online presence that helps your business look credible and reliable from the very first visit",
  },
  {
    fa: "fa-solid fa-desktop",
    title: "Showcase Your Services Clearly",
    desc: "Present your services and offers in a way that helps customers quickly understand your value.",
  },
  {
    fa: "fa-solid fa-users",
    title: "Generate Leads 24/7",
    desc: "Your website keeps working around the clock by capturing inquiries and potential customers anytime.",
  },
  {
    fa: "fa-solid fa-chart-line",
    title: "Get Found on Google",
    desc: "SEO-focused websites help your business appear when customers search for services online.",
  },
  {
    fa: "fa-solid fa-crown",
    title: "Stay Ahead of Competitors",
    desc: "Stand out in the digital market with a strong online presence that attracts and converts customers.",
  },
];

const STATS = [
  {
    fa: "fa-solid fa-briefcase",
    key: "p",
    suffix: "+",
    label: "Projects Completed",
    target: 150,
  },
  {
    fa: "fa-solid fa-face-smile",
    key: "s",
    suffix: "%",
    label: "Client Satisfaction",
    target: 98,
  },
  {
    fa: "fa-solid fa-headset",
    key: "h",
    suffix: "/7",
    label: "Support Available",
    target: 24,
  },
  {
    fa: "fa-solid fa-award",
    key: "e",
    suffix: "+",
    label: "Years Experience",
    target: 5,
  },
];

const WebDevAbout = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeNav, setNav] = useState(0);
  const [counts, setCounts] = useState({ p: 0, s: 0, h: 0, e: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          animCounts();
          io.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  const animCounts = () => {
    const targets = { p: 150, s: 98, h: 24, e: 5 };
    let step = 0;
    const iv = setInterval(() => {
      step++;
      const r = 1 - Math.pow(1 - Math.min(step / 60, 1), 3);
      setCounts({
        p: Math.round(targets.p * r),
        s: Math.round(targets.s * r),
        h: Math.round(targets.h * r),
        e: Math.round(targets.e * r),
      });
      if (step >= 60) clearInterval(iv);
    }, 2000 / 60);
  };

  return (
    <section className="wda" ref={sectionRef}>
      <div className="wda-grid">
        {/* ══ LEFT SIDEBAR ══ */}
        <aside className="wda-sidebar">
          {/* ── CARD 1: Logo ── */}
          <div className="wda-main-card">
            {" "}
            {/* className="wda-hero" */}
            <div className="wda-logo-row">
              <div className="wda-logo-img">
                <i className="fa-solid fa-layer-group" />
              </div>
              <div className="wda-logo-text">
                <b>Brandmingo</b>
                <span>Digital Solutions</span>
              </div>
            </div>
          </div>

          {/* ── CARD 2: Nav ── */}
          <div className="wda-main-card">
            <div className="wda-nav-wrap wda-nav-wrap--no-border">
              <ul className="wda-nav">
                {NAV.map((n, i) => (
                  <li
                    key={i}
                    className={activeNav === i ? "active" : ""}
                    onClick={() => {
                      setNav(i);
                      navigate(n.to);
                    }}
                  >
                    <span className="nl">
                      <i className={n.fa} />
                      {n.label}
                    </span>
                    <i className="fa-solid fa-chevron-right chev" />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── CARD 3: Call CTA ── */}
          <div className="wda-main-card wda-call">
            <i className="fa-solid fa-rocket wda-rocket" />
            <h3>
              Let's Build <span>Your Website</span>
            </h3>
            <p>
              Have a project in mind? Let's turn your ideas into powerful
              digital solutions.
            </p>
            <a href="tel:+919990613140" className="wda-ring">
              <i className="fa-solid fa-phone" />
            </a>

            <small className="wda-expert-label">Talk to an expert</small>
            <a href="tel:+919990613140" className="wda-phone">
              +91 99906 13140
            </a>
            <small className="wda-expert-label wda-timing">
              Mon – Sat | 10:00 AM – 7:00 PM
            </small>
          </div>

          {/* ── CARD 4: Stats ── */}
          <div className="wda-main-card">
            <div className="wda-stats-wrap">
              <p className="wda-stats-lbl">Our Work Speaks</p>
              {STATS.map((s) => (
                <div className="wda-stat" key={s.key}>
                  <div className="wda-stat-ic">
                    <i className={s.fa} />
                  </div>
                  <div>
                    <b>
                      {counts[s.key]}
                      {s.suffix}
                    </b>
                    <span>{s.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── CARD 5: PDF (separate) ── */}
          <a
            href="src/assets/images/Brochure/BM Brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="wda-pdf-card"
          >
            <span className="wda-dl-label">
              <i className="fa-solid fa-file-pdf" />
              Brochure (PDF)
            </span>

            <div className="wda-dl-btn">
              <i className="fa-solid fa-download" />
            </div>
          </a>
        </aside>
        {/* ══ END SIDEBAR ══ */}

        {/* ══ RIGHT MAIN CONTENT ══ */}
        <main className="wda-main">
          {/* Hero image */}
          <div className="wda-hero">
            <img
              src={webDevHero}
              alt="Website Development Banner - Brandmingo"
              className="wda-hero-img"
            />
            <div className="wda-hero-ov">
              <div className="wda-hero-txt">
                <div className="wda-hero-badge">
                  <i className="fa-solid fa-laptop-code" />
                  About Web Development
                </div>
                <h2>
                  Creating Powerful Digital Foundations{" "}
                  <span> for Modern Businesses</span>
                </h2>
              </div>
            </div>
          </div>

          {/* Article */}
          <article>
            <div className="wda-lbl">
              <i className="fa-solid fa-circle" />
              Introduction
            </div>
            <h2 className="wda-h1">
              Understanding the Power of Web Development
            </h2>
            <p className="wda-p">
              A strong website is more than just an online presence. It is the
              foundation of your brand in the digital world. From creating trust
              to attracting customers, modern web development helps businesses
              build faster, smarter, and more engaging digital experiences.
              <br />
              <br />
              In today’s competitive market, your website works as your
              business’s 24/7 growth engine. A professionally developed website
              helps you generate leads, improve user experience, strengthen
              credibility, and turn visitors into loyal customers.
            </p>

            <div className="wda-lbl" style={{ marginTop: "40px" }}>
              <i className="fa-solid fa-circle" />
              Strategy
            </div>
            <h3 className="wda-h2">
              Why Your Business Can’t Afford to Ignore a Website
            </h3>

            <div className="wda-reasons">
              {REASONS.map((r, i) => (
                <div
                  className="wda-r"
                  key={i}
                  style={
                    visible
                      ? { animation: `wda-fade-up 0.55s ${i * 0.1}s forwards` }
                      : {}
                  }
                >
                  <div className="wda-r-ico">
                    <i className={r.fa} />
                  </div>
                  <h5>{r.title}</h5>
                  <p>{r.desc}</p>
                </div>
              ))}
            </div>

            <div className="wda-quote">
              <div className="wda-quote-icon">
                <i className="fa-solid fa-quote-right" />
              </div>
              <span>
                A website is no longer optional. It’s one of the most{" "}
                <em>powerful tools for business growth.</em>
              </span>
            </div>

            {/* ── Image Cards Row ── */}
            <div className="wda-img-cards">
              <div className="wda-img-card">
                <img
                  src="https://i.ibb.co/jvrt6Xy0/laptop-with-code-desk-home-office-980225-34580.jpg"
                  alt="website-developement-banner-image-Brandmingo"
                />
                <div className="wda-img-card-body">
                  <div className="wda-img-card-icon">
                    <i className="fa-solid fa-laptop-code" />
                  </div>
                  <p>
                    Modern, fast-loading websites designed to create seamless
                    user experiences and better business performance.
                  </p>
                  <a href="#contact" className="wda-img-card-arrow">
                    <i className="fa-solid fa-arrow-right" />
                  </a>
                </div>
              </div>

              <div className="wda-img-card">
                <img
                  src="https://i.ibb.co/Zz0MNRM4/website-developement-image-Brandmingo.avif"
                  alt="E-commerce Solutions"
                />
                <div className="wda-img-card-body">
                  <div className="wda-img-card-icon">
                    <i className="fa-solid fa-cart-shopping" />
                  </div>
                  <p>
                    Custom web solutions and eCommerce platforms focused on
                    increasing engagement, conversions, and revenue.
                  </p>
                  <a href="#contact" className="wda-img-card-arrow">
                    <i className="fa-solid fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </main>
        {/* ══ END MAIN CONTENT ══ */}
      </div>
    </section>
  );
};

export default WebDevAbout;
