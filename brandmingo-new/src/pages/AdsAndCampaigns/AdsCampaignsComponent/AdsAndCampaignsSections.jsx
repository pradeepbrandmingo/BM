import React, { useEffect, useRef, useState } from "react";
// import "./webdev-sections.css";
import { openEnquiryPopup } from "../../../utils/popup";
/* ── DATA ── */

const WEBSITE_TYPES = [
  {
    fa: "fa-solid fa-magnifying-glass-chart",
    num: "01",
    title: "Search Ads (Google Ads)",
    desc: "Capture high-intent users actively searching for your products or services and convert demand into real business opportunities.",
  },
  {
    fa: "fa-solid fa-bullhorn",
    num: "02",
    title: "Social Media Ads",
    desc: "EReach, engage, and influence your target audience with highly targeted campaigns designed for awareness, leads, and sales.",
  },
  {
    fa: "fa-solid fa-rotate",
    num: "03",
    title: "Display & Remarketing Ads",
    desc: "Reconnect with potential customers, stay top-of-mind, and increase conversions through smart retargeting strategies.",
  },
  {
    fa: "fa-solid fa-chart-line",
    num: "04",
    title: "Performance Campaigns",
    desc: "Data-driven campaigns optimized for leads, sales, and maximum return on investment through continuous testing and scaling.",
  },
];

const TECHNOLOGIES = [
  {
    fa: "fa-brands fa-google",
    title: "Google Ads",
    desc: "Capture high-intent users actively searching for your products or services and convert demand into real business opportunities.",
  },
  {
    fa: "fa-brands fa-facebook",
    title: "Meta Ads (Facebook & Instagram)",
    desc: "Reach, engage, and influence your target audience with highly targeted campaigns designed for awareness, leads, and sales.",
  },
  {
    fa: "fa-brands fa-youtube",
    title: "YouTube Ads",
    desc: "Leverage video-based advertising to build brand awareness, educate your audience, and drive conversions at scale.",
  },
  {
    fa: "fa-solid fa-chart-pie",
    title: "Analytics & Tracking",
    desc: "Monitor performance with accurate data, track every conversion, and continuously optimize campaigns for better results.",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    fa: "fa-solid fa-magnifying-glass-chart",
    title: "Business & Audience Analysis",
    desc: "We deeply understand your business goals, target audience, and competitors to build a strong campaign foundation.",
  },
  {
    num: "02",
    fa: "fa-solid fa-clipboard-list",
    title: "Strategy & Campaign Planning",
    desc: "We define the right platforms, targeting, budget allocation, and messaging to create a high-impact campaign strategy.",
  },
  {
    num: "03",
    fa: "fa-solid fa-pen-nib",
    title: "Creative Development & Setup",
    desc: "We design compelling ad creatives and set up campaigns with proper tracking systems to ensure accurate data collection.",
  },
  {
    num: "04",
    fa: "fa-solid fa-chart-line",
    title: "Optimization & Scaling",
    desc: "We continuously monitor, test, and optimize campaigns to improve performance and scale what delivers the best results.",
  },
  {
    num: "05",
    fa: "fa-solid fa-chart-pie",
    title: "Reporting & Growth Insights",
    desc: "We provide clear reports and actionable insights to refine strategies and drive long-term business growth.",
  },
];

/* ══════════════════════════════════════════
   SECTION 1 — Types of Websites
══════════════════════════════════════════ */
const WebDevTypes = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="wds" ref={ref}>
      <div className="wds-container">
        <div className="wds-types-grid">
          {/* Left */}
          <div className="wds-types-left">
            <div className="wds-section-label">WHAT WE RUN</div>
            <h3 className="wds-types-heading">
              Ad Campaigns Designed for Maximum Impact
            </h3>
            <p className="wds-types-desc">
              Every business requires a different advertising approach. We don’t
              run random ads we analyze your goals, audience, and market to
              craft the right campaign strategy that delivers consistent leads,
              sales, and measurable growth.
            </p>

            {/* Decorative dot grid + arc */}
            <div className="wds-deco" aria-hidden="true">
              <svg
                width="240"
                height="190"
                viewBox="0 0 240 190"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient id="dotFade" cx="20%" cy="20%" r="80%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                  <mask id="gridMask">
                    <rect width="240" height="190" fill="url(#dotFade)" />
                  </mask>
                  <radialGradient id="glowDot" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="1" />
                    <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Dot grid */}
                <g mask="url(#gridMask)">
                  {Array.from({ length: 10 }, (_, row) =>
                    Array.from({ length: 13 }, (_, col) => (
                      <circle
                        key={`${row}-${col}`}
                        cx={col * 20 + 4}
                        cy={row * 20 + 4}
                        r="1.4"
                        fill="#f97316"
                        opacity="0.5"
                      />
                    )),
                  )}
                </g>

                {/* Arc curve */}
                <path
                  d="M 0 190 Q 180 150 230 20"
                  stroke="#f97316"
                  strokeWidth="1.2"
                  fill="none"
                  opacity="0.45"
                  strokeLinecap="round"
                />

                {/* Glowing dot on arc */}
                <circle cx="205" cy="72" r="5" fill="#f97316" opacity="0.9" />
                <circle cx="205" cy="72" r="10" fill="#f97316" opacity="0.2" />
                <circle cx="205" cy="72" r="16" fill="#f97316" opacity="0.08" />
              </svg>
            </div>
          </div>

          {/* Right 2×2 cards */}
          <div className="wds-types-cards">
            {WEBSITE_TYPES.map((item, i) => (
              <div
                key={i}
                className={`wds-type-card${visible ? " wds-anim" : ""}`}
                style={visible ? { animationDelay: `${i * 0.1}s` } : {}}
              >
                <span className="wds-card-num">{item.num}</span>
                <div className="wds-card-icon">
                  <i className={item.fa} />
                </div>
                <h4 className="wds-card-title">{item.title}</h4>
                <p className="wds-card-desc">{item.desc}</p>
                <a href="#contact" className="wds-card-link">
                  Learn More <i className="fa-solid fa-arrow-right" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════
   SECTION 2 — Technologies We Use
══════════════════════════════════════════ */
const WebDevTech = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="wdt" ref={ref}>
      <div className="wdt-container">
        <div className="wdt-grid">
          {/* Left */}
          <div className="wdt-left">
            <div className="wds-section-label">
              Built with Powerful Platforms
            </div>
            <h3 className="wdt-heading">
              Advertising Platforms That Deliver Real Results
            </h3>
            <p className="wdt-desc">
              We don’t rely on guess work; we use proven advertising platforms
              and advanced tools to create campaigns that are optimized for
              performance, scalability, and measurable growth. Every platform is
              selected based on your business goals to ensure maximum ROI.
            </p>
          </div>

          {/* Right tech cards */}
          <div className="wdt-cards">
            {TECHNOLOGIES.map((item, i) => (
              <div
                key={i}
                className={`wdt-card${visible ? " wds-anim" : ""}`}
                style={visible ? { animationDelay: `${i * 0.1}s` } : {}}
              >
                <div className="wdt-card-icon">
                  <i className={item.fa} />
                </div>
                <div className="wdt-card-content">
                  <h4 className="wdt-card-title">{item.title}</h4>
                  <p className="wdt-card-desc">{item.desc}</p>
                  <div className="wdt-card-line" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════
   SECTION 3 — Web Development Process
══════════════════════════════════════════ */
const WebDevProcess = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="wdp" ref={ref}>
      <div className="wdp-container">
        <div className="wdp-grid">
          {/* Left */}
          <div className="wdp-left">
            <div className="wds-section-label">OUR WORKFLOW</div>
            <h3 className="wdp-heading"> Our Proven Ads Campaign Process</h3>
            <p className="wdp-desc">
              Successful ad campaigns are never random. We follow a structured,
              data-driven approach to ensure every campaign is optimized for
              performance, generates quality leads, and delivers consistent
              return on investment.
            </p>

            {/* CTA box */}
            <div className="wdp-cta">
              <div className="wdp-cta-icon">
                <i className="fa-solid fa-comments" />
              </div>
              <div className="wdp-cta-text">
                <h4>Have a campaign in mind?</h4>
                <p>
                  Let’s build high-performing ad campaigns that generate real
                  leads, sales, and measurable growth.
                </p>
                <button
                  className="wdp-cta-btn"
                  type="button"
                  onClick={openEnquiryPopup}
                >
                  Let's Talk
                  <i className="fa-solid fa-arrow-right" />
                </button>
              </div>
            </div>
          </div>

          {/* Right steps */}
          <div className="wdp-steps">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={i}
                className={`wdp-step${visible ? " wds-anim" : ""}`}
                style={visible ? { animationDelay: `${i * 0.1}s` } : {}}
              >
                <div className="wdp-step-num">{step.num}</div>
                <div className="wdp-step-icon">
                  <i className={step.fa} />
                </div>
                <div className="wdp-step-body">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════
   DEFAULT EXPORT — all three sections
══════════════════════════════════════════ */
const AdsAndCampaignsSections = () => (
  <>
    <WebDevTypes />
    <WebDevTech />
    <WebDevProcess />
  </>
);

export default AdsAndCampaignsSections;
