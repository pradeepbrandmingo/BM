import React, { useEffect, useRef, useState } from "react";
// import "./webdev-extra.css";

/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */

const DIFF_FEATURES = [
  {
    fa: "fa-solid fa-bullseye",
    title: "Highly Targeted Strategy",
    desc: "Reach the right customers with precise product and audience targeting.",
  },
  {
    fa: "fa-solid fa-chart-line",
    title: "ROI-Focused Growth",
    desc: "Optimized to maximize sales and return on every investment.",
  },
  {
    fa: "fa-solid fa-chart-pie",
    title: "Data-Driven Optimization",
    desc: "Continuous analysis and improvements to boost store performance.",
  },
  {
    fa: "fa-solid fa-cart-shopping",
    title: "Conversion-Focused Approach",
    desc: "Designed to turn visitors into paying customers consistently.",
  },
  {
    fa: "fa-solid fa-sliders",
    title: "Easy Store Management",
    desc: "Transparent reporting and simple insights for better decisions.",
  },
];

const ECOM_ALLOWS = [
  "Increase conversions & sales",
  "Manage products efficiently",
  "Target the right customers",
  "Scale your business faster",
];

const ECOM_PROVIDES = [
  "Product & catalog management",
  "Store optimization & UX improvement",
  "Order & inventory management",
  "Performance tracking & scaling",
];

const PLATFORMS = [
  {
    fa: "fa-solid fa-box",
    title: "Product Optimization",
    sub: "BEST FOR",
    desc: "Improving listings & product performance",
  },
  {
    fa: "fa-solid fa-screwdriver-wrench",
    title: "Store Optimization",
    sub: "BEST FOR",
    desc: "Speed, UX & conversion improvements",
  },
  {
    fa: "fa-solid fa-cart-shopping",
    title: "Sales & Order Management",
    sub: "BEST FOR",
    desc: "Handling orders & increasing efficiency",
  },
  {
    fa: "fa-solid fa-chart-line",
    title: "Performance Scaling",
    sub: "BEST FOR",
    desc: "Boosting sales & revenue growth",
  },
];
const FAQS = [
  {
    fa: "fa-solid fa-store",
    q: "What ecommerce services do you offer?",
    a: "We handle product management, store optimization, inventory, order management, and performance tracking to grow your sales.",
  },
  {
    fa: "fa-solid fa-chart-line",
    q: "Which ecommerce strategy is best for my business?",
    a: "It depends on your goals — we choose the right approach based on your products, audience, and growth stage.",
  },
  {
    fa: "fa-solid fa-clock",
    q: "How soon can I see results from ecommerce management?",
    a: "You can start seeing improvements in performance and conversions within weeks, with steady growth over time.",
  },
  {
    fa: "fa-solid fa-gear",
    q: "How do you increase sales and conversions?",
    a: "We optimize product listings, improve store UX, analyze data, and continuously refine strategies for better results.",
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
              What Makes Our Ecommerce <span>Different?</span>
            </h3>
            <p className="wde-desc">
              Most stores get traffic — but don’t convert. We focus on
              performance. Our ecommerce strategies are built to drive real
              sales, higher conversions, and measurable growth for your
              business.
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
                If your store is not converting, <em>— you’re losing </em>
                potential sales.
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
            <div className="wds-section-label">GROW YOUR BUSINESS</div>
            <h3 className="wdec-heading">
              Do You Need
              <span>Ecommerce Management?</span>
            </h3>
            <div className="wdec-divider" />
            <p className="wdec-desc">
              If your store is not performing and relying only on ads — you're
              limiting your growth. Ecommerce management helps you optimize your
              store, increase conversions, and generate consistent sales over
              time.
            </p>
          </div>

          {/* Right — two cards */}
          <div className="wdec-cards">
            <div
              className={`wdec-card${visible ? " wde-anim" : ""}`}
              style={visible ? { animationDelay: "0.1s" } : {}}
            >
              <div className="wdec-card-icon">
                <i className="fa-solid fa-cart-shopping" />
              </div>
              <h4>
                Ecommerce Management<span>Allows You To:</span>
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
              <h4>We Provide:</h4>
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
              Which Ecommerce Strategy is<span>Best</span> for You?
            </h3>
            <p className="wdpl-desc">
              Choosing the right ecommerce strategy is crucial. Every store
              needs a different approach — and using the wrong one can limit
              your growth. We help you choose the right path for maximum sales
              and performance.
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
                The right ecommerce strategy depends on your goals — and we help
                you scale in the right direction from day one.
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
const EcomManagementExtra = () => (
  <>
    <WebDevDiff />
    <WebDevEcom />
    <WebDevPlatform />
    <WebDevFaq />
  </>
);

export default EcomManagementExtra;
