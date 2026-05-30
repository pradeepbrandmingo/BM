import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { openEnquiryPopup } from "../../../utils/popup";

const SocialMediaHero = () => {
  const features = [
    {
      icon: "fas fa-bullhorn",
      title: "Engaging Content Strategy",
      desc: "Creative, data-backed content planning designed to boost engagement, reach, and audience interaction.",
    },
    {
      icon: "fas fa-share-nodes",
      title: "Multi-Platform Management",
      desc: "Seamless management across Instagram, Facebook, LinkedIn, and other platforms — all in one place.",
    },
    {
      icon: "fas fa-chart-line",
      title: "Performance Tracking",
      desc: "Track insights, analyze engagement, and continuously optimize content for better reach and results.",
    },
    {
      icon: "fas fa-users",
      title: "Audience Growth",
      desc: "Build a loyal, targeted audience and grow your brand visibility consistently over time.",
    },
  ];
  const stats = [
    { value: "150+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "5+", label: "Years Experience" },
    { value: "24/7", label: "Support" },
  ];

  /* ── Social media platform icons for the mock feed ── */
  const feedPosts = [
    {
      platform: "fab fa-instagram",
      color: "#E1306C",
      label: "Instagram",
      engagement: "4.2K Likes",
      reach: "+18% Reach",
    },
    {
      platform: "fab fa-facebook-f",
      color: "#1877F2",
      label: "Facebook",
      engagement: "2.8K Shares",
      reach: "+24% Reach",
    },
    {
      platform: "fab fa-linkedin-in",
      color: "#0A66C2",
      label: "LinkedIn",
      engagement: "1.5K Views",
      reach: "+11% Reach",
    },
  ];

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

        @keyframes wd-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }

        @keyframes wd-bar-grow {
          from { width: 0; }
          to   { width: var(--bar-w); }
        }

        @keyframes wd-count-pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.6; }
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

        /* ══════════════════════════════════════
           RIGHT VISUAL — SMM Dashboard Mock
        ══════════════════════════════════════ */
        .wd-hero-visual { position: relative; }

        .wd-device-wrapper {
          position: relative;
          display: flex;
          align-items: flex-end;
          gap: -20px;
        }

        /* ── LAPTOP ── */
        .wd-laptop {
          width: 100%;
          border-radius: 14px;
          background: #0f0f0f;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 40px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,107,30,0.05);
          overflow: hidden;
          position: relative;
          animation: wd-float 5s ease-in-out infinite;
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

        /* Nav inside mock */
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

        /* Laptop Body — SMM Dashboard */
        .wd-laptop-body {
          background: linear-gradient(145deg, #111 0%, #0d0d0d 100%);
          padding: 20px 20px 18px;
          min-height: 260px;
          position: relative;
          overflow: hidden;
        }

        .wd-laptop-body::before {
          content: '';
          position: absolute;
          top: -40px; right: -40px;
          width: 220px; height: 220px;
          background: radial-gradient(circle, rgba(255,107,30,0.14) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Dashboard heading row */
        .wd-dash-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .wd-dash-title {
          font-size: 13px;
          font-weight: 700;
          color: #fff;
        }

        .wd-dash-title span { color: var(--theme-color1); }

        .wd-dash-badge {
          background: rgba(255,107,30,0.15);
          border: 1px solid rgba(255,107,30,0.35);
          color: var(--theme-color1);
          font-size: 9px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .wd-dash-badge i { font-size: 8px; }

        /* Platform rows */
        .wd-platform-rows {
          display: flex;
          flex-direction: column;
          gap: 9px;
          margin-bottom: 14px;
        }

        .wd-platform-row {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 8px;
          padding: 8px 12px;
        }

        .wd-plat-icon {
          width: 26px; height: 26px;
          border-radius: 6px;
          display: flex; align-items: center; justify-content: center;
          font-size: 12px;
          flex-shrink: 0;
        }

        .wd-plat-info {
          flex: 1;
          min-width: 0;
        }

        .wd-plat-name {
          font-size: 9px;
          font-weight: 600;
          color: rgba(255,255,255,0.75);
          margin-bottom: 4px;
        }

        .wd-plat-bar-wrap {
          height: 4px;
          background: rgba(255,255,255,0.07);
          border-radius: 4px;
          overflow: hidden;
        }

        .wd-plat-bar {
          height: 100%;
          border-radius: 4px;
          background: var(--theme-color1);
          animation: wd-bar-grow 1.2s ease forwards;
        }

        .wd-plat-right {
          text-align: right;
          flex-shrink: 0;
        }

        .wd-plat-val {
          font-size: 10px;
          font-weight: 700;
          color: #fff;
        }

        .wd-plat-sub {
          font-size: 8px;
          color: rgba(255,107,30,0.8);
        }

        /* Stats row at bottom */
        .wd-mock-stats {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 8px;
          border-top: 1px solid rgba(255,255,255,0.06);
          padding-top: 12px;
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

        /* ── PHONE mock ── */
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
          animation: wd-float 5s ease-in-out 0.8s infinite;
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

        /* Phone: Social media engagement widget */
        .wd-phone-label {
          font-size: 8px;
          font-weight: 700;
          color: rgba(255,255,255,0.45);
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 8px;
        }

        .wd-phone-platform-list {
          display: flex;
          flex-direction: column;
          gap: 7px;
          margin-bottom: 12px;
        }

        .wd-phone-plat-row {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .wd-phone-plat-icon {
          width: 18px; height: 18px;
          border-radius: 4px;
          display: flex; align-items: center; justify-content: center;
          font-size: 9px;
          flex-shrink: 0;
        }

        .wd-phone-plat-name {
          font-size: 8px;
          color: rgba(255,255,255,0.6);
          flex: 1;
        }

        .wd-phone-plat-tag {
          font-size: 7px;
          font-weight: 700;
          color: var(--theme-color1);
        }

        .wd-phone-cta {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: var(--theme-color1);
          color: #fff;
          font-size: 8px;
          font-weight: 700;
          padding: 6px 10px;
          border-radius: 4px;
          width: 100%;
          justify-content: center;
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

          .wd-features {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
            border-top: none;
            margin-top: 44px;
            padding: 0 2px;
          }

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

          .wd-feat-item:nth-child(2) { animation-delay: 0.75s; }
          .wd-feat-item:nth-child(3) { animation-delay: 1.5s; }
          .wd-feat-item:nth-child(4) { animation-delay: 2.25s; }

          .wd-feat-item::before {
            content: '';
            position: absolute;
            top: 0; right: 0;
            width: 48px; height: 48px;
            background: radial-gradient(circle at top right, rgba(255,107,30,0.25), transparent 70%);
            border-radius: 0 18px 0 0;
          }

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
        <div className="wd-inner">
          <div className="wd-hero-grid">
            {/* ── LEFT CONTENT ── */}
            <div className="wd-hero-content">
              <div className="wd-tagline">
                <i className="fas fa-bolt" /> Engage. Grow Your Brand.
              </div>

              <h3>
                Social Media Management
                <br />
                That Drives <span className="wd-title-accent">Real Growth</span>
              </h3>

              <p className="wd-description">
                We don’t just post content, we build strategy-driven,
                high-engagement campaigns that attract the right audience,
                strengthen your brand presence, and convert followers into real
                customers.
              </p>

              <div className="wd-btn-group">
                <button
                  className="wd-btn-primary"
                  type="button"
                  onClick={openEnquiryPopup}
                >
                  <i className="fas fa-rocket" />
                  Start Your Social Growth
                </button>

                <Link to="/portfolio" className="wd-btn-secondary">
                  <span className="wd-play-icon">
                    <i className="fas fa-eye" />
                  </span>
                  View Our Work
                </Link>
              </div>
            </div>

            {/* ── RIGHT VISUAL — SMM Dashboard ── */}
            <div className="wd-hero-visual">
              <div className="wd-device-wrapper">
                {/* Laptop */}
                <div className="wd-laptop">
                  {/* Browser Bar */}
                  <div className="wd-laptop-bar">
                    <div className="wd-dots">
                      <div className="wd-dot-circle wd-dot-r" />
                      <div className="wd-dot-circle wd-dot-y" />
                      <div className="wd-dot-circle wd-dot-g" />
                    </div>
                    <div className="wd-url-bar">
                      <div className="wd-url-bar-dot" />
                      <span className="wd-url-text">smm.brandmingo.com</span>
                    </div>
                  </div>

                  {/* Nav inside mock */}
                  <div className="wd-laptop-nav">
                    <div className="wd-mock-logo">
                      Brand<span>SMM</span>
                    </div>
                    <ul className="wd-mock-nav-links">
                      {[
                        "Channels",
                        "Posts",
                        "Engagement",
                        "Analytics",
                        "Reports",
                      ].map((l) => (
                        <li key={l}>{l}</li>
                      ))}
                    </ul>
                    <div className="wd-mock-cta-small">Schedule Post →</div>
                  </div>

                  {/* Body — SMM Dashboard */}
                  <div className="wd-laptop-body">
                    {/* Heading row */}
                    <div className="wd-dash-top">
                      <div className="wd-dash-title">
                        Social <span>Engagement</span> Overview
                      </div>
                      <div className="wd-dash-badge">
                        <i
                          className="fas fa-circle"
                          style={{ color: "#27c93f", fontSize: 7 }}
                        />
                        Live Tracking
                      </div>
                    </div>

                    {/* Platform rows */}
                    <div className="wd-platform-rows">
                      {[
                        {
                          icon: "fab fa-instagram",
                          color: "#E1306C",
                          bg: "rgba(225,48,108,0.15)",
                          name: "Instagram",
                          val: "4.2K Likes",
                          bar: "82%",
                          grow: "+18% Reach",
                        },
                        {
                          icon: "fab fa-facebook-f",
                          color: "#1877F2",
                          bg: "rgba(24,119,242,0.15)",
                          name: "Facebook",
                          val: "2.8K Shares",
                          bar: "64%",
                          grow: "+24% Reach",
                        },
                        {
                          icon: "fab fa-linkedin-in",
                          color: "#0A66C2",
                          bg: "rgba(10,102,194,0.15)",
                          name: "LinkedIn",
                          val: "1.5K Views",
                          bar: "45%",
                          grow: "+11% Reach",
                        },
                      ].map((p, i) => (
                        <div className="wd-platform-row" key={i}>
                          <div
                            className="wd-plat-icon"
                            style={{ background: p.bg }}
                          >
                            <i className={p.icon} style={{ color: p.color }} />
                          </div>
                          <div className="wd-plat-info">
                            <div className="wd-plat-name">{p.name}</div>
                            <div className="wd-plat-bar-wrap">
                              <div
                                className="wd-plat-bar"
                                style={{
                                  "--bar-w": p.bar,
                                  background: p.color,
                                }}
                              />
                            </div>
                          </div>
                          <div className="wd-plat-right">
                            <div className="wd-plat-val">{p.val}</div>
                            <div className="wd-plat-sub">{p.grow}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Stats row */}
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

                {/* Phone — SMM Engagement Widget */}
                <div className="wd-phone">
                  <div className="wd-phone-notch">
                    <div className="wd-phone-notch-bar" />
                  </div>

                  <div className="wd-phone-body">
                    <div className="wd-phone-logo">
                      Brand<span>SMM</span>
                    </div>

                    <div className="wd-phone-label">Platforms Active</div>

                    <div className="wd-phone-platform-list">
                      {[
                        {
                          icon: "fab fa-instagram",
                          color: "#E1306C",
                          bg: "rgba(225,48,108,0.18)",
                          name: "Instagram",
                          tag: "4.2K ↑",
                        },
                        {
                          icon: "fab fa-facebook-f",
                          color: "#1877F2",
                          bg: "rgba(24,119,242,0.18)",
                          name: "Facebook",
                          tag: "2.8K ↑",
                        },
                        {
                          icon: "fab fa-twitter",
                          color: "#1DA1F2",
                          bg: "rgba(29,161,242,0.18)",
                          name: "Twitter / X",
                          tag: "1.1K ↑",
                        },
                        {
                          icon: "fab fa-youtube",
                          color: "#FF0000",
                          bg: "rgba(255,0,0,0.15)",
                          name: "YouTube",
                          tag: "980 ↑",
                        },
                      ].map((p, i) => (
                        <div className="wd-phone-plat-row" key={i}>
                          <div
                            className="wd-phone-plat-icon"
                            style={{ background: p.bg }}
                          >
                            <i className={p.icon} style={{ color: p.color }} />
                          </div>
                          <span className="wd-phone-plat-name">{p.name}</span>
                          <span className="wd-phone-plat-tag">{p.tag}</span>
                        </div>
                      ))}
                    </div>

                    <div className="wd-phone-cta">
                      Manage All{" "}
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

export default SocialMediaHero;
