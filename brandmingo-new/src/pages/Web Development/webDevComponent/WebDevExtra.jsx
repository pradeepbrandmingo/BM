import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const DIFF_FEATURES = [
  {
    fa: "fa-solid fa-mobile-screen",
    title: "Mobile Responsive",
    desc: "Seamless website experience across mobile, tablet, and desktop devices.",
  },
  {
    fa: "fa-solid fa-magnifying-glass",
    title: "SEO Optimized",
    desc: "Built with clean structure and SEO best practices to improve online visibility.",
  },
  {
    fa: "fa-solid fa-bolt",
    title: "High Performance",
    desc: "Fast-loading websites optimized for speed, engagement, and smooth user experience.",
  },
  {
    fa: "fa-solid fa-bullseye",
    title: "Conversion Focused",
    desc: "Strategic layouts designed to turn visitors into leads and paying customers.",
  },
  {
    fa: "fa-solid fa-sliders",
    title: "Easy to Manage",
    desc: "User-friendly backend systems that make website management simple and hassle-free.",
  },
];

const ECOM_ALLOWS = [
  "Sell your products 24/7",
  "Accept secure online payments",
  "Manage orders and inventory easily",
  "Reach customers beyond your local market",
];

const ECOM_PROVIDES = [
  "Complete Shopify and custom store setup",
  "Secure payment gateway integration",
  "Inventory and order management systems",
  "Conversion-focused UI/UX design for better sales",
];

const PLATFORMS = [
  {
    fa: "fa-brands fa-shopify",
    title: "Shopify",
    sub: "BEST FOR",
    desc: "Product-based businesses and online stores.",
    link: "/shopify",
  },
  {
    fa: "fa-brands fa-wordpress",
    title: "WordPress",
    sub: "BEST FOR",
    desc: "Service-based websites, blogs, and SEO-focused businesses.",
    link: "/wordpress",
  },
  {
    fa: "fa-brands fa-react",
    title: "React",
    sub: "BEST FOR",
    desc: "High-performance websites and advanced user experiences",
    link: "/react",
  },
  {
    fa: "fa-solid fa-code",
    title: "Custom Dev",
    sub: "BEST FOR",
    desc: " Businesses that need custom features and scalable web solutions.",
    link: "/crm-development",
  },
];

const FAQS = [
  {
    fa: "fa-solid fa-circle-question",
    q: " What types of websites do you develop?",
    a: "We develop business websites, eCommerce stores, portfolio websites, landing pages, custom web applications, booking platforms, and SEO-focused websites tailored to different industries and business goals.",
  },
  {
    fa: "fa-solid fa-layer-group",
    q: " Which platform is best for my business: Shopify, WordPress, or React?",
    a: "It depends on your business requirements. Shopify is ideal for online stores, WordPress works best for service-based and content-focused websites, while React is perfect for high-performance and custom web applications with advanced functionality.",
  },
  {
    fa: "fa-solid fa-mobile-screen",
    q: "Will my website be mobile-friendly and SEO optimized?",
    a: "Yes. Every website we build is fully responsive and optimized for speed, mobile devices, clean code structure, and SEO best practices to help improve visibility and user experience.",
  },
  {
    fa: "fa-solid fa-gear",
    q: "What is your web development process?",
    a: "Our process includes business research, planning, UI/UX design, development, testing, optimization, and launch. We focus on creating websites that are visually strong, technically reliable, and built for long-term growth.",
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
              We build websites that are not just visually impressive but
              strategically designed to improve performance, engagement, and
              business growth.
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
                A website should do more than just exist.
                <em> It should actively generate leads</em> and drive business
                growth.
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
              Ready to Take Your Business
              <span>Online with eCommerce?</span>
            </h3>
            <div className="wdec-divider" />
            <p className="wdec-desc">
              An eCommerce website helps you sell products online, reach more
              customers, and grow your business without location or time
              limitations.
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
  const navigate = useNavigate();
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
              Choosing the right platform plays a huge role in your website’s
              performance, scalability, and future growth. We help you choose
              the best solution based on your business goals and requirements.
            </p>
          </div>

          {/* Right — 2×2 grid + full-width note below */}
          <div className="wdpl-right">
            <div className="wdpl-cards">
              {PLATFORMS.map((p, i) => (
                <div
                  key={i}
                  className={`wdpl-card${visible ? " wde-anim" : ""}`}
                  onClick={() => navigate(p.link)}
                  role="button"
                  tabIndex={0}
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
                Tailor-made web solutions built for flexibility, performance,
                and long-term business growth.
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
        <div className="wds-section-label">QUESTIONS? WE’VE GOT ANSWERS</div>
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
