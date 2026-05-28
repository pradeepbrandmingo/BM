import React, { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const PerformanceMarketingSVG = () => (
  <svg
    viewBox="0 0 300 300"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "100%", height: "100%" }}
  >
    <defs>
      <radialGradient id="pm-coreg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FF5D00" />
        <stop offset="100%" stopColor="#ff8c42" />
      </radialGradient>
      <linearGradient id="pm-bargrad" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stopColor="#FF5D00" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#FF5D00" stopOpacity="1" />
      </linearGradient>
      <filter id="pm-glow">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="pm-softglow">
        <feGaussianBlur stdDeviation="5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Background circles */}
    <circle
      cx="150"
      cy="150"
      r="130"
      fill="none"
      stroke="rgba(255,93,0,0.08)"
      strokeWidth="1"
    />
    <circle
      cx="150"
      cy="150"
      r="100"
      fill="none"
      stroke="rgba(255,93,0,0.05)"
      strokeWidth="1"
      strokeDasharray="4 6"
    />

    {/* Grid lines */}
    <line
      x1="50"
      y1="220"
      x2="260"
      y2="220"
      stroke="rgba(255,255,255,0.08)"
      strokeWidth="1"
    />
    <line
      x1="50"
      y1="185"
      x2="260"
      y2="185"
      stroke="rgba(255,255,255,0.05)"
      strokeWidth="1"
    />
    <line
      x1="50"
      y1="150"
      x2="260"
      y2="150"
      stroke="rgba(255,255,255,0.05)"
      strokeWidth="1"
    />
    <line
      x1="50"
      y1="115"
      x2="260"
      y2="115"
      stroke="rgba(255,255,255,0.05)"
      strokeWidth="1"
    />

    {/* Bars */}
    <rect
      x="62"
      y="190"
      width="26"
      height="30"
      rx="5"
      fill="url(#pm-bargrad)"
      opacity="0.7"
    />
    <rect
      x="100"
      y="168"
      width="26"
      height="52"
      rx="5"
      fill="url(#pm-bargrad)"
      opacity="0.8"
    />
    <rect
      x="138"
      y="145"
      width="26"
      height="75"
      rx="5"
      fill="url(#pm-bargrad)"
      opacity="0.9"
    />
    <rect
      x="176"
      y="118"
      width="26"
      height="102"
      rx="5"
      fill="url(#pm-bargrad)"
    />
    <rect
      x="214"
      y="88"
      width="26"
      height="132"
      rx="5"
      fill="url(#pm-bargrad)"
      filter="url(#pm-glow)"
    />

    {/* Growth line */}
    <polyline
      points="75,195 113,172 151,150 189,122 227,90"
      fill="none"
      stroke="#FF5D00"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      filter="url(#pm-glow)"
    />

    {/* Dots on line */}
    <circle cx="75" cy="195" r="4" fill="#FF5D00" filter="url(#pm-glow)" />
    <circle cx="113" cy="172" r="4" fill="#FF5D00" filter="url(#pm-glow)" />
    <circle cx="151" cy="150" r="4" fill="#FF5D00" filter="url(#pm-glow)" />
    <circle cx="189" cy="122" r="4" fill="#FF5D00" filter="url(#pm-glow)" />

    {/* Top highlighted dot */}
    <circle
      cx="227"
      cy="90"
      r="10"
      fill="url(#pm-coreg)"
      filter="url(#pm-softglow)"
    />
    <circle cx="227" cy="90" r="5" fill="#fff" opacity="0.9" />

    {/* Arrow up */}
    <g filter="url(#pm-glow)" opacity="0.9">
      <line
        x1="240"
        y1="72"
        x2="240"
        y2="58"
        stroke="#FF5D00"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <polyline
        points="234,65 240,58 246,65"
        fill="none"
        stroke="#FF5D00"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>

    {/* ROI badge */}
    <rect
      x="44"
      y="56"
      width="76"
      height="34"
      rx="8"
      fill="rgba(255,93,0,0.12)"
      stroke="rgba(255,93,0,0.3)"
      strokeWidth="1"
    />
    <text
      x="82"
      y="70"
      textAnchor="middle"
      fill="#FF5D00"
      fontSize="9"
      fontWeight="700"
      letterSpacing="1"
      fontFamily="sans-serif"
    >
      ROI
    </text>
    <text
      x="82"
      y="83"
      textAnchor="middle"
      fill="#ffffff"
      fontSize="11"
      fontWeight="700"
      fontFamily="sans-serif"
    >
      +320%
    </text>
  </svg>
);

const GradientText = ({ text, fontFamily }) => (
  <>
    <style>{`
      @property --gt-bg1x { syntax: "<number>"; inherits: true; initial-value: 25; }
      @property --gt-bg2x { syntax: "<number>"; inherits: true; initial-value: 35; }
      @property --gt-bg2y { syntax: "<number>"; inherits: true; initial-value: 40; }
      @property --gt-bg3x { syntax: "<number>"; inherits: true; initial-value: 45; }
      @property --gt-bg3y { syntax: "<number>"; inherits: true; initial-value: 20; }
      .gt-text {
        font-family: ${fontFamily || "var(--heading-font-family)"};
        font-size: clamp(48px, 9vw, 92px);
        font-weight: 700;
        line-height: 1;
        letter-spacing: -0.02em;
        margin: 0;
        display: block;
        width: 100%;
        mix-blend-mode: lighten;
        background:
          url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"),
          conic-gradient(from 120deg at calc(var(--gt-bg1x) * 1%) 85%, hsl(15deg 100% 8%), hsl(20deg 100% 30%), hsl(25deg 100% 55%), hsl(30deg 100% 65%), hsl(35deg 95% 72%), hsl(40deg 100% 78%), hsl(45deg 100% 85%), hsl(38deg 100% 72%), hsl(28deg 100% 58%), hsl(20deg 100% 40%), hsl(15deg 100% 10%)),
          radial-gradient(ellipse at calc(var(--gt-bg2x) * 1%) calc(var(--gt-bg2y) * 1%), rgba(255,220,180,0.98) 10%, transparent 38%),
          radial-gradient(ellipse at calc(var(--gt-bg3x) * 1%) calc(var(--gt-bg3y) * 1%), hsl(30deg 100% 65%), transparent 38%);
        background-size: 500px, cover, cover, cover;
        background-blend-mode: color-burn;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: gt-shift 18s linear infinite alternate;
      }
      @keyframes gt-shift {
        0%   { --gt-bg1x:25; --gt-bg2x:35; --gt-bg2y:40; --gt-bg3x:45; --gt-bg3y:20; }
        25%  { --gt-bg1x:15; --gt-bg2x:75; --gt-bg2y:25; --gt-bg3x:30; --gt-bg3y:10; }
        50%  { --gt-bg1x:8;  --gt-bg2x:20; --gt-bg2y:20; --gt-bg3x:40; --gt-bg3y:45; }
        75%  { --gt-bg1x:38; --gt-bg2x:55; --gt-bg2y:8;  --gt-bg3x:18; --gt-bg3y:15; }
        100% { --gt-bg1x:25; --gt-bg2x:35; --gt-bg2y:40; --gt-bg3x:45; --gt-bg3y:20; }
      }
    `}</style>
    <span className="gt-text">{text}</span>
  </>
);

const FlipkartManServicesHero = () => {
  const [ff, setFf] = React.useState("var(--heading-font-family)");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const root = getComputedStyle(document.documentElement);
    const hff = root.getPropertyValue("--heading-font-family").trim();
    if (hff) setFf(hff);
  }, []);

  return (
    <section className="rdh-section">
      <div className="auto-container">
        <div className="rdh-grid">
          {/* BLOCK 1 — eyebrow + title + gradient + breadcrumb */}
          {/* <div className="rdh-top-block"> */}
          <div
            className="rdh-top-block"
            style={{
              paddingLeft: isMobile ? "30px" : "",
              paddingRight: isMobile ? "40px" : "",
            }}
          >
            <div className="rdh-eyebrow">Premium Solution</div>
            <h1 className="title">Flipkart</h1>
            <div className="rdh-liquid-wrap">
              <GradientText text="Management" fontFamily={ff} />
            </div>
            <ul className="rdh-breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li className="sep">/</li>
              <li className="active">Flipkart Management</li>
            </ul>
          </div>

          {/* BLOCK 2 — marketing chart visual */}
          <div className="rdh-right">
            <div className="rdh-ring-1" />
            <div className="rdh-ring-2" />
            <div className="rdh-img-glow" />
            {/* no-spin class prevents CSS atom spin from applying */}
            {/* <div className="rdh-atom-wrap rdh-no-spin">
              <PerformanceMarketingSVG />
            </div> */}

            <div className="rdh-atom-wrap rdh-no-spin">
              <DotLottieReact
                src="https://lottie.host/be0f4dc7-f32a-4a31-aba6-832fe1749f96/qA0Lc0cpty.lottie"
                autoplay
                loop
                style={{
                  width: "110%",
                  height: "110%",
                }}
              />
            </div>
            <div className="rdh-chip rdh-chip-1">
              <i className="fas fa-chart-line" />
              Better Product Ranking
            </div>
            <div className="rdh-chip rdh-chip-2">
              <i className="fas fa-bullseye" />
              Increased Sales
            </div>
            <div className="rdh-chip rdh-chip-3">
              <i className="fas fa-rocket" />
              Optimized Listings
            </div>
            {/* <span className="rdh-vert-label">
              SEO · PPC · Meta · Google Ads
            </span> */}
          </div>

          {/* BLOCK 3 — desc + buttons + badges */}
          <div className="rdh-bottom-block">
            <p className="rdh-desc">
              Scale your Flipkart store with performance-driven management
              strategies focused on visibility and sales. We don’t just manage
              listings — we optimize products, ads, and account performance to
              improve rankings, increase conversions, and grow your revenue
              consistently.
            </p>
            <div className="rdh-btn-row">
              <a href="#contact" className="rdh-btn-primary">
                Start Your Flipkart Growth
                <i className="fas fa-arrow-right" />
              </a>
              <a href="#work" className="rdh-btn-ghost">
                <i className="fas fa-play" />
                View Our Results
              </a>
            </div>

            <div className="rdh-badges">
              <div className="rdh-badge">
                <img
                  src="https://res.cloudinary.com/dpdn7kzll/image/upload/v1776684180/f-500_icvdap.svg"
                  className="rdh-badge-logo"
                  alt="Fortune 500"
                />
                <div className="rdh-badge-text">
                  <strong>Fortune 500</strong>
                  <span>Trusted by Companies</span>
                </div>
              </div>
              <div className="rdh-badge">
                <img
                  src="https://res.cloudinary.com/dpdn7kzll/image/upload/v1776684179/ica_hx4ujj.svg"
                  className="rdh-badge-logo"
                  alt="ICA"
                />
                <div className="rdh-badge-text">
                  <strong>ICA Certified</strong>
                  <span>International Compliance</span>
                </div>
              </div>
              <div className="rdh-badge">
                <img
                  src="https://res.cloudinary.com/dpdn7kzll/image/upload/v1776684179/topp-dev_l9jcyb.png"
                  className="rdh-badge-logo"
                  alt="Top Devs"
                />
                <div className="rdh-badge-text">
                  <strong>Top Developers</strong>
                  <span>Award Recognised</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlipkartManServicesHero;
