import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const FloatingIcons = () => (
  <div className="sph-icons" aria-hidden="true">
    <div className="sph-fcard sph-fcard--1">
      <div className="sph-fcard__ico">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FF6B1E"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <polyline points="7 9 10 12 7 15" />
          <line x1="13" y1="15" x2="17" y2="15" />
        </svg>
      </div>
      <div className="sph-fcard__txt">
        <span className="sph-fcard__label">Web Development</span>
        <span className="sph-fcard__sub">React · Shopify · WordPress</span>
      </div>
      <div className="sph-fcard__dot" />
    </div>

    <div className="sph-fcard sph-fcard--2">
      <div className="sph-fcard__ico">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FF6B1E"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
          <line x1="11" y1="8" x2="11" y2="14" />
          <line x1="8" y1="11" x2="14" y2="11" />
        </svg>
      </div>
      <div className="sph-fcard__txt">
        <span className="sph-fcard__label">SEO Optimizing</span>
        <span className="sph-fcard__sub">Rank · Traffic · Growth</span>
      </div>
      <div className="sph-fcard__dot" />
    </div>

    <div className="sph-fcard sph-fcard--3">
      <div className="sph-fcard__ico">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FF6B1E"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      </div>
      <div className="sph-fcard__txt">
        <span className="sph-fcard__label">Ads & Campaigns</span>
        <span className="sph-fcard__sub">Meta · Google · ROI</span>
      </div>
      <div className="sph-fcard__dot" />
    </div>

    <div className="sph-fcard sph-fcard--4">
      <div className="sph-fcard__ico">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FF6B1E"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      </div>
      <div className="sph-fcard__txt">
        <span className="sph-fcard__label">Brand Identity</span>
        <span className="sph-fcard__sub">Logo · Design · Voice</span>
      </div>
      <div className="sph-fcard__dot" />
    </div>

    <div className="sph-orbit">
      <div className="sph-orbit__ring sph-orbit__ring--1" />
      <div className="sph-orbit__ring sph-orbit__ring--2" />
      <div className="sph-orbit__core">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FF6B1E"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      </div>
      <div className="sph-orbit__dot" />
    </div>

    <div className="sph-stat">
      <span className="sph-stat__num">
        200<span>+</span>
      </span>
      <span className="sph-stat__lbl">Projects Done</span>
    </div>

    <span className="sph-particle sph-particle--a" />
    <span className="sph-particle sph-particle--b" />
    <span className="sph-particle sph-particle--c" />
    <span className="sph-particle sph-particle--d" />
  </div>
);

const CSS = `
  .sph-section {
    position: relative;
    background: var(--body-bg, #0d0d0d);
    overflow: hidden;
    padding: 100px 0 90px;
    min-height: 480px;
    display: flex;
    align-items: center;
  }
  .sph-section::before {
    content: "";
    position: absolute;
    top: -160px; left: -160px;
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(255,107,30,0.07) 0%, transparent 68%);
    pointer-events: none;
    z-index: 0;
  }
  .sph-section::after {
    content: "";
    position: absolute;
    bottom: -80px; right: 10%;
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(255,107,30,0.04) 0%, transparent 68%);
    pointer-events: none;
    z-index: 0;
  }
  .sph-rule {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,107,30,0.25) 35%, rgba(255,107,30,0.25) 65%, transparent);
    z-index: 1;
  }
  .sph-inner {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
    max-width: var(--container-width, 1320px);
    margin: 0 auto;
    padding: 0 24px;
    width: 100%;
  }
  .sph-left { position: relative; }
  .sph-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255,107,30,0.08);
    border: 1px solid rgba(255,107,30,0.2);
    border-radius: 30px;
    padding: 6px 16px 6px 10px;
    margin-bottom: 28px;
  }
  .sph-tag__dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: #FF6B1E;
    animation: sph-blink 1.8s infinite;
  }
  @keyframes sph-blink {
    0%,100% { opacity: 1; }
    50% { opacity: 0.3; }
  }
  .sph-tag__text {
    font-family: var(--heading-font-family, 'Poppins', sans-serif);
    font-size: 11px;
    font-weight: 600;
    color: #FF6B1E;
    text-transform: uppercase;
    letter-spacing: 2.5px;
  }
  .sph-title {
    font-family: var(--heading-font-family, 'Poppins', sans-serif);
    font-size: clamp(36px, 5vw, 64px);
    font-weight: var(--h1-font-weight, 700);
    color: var(--headings-color, #fff);
    line-height: 1.1;
    margin-bottom: 20px;
    letter-spacing: -1.5px;
  }
  .sph-title span {
    color: #FF6B1E;
    position: relative;
    display: inline-block;
  }
  .sph-title span::after {
    content: "";
    position: absolute;
    left: 0; bottom: -4px; right: 0;
    height: 2px;
    background: linear-gradient(90deg, #FF6B1E, transparent);
    border-radius: 2px;
  }
  .sph-desc {
    font-family: var(--body-font-family, 'Mont', sans-serif);
    font-size: 15px;
    font-weight: var(--body-font-weight, 400);
    color: var(--text-color, #fff);
    opacity: 0.5;
    line-height: var(--body-line-height, 1.9);
    max-width: 440px;
    margin-bottom: 36px;
  }
  .sph-breadcrumb {
    display: flex;
    align-items: center;
    gap: 0;
    list-style: none;
    padding: 0; margin: 0;
    flex-wrap: wrap;
  }
  .sph-breadcrumb li {
    font-family: var(--body-font-family, 'Mont', sans-serif);
    font-size: 13px;
    font-weight: 500;
    color: rgba(255,255,255,0.4);
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .sph-breadcrumb li:not(:last-child)::after {
    content: "";
    display: inline-block;
    width: 18px; height: 1px;
    background: rgba(255,107,30,0.5);
    margin-left: 10px;
    vertical-align: middle;
  }
  .sph-breadcrumb li a {
    color: rgba(255,255,255,0.5);
    text-decoration: none;
    transition: color 0.25s;
  }
  .sph-breadcrumb li a:hover { color: #FF6B1E; }
  .sph-breadcrumb li:last-child {
    color: #FF6B1E;
    font-weight: 600;
  }
  .sph-icons {
    position: relative;
    width: 100%;
    height: 440px;
  }
  .sph-orbit {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 200px; height: 200px;
    display: flex; align-items: center; justify-content: center;
  }
  .sph-orbit__ring {
    position: absolute;
    border-radius: 50%;
    border: 1px dashed rgba(255,107,30,0.2);
  }
  .sph-orbit__ring--1 { width: 160px; height: 160px; animation: sph-spin 18s linear infinite; }
  .sph-orbit__ring--2 { width: 220px; height: 220px; animation: sph-spin 28s linear infinite reverse; border-color: rgba(255,107,30,0.1); }
  @keyframes sph-spin { to { transform: rotate(360deg); } }
  .sph-orbit__core {
    width: 72px; height: 72px;
    border-radius: 18px;
    background: rgba(255,107,30,0.1);
    border: 1px solid rgba(255,107,30,0.25);
    display: flex; align-items: center; justify-content: center;
    animation: sph-pulse-core 3s ease-in-out infinite;
    z-index: 2;
  }
  @keyframes sph-pulse-core {
    0%,100% { box-shadow: 0 0 0 0 rgba(255,107,30,0.3); }
    50% { box-shadow: 0 0 0 16px rgba(255,107,30,0); }
  }
  .sph-orbit__dot {
    position: absolute;
    width: 10px; height: 10px;
    border-radius: 50%;
    background: #FF6B1E;
    top: 0; left: 50%;
    margin-left: -5px; margin-top: -5px;
    transform-origin: 5px 110px;
    animation: sph-orbit-dot 8s linear infinite;
    box-shadow: 0 0 8px rgba(255,107,30,0.6);
  }
  @keyframes sph-orbit-dot { to { transform: rotate(360deg); } }
  .sph-fcard {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 12px;
    background: rgba(21,21,21,0.92);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 14px;
    padding: 14px 16px;
    backdrop-filter: blur(10px);
    min-width: 210px;
    transition: border-color 0.3s, box-shadow 0.3s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  .sph-fcard:hover {
    border-color: rgba(255,107,30,0.35);
    box-shadow: 0 12px 32px rgba(0,0,0,0.4);
  }
  .sph-fcard--1 { top: 4%;  left: -8%;  animation: sph-float1 4s 0s    infinite ease-in-out alternate; }
  .sph-fcard--2 { top: 30%; right: -4%; animation: sph-float2 4.5s 0.6s infinite ease-in-out alternate; }
  .sph-fcard--3 { bottom: 28%; left: -6%; animation: sph-float1 3.8s 1.2s infinite ease-in-out alternate; }
  .sph-fcard--4 { bottom: 5%; right: 0%; animation: sph-float2 4.2s 0.3s infinite ease-in-out alternate; }
  @keyframes sph-float1 { from { transform: translateY(0px); } to { transform: translateY(-12px); } }
  @keyframes sph-float2 { from { transform: translateY(0px); } to { transform: translateY(10px); } }
  .sph-fcard__ico {
    width: 42px; height: 42px;
    border-radius: 10px;
    background: rgba(255,107,30,0.1);
    border: 1px solid rgba(255,107,30,0.18);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .sph-fcard__txt { display: flex; flex-direction: column; gap: 3px; }
  .sph-fcard__label {
    font-family: var(--heading-font-family, 'Poppins', sans-serif);
    font-size: 12.5px; font-weight: 600;
    color: var(--headings-color, #fff);
    white-space: nowrap;
  }
  .sph-fcard__sub {
    font-family: var(--body-font-family, 'Mont', sans-serif);
    font-size: 10.5px;
    color: rgba(255,255,255,0.35);
    white-space: nowrap;
  }
  .sph-fcard__dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: #FF6B1E;
    margin-left: auto;
    flex-shrink: 0;
    animation: sph-blink 2s infinite;
  }
  .sph-stat {
    position: absolute;
    top: 50%; right: -2%;
    transform: translateY(-50%);
    background: linear-gradient(135deg, #FF6B1E, #e85c0d);
    border-radius: 14px;
    padding: 16px 20px;
    display: flex; flex-direction: column; align-items: center;
    gap: 4px;
    box-shadow: 0 16px 40px rgba(255,107,30,0.35);
    animation: sph-float2 5s 0.8s infinite ease-in-out alternate;
  }
  .sph-stat__num {
    font-family: var(--heading-font-family, 'Poppins', sans-serif);
    font-size: 28px; font-weight: 700;
    color: #fff; line-height: 1;
  }
  .sph-stat__num span { font-size: 18px; }
  .sph-stat__lbl {
    font-family: var(--body-font-family, 'Mont', sans-serif);
    font-size: 10px; font-weight: 500;
    color: rgba(255,255,255,0.8);
    text-transform: uppercase; letter-spacing: 1.5px;
    white-space: nowrap;
  }
  .sph-particle {
    position: absolute;
    border-radius: 50%;
    background: #FF6B1E;
    opacity: 0.5;
    animation: sph-particle-anim ease-in-out infinite alternate;
  }
  .sph-particle--a { width: 5px;  height: 5px;  top: 12%; left: 30%; animation-duration: 3.5s; animation-delay: 0s; }
  .sph-particle--b { width: 4px;  height: 4px;  top: 70%; left: 60%; animation-duration: 4.2s; animation-delay: 1s; opacity: 0.3; }
  .sph-particle--c { width: 6px;  height: 6px;  top: 40%; left: 80%; animation-duration: 3s;   animation-delay: 0.5s; opacity: 0.4; }
  .sph-particle--d { width: 3px;  height: 3px;  top: 80%; left: 20%; animation-duration: 5s;   animation-delay: 1.5s; opacity: 0.25; }
  @keyframes sph-particle-anim {
    from { transform: translateY(0) scale(1); opacity: 0.5; }
    to   { transform: translateY(-18px) scale(1.4); opacity: 0.1; }
  }

  /* ── Responsive ── */
  @media (max-width: 991px) {
    .sph-section { padding: 80px 0 70px; }
    .sph-inner { grid-template-columns: 1fr; gap: 56px; }
    .sph-icons { height: 320px; }
    .sph-desc { max-width: 100%; }
    .sph-fcard--1 { top: 2%;  left: 0%; }
    .sph-fcard--2 { top: 2%;  right: 0%; }
    .sph-fcard--3 { bottom: 2%; left: 0%; }
    .sph-fcard--4 { bottom: 2%; right: 0%; }

    /* ✅ CHANGE 1: "What We Offer" tag top spacing on mobile */
    .sph-tag { margin-top: 24px; }

    /* ✅ CHANGE 2: Stat badge shifted slightly left on mobile */
    .sph-stat { right: auto; left: 10%; transform: translateY(-50%); }
  }

  @media (max-width: 767px) {
    .sph-section { padding: 72px 0 60px; }
    .sph-inner { padding: 0 18px; }
    .sph-title { letter-spacing: -1px; }
    .sph-icons { height: 280px; }
    .sph-fcard { min-width: 170px; padding: 11px 13px; gap: 9px; }
    .sph-fcard__ico { width: 36px; height: 36px; }
    .sph-fcard__label { font-size: 11px; }
    .sph-fcard__sub { font-size: 9.5px; }
    .sph-orbit__ring--1 { width: 120px; height: 120px; }
    .sph-orbit__ring--2 { width: 170px; height: 170px; }
    .sph-orbit__core { width: 58px; height: 58px; }
    .sph-stat { padding: 12px 16px; }
    .sph-stat__num { font-size: 22px; }
  }

  @media (max-width: 479px) {
    .sph-section { padding: 64px 0 52px; }
    .sph-inner { padding: 0 14px; gap: 40px; }
    .sph-icons { height: 240px; }
    .sph-fcard--2, .sph-fcard--4 { display: none; }
    .sph-fcard--1 { left: 0; top: 0; min-width: 155px; }
    .sph-fcard--3 { right: 0; left: auto; bottom: 0; min-width: 155px; }
  }
`;

const ServicePageHero = ({ title = "Services" }) => {
  return (
    <>
      <style>{CSS}</style>
      <section className="sph-section">
        <div className="sph-rule" aria-hidden="true" />
        <div className="sph-inner">
          <div className="sph-left">
            <div className="sph-tag" aria-hidden="true">
              <span className="sph-tag__dot" />
              <span className="sph-tag__text">What We Offer</span>
            </div>
            <h1 className="sph-title">
              Our <span>{title}</span>
            </h1>
            <p className="sph-desc">
              We craft digital experiences that drive real business growth. From
              strategy to execution — everything under one roof.
            </p>
            <ul className="sph-breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>{title}</li>
            </ul>
          </div>
          <FloatingIcons />
        </div>
      </section>
    </>
  );
};

export default ServicePageHero;
