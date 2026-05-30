import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const NAV = [
  {
    fa: "fa-solid fa-chart-line",
    label: "Organic Traffic",
    to: "/organic-traffic",
  },

  {
    fa: "fa-solid fa-location-dot",
    label: "Local Search Dominance",
    to: "/local-search-dominance",
  },
];

const REASONS = [
  {
    fa: "fa-solid fa-magnifying-glass",
    title: "Improve Search Visibility",
    desc: "Get your website discovered by users actively searching for your services.",
  },
  {
    fa: "fa-solid fa-globe",
    title: "Build Strong Online Presence",
    desc: "Increase your brand visibility across search engines and digital platforms.",
  },
  {
    fa: "fa-solid fa-users",
    title: "Drive Organic Traffic",
    desc: "Attract consistent, high-quality visitors without relying on paid ads.",
  },
  {
    fa: "fa-solid fa-chart-line",
    title: "Measurable Growth",
    desc: "Track rankings, traffic, and performance with data-driven insights.",
  },
  {
    fa: "fa-solid fa-rocket",
    title: "Long-Term Business Growth",
    desc: "Build a sustainable traffic source that grows with your business.",
  },
];
const STATS = [
  {
    fa: "fa-solid fa-briefcase",
    key: "p",
    suffix: "+",
    label: "SEO Projects Delivered",
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
    label: "SEO Support Available",
    target: 24,
  },
  {
    fa: "fa-solid fa-award",
    key: "e",
    suffix: "+",
    label: "Years SEO Experience",
    target: 5,
  },
];

const SEOAbout = () => {
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
                      setNav(i); // active UI
                      navigate(n.to); // redirect 🔥
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
              Let’s Grow Your <span>Business with Ads</span>
            </h3>
            <p>
              Have a campaign idea? Let’s turn your budget into high-performing
              ads that generate real leads and sales.
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
          <div className="wda-pdf-card">
            <span className="wda-dl-label">
              <i className="fa-solid fa-file-pdf" />
              Brochure (PDF)
            </span>
            <div className="wda-dl-btn">
              <i className="fa-solid fa-download" />
            </div>
          </div>
        </aside>
        {/* ══ END SIDEBAR ══ */}

        {/* ══ RIGHT MAIN CONTENT ══ */}
        <main className="wda-main">
          {/* Hero image */}
          <div className="wda-hero">
            <div className="wda-hero-ov">
              <div className="wda-hero-txt">
                <div className="wda-hero-badge">
                  <i className="fa-solid fa-laptop-code" />
                  ABOUT SEO OPTIMIZATION
                </div>
                <h2>
                  Driving Organic Growth <span>With High-Performance SEO</span>
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
            <h2 className="wda-h1">What is SEO Optimization?</h2>
            <p className="wda-p">
              SEO optimization is the process of improving your website’s
              structure, content, speed, and authority to rank higher on search
              engines like Google. A properly optimized website helps businesses
              increase visibility, attract organic traffic, improve user
              experience, and generate more leads and conversions.
            </p>

            <div className="wda-lbl" style={{ marginTop: "40px" }}>
              <i className="fa-solid fa-circle" />
              Strategy
            </div>
            <h3 className="wda-h2">Why Your Business Needs SEO</h3>

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
                If your website is not ranking, you’re already{" "}
                <em> — losing potential customers.</em>
              </span>
            </div>

            {/* ── Image Cards Row ── */}
            <div className="wda-img-cards">
              <div className="wda-img-card">
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=700"
                  alt="Modern Web Development"
                />
                <div className="wda-img-card-body">
                  <div className="wda-img-card-icon">
                    <i className="fa-solid fa-magnifying-glass-chart" />
                  </div>
                  <p>
                    Smart, data-driven SEO strategies optimized for higher
                    rankings, organic traffic, and long-term growth.
                  </p>
                  <a href="#contact" className="wda-img-card-arrow">
                    <i className="fa-solid fa-arrow-right" />
                  </a>
                </div>
              </div>

              <div className="wda-img-card">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=700"
                  alt="E-commerce Solutions"
                />
                <div className="wda-img-card-body">
                  <div className="wda-img-card-icon">
                    <i className="fa-solid fa-chart-line" />
                  </div>
                  <p>
                    Conversion-focused SEO approaches that attract the right
                    audience and drive real business results.
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

export default SEOAbout;
