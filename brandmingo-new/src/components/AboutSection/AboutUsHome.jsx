import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiBarChart2,
  FiSend,
  FiTrendingUp,
  FiUsers,
  FiAward,
  FiClock,
  FiBriefcase,
  FiZap,
  FiMonitor,
} from "react-icons/fi";
import arrow from "../../assets/images/icons/right-arrow-1-2.png";
import "./AboutUsHome.css";
import { Link } from "react-router-dom";

/* ─── Data ───────────────────────────────────────────────── */
const SKILLS = [
  { label: "Marketing & Business Growth", value: 85, icon: <FiMonitor /> },
  { label: "Creativity & Innovation", value: 90, icon: <FiZap /> },
  { label: "Business & Project Management", value: 95, icon: <FiBarChart2 /> },
];

const STATS = [
  {
    icon: <FiBriefcase size={24} />,
    number: "3K+",
    label: "Successful Projects",
  },
  { icon: <FiUsers size={24} />, number: "200+", label: "Expert Team" },
  { icon: <FiUsers size={24} />, number: "350+", label: "Happy Customers" },
  { icon: <FiClock size={24} />, number: "16+", label: "Years of Experience" },
];

/* ─── Progress Bar ────────────────────────────────────────── */
function ProgressBar({ label, value, icon, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="au-skill-row"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="au-skill-header">
        <span className="au-skill-icon-wrap">{icon}</span>
        <span className="au-skill-label">{label}</span>
        <span className="au-skill-pct">{value}%</span>
      </div>
      <div className="au-bar-track">
        <motion.div
          className="au-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : {}}
          transition={{
            duration: 1.2,
            delay: 0.3 + index * 0.1,
            ease: "easeOut",
          }}
        />
      </div>
    </motion.div>
  );
}

/* ─── Stat Card ───────────────────────────────────────────── */
function StatCard({ icon, number, label, index }) {
  return (
    <motion.div
      className="au-stat-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
    >
      <span className="au-stat-icon">{icon}</span>
      <div className="au-stat-text">
        <span className="au-stat-number">{number}</span>
        <span className="au-stat-label">{label}</span>
      </div>
    </motion.div>
  );
}

/* ─── Main Component ─────────────────────────────────────── */
export default function AboutUsHome() {
  return (
    <section className="au-section">
      <div className="au-dot-grid" />

      <div className="au-container">
        {/* ── ABOUT US BADGE ── */}
        <motion.div
          className="au-badge-center-wrap"
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="au-badge-pill">
            <span className="au-badge-dot" />
            ABOUT US
            <span className="au-badge-dot" />
          </div>
        </motion.div>

        {/* ── TOP GRID ── */}
        <div className="au-grid">
          {/* ── LEFT ── */}
          <motion.div
            className="au-left"
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="au-heading">
              Empowering Your Success
              <br />
              with{" "}
              <span className="au-heading-highlight">Digital Expertise</span>
            </h2>
            <div className="au-heading-line" />

            {/* Images stack */}
            <div className="au-images-wrap">
              {/* Image 1 */}
              <motion.div
                className="au-img-card au-img-card--top"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.35 }}
              >
                <div className="au-img-inner au-img-1" />
                <motion.div
                  className="au-float-badge au-float-badge--tl"
                  animate={{ y: [0, -7, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FiBarChart2 />
                </motion.div>
              </motion.div>

              {/* Image 2 */}
              <motion.div
                className="au-img-card au-img-card--bot"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.35 }}
              >
                <div className="au-img-inner au-img-2" />
                <motion.div
                  className="au-float-badge au-float-badge--br"
                  animate={{ y: [0, 7, 0] }}
                  transition={{
                    duration: 3.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FiSend />
                </motion.div>
              </motion.div>

              {/* Rotating badge — between the two images on the right edge */}
              <div className="au-rotating-badge-wrap">
                <motion.div
                  className="au-rotating-ring"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <svg viewBox="0 0 200 200" className="au-ring-svg">
                    <defs>
                      <path
                        id="circle-text-au"
                        d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                      />
                    </defs>
                    <text className="au-ring-text">
                      <textPath href="#circle-text-au" startOffset="0%">
                        DRIVEN BY STRATEGY • FOCUSED ON RESULTS •
                      </textPath>
                    </text>
                  </svg>
                </motion.div>
                <motion.div
                  className="au-badge-inner"
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="au-badge-emoji">🔥</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT ── */}
          <motion.div
            className="au-right"
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Intro block */}
            <div className="au-intro-block">
              <span className="au-intro-icon-wrap">
                <FiSend className="au-intro-icon" />
              </span>
              <p className="au-intro-tagline">
                We don't just build websites or run campaigns.{" "}
                <strong>
                  We build digital solutions that{" "}
                  <span className="au-orange">drive real growth.</span>
                </strong>
              </p>
            </div>
            <p className="au-body-text">
              At Brandmingo, we combine creativity, technology, and data to help
              brands stand out, connect with the right audience, and achieve
              measurable success in the digital world.
            </p>
            {/* Skills */}
            <div className="au-skills">
              {SKILLS.map((s, i) => (
                <ProgressBar key={s.label} {...s} index={i} />
              ))}
            </div>
            {/* CTA */}
            <Link to="/about" className="btn-style-one" data-aos="fade-up">
              {" "}
              <span className="btn-arrow-left">
                <img src={arrow} alt="" />
              </span>
              <span className="btn-title">More About Us</span>
              <span className="btn-arrow-right">
                <img src={arrow} alt="" />
              </span>
            </Link>{" "}
          </motion.div>
        </div>

        {/* ── STATS BAR ── */}
        <div className="au-stats-bar">
          {STATS.map((s, i) => (
            <React.Fragment key={s.label}>
              <StatCard {...s} index={i} />
              {i < STATS.length - 1 && <div className="au-stats-divider" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
