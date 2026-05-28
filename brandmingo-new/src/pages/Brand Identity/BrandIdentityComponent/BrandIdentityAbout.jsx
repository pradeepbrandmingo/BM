import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const NAV = [
  {
    fa: "fa-solid fa-pen-nib",
    label: "Logo Design",
    to: "/logo-design",
  },
  {
    fa: "fa-solid fa-bullhorn",
    label: "Package & Label Designing",
    to: "/label-designing",
  },
  {
    fa: "fa-solid fa-id-card",
    label: "Corporate Identity Designing",
    to: "/corporate-identity-designing",
  },
  {
    fa: "fa-solid fa-file-powerpoint",
    label: "Brand Identity Design",
    to: "/brand-identity-design",
  },
];

const REASONS = [
  {
    fa: "fa-solid fa-eye",
    title: "Build Brand Recognition",
    desc: "Make your brand instantly recognizable across all platforms.",
  },
  {
    fa: "fa-solid fa-palette",
    title: "Create Visual Consistency",
    desc: "Maintain a consistent look and feel across every touchpoint.",
  },
  {
    fa: "fa-solid fa-users",
    title: "Connect With Your Audience",
    desc: "Build emotional connections that turn users into loyal customers.",
  },
  {
    fa: "fa-solid fa-shield-heart",
    title: "Build Trust & Credibility",
    desc: "Establish a professional image that builds confidence in your brand.",
  },
  {
    fa: "fa-solid fa-rocket",
    title: "Stand Out From Competitors",
    desc: "Differentiate your brand and create a strong market presence.",
  },
];

const STATS = [
  {
    fa: "fa-solid fa-pen-nib",
    key: "p",
    suffix: "+",
    label: "Brand Projects Delivered",
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
    label: "Brand Support Available",
    target: 24,
  },
  {
    fa: "fa-solid fa-award",
    key: "e",
    suffix: "+",
    label: "Years Branding Experience",
    target: 5,
  },
];

const BrandIdentityAbout = () => {
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
              Let’s Build Your
              <span>Brand That Stands Out</span>
            </h3>
            <p>
              Want to create a strong brand presence? Let’s craft a unique
              identity that builds recognition, trust, and long-term brand
              value.
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
                  ABOUT BRAND IDENTITY
                </div>
                <h2>
                  Building Strong Brands With{" "}
                  <span>High-Impact Design & Strategy</span>
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
            <h2 className="wda-h1">What is Brand Identity?</h2>
            <p className="wda-p">
              Brand identity is the process of defining how your business looks,
              feels, and communicates with your audience. It includes logo
              design, visual elements, brand voice, and consistency to create a
              strong and recognizable presence.
              <br />
              Think of it this way — your brand is not just a logo, it’s the
              perception people have about your business. Without a clear
              identity, you’re missing recognition, trust, and long-term brand
              value.
            </p>

            <div className="wda-lbl" style={{ marginTop: "40px" }}>
              <i className="fa-solid fa-circle" />
              Strategy
            </div>
            <h3 className="wda-h2">Why Your Business Needs Brand Identity</h3>

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
                If your brand is not memorable, you’re already{" "}
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
                    <i className="fa-solid fa-palette" />
                  </div>
                  <p>
                    Strategic, design-driven brand identities crafted to build
                    recognition, consistency, and long-term brand value.
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
                    <i className="fa-solid fa-bullseye" />
                  </div>
                  <p>
                    Impact-focused branding solutions that connect with your
                    audience and create a strong, memorable presence.
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

export default BrandIdentityAbout;
