import React from "react";
import { motion } from "framer-motion";
import {
  FiShield,
  FiTrendingUp,
  FiAward,
  FiBarChart2,
  FiZap,
  FiRadio,
  FiSearch,
  FiPenTool,
  FiStar,
  FiTarget,
} from "react-icons/fi";
import "./WhyChooseUs.css";

/* ─── Data ───────────────────────────────────────────────── */
const FEATURES = [
  {
    icon: <FiShield size={30} />,
    title: "Certified Experts",
    desc: "Our team includes experienced designers, developers, marketers, and strategists who understand how to build digital experiences that drive real business impact.",
  },
  {
    icon: <FiTrendingUp size={30} />,
    title: "Proven Results",
    desc: "We focus on growth-oriented solutions that improve website performance, generate quality leads, increase engagement, and support long-term scalability.",
  },
  {
    icon: <FiAward size={30} />,
    title: "Award Winning",
    desc: "From branding and UI/UX to development and digital campaigns, our creative-first process helps businesses stand out in competitive markets.",
  },
  {
    icon: <FiBarChart2 size={30} />,
    title: "Transparent Reporting",
    desc: "We believe in honesty and clarity with real-time reports and data-driven insights.",
  },
];

const SERVICES = [
  { icon: <FiZap size={22} />, label: "Performance Marketing" },
  { icon: <FiRadio size={22} />, label: "Social Media Marketing" },
  { icon: <FiSearch size={22} />, label: "Search Engine Optimization" },
  { icon: <FiPenTool size={22} />, label: "Content Marketing" },
];

/* ─── Feature Card ───────────────────────────────────────── */
function FeatureCard({ icon, title, desc, index }) {
  return (
    <motion.div
      className="wcu-feat-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.22 } }}
    >
      <div className="wcu-feat-icon-wrap">{icon}</div>
      <h4 className="wcu-feat-title">{title}</h4>
      <div className="wcu-feat-line" />
      <p className="wcu-feat-desc">{desc}</p>
    </motion.div>
  );
}

/* ─── Main Component ─────────────────────────────────────── */
export default function WhyChooseUs() {
  return (
    <div className="wcu-outer">
      <section className="wcu-section">
        <div className="wcu-container">
          {/* ── TOP GRID ── */}
          <div className="wcu-grid">
            {/* ── LEFT ── */}
            <motion.div
              className="wcu-left"
              initial={{ opacity: 0, x: -48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Badge */}
              <div className="wcu-badge-pill">
                <span className="wcu-badge-dot" />
                WHY CHOOSE US
              </div>

              {/* Heading */}
              <h2 className="wcu-heading">
                Why Choose
                <br />
                <span className="wcu-heading-brand">BRANDMINGO??</span>
              </h2>

              {/* Para */}
              <p className="wcu-para">
                At Brandmingo, we combine strategy, creativity, technology, and
                performance marketing to deliver digital solutions that help
                businesses grow faster, build stronger online visibility, and
                achieve measurable results.
              </p>

              {/* Image collage */}
              <div className="wcu-images-wrap">
                {/* Top image — full width */}
                <motion.div
                  className="wcu-img-card wcu-img-card--top"
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="wcu-img-inner wcu-img-1" />
                </motion.div>

                {/* Bottom row */}
                <div className="wcu-bottom-row">
                  <motion.div
                    className="wcu-img-card wcu-img-card--bot"
                    whileHover={{ scale: 1.015 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="wcu-img-inner wcu-img-2" />
                  </motion.div>
                  <div className="wcu-orange-block">
                    <div className="wcu-orange-dots" />
                  </div>
                </div>

                {/* Floating star badge */}
                <motion.div
                  className="wcu-float-badge"
                  animate={{ y: [0, -9, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <FiStar size={22} />
                </motion.div>

                {/* Rotating circular badge */}
                <div className="wcu-rotating-wrap">
                  <motion.div
                    className="wcu-rotating-ring"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 18,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <svg viewBox="0 0 200 200" className="wcu-ring-svg">
                      <defs>
                        <path
                          id="wcu-circle-path"
                          d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                        />
                      </defs>
                      <text className="wcu-ring-text">
                        <textPath href="#wcu-circle-path" startOffset="0%">
                          FOCUSED ON RESULTS • DRIVEN BY STRATEGY •
                        </textPath>
                      </text>
                    </svg>
                  </motion.div>
                  <motion.div
                    className="wcu-ring-center"
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <FiTarget size={22} className="wcu-ring-icon" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* ── RIGHT ── */}
            <motion.div
              className="wcu-right"
              initial={{ opacity: 0, x: 48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="wcu-feat-grid">
                {FEATURES.map((f, i) => (
                  <FeatureCard key={f.title} {...f} index={i} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── SERVICES BAR ── */}
        <div className="wcu-svc-bar">
          <div className="wcu-svc-inner">
            {SERVICES.map((s, i) => (
              <React.Fragment key={s.label}>
                <motion.div
                  className="wcu-svc-item"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <span className="wcu-svc-icon">{s.icon}</span>
                  <span className="wcu-svc-label">{s.label}</span>
                </motion.div>
                {i < SERVICES.length - 1 && <div className="wcu-svc-divider" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
