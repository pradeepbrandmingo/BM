import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────────────────
   PATH: starts bottom-left, rises very gently so the 5
   step-points are spread evenly across ~1100 px of width.
   Approximate circle anchor X values:
     01 → 160   02 → 360   03 → 560   04 → 760   05 → 980
   ───────────────────────────────────────────────────────── */
const PATH =
  "M 40 700 C 80 680, 120 650, 160 620 C 200 590, 240 560, 280 530 C 320 500, 340 480, 360 460 C 400 420, 440 400, 480 385 C 510 372, 530 365, 560 355 C 600 340, 640 320, 680 300 C 710 284, 730 272, 760 258 C 800 238, 840 215, 880 195 C 910 178, 940 162, 980 148 C 1020 132, 1060 108, 1100 82 C 1120 68, 1140 52, 1160 38";

const steps = [
  {
    num: "01",
    icon: "fa-solid fa-magnifying-glass",
    title: "Business & Audience Research",
    desc: "Understand your business, audience, and goals.",
  },
  {
    num: "02",
    icon: "fa-solid fa-layer-group",
    title: "Strategy & Campaign Planning",
    desc: "Plan high-converting Google Ads strategy.",
  },
  {
    num: "03",
    icon: "fa-solid fa-bullhorn",
    title: "Campaign Setup & Execution",
    desc: "Launch campaigns with targeting and creatives.",
  },
  {
    num: "04",
    icon: "fa-solid fa-chart-line",
    title: "Optimization & Testing",
    desc: "Improve performance with testing and data.",
  },
  {
    num: "05",
    icon: "fa-solid fa-rocket",
    title: "Scaling & Growth",
    desc: "Scale winning campaigns for better ROI.",
  },
];

/* Each step: circle position + icon-box offset + label placement
   labelSide: "right" | "left"  (left used when right edge would clip)
   labelBelow: true → title/desc y starts BELOW the circle          */
const STEP_CONFIG = [
  /* 01 */ {
    cx: 160,
    cy: 620,
    ibx: 125,
    iby: 524,
    labelX: 206,
    titleY: 613,
    descY: 625,
    labelW: 210,
  },
  /* 02 */ {
    cx: 360,
    cy: 460,
    ibx: 325,
    iby: 364,
    labelX: 406,
    titleY: 453,
    descY: 465,
    labelW: 200,
  },
  /* 03 */ {
    cx: 560,
    cy: 355,
    ibx: 525,
    iby: 259,
    labelX: 606,
    titleY: 388,
    descY: 400,
    labelW: 195,
  },
  /* 04 */ {
    cx: 760,
    cy: 258,
    ibx: 725,
    iby: 162,
    labelX: 806,
    titleY: 291,
    descY: 303,
    labelW: 195,
  },
  /* 05 */ {
    cx: 980,
    cy: 148,
    ibx: 945,
    iby: 52,
    labelX: 1026,
    titleY: 141,
    descY: 153,
    labelW: 155,
  },
];

export default function GoogleAdsProcessSection() {
  const [animated, setAnimated] = useState(false);
  const [pLen, setPLen] = useState(1600);
  const pathRef = useRef(null);
  const rootRef = useRef(null);

  useEffect(() => {
    if (pathRef.current) setPLen(pathRef.current.getTotalLength());
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setAnimated(true);
      },
      { threshold: 0.1 },
    );
    if (rootRef.current) obs.observe(rootRef.current);
    return () => obs.disconnect();
  }, []);

  const delay = (i) => `${0.3 + i * 0.38}s`;

  return (
    <div className="ps-root" ref={rootRef}>
      <div className="ps-blob" />

      {/* decorative arc swirls */}
      <svg
        className="ps-arcs"
        viewBox="0 0 380 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-20 300 Q 70 210 230 230 Q 320 242 380 205"
          stroke="rgba(255,107,30,0.55)"
          strokeWidth="1.5"
        />
        <path
          d="M-20 278 Q 90 178 248 202 Q 332 216 380 174"
          stroke="rgba(255,107,30,0.35)"
          strokeWidth="1"
        />
        <path
          d="M-20 256 Q 108 148 264 175 Q 344 190 380 146"
          stroke="rgba(255,107,30,0.20)"
          strokeWidth="0.8"
        />
        <path
          d="M-20 234 Q 126 118 280 148 Q 356 162 380 118"
          stroke="rgba(255,107,30,0.10)"
          strokeWidth="0.7"
        />
      </svg>

      <div className="ps-inner">
        {/* ── LEFT PANEL ── */}
        <div className="ps-left">
          <div className="ps-tag">
            <span className="ps-dot" />
            Our Process
          </div>
          <h2 className="ps-heading">
            We follow a provenn
            <br />
            Google Ads <span className="ora">growth process</span>
          </h2>
          <p className="ps-sub">
            We use a data-driven and structured approach to build Google Ads
            campaigns that generate high-quality leads, sales, and measurable
            ROI for your business.
          </p>
          <a href="#contact" className="ps-btn">
            Start Your Campaign <span>→</span>
          </a>
        </div>

        {/* ── DESKTOP DIAGRAM ── */}
        <div className="ps-diag desktop-only">
          <svg viewBox="0 0 1180 740" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="pglow" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="4.5" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="cglow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="6" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="pg" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#b03a00" />
                <stop offset="50%" stopColor="#ff6b1e" />
                <stop offset="100%" stopColor="#ffb060" />
              </linearGradient>
            </defs>

            {/* track + animated line */}
            <path className="ps-track" d={PATH} />
            <path
              ref={pathRef}
              className="ps-line"
              d={PATH}
              filter="url(#pglow)"
              style={{
                strokeDasharray: pLen,
                strokeDashoffset: animated ? 0 : pLen,
                transition: "stroke-dashoffset 2.2s cubic-bezier(0.42,0,0.2,1)",
              }}
            />

            {steps.map((step, i) => {
              const c = STEP_CONFIG[i];
              return (
                <g
                  key={step.num}
                  className={`ps-step${animated ? " on" : ""}`}
                  style={{ transitionDelay: delay(i) }}
                >
                  {/* icon box */}
                  <rect
                    x={c.ibx}
                    y={c.iby}
                    width={56}
                    height={56}
                    rx={13}
                    className="ps-ib"
                  />
                  <foreignObject x={c.ibx} y={c.iby} width={56} height={56}>
                    <div
                      xmlns="http://www.w3.org/1999/xhtml"
                      className="ps-ico"
                    >
                      <i className={step.icon} />
                    </div>
                  </foreignObject>

                  {/* dashed connector */}
                  <line
                    x1={c.ibx + 28}
                    y1={c.iby + 56}
                    x2={c.cx}
                    y2={c.cy - 29}
                    className="ps-dash"
                  />

                  {/* circle */}
                  <circle
                    cx={c.cx}
                    cy={c.cy}
                    r={29}
                    className="ps-cout"
                    filter="url(#cglow)"
                  />
                  <circle cx={c.cx} cy={c.cy} r={23} className="ps-cin" />
                  <text
                    x={c.cx}
                    y={c.cy + 5}
                    textAnchor="middle"
                    className="ps-cnum"
                  >
                    {step.num}
                  </text>

                  {/* label */}
                  <text x={c.labelX} y={c.titleY} className="ps-ltit">
                    {step.title}
                  </text>
                  <foreignObject
                    x={c.labelX}
                    y={c.descY}
                    width={c.labelW}
                    height={75}
                  >
                    <p xmlns="http://www.w3.org/1999/xhtml" className="ps-ldsc">
                      {step.desc}
                    </p>
                  </foreignObject>
                </g>
              );
            })}

            {/* terminal glow dot */}
            <circle
              cx={1160}
              cy={38}
              r={7}
              fill="#ffaa50"
              filter="url(#pglow)"
              style={{
                opacity: animated ? 1 : 0,
                transition: "opacity 0.4s ease 2.4s",
              }}
            />
          </svg>
        </div>

        {/* ── MOBILE VERTICAL STEPPER ── */}
        <div className="ps-stepper mobile-only">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`ps-step-item${animated ? " on" : ""}`}
              style={{ transitionDelay: delay(i) }}
            >
              <div className="ps-step-track">
                <div className="ps-step-circle">
                  <span className="ps-step-num">{step.num}</span>
                </div>
                {i < steps.length - 1 && <div className="ps-step-line" />}
              </div>
              <div className="ps-step-body">
                <div className="ps-step-icon-wrap">
                  <i className={step.icon} />
                </div>
                <div className="ps-step-text">
                  <h4 className="ps-step-title">{step.title}</h4>
                  <p className="ps-step-desc">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
