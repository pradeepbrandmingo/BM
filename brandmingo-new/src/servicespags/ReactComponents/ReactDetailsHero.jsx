import React, { useEffect } from "react";

const ReactAtomSVG = () => (
  <svg
    viewBox="0 0 300 300"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "100%", height: "100%" }}
  >
    <defs>
      <radialGradient id="coreg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FF5D00" />
        <stop offset="100%" stopColor="#ff8c42" />
      </radialGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <ellipse
      cx="150"
      cy="150"
      rx="135"
      ry="48"
      fill="none"
      stroke="#FF5D00"
      strokeWidth="2.5"
      opacity="0.9"
      filter="url(#glow)"
    />
    <ellipse
      cx="150"
      cy="150"
      rx="135"
      ry="48"
      fill="none"
      stroke="#FF5D00"
      strokeWidth="2.5"
      opacity="0.9"
      transform="rotate(60 150 150)"
      filter="url(#glow)"
    />
    <ellipse
      cx="150"
      cy="150"
      rx="135"
      ry="48"
      fill="none"
      stroke="#FF5D00"
      strokeWidth="2.5"
      opacity="0.9"
      transform="rotate(120 150 150)"
      filter="url(#glow)"
    />
    <circle cx="150" cy="150" r="18" fill="url(#coreg)" filter="url(#glow)" />
    <circle cx="150" cy="150" r="10" fill="#fff" opacity="0.9" />
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

const ReactDetailsHero = () => {
  const [ff, setFf] = React.useState("var(--heading-font-family)");

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
          <div className="rdh-top-block">
            <div className="rdh-eyebrow">Premium Solution</div>
            <h1 className="title">React</h1>
            <div className="rdh-liquid-wrap">
              <GradientText text="Development" fontFamily={ff} />
            </div>
            <ul className="rdh-breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li className="sep">/</li>
              <li className="active">React Development</li>
            </ul>
          </div>

          {/* BLOCK 2 — atom image */}
          <div className="rdh-right">
            <div className="rdh-ring-1" />
            <div className="rdh-ring-2" />
            <div className="rdh-img-glow" />
            <div className="rdh-atom-wrap">
              <ReactAtomSVG />
            </div>
            <div className="rdh-chip rdh-chip-1">
              <i className="fas fa-bolt" /> Component-Driven
            </div>
            <div className="rdh-chip rdh-chip-2">
              <i className="fas fa-code" /> TypeScript Ready
            </div>
            <div className="rdh-chip rdh-chip-3">
              <i className="fas fa-tachometer-alt" /> 3X Faster Apps
            </div>
            <span className="rdh-vert-label">
              React · PWA · SPA · TypeScript
            </span>
          </div>

          {/* BLOCK 3 — desc + buttons + badges */}
          <div className="rdh-bottom-block">
            <p className="rdh-desc">
              Transform your digital presence with responsive, scalable, and
              dynamic ReactJS SPAs, PWAs, and web apps that convert 3X better.
              We combine technical excellence with premium design.
            </p>
            <div className="rdh-btn-row">
              <a href="#contact" className="rdh-btn-primary">
                Discuss Your Business Requirements
                <i className="fas fa-arrow-right" />
              </a>
              <a href="#work" className="rdh-btn-ghost">
                <i className="fas fa-play" />
                Our Work
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

export default ReactDetailsHero;
