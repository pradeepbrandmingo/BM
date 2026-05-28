import React from "react";

const WoocommCtaBanner = () => {
  return (
    <>
      <style>{`
        /* ─── CTA Section ─── */
        .cta-section {
          position: relative;
          overflow: hidden;
          border-radius: 30px;
          margin: 0 0 80px;
          min-height: 360px;
          display: flex;
          align-items: center;
          background: linear-gradient(
            125deg,
            #e85c0d 0%,
            #ff6b1e 40%,
            #ff9a5c 75%,
            #ff6b1e 100%
          );
        }

        /* Decorative circles for depth */
        .cta-circle-1 {
          position: absolute;
          top: -90px; right: -90px;
          width: 360px; height: 360px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          pointer-events: none;
          z-index: 1;
        }

        .cta-circle-2 {
          position: absolute;
          bottom: -130px; right: 200px;
          width: 280px; height: 280px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          pointer-events: none;
          z-index: 1;
        }

        .cta-circle-3 {
          position: absolute;
          top: 50%; left: -70px;
          transform: translateY(-50%);
          width: 200px; height: 200px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          pointer-events: none;
          z-index: 1;
        }

        /* Subtle grid texture */
        .cta-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px);
          background-size: 56px 56px;
          z-index: 1;
          pointer-events: none;
        }

        /* ─── Inner ─── */
        .cta-inner {
          position: relative;
          z-index: 3;
          width: 100%;
          padding: 72px 65px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
        }

        .cta-left { flex: 1; }

        /* Eyebrow */
        .cta-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: var(--heading-font-family);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.75);
          margin-bottom: 20px;
        }

        .cta-eyebrow::before {
          content: "";
          width: 24px; height: 2px;
          background: rgba(255,255,255,0.6);
          border-radius: 2px;
          display: block;
        }

        /* Heading — uses your theme vars */
        .cta-heading {
          font-family: var(--heading-font-family);
          font-size: var(--h3-font-size);
          font-weight: 500;
          color: #ffffff;
          line-height: var(--line-height-heading);
          margin-bottom: 22px;
          letter-spacing: -0.5px;
          max-width: 680px;
        }

        /* Sub text */
        .cta-subtext {
          font-family: var(--body-font-family);
          font-size: var(--body-font-size);
          color: rgba(255,255,255,0.75);
          line-height: var(--body-line-height);
          margin-bottom: 38px;
          max-width: 520px;
        }

        /* ─── Buttons ─── */
        .cta-btn-wrap {
          display: flex;
          align-items: center;
          gap: 22px;
          flex-wrap: wrap;
        }

        /* Primary white button */
        .cta-main-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #ffffff;
          color: #e85c0d !important;
          font-family: var(--heading-font-family);
          font-size: 15px;
          font-weight: 700;
          padding: 17px 36px;
          border-radius: 100px;
          text-decoration: none;
          transition: all 0.38s cubic-bezier(0.165, 0.84, 0.44, 1);
          box-shadow: 0 8px 28px rgba(0,0,0,0.18);
          white-space: nowrap;
        }

        .cta-main-btn i {
          font-size: 13px;
          transition: transform 0.35s ease;
        }

        .cta-main-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.22);
          color: #c94d08 !important;
        }

        .cta-main-btn:hover i {
          transform: translateX(4px) rotate(-45deg);
        }

        /* Ghost secondary link */
        .cta-link {
          font-family: var(--heading-font-family);
          font-size: 14px;
          font-weight: 600;
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          border-bottom: 1px solid rgba(255,255,255,0.35);
          padding-bottom: 3px;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .cta-link i { font-size: 11px; transition: transform 0.3s ease; }

        .cta-link:hover {
          color: #fff;
          border-color: rgba(255,255,255,0.85);
        }

        .cta-link:hover i { transform: translateX(3px); }

        /* ─── Right Badges ─── */
        .cta-badges-col {
          display: flex;
          flex-direction: column;
          gap: 14px;
          flex-shrink: 0;
        }

        .cta-premium-badge {
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.22);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 18px;
          padding: 20px 26px;
          display: flex;
          align-items: center;
          gap: 18px;
          min-width: 230px;
          transition: all 0.35s ease;
        }

        .cta-premium-badge:hover {
          transform: translateX(-8px);
          background: rgba(255,255,255,0.2);
          border-color: rgba(255,255,255,0.4);
        }

        .badge-icon-box {
          width: 42px; height: 42px;
          background: rgba(255,255,255,0.2);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 17px;
          flex-shrink: 0;
        }

        .badge-info .val {
          display: block;
          font-family: var(--heading-font-family);
          font-size: 22px;
          font-weight: 800;
          color: #fff;
          line-height: 1;
          letter-spacing: -0.5px;
        }

        .badge-info .lbl {
          font-family: var(--body-font-family);
          font-size: 11.5px;
          color: rgba(255,255,255,0.65);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 4px;
          display: block;
        }

        /* ─── Responsive ─── */
        @media (max-width: 1200px) {
          .cta-badges-col { display: none; }
          .cta-inner { padding: 65px 44px; }
        }

        @media (max-width: 900px) {
          .cta-inner { padding: 58px 36px; }
          .cta-heading { font-size: clamp(22px, 4vw, 32px); }
        }

        @media (max-width: 768px) {
          .cta-section { border-radius: 20px; margin: 0 0 60px; }
          .cta-inner {
            padding: 54px 28px;
            flex-direction: column;
            text-align: center;
            align-items: center;
          }
          .cta-eyebrow { justify-content: center; }
          .cta-subtext { margin: 0 auto 34px; }
          .cta-btn-wrap { justify-content: center; }
          .cta-heading { max-width: 100%; }
        }

        @media (max-width: 480px) {
          .cta-section { border-radius: 16px; }
          .cta-inner { padding: 44px 22px; }
          .cta-btn-wrap { flex-direction: column; width: 100%; }
          .cta-main-btn { width: 100%; justify-content: center; padding: 15px 28px; }
          .cta-link { width: 100%; justify-content: center; }
        }
      `}</style>

      <div className="auto-container">
        <section className="cta-section">
          {/* Decorative layers */}
          <div className="cta-circle-1" />
          <div className="cta-circle-2" />
          <div className="cta-circle-3" />
          <div className="cta-grid" />

          <div className="cta-inner">
            {/* ── Left ── */}
            <div className="cta-left">
              <span className="cta-eyebrow">Free Consultation Available</span>

              <h3 className="cta-heading">
                Ready to Build a High-Performing
                <br className="d-none d-lg-block" />
                WooCommerce Store?
              </h3>

              <p className="cta-subtext">
                We create fast, scalable, and conversion-optimized WooCommerce
                stores that help you attract customers, increase sales, and grow
                your business online.
              </p>

              <div className="cta-btn-wrap">
                <a href="#contact" className="cta-main-btn">
                  Start Your Store
                  <i className="fas fa-arrow-right" />
                </a>
                <a href="#portfolio" className="cta-link">
                  View Our Work <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>

            {/* ── Right Badges ── */}
            <div className="cta-badges-col">
              <div className="cta-premium-badge">
                <div className="badge-icon-box">
                  <i className="fas fa-rocket" />
                </div>
                <div className="badge-info">
                  <span className="val">500+</span>
                  <span className="lbl">STORES BUILT</span>
                </div>
              </div>

              <div className="cta-premium-badge">
                <div className="badge-icon-box">
                  <i className="fas fa-check-circle" />
                </div>
                <div className="badge-info">
                  <span className="val">98%</span>
                  <span className="lbl">CLIENT SATISFACTION</span>
                </div>
              </div>

              <div className="cta-premium-badge">
                <div className="badge-icon-box">
                  <i className="fas fa-headset" />
                </div>
                <div className="badge-info">
                  <span className="val">24×7</span>
                  <span className="lbl">SUPPORT AVAILABLE</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WoocommCtaBanner;
