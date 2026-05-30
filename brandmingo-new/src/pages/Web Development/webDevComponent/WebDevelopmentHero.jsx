import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const WebDevelopmentHero = ({ openPopup }) => {
  const features = [
    {
      icon: "fas fa-bolt",
      title: "Lightning Fast",
      desc: "Fast-loading websites designed for smooth performance and better user experience.",
    },
    {
      icon: "fas fa-mobile-alt",
      title: "100% Responsive",
      desc: "Seamless website experience across mobile, tablet, and desktop devices.",
    },
    {
      icon: "fas fa-search",
      title: "SEO Optimized",
      desc: "SEO-friendly websites built to improve visibility and search rankings.",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Secure & Scalable",
      desc: "Secure and scalable websites built for long-term business growth.",
    },
  ];

  const stats = [
    { value: "150+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "5+", label: "Years Experience" },
    { value: "24/7", label: "Support" },
  ];

  /* ── Orange flowing particle / orb animation on canvas ── */
  useEffect(() => {}, []);

  return (
    <>
      <style>{`
        .wd-hero {
          background-color: var(--body-bg);
          padding: 130px 0 90px;
          position: relative;
          overflow: hidden;
        }

        .wd-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
        }

        .wd-inner {
          position: relative;
          z-index: 2;
          max-width: var(--container-width);
          margin: 0 auto;
          padding: 0 30px;
        }

        /* ── HERO GRID ── */
        .wd-hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 64px;
          align-items: center;
        }

        /* ── LEFT CONTENT ── */
        /* CHANGE 1: white text + orange border on tagline */
        .wd-tagline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #fff;
          font-weight: 600;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 22px;
          border: 1px solid var(--theme-color1);
          padding: 6px 14px;
          border-radius: 15px;
        }

        .wd-tagline i { font-size: 11px; color: var(--theme-color1); }

        .wd-hero-content h3 {
          margin-bottom: 24px;
          line-height: var(--line-height-heading);
        }

        .wd-title-accent {
          color: var(--theme-color1);
        }

        .wd-description {
          color: var(--text-color);
          opacity: 0.7;
          max-width: 520px;
          margin-bottom: 42px;
          font-size: var(--body-font-size);
          line-height: var(--body-line-height);
        }

        /* ── ENTRY ANIMATIONS ── */
        @keyframes wd-fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes wd-shimmer {
          0%   { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(220%) skewX(-15deg); }
        }

        @keyframes wd-pulse-ring {
          0%   { box-shadow: 0 0 0 0 rgba(255,107,30,0.45); }
          70%  { box-shadow: 0 0 0 10px rgba(255,107,30,0); }
          100% { box-shadow: 0 0 0 0 rgba(255,107,30,0); }
        }

        .wd-tagline { animation: wd-fadeUp 0.55s ease both; animation-delay: 0.05s; }
        .wd-hero-content h3 { animation: wd-fadeUp 0.6s ease both; animation-delay: 0.15s; }
        .wd-description { animation: wd-fadeUp 0.6s ease both; animation-delay: 0.25s; }
        .wd-btn-group { animation: wd-fadeUp 0.6s ease both; animation-delay: 0.35s; }

        /* ── BUTTONS ── */
        .wd-btn-group {
          display: flex;
          gap: 14px;
          flex-wrap: nowrap;
          align-items: center;
        }

        .wd-btn-primary {
          background: var(--theme-color1);
          color: #fff;
          padding: 16px 28px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 15px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          text-decoration: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
          white-space: nowrap;
          animation: wd-pulse-ring 2.4s ease-out 1.2s infinite;
        }

        .wd-btn-primary::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 40%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
          transform: translateX(-100%) skewX(-15deg);
          animation: wd-shimmer 2.6s ease 1.4s infinite;
        }

        .wd-btn-primary:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 16px 34px rgba(255,107,30,0.38);
          background: #e85c0d;
        }

        .wd-btn-secondary {
          background: transparent;
          color: var(--headings-color);
          padding: 14px 22px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 15px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 2px solid rgba(255,255,255,0.18);
          white-space: nowrap;
          position: relative;
          overflow: hidden;
        }

        .wd-btn-secondary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,107,30,0.06);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .wd-btn-secondary:hover {
          border-color: var(--theme-color1);
          color: var(--theme-color1);
          transform: translateY(-3px);
        }

        .wd-btn-secondary:hover::after { opacity: 1; }

        .wd-play-icon {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--theme-color1);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.3s ease, transform 0.3s ease;
        }

        .wd-play-icon i {
          font-size: 13px;
          color: #fff;
        }

        .wd-btn-secondary:hover .wd-play-icon {
          background: #e85c0d;
          transform: scale(1.1) rotate(-6deg);
        }

        /* ── RIGHT VISUAL ── */
        .wd-hero-visual { position: relative; }

        .wd-device-wrapper {
          position: relative;
          display: flex;
          align-items: flex-end;
          gap: -20px;
        }

        .wd-laptop {
          width: 100%;
          border-radius: 14px;
          background: #0f0f0f;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 40px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,107,30,0.05);
          overflow: hidden;
          position: relative;
        }

        .wd-laptop-bar {
          background: #1a1a1a;
          padding: 10px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .wd-dots { display: flex; gap: 6px; }
        .wd-dot-circle {
          width: 10px; height: 10px; border-radius: 50%;
        }
        .wd-dot-r { background: #ff5f56; }
        .wd-dot-y { background: #ffbd2e; }
        .wd-dot-g { background: #27c93f; }

        .wd-url-bar {
          flex: 1;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 4px;
          height: 22px;
          display: flex;
          align-items: center;
          padding: 0 10px;
          gap: 6px;
        }

        .wd-url-bar-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--theme-color1);
          opacity: 0.7;
          flex-shrink: 0;
        }

        .wd-url-text {
          font-size: 10px;
          color: rgba(255,255,255,0.3);
          font-family: monospace;
        }

        .wd-laptop-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }

        .wd-mock-logo {
          font-size: 13px;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.5px;
        }

        .wd-mock-logo span { color: var(--theme-color1); }

        .wd-mock-nav-links {
          display: flex;
          gap: 18px;
          list-style: none;
          margin: 0; padding: 0;
        }

        .wd-mock-nav-links li {
          font-size: 10px;
          color: rgba(255,255,255,0.45);
        }

        .wd-mock-cta-small {
          background: var(--theme-color1);
          color: #fff;
          font-size: 10px;
          font-weight: 600;
          padding: 6px 14px;
          border-radius: 4px;
        }

        .wd-laptop-body {
          background: linear-gradient(145deg, #111 0%, #0d0d0d 100%);
          padding: 28px 20px 24px;
          min-height: 260px;
          position: relative;
          overflow: hidden;
        }

        .wd-laptop-body::before {
          content: '';
          position: absolute;
          top: -40px; right: -40px;
          width: 220px; height: 220px;
          background: radial-gradient(circle, rgba(255,107,30,0.18) 0%, transparent 70%);
          pointer-events: none;
        }

        .wd-mock-heading {
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 8px;
          font-style: italic;
          max-width: 200px;
        }

        .wd-mock-heading span { color: var(--theme-color1); }

        .wd-mock-sub {
          font-size: 10px;
          color: rgba(255,255,255,0.4);
          margin-bottom: 18px;
          max-width: 200px;
          line-height: 1.5;
        }

        .wd-mock-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--theme-color1);
          color: #fff;
          font-size: 10px;
          font-weight: 600;
          padding: 8px 16px;
          border-radius: 4px;
          margin-bottom: 22px;
        }

        .wd-mock-btn i { font-size: 9px; }

        /* stats row inside mockup */
        .wd-mock-stats {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 8px;
          border-top: 1px solid rgba(255,255,255,0.06);
          padding-top: 16px;
        }

        .wd-mock-stat {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .wd-mock-stat-val {
          font-size: 15px;
          font-weight: 700;
          color: #fff;
        }

        .wd-mock-stat-lbl {
          font-size: 8.5px;
          color: rgba(255,255,255,0.35);
          line-height: 1.3;
        }

        /* phone mock */
        .wd-phone {
          position: absolute;
          bottom: -12px;
          right: -32px;
          width: 130px;
          border-radius: 14px;
          background: #111;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 20px 50px rgba(0,0,0,0.7);
          overflow: hidden;
          z-index: 3;
        }

        .wd-phone-notch {
          background: #000;
          height: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .wd-phone-notch-bar {
          width: 30px; height: 3px;
          background: #222; border-radius: 4px;
        }

        .wd-phone-body {
          padding: 12px 10px;
          background: linear-gradient(145deg, #111, #0d0d0d);
          min-height: 180px;
          position: relative;
          overflow: hidden;
        }

        .wd-phone-body::before {
          content: '';
          position: absolute;
          top: -20px; right: -20px;
          width: 100px; height: 100px;
          background: radial-gradient(circle, rgba(255,107,30,0.2) 0%, transparent 70%);
          pointer-events: none;
        }

        .wd-phone-logo {
          font-size: 9px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 10px;
        }

        .wd-phone-logo span { color: var(--theme-color1); }

        .wd-phone-heading {
          font-size: 11px;
          font-weight: 700;
          color: #fff;
          line-height: 1.25;
          margin-bottom: 6px;
        }

        .wd-phone-heading span { color: var(--theme-color1); }

        .wd-phone-sub {
          font-size: 8px;
          color: rgba(255,255,255,0.38);
          line-height: 1.5;
          margin-bottom: 12px;
        }

        .wd-phone-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: var(--theme-color1);
          color: #fff;
          font-size: 8px;
          font-weight: 700;
          padding: 6px 10px;
          border-radius: 4px;
        }

        /* ── FEATURES STRIP ── */
        .wd-features {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0;
          margin-top: 80px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .wd-feat-item {
          flex: 1;
          padding: 26px 24px;
          display: flex;
          align-items: center;
          gap: 14px;
          border-right: 1px solid rgba(255,255,255,0.08);
          background: transparent;
        }

        .wd-feat-item:last-child {
          border-right: none;
        }

        .wd-feat-item:hover {
          background: transparent;
        }

        .wd-feat-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: rgba(255,107,30,0.12);
          border: 1px solid rgba(255,107,30,0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--theme-color1);
          font-size: 16px;
          flex-shrink: 0;
        }

        .wd-feat-item h4 {
          font-size: 14px;
          font-weight: 600;
          margin: 0;
        }

        .wd-feat-item p {
          font-size: 12px;
          opacity: 0.6;
          margin: 0;
        }

        .wd-feat-item > div:last-child {
          display: flex;
          flex-direction: column;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .wd-hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .wd-tagline, .wd-btn-group { justify-content: center; }
          .wd-description { margin-left: auto; margin-right: auto; }
          .wd-hero-visual { display: none; }
          .wd-features { display: flex; flex-wrap: wrap; }
          .wd-feat-item { flex: 1 1 45%; }
          .wd-feat-item:nth-child(2) { border-right: none; }
          .wd-feat-item:nth-child(3) { border-right: 1px solid rgba(255,255,255,0.07); }
          .wd-feat-item:nth-child(3), .wd-feat-item:nth-child(4) {
            border-top: 1px solid rgba(255,255,255,0.07);
          }
        }

        @keyframes wd-card-glow {
          0%, 100% { box-shadow: 0 0 0 1px rgba(255,107,30,0.15), 0 8px 32px rgba(0,0,0,0.4); }
          50%       { box-shadow: 0 0 0 1px rgba(255,107,30,0.4),  0 8px 32px rgba(255,107,30,0.12); }
        }

        @keyframes wd-icon-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-4px); }
        }

        @media (max-width: 640px) {
          .wd-hero { padding: 100px 0 70px; }

          /* 2x2 premium card grid */
          .wd-features {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
            border-top: none;
            margin-top: 44px;
            padding: 0 2px;
          }

          /* premium card */
          .wd-feat-item {
            border-right: none !important;
            border-top: none !important;
            border: 1px solid rgba(255,107,30,0.18);
            border-radius: 18px;
            background: linear-gradient(145deg, rgba(255,107,30,0.07) 0%, rgba(255,255,255,0.02) 100%) !important;
            padding: 24px 16px 20px;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            gap: 14px;
            animation: wd-card-glow 3s ease-in-out infinite;
            position: relative;
            overflow: hidden;
          }

          /* stagger glow per card */
          .wd-feat-item:nth-child(2) { animation-delay: 0.75s; }
          .wd-feat-item:nth-child(3) { animation-delay: 1.5s; }
          .wd-feat-item:nth-child(4) { animation-delay: 2.25s; }

          /* top-right corner accent line */
          .wd-feat-item::before {
            content: '';
            position: absolute;
            top: 0; right: 0;
            width: 48px; height: 48px;
            background: radial-gradient(circle at top right, rgba(255,107,30,0.25), transparent 70%);
            border-radius: 0 18px 0 0;
          }

          /* bigger glowing icon */
          .wd-feat-icon-wrap {
            width: 56px !important;
            height: 56px !important;
            border-radius: 16px !important;
            background: rgba(255,107,30,0.14) !important;
            border: 1px solid rgba(255,107,30,0.45) !important;
            font-size: 22px !important;
            animation: wd-icon-float 3s ease-in-out infinite;
            box-shadow: 0 4px 20px rgba(255,107,30,0.2);
          }

          /* hide desc, keep title */
          .wd-feat-item p { display: none; }

          .wd-feat-item h4 {
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 0.2px;
            line-height: 1.3;
          }

          .wd-feat-item > div:last-child {
            flex-direction: column;
            align-items: center;
            gap: 0;
          }

          /* buttons: one row side-by-side */
          .wd-btn-group {
            flex-direction: row !important;
            flex-wrap: nowrap !important;
            justify-content: center;
            gap: 10px;
            width: 100%;
          }

          .wd-btn-primary, .wd-btn-secondary {
            flex: 1;
            padding: 14px 10px !important;
            font-size: 13px !important;
            gap: 8px !important;
          }
        }
      `}</style>

      <section className="wd-hero">
        {/* Animated Canvas Background */}

        <div className="wd-inner">
          <div className="wd-hero-grid">
            {/* ── LEFT CONTENT ── */}
            <div className="wd-hero-content">
              <div className="wd-tagline">
                <i className="fas fa-bolt" /> BUILD. SCALE. DOMINATE ONLINE.
              </div>

              <h3>
                Custom Websites
                <br />
                Built to Grow{" "}
                <span className="wd-title-accent"> Your Business</span>
              </h3>

              <p className="wd-description">
                We create modern, high-performing websites that help businesses
                attract customers, build trust, and grow faster online.
              </p>

              <div className="wd-btn-group">
                <button
                  className="wd-btn-primary"
                  onClick={openPopup}
                  type="button"
                >
                  <i className="fas fa-rocket" /> Start Your Project
                </button>
                <Link to="/portfolio" className="wd-btn-secondary">
                  <span className="wd-play-icon">
                    <i className="fas fa-eye" />
                  </span>
                  View Our Work
                </Link>
              </div>
            </div>

            {/* ── RIGHT VISUAL ── */}
            <div className="wd-hero-visual">
              <div className="wd-device-wrapper">
                {/* Laptop */}
                <div className="wd-laptop">
                  <div className="wd-laptop-bar">
                    <div className="wd-dots">
                      <div className="wd-dot-circle wd-dot-r" />
                      <div className="wd-dot-circle wd-dot-y" />
                      <div className="wd-dot-circle wd-dot-g" />
                    </div>
                    <div className="wd-url-bar">
                      <div className="wd-url-bar-dot" />
                      <span className="wd-url-text">nextcraft.agency</span>
                    </div>
                  </div>

                  {/* Nav inside mock */}
                  <div className="wd-laptop-nav">
                    <div className="wd-mock-logo">
                      Next<span>Craft</span>
                    </div>
                    <ul className="wd-mock-nav-links">
                      {["Home", "About", "Services", "Work", "Contact"].map(
                        (l) => (
                          <li key={l}>{l}</li>
                        ),
                      )}
                    </ul>
                    <div className="wd-mock-cta-small">Get Started →</div>
                  </div>

                  {/* Body */}
                  <div className="wd-laptop-body">
                    <div className="wd-mock-heading">
                      Building Digital
                      <br />
                      <span>Experiences</span>
                      <br />
                      That Matter.
                    </div>
                    <p className="wd-mock-sub">
                      We design &amp; develop modern websites
                      <br />
                      that drive real results.
                    </p>
                    <div className="wd-mock-btn">
                      Explore Project <i className="fas fa-arrow-right" />
                    </div>

                    {/* Stats */}
                    <div className="wd-mock-stats">
                      {stats.map((s, i) => (
                        <div className="wd-mock-stat" key={i}>
                          <span className="wd-mock-stat-val">{s.value}</span>
                          <span className="wd-mock-stat-lbl">{s.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="wd-phone">
                  <div className="wd-phone-notch">
                    <div className="wd-phone-notch-bar" />
                  </div>
                  <div className="wd-phone-body">
                    <div className="wd-phone-logo">
                      Next<span>Craft</span>
                    </div>
                    <div className="wd-phone-heading">
                      We build
                      <br />
                      websites that
                      <br />
                      <span>
                        grow your
                        <br />
                        business.
                      </span>
                    </div>
                    <p className="wd-phone-sub">
                      Modern, responsive and
                      <br />
                      performance-driven solutions
                      <br />
                      tailored to your needs.
                    </p>
                    <div className="wd-phone-btn">
                      Get Started{" "}
                      <i
                        className="fas fa-arrow-right"
                        style={{ fontSize: 7 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── FEATURES ── */}
          <div className="wd-features">
            {features.map((feat, i) => (
              <div className="wd-feat-item" key={i}>
                <div className="wd-feat-icon-wrap">
                  <i className={feat.icon} />
                </div>
                <div>
                  <h4>{feat.title}</h4>
                  <p>{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDevelopmentHero;
