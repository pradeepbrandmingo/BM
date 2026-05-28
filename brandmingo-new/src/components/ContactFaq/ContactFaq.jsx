import React, { useState, useEffect, useRef, useCallback, memo } from "react";
import "./Contactfaq.css";

/* ─────────────────────────────────────────
   ✏️  YOUR LOTTIE URL — swap this
───────────────────────────────────────── */
const LOTTIE_SRC =
  "https://lottie.host/8715ee53-4ff2-40bd-9d18-11438f5c8688/tzcArkUoyL.lottie";
// ↑ Replace with your paper-plane animation URL from LottieFiles

/* ─────────────────────────────────────────
   FAQ DATA
───────────────────────────────────────── */
const FAQS = [
  {
    q: "How long does it take to get a response?",
    a: "We typically respond to all inquiries within 24 business hours. For urgent projects, you can also reach us directly via WhatsApp for a faster reply.",
  },
  {
    q: "What types of projects do you work on?",
    a: "We work on a wide range of digital projects — including website development, e-commerce stores, brand identity, SEO, social media management, and performance marketing campaigns.",
  },
  {
    q: "Do you offer a free consultation?",
    a: "Yes! We offer a complimentary 30-minute strategy call to understand your business goals and see how we can help. No commitment required.",
  },
  {
    q: "How do I get started with Brandmingo?",
    a: "Simply fill out the contact form below or reach out via WhatsApp. Our team will get in touch to discuss your project and create a tailored proposal.",
  },
];

/* ─────────────────────────────────────────
   ACCORDION ITEM
───────────────────────────────────────── */
const FaqItem = memo(({ faq, index, isOpen, onToggle }) => {
  const answerId = `cfaq-answer-${index}`;
  const questionId = `cfaq-question-${index}`;

  return (
    <div
      className={`cfaq-item${isOpen ? " cfaq-item--open" : ""}`}
      style={{ "--delay": `${index * 0.08}s` }}
    >
      <button
        id={questionId}
        className="cfaq-trigger"
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={() => onToggle(index)}
      >
        {/* Icon */}
        <span className="cfaq-q-icon" aria-hidden="true">
          <i className="fa-solid fa-circle-question" />
        </span>

        {/* Question text */}
        <span className="cfaq-q-text">{faq.q}</span>

        {/* Chevron */}
        <span className="cfaq-chevron" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="16"
            height="16"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      {/* Answer panel */}
      <div
        id={answerId}
        role="region"
        aria-labelledby={questionId}
        className="cfaq-answer"
        hidden={!isOpen}
      >
        <p className="cfaq-answer-text">{faq.a}</p>
      </div>
    </div>
  );
});
FaqItem.displayName = "FaqItem";

/* ─────────────────────────────────────────
   RIGHT PANEL — Lottie + rings + text
───────────────────────────────────────── */
const RightPanel = memo(({ visible }) => (
  <div className={`cfaq-right${visible ? " cfaq-right--visible" : ""}`}>
    {/* Orbit rings */}
    <div className="cfaq-ring cfaq-ring--1" aria-hidden="true" />
    <div className="cfaq-ring cfaq-ring--2" aria-hidden="true" />
    <div className="cfaq-ring cfaq-ring--3" aria-hidden="true" />

    {/* Ambient center glow */}
    <div className="cfaq-glow" aria-hidden="true" />

    {/* Lottie animation */}
    <div className="cfaq-lottie-wrap" aria-hidden="true">
      <dotlottie-wc
        src={LOTTIE_SRC}
        autoplay
        loop
        style={{ width: "100%", height: "100%" }}
      />
    </div>

    {/* Motivational text */}
    <div className="cfaq-right-text">
      <p className="cfaq-right-headline">
        Let's turn <em>your ideas</em>
        <br />
        into <span className="cfaq-right-accent">reality.</span>
      </p>
      <p className="cfaq-right-sub">
        We're excited to help you build something amazing!
      </p>
    </div>

    {/* Floating dot particles */}
    {[
      { top: "14%", left: "18%", s: 3, d: "0s", dur: "4s" },
      { top: "72%", left: "72%", s: 2, d: "1.4s", dur: "5s" },
      { top: "55%", left: "12%", s: 2, d: "0.8s", dur: "3.8s" },
      { top: "25%", left: "80%", s: 2, d: "2.2s", dur: "4.5s" },
    ].map((p, i) => (
      <div
        key={i}
        className="cfaq-particle"
        aria-hidden="true"
        style={{
          top: p.top,
          left: p.left,
          width: p.s,
          height: p.s,
          animationDelay: p.d,
          animationDuration: p.dur,
        }}
      />
    ))}
  </div>
));
RightPanel.displayName = "RightPanel";

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */
const ContactFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [visible, setVisible] = useState(false);
  const [lottieReady, setLottieReady] = useState(false);
  const sectionRef = useRef(null);

  /* Toggle FAQ — only one open at a time */
  const handleToggle = useCallback((i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  }, []);

  /* IntersectionObserver — trigger animations when section enters viewport */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* Load Lottie Web Component script once — no duplicate loads */
  useEffect(() => {
    const SCRIPT_ATTR = "data-dotlottie-wc";
    if (document.querySelector(`script[${SCRIPT_ATTR}]`)) {
      setLottieReady(true);
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@lottiefiles/dotlottie-wc@0.9.10/dist/dotlottie-wc.js";
    script.type = "module";
    script.setAttribute(SCRIPT_ATTR, "true");
    script.onload = () => setLottieReady(true);
    document.head.appendChild(script);
  }, []);

  return (
    <section
      className={`cfaq-section${visible ? " cfaq-section--visible" : ""}`}
      ref={sectionRef}
      aria-label="Frequently Asked Questions"
    >
      {/* Background orbs */}
      <div className="cfaq-bg" aria-hidden="true">
        <div className="cfaq-bg-orb cfaq-bg-orb--1" />
        <div className="cfaq-bg-orb cfaq-bg-orb--2" />
      </div>

      <div className="cfaq-container">
        <div className="cfaq-grid">
          {/* ── LEFT — FAQ ── */}
          <div className="cfaq-left">
            {/* Section label */}
            <div className="cfaq-eyebrow" aria-hidden="true">
              <span className="cfaq-eyebrow-dot" />
              Got Questions?
            </div>

            {/* Heading */}
            <h2 className="cfaq-heading">
              Frequently Asked{" "}
              <span className="cfaq-heading-accent">Questions</span>
              <span className="cfaq-heading-dot" aria-hidden="true" />
            </h2>

            {/* Accordion */}
            <div className="cfaq-list" role="list">
              {FAQS.map((faq, i) => (
                <FaqItem
                  key={i}
                  faq={faq}
                  index={i}
                  isOpen={openIndex === i}
                  onToggle={handleToggle}
                />
              ))}
            </div>
          </div>

          {/* ── RIGHT — Lottie + text ── */}
          {lottieReady && <RightPanel visible={visible} />}
        </div>
      </div>
    </section>
  );
};

export default ContactFaq;
