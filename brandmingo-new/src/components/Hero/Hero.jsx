// import { useEffect, useState } from "react";
// import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
// import "./Hero.css";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// import { Link } from "react-router-dom";

// const MotionLink = motion(Link);

// /* ─────────────────────────────────────────
//    CLIENT LOGOS
// ───────────────────────────────────────── */
// const CLIENT_LOGOS = [
//   {
//     url: "https://res.cloudinary.com/dpdn7kzll/image/upload/v1778658879/3_wpp0d7.png",
//     alt: "Client 1",
//   },
//   {
//     url: "https://res.cloudinary.com/dpdn7kzll/image/upload/v1778658878/4_eavqsa.png",
//     alt: "Client 2",
//   },
//   {
//     url: "https://res.cloudinary.com/dpdn7kzll/image/upload/v1778658878/2_gdmirc.png",
//     alt: "Client 3",
//   },
//   {
//     url: "https://res.cloudinary.com/dpdn7kzll/image/upload/v1778658879/1_bttqla.png",
//     alt: "Client 4",
//   },
//   {
//     url: "https://res.cloudinary.com/dpdn7kzll/image/upload/v1778661854/Untitled_design_itjmma.png",
//     alt: "Client 5",
//   },
// ];

// /* ─────────────────────────────────────────
//    FRAMER VARIANTS
// ───────────────────────────────────────── */
// const fadeUp = (delay = 0) => ({
//   hidden: { opacity: 0, y: 32 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay },
//   },
// });

// const fadeIn = (delay = 0) => ({
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { duration: 0.7, ease: "easeOut", delay },
//   },
// });

// const stagger = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.12 } },
// };

// /* ─────────────────────────────────────────
//    TOGGLE  "gr[O]wth"
// ───────────────────────────────────────── */
// const ToggleWord = () => {
//   const [on, setOn] = useState(false);
//   useEffect(() => {
//     const t = setInterval(() => setOn((v) => !v), 2400);
//     return () => clearInterval(t);
//   }, []);
//   return (
//     <span className="hn-toggle-word">
//       <span className="hn-tw-text">gr</span>
//       <span
//         className={`hn-toggle${on ? " hn-toggle--on" : ""}`}
//         aria-hidden="true"
//       >
//         <span className="hn-toggle-track">
//           <span className="hn-toggle-thumb" />
//         </span>
//       </span>
//       <span className="hn-tw-text">wth</span>
//     </span>
//   );
// };

// /* ─────────────────────────────────────────
//    ARROW BADGE
// ───────────────────────────────────────── */
// const ArrowBadge = () => (
//   <motion.span
//     className="hn-arrow-badge"
//     aria-hidden="true"
//     animate={{ rotate: [0, 8, 0, -4, 0], y: [0, -6, 0] }}
//     transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//   >
//     <svg
//       width="18"
//       height="18"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2.8"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <line x1="7" y1="17" x2="17" y2="7" />
//       <polyline points="7,7 17,7 17,17" />
//     </svg>
//   </motion.span>
// );

// /* ─────────────────────────────────────────
//    CURSOR BADGE
// ───────────────────────────────────────── */
// const CursorBadge = () => (
//   <motion.span
//     className="hn-cursor-badge"
//     aria-hidden="true"
//     animate={{ y: [0, -8, 0], rotate: [-4, 4, -4] }}
//     transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
//   >
//     <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <circle cx="20" cy="20" r="20" fill="var(--theme-color1,#ff6b1e)" />
//       <path
//         d="M11 11 L11 29 L16.5 23.5 L19.5 31 L22 30 L19 22.5 L27 22.5 Z"
//         fill="white"
//       />
//     </svg>
//   </motion.span>
// );

// /* ─────────────────────────────────────────
//    DOT GRID
// ───────────────────────────────────────── */
// const DotGrid = () => (
//   <div className="hn-dot-grid" aria-hidden="true">
//     {Array.from({ length: 80 }).map((_, i) => (
//       <span
//         key={i}
//         className="hn-dot"
//         style={{ animationDelay: `${(i % 10) * 0.09}s` }}
//       />
//     ))}
//   </div>
// );

// /* ─────────────────────────────────────────
//    ROTATING CIRCLE BADGE
// ───────────────────────────────────────── */
// const CircleBadge = ({ openPopup }) => (
//   <div className="hn-circle-badge" aria-hidden="true" onClick={openPopup}>
//     <motion.svg
//       className="hn-circle-svg"
//       viewBox="0 0 200 200"
//       width="136"
//       height="136"
//       animate={{ rotate: 360 }}
//       transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
//     >
//       <defs>
//         <path
//           id="hn-cp"
//           d="M100,100 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0"
//         />
//       </defs>
//       <text
//         fontSize="11"
//         fontWeight="700"
//         letterSpacing="2.8"
//         fill="rgba(255,255,255,0.5)"
//         fontFamily="inherit"
//       >
//         <textPath href="#hn-cp">
//           TRANSFORM YOUR BUSINESS · TRANSFORM YOUR BUSINESS ·
//         </textPath>
//       </text>
//     </motion.svg>
//     <div className="hn-circle-inner">
//       <svg
//         width="15"
//         height="15"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2.5"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <line x1="7" y1="17" x2="17" y2="7" />
//         <polyline points="7,7 17,7 17,17" />
//       </svg>
//     </div>
//   </div>
// );

// /* ─────────────────────────────────────────
//    BRAND LOGOS
// ───────────────────────────────────────── */
// const BrandLogos = () => (
//   <motion.div
//     className="hn-logos"
//     variants={stagger}
//     initial="hidden"
//     animate="visible"
//   >
//     <motion.p className="hn-logos-label" variants={fadeIn(0)}>
//       Trusted by leading brands
//     </motion.p>
//     <div className="hn-logos-row">
//       {CLIENT_LOGOS.map((logo, i) => (
//         <motion.div key={i} className="hn-logo" variants={fadeUp(0.05 * i)}>
//           <img src={logo.url} alt={logo.alt} loading="lazy" draggable="false" />
//         </motion.div>
//       ))}
//     </div>
//   </motion.div>
// );

// /* ─────────────────────────────────────────
//    GRID LINES
// ───────────────────────────────────────── */
// const GridLines = () => (
//   <div className="hn-grid-lines" aria-hidden="true">
//     {[0, 1, 2, 3, 4].map((i) => (
//       <div
//         key={i}
//         className="hn-grid-line"
//         style={{ animationDelay: `${i * 0.4}s` }}
//       />
//     ))}
//   </div>
// );

// /* ═══════════════════════════════════════════
//    MAIN HERO
// ═══════════════════════════════════════════ */
// const Hero = ({ openPopup }) => {
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const springX = useSpring(mouseX, { stiffness: 40, damping: 22 });
//   const springY = useSpring(mouseY, { stiffness: 40, damping: 22 });
//   const orbLeftX = useTransform(springX, [-0.5, 0.5], [-22, 22]);
//   const orbLeftY = useTransform(springY, [-0.5, 0.5], [-14, 14]);
//   const orbRightX = useTransform(springX, [-0.5, 0.5], [18, -18]);
//   const orbRightY = useTransform(springY, [-0.5, 0.5], [12, -12]);

//   useEffect(() => {
//     const move = (e) => {
//       mouseX.set(e.clientX / window.innerWidth - 0.5);
//       mouseY.set(e.clientY / window.innerHeight - 0.5);
//     };
//     window.addEventListener("mousemove", move, { passive: true });
//     return () => window.removeEventListener("mousemove", move);
//   }, []);

//   return (
//     <section className="hn-section">
//       {/* BACKGROUND */}
//       <div className="hn-bg" aria-hidden="true">
//         <motion.div
//           className="hn-bg-orb hn-bg-orb--left"
//           style={{ x: orbLeftX, y: orbLeftY }}
//         />
//         <div className="hn-bg-orb hn-bg-orb--center" />
//         <motion.div
//           className="hn-bg-orb hn-bg-orb--right"
//           style={{ x: orbRightX, y: orbRightY }}
//         />
//         <div className="hn-noise" />
//       </div>

//       <GridLines />
//       <DotGrid />
//       <div className="hn-bottom-fade" aria-hidden="true" />

//       {/* CONTENT */}
//       <div className="auto-container">
//         <motion.div
//           className="hn-inner"
//           initial="hidden"
//           animate="visible"
//           variants={stagger}
//         >
//           {/* Eyebrow — plain orange text with top spacing */}
//           <motion.div className="hn-eyebrow-wrap" variants={fadeUp(0)}>
//             <span className="hn-eyebrow">
//               Digital Agency &amp; Growth Partner
//             </span>
//           </motion.div>

//           {/* H1 */}
//           <motion.h1 className="hn-title" variants={stagger}>
//             {/* Line 1 */}
//             <motion.span className="hn-line1" variants={fadeUp(0.05)}>
//               We Build <ArrowBadge />
//             </motion.span>

//             {/* Line 2 — growth */}
//             <motion.span className="hn-line2" variants={fadeUp(0.1)}>
//               <ToggleWord />
//             </motion.span>

//             {/* Line 3 — cursor + "for Your Business"
//                 FIX: flex-wrap + margin-top so it clears line2 */}
//             <motion.span className="hn-line3" variants={fadeUp(0.15)}>
//               <motion.div
//                 className="hn-floating-lottie"
//                 animate={{ y: [0, -6, 0], rotate: [-3, 3, -3] }}
//                 transition={{
//                   duration: 3.5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               >
//                 <DotLottieReact
//                   src="https://lottie.host/11c4931e-f8e2-4064-8263-64b3011a5a01/aZtSibBLe6.lottie"
//                   loop
//                   autoplay
//                 />
//               </motion.div>
//               <span className="hn-line3-text">
//                 for Your <em className="hn-accent">Business</em>
//               </span>
//             </motion.span>
//           </motion.h1>

//           {/* Sub */}
//           <motion.p className="hn-sub" variants={fadeUp(0.22)}>
//             We turn great ideas into working products.
//             <br />
//             We focus on clear communication and understanding your business.
//           </motion.p>

//           {/* CTA */}
//           <motion.div className="hn-cta-wrap" variants={fadeUp(0.3)}>
//             <MotionLink
//               to="/services"
//               className="btn-style-one"
//               whileHover={{ scale: 1.04 }}
//               whileTap={{ scale: 0.97 }}
//             >
//               <span className="btn-arrow-left">
//                 <svg
//                   width="14"
//                   height="14"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <line x1="7" y1="17" x2="17" y2="7" />
//                   <polyline points="7,7 17,7 17,17" />
//                 </svg>
//               </span>
//               <span className="btn-title">Let's Start Your Project</span>
//               <span className="btn-arrow-right">
//                 <svg
//                   width="14"
//                   height="14"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <line x1="7" y1="17" x2="17" y2="7" />
//                   <polyline points="7,7 17,7 17,17" />
//                 </svg>
//               </span>
//             </MotionLink>

//             <MotionLink
//               to="/about"
//               className="hn-ghost-btn"
//               whileHover={{ color: "#fff" }}
//             >
//               More About Us
//             </MotionLink>
//           </motion.div>

//           {/* Logos */}
//           <BrandLogos />
//         </motion.div>
//       </div>

//       <CircleBadge openPopup={openPopup} />
//     </section>
//   );
// };

// export default Hero;

import { useEffect, useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import "./Hero.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

/* ─────────────────────────────────────────
   CLIENT LOGOS
───────────────────────────────────────── */
const CLIENT_LOGOS = [
  {
    url: "https://res.cloudinary.com/dpdn7kzll/image/upload/v1778658879/3_wpp0d7.png",
    alt: "Client 1",
  },
  {
    url: "https://res.cloudinary.com/dpdn7kzll/image/upload/v1778658878/4_eavqsa.png",
    alt: "Client 2",
  },
  {
    url: "https://res.cloudinary.com/dpdn7kzll/image/upload/v1778658878/2_gdmirc.png",
    alt: "Client 3",
  },
  {
    url: "https://res.cloudinary.com/dpdn7kzll/image/upload/v1778658879/1_bttqla.png",
    alt: "Client 4",
  },
  {
    url: "https://res.cloudinary.com/dpdn7kzll/image/upload/v1778661854/Untitled_design_itjmma.png",
    alt: "Client 5",
  },
];

/* ─────────────────────────────────────────
   WORD REVEAL — Reboot Digital style
   Each word slides up from behind a mask
───────────────────────────────────────── */
const wordRevealContainer = (delayStart = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: delayStart,
    },
  },
});

const wordRevealItem = {
  hidden: { y: "110%", opacity: 0, skewY: 4 },
  visible: {
    y: "0%",
    opacity: 1,
    skewY: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* Split text into words, each wrapped in overflow-hidden mask */
const WordReveal = ({ text, className, delayStart = 0, as: Tag = "span" }) => {
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      variants={wordRevealContainer(delayStart)}
      initial="hidden"
      animate="visible"
      style={{ display: "inline-flex", flexWrap: "wrap", gap: "0.25em" }}
    >
      {words.map((word, i) => (
        <span key={i} style={{ overflow: "hidden", display: "inline-block" }}>
          <motion.span
            variants={wordRevealItem}
            style={{ display: "inline-block" }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

/* Single line reveal (for inline elements like line1 with badge) */
const LineReveal = ({ children, delay = 0, className }) => (
  <div
    style={{ overflow: "hidden", display: "inline-flex", alignItems: "center" }}
  >
    <motion.span
      className={className}
      initial={{ y: "110%", opacity: 0, skewY: 3 }}
      animate={{ y: "0%", opacity: 1, skewY: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      style={{ display: "inline-flex", alignItems: "center" }}
    >
      {children}
    </motion.span>
  </div>
);

/* Fade + slide up for misc elements */
const FadeUp = ({ children, delay = 0, className, style }) => (
  <motion.div
    className={className}
    style={style}
    initial={{ opacity: 0, y: 28 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
  >
    {children}
  </motion.div>
);

/* ─────────────────────────────────────────
   TOGGLE  "gr[O]wth"
───────────────────────────────────────── */
const ToggleWord = () => {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const t = setInterval(() => setOn((v) => !v), 2400);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="hn-toggle-word">
      <span className="hn-tw-text">gr</span>
      <span
        className={`hn-toggle${on ? " hn-toggle--on" : ""}`}
        aria-hidden="true"
      >
        <span className="hn-toggle-track">
          <span className="hn-toggle-thumb" />
        </span>
      </span>
      <span className="hn-tw-text">wth</span>
    </span>
  );
};

/* ─────────────────────────────────────────
   ARROW BADGE
───────────────────────────────────────── */
const ArrowBadge = () => (
  <motion.span
    className="hn-arrow-badge"
    aria-hidden="true"
    animate={{ rotate: [0, 8, 0, -4, 0], y: [0, -6, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  >
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7,7 17,7 17,17" />
    </svg>
  </motion.span>
);

/* ─────────────────────────────────────────
   DOT GRID
───────────────────────────────────────── */
const DotGrid = () => (
  <div className="hn-dot-grid" aria-hidden="true">
    {Array.from({ length: 80 }).map((_, i) => (
      <span
        key={i}
        className="hn-dot"
        style={{ animationDelay: `${(i % 10) * 0.09}s` }}
      />
    ))}
  </div>
);

/* ─────────────────────────────────────────
   ROTATING CIRCLE BADGE
───────────────────────────────────────── */
const CircleBadge = ({ openPopup }) => (
  <div className="hn-circle-badge" aria-hidden="true" onClick={openPopup}>
    <motion.svg
      className="hn-circle-svg"
      viewBox="0 0 200 200"
      width="136"
      height="136"
      animate={{ rotate: 360 }}
      transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
    >
      <defs>
        <path
          id="hn-cp"
          d="M100,100 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0"
        />
      </defs>
      <text
        fontSize="11"
        fontWeight="700"
        letterSpacing="2.8"
        fill="rgba(255,255,255,0.5)"
        fontFamily="inherit"
      >
        <textPath href="#hn-cp">
          TRANSFORM YOUR BUSINESS · TRANSFORM YOUR BUSINESS ·
        </textPath>
      </text>
    </motion.svg>
    <div className="hn-circle-inner">
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7,7 17,7 17,17" />
      </svg>
    </div>
  </div>
);

/* ─────────────────────────────────────────
   BRAND LOGOS
───────────────────────────────────────── */
const BrandLogos = () => (
  <FadeUp delay={0.95}>
    <div className="hn-logos">
      <motion.p
        className="hn-logos-label"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.6 }}
      >
        Trusted by leading brands
      </motion.p>
      <div className="hn-logos-row">
        {CLIENT_LOGOS.map((logo, i) => (
          <motion.div
            key={i}
            className="hn-logo"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 0.5, y: 0 }}
            transition={{
              delay: 1.05 + i * 0.07,
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ opacity: 1 }}
          >
            <img
              src={logo.url}
              alt={logo.alt}
              loading="lazy"
              draggable="false"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </FadeUp>
);

/* ─────────────────────────────────────────
   GRID LINES
───────────────────────────────────────── */
const GridLines = () => (
  <div className="hn-grid-lines" aria-hidden="true">
    {[0, 1, 2, 3, 4].map((i) => (
      <div
        key={i}
        className="hn-grid-line"
        style={{ animationDelay: `${i * 0.4}s` }}
      />
    ))}
  </div>
);

/* ═══════════════════════════════════════════
   MAIN HERO
═══════════════════════════════════════════ */
const Hero = ({ openPopup }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 22 });
  const orbLeftX = useTransform(springX, [-0.5, 0.5], [-22, 22]);
  const orbLeftY = useTransform(springY, [-0.5, 0.5], [-14, 14]);
  const orbRightX = useTransform(springX, [-0.5, 0.5], [18, -18]);
  const orbRightY = useTransform(springY, [-0.5, 0.5], [12, -12]);

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <section className="hn-section">
      {/* BACKGROUND */}
      <div className="hn-bg" aria-hidden="true">
        <motion.div
          className="hn-bg-orb hn-bg-orb--left"
          style={{ x: orbLeftX, y: orbLeftY }}
        />
        <div className="hn-bg-orb hn-bg-orb--center" />
        <motion.div
          className="hn-bg-orb hn-bg-orb--right"
          style={{ x: orbRightX, y: orbRightY }}
        />
        <div className="hn-noise" />
      </div>

      <GridLines />
      <DotGrid />
      <div className="hn-bottom-fade" aria-hidden="true" />

      {/* CONTENT */}
      <div className="auto-container">
        <div className="hn-inner">
          {/* Eyebrow */}
          <FadeUp delay={0.05}>
            <div className="hn-eyebrow-wrap">
              <span className="hn-eyebrow">
                Digital Agency &amp; Growth Partner
              </span>
            </div>
          </FadeUp>

          {/* H1 */}
          <h1 className="hn-title">
            {/* Line 1 — "We Build ↗" */}
            <LineReveal delay={0.15} className="hn-line1">
              We Build <ArrowBadge />
            </LineReveal>

            {/* Line 2 — "gr[toggle]wth" — word reveal */}
            <div style={{ overflow: "hidden", display: "block" }}>
              <motion.span
                className="hn-line2"
                initial={{ y: "105%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.28,
                }}
                style={{ display: "block" }}
              >
                <ToggleWord />
              </motion.span>
            </div>

            {/* Line 3 — "[lottie] for Your Business" */}
            <LineReveal delay={0.42} className="hn-line3">
              <motion.div
                className="hn-floating-lottie"
                animate={{ y: [0, -6, 0], rotate: [-3, 3, -3] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <DotLottieReact
                  src="https://lottie.host/11c4931e-f8e2-2064-8263-64b3011a5a01/aZtSibBLe6.lottie"
                  loop
                  autoplay
                />
              </motion.div>
              <span className="hn-line3-text">
                for Your <em className="hn-accent">Business</em>
              </span>
            </LineReveal>
          </h1>

          {/* Sub */}
          <FadeUp delay={0.58}>
            <p className="hn-sub">
              We turn great ideas into working products.
              <br />
              We focus on clear communication and understanding your business.
            </p>
          </FadeUp>

          {/* CTA */}
          <FadeUp delay={0.68}>
            <div className="hn-cta-wrap">
              <MotionLink
                to="/services"
                className="btn-style-one"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="btn-arrow-left">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7,7 17,7 17,17" />
                  </svg>
                </span>
                <span className="btn-title">Let's Start Your Project</span>
                <span className="btn-arrow-right">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7,7 17,7 17,17" />
                  </svg>
                </span>
              </MotionLink>

              <MotionLink
                to="/about"
                className="hn-ghost-btn"
                whileHover={{ color: "#fff" }}
              >
                More About Us
              </MotionLink>
            </div>
          </FadeUp>

          {/* Logos */}
          <BrandLogos />
        </div>
      </div>

      <CircleBadge openPopup={openPopup} />
    </section>
  );
};

export default Hero;
