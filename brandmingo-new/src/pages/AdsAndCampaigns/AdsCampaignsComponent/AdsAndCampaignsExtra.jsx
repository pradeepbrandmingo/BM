import React, { useEffect, useRef, useState } from "react";
// import "./webdev-extra.css";

/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */

const DIFF_FEATURES = [
  {
    fa: "fa-solid fa-bullseye",
    title: "Highly Targeted Ads",
    desc: "Reach the right audience with precise targeting strategies.",
  },
  {
    fa: "fa-solid fa-chart-line",
    title: "ROI-Focused Campaigns",
    desc: "Optimized to maximize return on every rupee spent.",
  },
  {
    fa: "fa-solid fa-chart-pie",
    title: "Data-Driven Optimization",
    desc: "Continuous analysis and improvements for better performance.",
  },
  {
    fa: "fa-solid fa-bullhorn",
    title: "Conversion-Focused Strategy",
    desc: "Designed to turn clicks into leads and paying customers.",
  },
  {
    fa: "fa-solid fa-sliders",
    title: "Easy Campaign Management",
    desc: "Transparent reporting and easy-to-understand insights.",
  },
];

const ECOM_ALLOWS = [
  "Get immediate visibility and targeted traffic",
  "Generate consistent leads and sales",
  "Reach the right audience with precision targeting",
  " Scale your business with data-driven strategies",
];

const ECOM_PROVIDES = [
  "Complete Google Ads & Meta Ads setup",
  "Advanced audience targeting and campaign strategy",
  "High-converting ad creatives and copy",
  "Continuous tracking, optimization, and scaling",
];

const PLATFORMS = [
  {
    fa: "fa-brands fa-google",
    title: "Google Ads",
    sub: "BEST FOR",
    desc: "High-intent leads & search-driven traffic",
  },
  {
    fa: "fa-brands fa-facebook",
    title: "Meta Ads",
    sub: "BEST FOR",
    desc: "Audience targeting & brand awareness",
  },
  {
    fa: "fa-brands fa-youtube",
    title: "YouTube Ads",
    sub: "BEST FOR",
    desc: "Video marketing & brand storytelling",
  },
  {
    fa: "fa-brands fa-linkedin",
    title: "LinkedIn Ads",
    sub: "BEST FOR",
    desc: " B2B leads & professional targeting",
  },
];

const FAQS = [
  {
    fa: "fa-solid fa-bullhorn",
    q: "What platforms do you run ads on?",
    a: "We run campaigns across all major advertising platforms including Google Ads, Meta Ads (Facebook & Instagram), YouTube Ads, and LinkedIn Ads. The platform we choose depends on your business goals, target audience, and campaign objectives.",
  },
  {
    fa: "fa-solid fa-chart-line",
    q: "Which ad platform is best for my business?",
    a: "It depends on your goals. Google Ads works best for high-intent searches, Meta Ads are ideal for audience targeting and brand awareness, YouTube is great for video marketing, and LinkedIn is effective for B2B campaigns. We help you choose the right platform for maximum ROI.",
  },
  {
    fa: "fa-solid fa-clock",
    q: "How soon can I see results from ads?",
    a: "Paid ads can start generating traffic and leads within a few days of launch. However, optimal performance and consistent ROI usually improve over time as campaigns are tested, optimized, and scaled.",
  },
  {
    fa: "fa-solid fa-gear",
    q: " How do you optimize campaigns for better ROI?",
    a: "We continuously monitor performance, test different creatives and audiences, optimize bidding strategies, and refine targeting to reduce costs and improve conversions. Our focus is on maximizing results while minimizing wasted ad spend.",
  },
];

/* ── shared intersection hook ── */
const useVisible = (threshold = 0.1) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return [ref, visible];
};

/* ══════════════════════════════════════════
   SECTION 1 — What Makes Our Websites Different
══════════════════════════════════════════ */
const WebDevDiff = () => {
  const [ref, visible] = useVisible(0.08);
  return (
    <section className="wde" ref={ref}>
      <div className="wde-container">
        <div className="wde-grid">
          {/* Left */}
          <div className="wde-left">
            <div className="wds-section-label">OUR PROMISE</div>
            <h3 className="wde-heading">
              What Makes Campaigns
              <span> Stand Out</span>
            </h3>
            <p className="wde-desc">
              Most campaigns generate clicks but fail to convert. We focus on
              performance, not vanity metrics. Every campaign we run is built to
              generate real leads, drive sales, and deliver measurable return on
              investment for your business.
            </p>
            <div className="wde-gradient-bar" />
          </div>

          {/* Right */}
          <div className="wde-right">
            <div className="wde-features">
              {DIFF_FEATURES.map((f, i) => (
                <div
                  key={i}
                  className={`wde-feat${visible ? " wde-anim" : ""}`}
                  style={visible ? { animationDelay: `${i * 0.1}s` } : {}}
                >
                  <div className="wde-feat-icon">
                    <i className={f.fa} />
                  </div>
                  <div className="wde-feat-body">
                    <h5>{f.title}</h5>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="wde-note">
              <div className="wde-note-icon">
                <i className="fa-solid fa-rocket" />
              </div>
              <p>
                If your ads are <em>not converting</em>, — you're wasting
                budget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════
   SECTION 2 — E-commerce
══════════════════════════════════════════ */
const WebDevEcom = () => {
  const [ref, visible] = useVisible(0.08);
  return (
    <section className="wdec" ref={ref}>
      <div className="wdec-container">
        <div className="wdec-grid">
          {/* Left */}
          <div className="wdec-left">
            <div className="wds-section-label">Grow Your Business</div>
            <h3 className="wdec-heading">
              Ready to Scale with Ads &<span> Campaigns?</span>
            </h3>
            <div className="wdec-divider" />
            <p className="wdec-desc">
              If you’re relying only on organic reach, you’re leaving growth on
              the table. Paid campaigns put your business in front of the right
              audience instantly helping you generate consistent leads, increase
              sales, and scale faster with measurable results.
            </p>
          </div>

          {/* Right — two cards */}
          <div className="wdec-cards">
            <div
              className={`wdec-card${visible ? " wde-anim" : ""}`}
              style={visible ? { animationDelay: "0.1s" } : {}}
            >
              <div className="wdec-card-icon">
                <i className="fa-solid fa-bullhorn" />
              </div>
              <h4>
                Ads & Campaigns <span>Help You:</span>
              </h4>
              <ul className="wdec-list">
                {ECOM_ALLOWS.map((item, i) => (
                  <li key={i}>
                    <i className="fa-solid fa-arrow-right" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`wdec-card${visible ? " wde-anim" : ""}`}
              style={visible ? { animationDelay: "0.2s" } : {}}
            >
              <div className="wdec-card-icon">
                <i className="fa-solid fa-gift" />
              </div>
              <h4>What We Deliver:</h4>
              <ul className="wdec-list wdec-list--dot">
                {ECOM_PROVIDES.map((item, i) => (
                  <li key={i}>
                    <i className="fa-solid fa-circle" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════
   SECTION 3 — Which Platform is Best
   Desktop: Left sticky col | Right 2×2 grid + full-width note
   Mobile: stacked single col
══════════════════════════════════════════ */
const WebDevPlatform = () => {
  const [ref, visible] = useVisible(0.08);
  return (
    <section className="wdpl" ref={ref}>
      <div className="wdpl-container">
        <div className="wdpl-grid">
          {/* Left */}
          <div className="wdpl-left">
            <div className="wds-section-label">CHOOSE WHAT’S RIGHT</div>
            <h3 className="wdpl-heading">
              Which Ad Platform Fits <span>Your</span> Goals?
            </h3>
            <p className="wdpl-desc">
              Choosing the right advertising platform can make or break your
              results. Each platform serves a different purpose and investing in
              the wrong one can waste both time and budget. We help you identify
              the best channel based on your business model, audience behavior,
              and growth objectives.
            </p>
          </div>

          {/* Right — 2×2 grid + full-width note below */}
          <div className="wdpl-right">
            <div className="wdpl-cards">
              {PLATFORMS.map((p, i) => (
                <div
                  key={i}
                  className={`wdpl-card${visible ? " wde-anim" : ""}`}
                  style={visible ? { animationDelay: `${i * 0.1}s` } : {}}
                >
                  {/* Icon + text */}
                  <div className="wdpl-card-inner">
                    <div className="wdpl-card-icon">
                      <i className={p.fa} />
                    </div>
                    <div className="wdpl-card-body">
                      <h5>{p.title}</h5>
                      <span className="wdpl-sub">{p.sub}</span>
                      <p>{p.desc}</p>
                    </div>
                  </div>
                  {/* Arrow */}
                  <div className="wdpl-arrow">
                    <i className="fa-solid fa-arrow-right" />
                  </div>
                </div>
              ))}
            </div>

            {/* Full-width note below the 2×2 grid */}
            <div
              className={`wdpl-note${visible ? " wde-anim" : ""}`}
              style={visible ? { animationDelay: "0.45s" } : {}}
            >
              <div className="wdpl-note-icon">
                <i className="fa-solid fa-lightbulb" />
              </div>
              <p>
                The right platform isn’t about popularity, it's about where your
                ideal customers are and how they take action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════
   SECTION 4 — FAQ (DARK accordion)
══════════════════════════════════════════ */
const WebDevFaq = () => {
  const [ref, visible] = useVisible(0.08);
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section className="wdfq" ref={ref}>
      <div className="wdfq-container">
        <div className="wds-section-label">QUESTIONS? WE'VE GOT ANSWERS</div>
        <h3 className="wdfq-heading">Frequently Asked Questions</h3>

        <div className="wdfq-list">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`wdfq-item${open === i ? " open" : ""}${visible ? " wde-anim" : ""}`}
              style={visible ? { animationDelay: `${i * 0.1}s` } : {}}
              onClick={() => toggle(i)}
            >
              <div className="wdfq-q">
                <div className="wdfq-icon">
                  <i className={faq.fa} />
                </div>
                <span>{faq.q}</span>
                <div className="wdfq-plus">
                  <i
                    className={`fa-solid ${open === i ? "fa-minus" : "fa-plus"}`}
                  />
                </div>
              </div>
              {open === i && (
                <div className="wdfq-a">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════
   DEFAULT EXPORT
══════════════════════════════════════════ */
const AdsAndCampaignsExtra = () => (
  <>
    <WebDevDiff />
    <WebDevEcom />
    <WebDevPlatform />
    <WebDevFaq />
  </>
);

export default AdsAndCampaignsExtra;
