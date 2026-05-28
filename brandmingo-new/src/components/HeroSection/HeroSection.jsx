// import React, { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import "./HeroSection.css";

// /* ─── Framer Motion Variants ─── */
// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (delay = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
//   }),
// };

// const fadeIn = {
//   hidden: { opacity: 0 },
//   visible: (delay = 0) => ({
//     opacity: 1,
//     transition: { duration: 0.6, ease: "easeOut", delay },
//   }),
// };

// const floatVariant = {
//   animate: {
//     y: [0, -14, 0],
//     transition: { duration: 5, ease: "easeInOut", repeat: Infinity },
//   },
// };

// /* ─── Particle Canvas ─── */
// function ParticleCanvas() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");

//     let animId;
//     let particles = [];

//     const resize = () => {
//       canvas.width = canvas.offsetWidth;
//       canvas.height = canvas.offsetHeight;
//     };
//     resize();
//     window.addEventListener("resize", resize);

//     const COUNT = 60;
//     const ORANGE_RGBA = "255,107,30";

//     for (let i = 0; i < COUNT; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         r: Math.random() * 1.5 + 0.3,
//         opacity: Math.random() * 0.5 + 0.1,
//         dx: (Math.random() - 0.5) * 0.25,
//         dy: -(Math.random() * 0.35 + 0.1),
//         flicker: Math.random() * Math.PI * 2,
//       });
//     }

//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       particles.forEach((p) => {
//         p.flicker += 0.025;
//         const alpha = p.opacity * (0.7 + 0.3 * Math.sin(p.flicker));
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(${ORANGE_RGBA},${alpha})`;
//         ctx.fill();

//         p.x += p.dx;
//         p.y += p.dy;

//         if (p.y < -5) {
//           p.y = canvas.height + 5;
//           p.x = Math.random() * canvas.width;
//         }
//         if (p.x < -5) p.x = canvas.width + 5;
//         if (p.x > canvas.width + 5) p.x = -5;
//       });
//       animId = requestAnimationFrame(draw);
//     };
//     draw();

//     return () => {
//       cancelAnimationFrame(animId);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   return <canvas ref={canvasRef} className="hs-particles" />;
// }

// /* ─── Mouse Parallax Hook ─── */
// function useMouseParallax() {
//   const [pos, setPos] = useState({ x: 0, y: 0 });
//   useEffect(() => {
//     const handler = (e) => {
//       const cx = window.innerWidth / 2;
//       const cy = window.innerHeight / 2;
//       setPos({
//         x: ((e.clientX - cx) / cx) * 12,
//         y: ((e.clientY - cy) / cy) * 8,
//       });
//     };
//     window.addEventListener("mousemove", handler, { passive: true });
//     return () => window.removeEventListener("mousemove", handler);
//   }, []);
//   return pos;
// }

// /* ─── Navbar ─── */
// function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handler = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", handler, { passive: true });
//     return () => window.removeEventListener("scroll", handler);
//   }, []);

//   const links = ["Solutions", "Platform", "Pricing", "About"];

//   return (
//     <motion.nav
//       className={`hs-navbar${scrolled ? " hs-navbar--scrolled" : ""}`}
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
//     >
//       <div className="hs-navbar__inner">
//         {/* Logo */}
//         <a href="#" className="hs-navbar__logo">
//           <span className="hs-navbar__logo-dot" />
//           Nexus<span style={{ color: "var(--theme-color1)" }}>AI</span>
//         </a>

//         {/* Nav links */}
//         <ul className={`hs-navbar__links${menuOpen ? " is-open" : ""}`}>
//           {links.map((link) => (
//             <li key={link}>
//               <a href="#">{link}</a>
//             </li>
//           ))}
//           <li className="d-lg-none">
//             <a
//               href="#"
//               className="hs-btn-primary"
//               style={{ padding: "10px 22px", fontSize: 13 }}
//             >
//               Get Started
//             </a>
//           </li>
//         </ul>

//         {/* CTA + hamburger */}
//         <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
//           <a href="#" className="hs-navbar__cta">
//             Get Started →
//           </a>
//           <button
//             className="hs-navbar__toggle"
//             onClick={() => setMenuOpen((v) => !v)}
//             aria-label="Toggle navigation"
//           >
//             {menuOpen ? "✕" : "☰"}
//           </button>
//         </div>
//       </div>
//     </motion.nav>
//   );
// }

// /* ─── Glowing Ring ─── */
// function GlowRing() {
//   return (
//     <motion.div
//       className="hs-ring-container"
//       initial={{ opacity: 0, scale: 0.85 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
//     >
//       <div className="hs-ring hs-ring--halo" />
//       <div className="hs-ring hs-ring--main">
//         <div className="hs-ring-spark" />
//         <div className="hs-ring-spark" />
//       </div>
//       <div className="hs-ring hs-ring--inner" />
//     </motion.div>
//   );
// }

// /* ─── Stats Row ─── */
// function Stats() {
//   const stats = [
//     { num: "10×", label: "Faster Insights" },
//     { num: "99.9%", label: "Uptime SLA" },
//     { num: "500+", label: "Enterprise Clients" },
//     { num: "40ms", label: "Avg Latency" },
//   ];

//   return (
//     <motion.div
//       className="hs-stats"
//       variants={fadeIn}
//       initial="hidden"
//       animate="visible"
//       custom={1.05}
//     >
//       {stats.map((s, i) => (
//         <React.Fragment key={s.label}>
//           {i > 0 && <div className="hs-stats__divider" />}
//           <div style={{ textAlign: "center" }}>
//             <div className="hs-stat__num">{s.num}</div>
//             <div className="hs-stat__label">{s.label}</div>
//           </div>
//         </React.Fragment>
//       ))}
//     </motion.div>
//   );
// }

// /* ─── Main Hero Section ─── */
// export default function HeroSection() {
//   const mouse = useMouseParallax();

//   return (
//     <>
//       <Navbar />

//       <section className="hs-hero">
//         {/* Particles */}
//         <ParticleCanvas />

//         {/* Background radial glows (parallax) */}
//         <motion.div
//           className="hs-hero__bg-glow-left"
//           animate={{ x: mouse.x * -1, y: mouse.y * -0.8 }}
//           transition={{ type: "spring", stiffness: 60, damping: 25 }}
//         />
//         <motion.div
//           className="hs-hero__bg-glow-right"
//           animate={{ x: mouse.x * 0.8, y: mouse.y * 0.6 }}
//           transition={{ type: "spring", stiffness: 60, damping: 25 }}
//         />
//         <div className="hs-hero__bg-glow-center" />

//         {/* Floating blur orbs */}
//         <motion.div
//           className="hs-orb hs-orb--1"
//           animate={{ x: mouse.x * 1.5, y: mouse.y * 1.2 }}
//           transition={{ type: "spring", stiffness: 40, damping: 20 }}
//         />
//         <motion.div
//           className="hs-orb hs-orb--2"
//           animate={{ x: mouse.x * -1.2, y: mouse.y * -0.9 }}
//           transition={{ type: "spring", stiffness: 40, damping: 20 }}
//         />
//         <div className="hs-orb hs-orb--3" />

//         {/* ── Hero Content ── */}
//         <div className="hs-hero__content">
//           {/* Badge */}
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={0.1}
//             style={{ display: "inline-block" }}
//           >
//             <div className="hs-badge">
//               <span className="hs-badge__dot" />
//               <span className="hs-badge__text">
//                 Next-Generation AI Platform
//               </span>
//             </div>
//           </motion.div>

//           {/* Heading */}
//           <motion.h1
//             className="hs-hero__heading"
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={0.25}
//           >
//             Intelligent Solutions
//             <br />
//             Powered by <span className="hs-hero__heading-highlight">AI.</span>
//           </motion.h1>

//           {/* Subheading */}
//           <motion.p
//             className="hs-hero__sub"
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={0.4}
//           >
//             Gain clarity and harness the power of your data with futuristic AI
//             solutions built for the enterprises of tomorrow.
//           </motion.p>

//           {/* CTAs */}
//           <motion.div
//             className="hs-hero__ctas"
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             custom={0.55}
//           >
//             <motion.a
//               href="#"
//               className="hs-btn-primary"
//               whileHover={{ scale: 1.04 }}
//               whileTap={{ scale: 0.97 }}
//             >
//               Book a Demo
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2.5"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <line x1="5" y1="12" x2="19" y2="12" />
//                 <polyline points="12 5 19 12 12 19" />
//               </svg>
//             </motion.a>

//             <motion.a
//               href="#"
//               className="hs-btn-secondary"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.97 }}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 style={{ opacity: 0.7 }}
//               >
//                 <circle cx="12" cy="12" r="10" />
//                 <polygon points="10 8 16 12 10 16 10 8" />
//               </svg>
//               Learn More
//             </motion.a>
//           </motion.div>

//           {/* Stats */}
//           <Stats />
//         </div>

//         {/* Glowing Ring */}
//         <GlowRing />

//         {/* Scroll Cue */}
//         <motion.div
//           className="hs-scroll-cue"
//           variants={fadeIn}
//           initial="hidden"
//           animate="visible"
//           custom={1.4}
//         >
//           <span className="hs-scroll-cue__text">Scroll</span>
//           <div className="hs-scroll-cue__line" />
//         </motion.div>
//       </section>
//     </>
//   );
// }

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";

/* ─── Framer Motion Variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

/* ─── Particle Canvas ─── */
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const COUNT = 60;
    const ORANGE_RGBA = "255,107,30";

    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        opacity: Math.random() * 0.5 + 0.1,
        dx: (Math.random() - 0.5) * 0.25,
        dy: -(Math.random() * 0.35 + 0.1),
        flicker: Math.random() * Math.PI * 2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.flicker += 0.025;
        const alpha = p.opacity * (0.7 + 0.3 * Math.sin(p.flicker));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ORANGE_RGBA},${alpha})`;
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.y < -5) {
          p.y = canvas.height + 5;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -5) p.x = canvas.width + 5;
        if (p.x > canvas.width + 5) p.x = -5;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hs-particles" />;
}

/* ─── Mouse Parallax Hook ─── */
function useMouseParallax() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handler = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setPos({
        x: ((e.clientX - cx) / cx) * 12,
        y: ((e.clientY - cy) / cy) * 8,
      });
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, []);
  return pos;
}

/* ─── Glowing Ring ─── */
function GlowRing() {
  return (
    <motion.div
      className="hs-ring-container"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
    >
      <div className="hs-ring hs-ring--halo" />
      <div className="hs-ring hs-ring--main">
        <div className="hs-ring-spark" />
        <div className="hs-ring-spark" />
      </div>
      <div className="hs-ring hs-ring--inner" />
    </motion.div>
  );
}

/* ─── Stats Row ─── */
function Stats() {
  const stats = [
    { num: "10×", label: "Faster Insights" },
    { num: "99.9%", label: "Uptime SLA" },
    { num: "500+", label: "Enterprise Clients" },
    { num: "40ms", label: "Avg Latency" },
  ];

  return (
    <motion.div
      className="hs-stats"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      custom={1.05}
    >
      {stats.map((s, i) => (
        <React.Fragment key={s.label}>
          {i > 0 && <div className="hs-stats__divider" />}
          <div style={{ textAlign: "center" }}>
            <div className="hs-stat__num">{s.num}</div>
            <div className="hs-stat__label">{s.label}</div>
          </div>
        </React.Fragment>
      ))}
    </motion.div>
  );
}

/* ─── Main Hero Section ─── */
export default function HeroSection() {
  const mouse = useMouseParallax();

  return (
    <section className="hs-hero">
      {/* Particles */}
      <ParticleCanvas />

      {/* Background radial glows (parallax) */}
      <motion.div
        className="hs-hero__bg-glow-left"
        animate={{ x: mouse.x * -1, y: mouse.y * -0.8 }}
        transition={{ type: "spring", stiffness: 60, damping: 25 }}
      />
      <motion.div
        className="hs-hero__bg-glow-right"
        animate={{ x: mouse.x * 0.8, y: mouse.y * 0.6 }}
        transition={{ type: "spring", stiffness: 60, damping: 25 }}
      />
      <div className="hs-hero__bg-glow-center" />

      {/* Floating blur orbs */}
      <motion.div
        className="hs-orb hs-orb--1"
        animate={{ x: mouse.x * 1.5, y: mouse.y * 1.2 }}
        transition={{ type: "spring", stiffness: 40, damping: 20 }}
      />
      <motion.div
        className="hs-orb hs-orb--2"
        animate={{ x: mouse.x * -1.2, y: mouse.y * -0.9 }}
        transition={{ type: "spring", stiffness: 40, damping: 20 }}
      />
      <div className="hs-orb hs-orb--3" />

      {/* ── Hero Content + Ring stacked layout ── */}
      <div className="hs-hero__layout">
        {/* Content */}
        <div className="hs-hero__content">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            style={{ display: "inline-block" }}
          >
            <div className="hs-badge">
              <span className="hs-badge__dot" />
              <span className="hs-badge__text">
                Next-Generation AI Platform
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="hs-hero__heading"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.25}
          >
            Intelligent Solutions
            <br />
            Powered by <span className="hs-hero__heading-highlight">AI.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="hs-hero__sub"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
          >
            Gain clarity and harness the power of your data with futuristic AI
            solutions built for the enterprises of tomorrow.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="hs-hero__ctas"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.55}
          >
            <motion.a
              href="#"
              className="hs-btn-primary"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Book a Demo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </motion.a>

            <motion.a
              href="#"
              className="hs-btn-secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ opacity: 0.7 }}
              >
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" />
              </svg>
              Learn More
            </motion.a>
          </motion.div>

          {/* Stats */}
          <Stats />
        </div>

        {/* Glowing Ring — centered below content */}
        <div className="hs-ring-wrapper">
          <GlowRing />
        </div>
      </div>

      {/* Scroll Cue */}
      <motion.div
        className="hs-scroll-cue"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        custom={1.4}
      >
        <span className="hs-scroll-cue__text">Scroll</span>
        <div className="hs-scroll-cue__line" />
      </motion.div>
    </section>
  );
}
