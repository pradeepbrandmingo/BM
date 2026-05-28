import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { FiStar, FiTrendingUp, FiAward } from "react-icons/fi";
import { HiUsers } from "react-icons/hi";
import "./Client.css";

const LEFT_CLIENTS = [
  { name: "Rahul Sharma", service: "Web Development" },
  { name: "Ananya Mehta", service: "Brand Strategy" },
  { name: "James Wilson", service: "SEO Services" },
  { name: "Priya Kapoor", service: "Social Media" },
  { name: "Lucas Ferreira", service: "UI/UX Design" },
];

const RIGHT_CLIENTS = [
  { name: "Riya Bose", service: "Influencer Ops" },
  { name: "Leo Santos", service: "CRO Services" },
  { name: "Tanvi Shah", service: "Brand Identity" },
  { name: "Arjun Das", service: "Performance Ads" },
  { name: "David Park", service: "SaaS Growth" },
];

const AVATAR_COLORS = [
  ["#ff6b1e", "#ff9340"],
  ["#e05500", "#ff6b1e"],
  ["#ff8c00", "#ffb347"],
  ["#cc4400", "#ff6b1e"],
];

function ClientCard({ name, service }) {
  const colorIdx = name.charCodeAt(0) % AVATAR_COLORS.length;
  const [from, to] = AVATAR_COLORS[colorIdx];
  return (
    <div className="cl-card">
      <div
        className="cl-avatar"
        style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
      >
        <span className="cl-avatar-letter">{name.charAt(0).toUpperCase()}</span>
      </div>
      <p className="cl-name">{name}</p>
      <p className="cl-service">{service}</p>
    </div>
  );
}

const SPEED = 0.7;

function MarqueeTrack({ clients, direction }) {
  const trackRef = useRef(null);
  const posRef = useRef(0);
  const repeated = [...clients, ...clients, ...clients, ...clients, ...clients];

  useEffect(() => {
    let animationFrameId;
    const el = trackRef.current;

    const animate = () => {
      const card = el.querySelector(".cl-card");
      if (!card) return;
      const gap = 24;
      const unitWidth = (card.offsetWidth + gap) * clients.length;

      if (direction === "to-center-from-left") {
        posRef.current += SPEED;
        if (posRef.current >= 0) posRef.current = -unitWidth;
      } else {
        posRef.current -= SPEED;
        if (posRef.current <= -unitWidth) posRef.current = 0;
      }

      el.style.transform = `translate3d(${posRef.current}px, 0, 0)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [clients.length, direction]);

  return (
    <div className="cl-marquee-track" ref={trackRef}>
      {repeated.map((c, i) => (
        <ClientCard key={`${direction}-${i}`} {...c} />
      ))}
    </div>
  );
}

export default function Client() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="cl-section" ref={ref}>
      <div className="cl-container">
        {/* ── Header ── */}
        <div className="cl-header">
          <motion.div
            className="cl-badge"
            initial={{ opacity: 0, y: 14, scale: 0.94 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <span className="cl-badge-dot" />
            <FiStar className="cl-badge-icon" />
            <span>Our Clients</span>
          </motion.div>

          <motion.h2
            className="cl-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.65,
              delay: 0.22,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            Trusted by Brands.
            <br />
            <span className="cl-heading-orange">
              Loved by Results.
              <span className="cl-heading-underline" />
            </span>
          </motion.h2>

          <motion.p
            className="cl-subtext"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.36, ease: "easeOut" }}
          >
            We're proud to partner with ambitious businesses and creators
            <br />
            who trust us to deliver impact that matters.
          </motion.p>

          <motion.div
            className="cl-header-divider"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={inView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        {/* ── Slider ── */}
        <motion.div
          className="cl-slider-section"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          {/* LEFT TRACK */}
          <div className="cl-track-wrapper cl-track-wrapper--left">
            <div className="cl-inner-fade cl-inner-fade--to-right" />
            <MarqueeTrack
              clients={LEFT_CLIENTS}
              direction="to-center-from-left"
            />
          </div>

          {/* RIGHT TRACK */}
          <div className="cl-track-wrapper cl-track-wrapper--right">
            <div className="cl-inner-fade cl-inner-fade--to-left" />
            <MarqueeTrack
              clients={RIGHT_CLIENTS}
              direction="to-center-from-right"
            />
          </div>

          {/* ── Center Stats Card ── */}
          <div className="cl-stats-center">
            <motion.div
              className="cl-stats-float"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Icon bubble — pops out from top */}
              <div className="cl-stats-icon-bubble">
                <HiUsers />
              </div>

              {/* Card body */}
              <div className="cl-stats-card">
                <p className="cl-stats-number">16.3K+</p>
                <p className="cl-stats-label">Happy Clients</p>
                <div className="cl-stats-bar">
                  <div className="cl-stats-bar-fill" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
