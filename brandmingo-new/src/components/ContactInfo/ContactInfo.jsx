import React, { useEffect, useRef, useState } from "react";
import "./ContactInfo.css";

const ContactInfo = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  const handleCalendly = () => {
    window.open(
      "https://calendly.com/itsbrandmingo/30min",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      className={`ci-section${visible ? " ci-section--visible" : ""}`}
      ref={sectionRef}
      aria-label="Contact information"
    >
      <div className="ci-container">
        {/* ── Top Banner — Not Ready ── */}
        <div className="ci-banner">
          <div className="ci-banner-left">
            <h3 className="ci-banner-title">Not ready to fill the form?</h3>
            <p className="ci-banner-desc">
              No worries! You can reach out to us directly through any of these
              channels.
            </p>
          </div>
          <button
            className="ci-calendly-btn"
            onClick={handleCalendly}
            aria-label="Schedule a call on Calendly"
          >
            <span>Schedule a Call</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </button>
        </div>

        {/* ── Bottom — Other Ways ── */}
        <div className="ci-ways">
          <div className="ci-ways-heading">
            <h3 className="ci-ways-title">Other Ways to Reach Us</h3>
            <span className="ci-ways-dot" aria-hidden="true" />
          </div>

          <div className="ci-cards">
            {/* Office */}
            <div className="ci-card" style={{ transitionDelay: "0.1s" }}>
              <div className="ci-card-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="ci-card-body">
                <strong className="ci-card-label">Our Office</strong>

                <a
                  href="https://maps.google.com/?q=B-806,+8th+Floor,+Ithum+Tower,+Block+A,+Sector+62,+Noida,+Uttar+Pradesh+201301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ci-card-text ci-card-link"
                  aria-label="Open office location in Google Maps"
                >
                  B-806, 8th Floor, Ithum Tower,
                  <br />
                  Block A, Sector 62, Noida,
                  <br />
                  Uttar Pradesh 201301
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="ci-card" style={{ transitionDelay: "0.2s" }}>
              <div className="ci-card-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div className="ci-card-body">
                <strong className="ci-card-label">Email Us</strong>
                <a
                  href="mailto:hello@brandmingo.com"
                  className="ci-card-text ci-card-link"
                >
                  hello@brandmingo.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="ci-card" style={{ transitionDelay: "0.3s" }}>
              <div className="ci-card-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z" />
                </svg>
              </div>
              <div className="ci-card-body">
                <strong className="ci-card-label">Call Us</strong>
                <a
                  href="tel:+919990613140"
                  className="ci-card-text ci-card-link"
                >
                  +91 99906 13140
                </a>
                <a
                  href="tel:+918799719725"
                  className="ci-card-text ci-card-link"
                >
                  +91 87997 19725
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="ci-card" style={{ transitionDelay: "0.4s" }}>
              <div className="ci-card-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
              </div>
              <div className="ci-card-body">
                <strong className="ci-card-label">Working Hours</strong>
                <span className="ci-card-text">
                  Mon – Sat: 10:00 AM – 7:00 PM
                </span>
                <span className="ci-card-text ci-card-closed">
                  Sunday: Closed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
