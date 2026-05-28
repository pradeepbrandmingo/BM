import React, { useEffect, useRef, useState } from "react";
// import "./webdev-extra.css";

/* ══════════════════════════════════════════
   DATA
══════════════════════════════════════════ */

const DIFF_FEATURES = [
  {
    fa: "fa-solid fa-mobile-screen",
    title: "Mobile Responsive",
    desc: "Deliver a seamless and consistent experience across all screen sizes, ensuring your website performs perfectly on mobile, tablet, and desktop.",
  },
  {
    fa: "fa-solid fa-magnifying-glass",
    title: "SEO Optimized",
    desc: "Structured with clean code, fast loading speed, and SEO best practices to improve visibility and rankings on search engines.",
  },
  {
    fa: "fa-solid fa-bolt",
    title: "High Performance",
    desc: "Optimized for speed and efficiency to reduce load times, improve engagement, and enhance overall user experience.",
  },
  {
    fa: "fa-solid fa-bullseye",
    title: "Conversion Focused",
    desc: "Strategically designed layouts and user journeys that guide visitors toward taking action — turning traffic into real customers.",
  },
  {
    fa: "fa-solid fa-sliders",
    title: "Easy to Manage",
    desc: "User-friendly backend systems that allow you to update content, manage data, and control your website without technical complexity.",
  },
];

const ECOM_ALLOWS = [
  "Sell your products 24/7 without interruptions",
  " Accept secure online payments instantly",
  "Manage orders, inventory, and customers efficiently",
  "Expand your reach beyond your local market",
];

const ECOM_PROVIDES = [
  "Complete Shopify or custom store setup",
  "Secure payment gateway integration",
  "Product, inventory, and order management systems",
  "Conversion-focused UI/UX design for higher sales",
];

const PLATFORMS = [
  {
    fa: "fa-brands fa-shopify",
    title: "Shopify",
    sub: "BEST FOR",
    desc: "Product-based businesses & online stores",
  },
  {
    fa: "fa-brands fa-wordpress",
    title: "WordPress",
    sub: "BEST FOR",
    desc: "Service-based websites, blogs, and SEO-focused businesses",
  },
  {
    fa: "fa-brands fa-react",
    title: "React",
    sub: "BEST FOR",
    desc: "High-performance websites & advanced user interfaces",
  },
  {
    fa: "fa-solid fa-code",
    title: "Custom Dev",
    sub: "BEST FOR",
    desc: " Unique business models & advanced functionality",
  },
];

const FAQS = [
  {
    fa: "fa-solid fa-circle-question",
    q: " What types of websites do you develop?",
    a: "We develop a wide range of websites including business websites, eCommerce stores, portfolio websites, landing pages, and custom web applications. Each solution is tailored to your specific business goals and audience.",
  },
  {
    fa: "fa-solid fa-layer-group",
    q: " Which platform is best for my business Shopify, WordPress, or React?",
    a: "The right platform depends on your business needs. Shopify is ideal for eCommerce, WordPress works best for service-based and content-driven websites, and React is perfect for high-performance, custom web applications. We guide you in choosing the most suitable platform.",
  },
  {
    fa: "fa-solid fa-mobile-screen",
    q: "Will my website be mobile-friendly and SEO optimized?",
    a: "Yes, all our websites are fully responsive and built using SEO best practices. We ensure fast loading speed, clean code structure, and proper optimization to improve your search engine visibility.",
  },
  {
    fa: "fa-solid fa-gear",
    q: " What is your web development process?",
    a: "Our process includes understanding your business, planning the structure, designing UI/UX, development, testing, and final launch. This ensures your website is delivered with high performance, usability, and quality.",
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
              What Sets Our
              <span> Websites Apart</span>
            </h3>
            <p className="wde-desc">
              Most websites look good but fail to deliver results. We focus on
              building performance-driven websites that not only represent your
              brand but actively contribute to your business growth. Every
              element is designed with purpose, strategy, and user behavior in
              mind.
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
                A website should do more than exist conversions,
                <em> it should actively drive leads,</em> and business growth.
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
              Ready to Take Your Business <span>Online with E-commerce?</span>
            </h3>
            <div className="wdec-divider" />
            <p className="wdec-desc">
              If you're still relying only on offline sales, you're missing out
              on massive growth opportunities. An eCommerce website allows you
              to sell your products anytime, reach a wider audience, and scale
              your business without limitations.
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
                An E-commerce Website <span>You Can:</span>
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
            <div className="wds-section-label">Choose What’s Right</div>
            <h3 className="wdpl-heading">
              Which Platform is
              <span> Right</span> for Your Business?
            </h3>
            <p className="wdpl-desc">
              Choosing the right platform is crucial for your website’s
              performance and long-term growth. Each platform serves a different
              purpose — and selecting the wrong one can cost time, money, and
              opportunities. We help you make the right decision based on your
              business goals, scalability needs, and budget.
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
                Tailor-made solutions built specifically for your requirements,
                offering complete flexibility, control, and scalability.
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
const WebDevExtra = () => (
  <>
    <WebDevDiff />
    <WebDevEcom />
    <WebDevPlatform />
    <WebDevFaq />
  </>
);

export default WebDevExtra;
