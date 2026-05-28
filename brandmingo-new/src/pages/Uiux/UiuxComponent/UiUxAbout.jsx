import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const NAV = [
  {
    fa: "fa-solid fa-palette",
    label: "Custom Web Design",
    to: "/custom-web-design",
  },
  {
    fa: "fa-solid fa-bullhorn",
    label: "Corporate Branding",
    to: "/corporate-branding",
  },
  {
    fa: "fa-solid fa-mobile-screen",
    label: "Mobile App Design",
    to: "/mobile-app-design",
  },
  {
    fa: "fa-solid fa-cube",
    label: "Product Design",
    to: "/product-design",
  },
];

const REASONS = [
  {
    fa: "fa-solid fa-user-check",
    title: "Enhance User Engagement",
    desc: "Improve how users interact with your website by creating smoother, more intuitive digital experiences.",
  },
  {
    fa: "fa-solid fa-arrow-right-from-bracket",
    title: "Identify Experience Gaps",
    desc: "Discover usability issues, navigation problems, and friction points that impact customer journeys.",
  },
  {
    fa: "fa-solid fa-chart-line",
    title: "Boost Conversion Rates",
    desc: "Optimise layouts, CTAs, and user flows to turn more visitors into leads and customers.",
  },
  {
    fa: "fa-solid fa-database",
    title: "Make Data-Driven Improvements",
    desc: "Use analytics, heatmaps, and user behaviour insights to make smarter UX decisions.",
  },
  {
    fa: "fa-solid fa-trophy",
    title: "Strengthen Brand Experience",
    desc: "Deliver a consistent and professional user experience that builds trust and customer loyalty.",
  },
];

const STATS = [
  {
    fa: "fa-solid fa-magnifying-glass-chart",
    value: "100+",
    label: "UX Audits Completed",
  },
  {
    fa: "fa-solid fa-face-smile",
    value: "95%",
    label: "Improved User Satisfaction",
  },
  {
    fa: "fa-solid fa-chart-line",
    value: "40%+",
    label: "Conversion Growth",
  },
  {
    fa: "fa-solid fa-lightbulb",
    value: "5+",
    label: "Years UX Experience",
  },
];

const UiUxAbout = () => {
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
                  ABOUT UI/UX AUDITS
                </div>
                <h2>
                  UI/UX Audits That <span>Boost Engagement & Conversions.</span>
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
              Why Does Your Website Need a UI/UX Audit?
            </h2>
            <p className="wda-p">
              A website may look visually appealing, but if users struggle to
              navigate, interact, or complete actions, it can directly impact
              conversions and customer experience. A UI/UX audit helps uncover
              the hidden issues affecting usability, engagement, and overall
              website performance.
              <br />
              By analysing user behaviour, navigation patterns, responsiveness,
              and interaction flow, businesses can identify friction points that
              lead to drop-offs and missed opportunities. From confusing layouts
              to slow-loading pages, even small usability problems can reduce
              trust and lower conversion rates.
              <br />
              Our UI/UX audit services focus on improving the overall digital
              experience by optimising user journeys, enhancing accessibility,
              and creating smoother interactions that keep users engaged and
              encourage action.
            </p>

            <div className="wda-lbl" style={{ marginTop: "40px" }}>
              <i className="fa-solid fa-circle" />
              Strategy
            </div>
            <h3 className="wda-h2">Why Your Business Needs a UI/UX Audit</h3>

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
                A poor user experience doesn’t just frustrate visitors, it
                directly impacts engagement, <em>trust, and conversions.</em>
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
                    <i className="fa-solid fa-user-gear" />
                  </div>
                  <p>
                    Identify usability issues, improve navigation flow, and
                    create seamless digital experiences that enhance user
                    satisfaction and retention.
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
                    <i className="fa-solid fa-arrow-trend-up" />
                  </div>
                  <p>
                    Optimise layouts, interactions, and design elements to
                    increase engagement, improve conversions, and maximise
                    overall website performance.
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

export default UiUxAbout;
