import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import "./Hero.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

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

/* ═══════════════════════════════════════════
   AURORA CANVAS BACKGROUND
   Exactly like the blue ref site but in orange:
   - 4 large soft blobs that slowly drift around
   - Each blob is a radial gradient painted on canvas
   - They blend together creating aurora/nebula effect
   - Mouse position subtly shifts blob positions
═══════════════════════════════════════════ */
const AuroraCanvas = () => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onMove = (e) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    /* ── Blob definitions ──
       Each blob has a home position (cx,cy as 0-1 fractions),
       its own slow orbit path, size, and colour stops.
       Orange theme: warm #ff6b1e core fading to dark amber/brown.
    */
    const blobs = [
      /* Big main blob — top-right, like blue ref site's main glow */
      {
        cx: 0.72,
        cy: 0.22,
        orbitX: 0.14,
        orbitY: 0.1,
        orbitSpeedX: 0.00018,
        orbitSpeedY: 0.00013,
        phaseX: 0,
        phaseY: 1.2,
        radiusFrac: 0.68,
        stops: [
          { pos: 0, color: "rgba(255,107,30,0.55)" },
          { pos: 0.3, color: "rgba(220,70,10,0.28)" },
          { pos: 0.6, color: "rgba(160,40,0,0.10)" },
          { pos: 1, color: "rgba(0,0,0,0)" },
        ],
      },
      /* Second blob — left-center, warm fill */
      {
        cx: 0.2,
        cy: 0.6,
        orbitX: 0.12,
        orbitY: 0.14,
        orbitSpeedX: 0.00014,
        orbitSpeedY: 0.0001,
        phaseX: 2.1,
        phaseY: 0.5,
        radiusFrac: 0.55,
        stops: [
          { pos: 0, color: "rgba(255,90,10,0.40)" },
          { pos: 0.35, color: "rgba(180,50,0,0.18)" },
          { pos: 0.7, color: "rgba(100,20,0,0.07)" },
          { pos: 1, color: "rgba(0,0,0,0)" },
        ],
      },
      /* Third blob — bottom-center deep amber */
      {
        cx: 0.5,
        cy: 0.88,
        orbitX: 0.18,
        orbitY: 0.08,
        orbitSpeedX: 0.00012,
        orbitSpeedY: 0.00016,
        phaseX: 4.2,
        phaseY: 3.0,
        radiusFrac: 0.6,
        stops: [
          { pos: 0, color: "rgba(255,120,40,0.35)" },
          { pos: 0.4, color: "rgba(200,60,0,0.15)" },
          { pos: 1, color: "rgba(0,0,0,0)" },
        ],
      },
      /* Fourth blob — small sharp hot-spot that drifts */
      {
        cx: 0.38,
        cy: 0.3,
        orbitX: 0.2,
        orbitY: 0.18,
        orbitSpeedX: 0.00022,
        orbitSpeedY: 0.00017,
        phaseX: 1.0,
        phaseY: 2.8,
        radiusFrac: 0.38,
        stops: [
          { pos: 0, color: "rgba(255,140,60,0.45)" },
          { pos: 0.25, color: "rgba(230,80,10,0.22)" },
          { pos: 0.6, color: "rgba(140,40,0,0.08)" },
          { pos: 1, color: "rgba(0,0,0,0)" },
        ],
      },
    ];

    let t = 0;
    const draw = () => {
      rafRef.current = requestAnimationFrame(draw);
      t++;

      const W = canvas.width;
      const H = canvas.height;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      /* clear with deep dark bg */
      ctx.fillStyle = "#050505";
      ctx.fillRect(0, 0, W, H);

      /* draw each blob */
      blobs.forEach((b) => {
        /* animated centre */
        const bx =
          (b.cx +
            Math.sin(t * b.orbitSpeedX + b.phaseX) * b.orbitX +
            (mx - 0.5) * 0.06) *
          W;
        const by =
          (b.cy +
            Math.cos(t * b.orbitSpeedY + b.phaseY) * b.orbitY +
            (my - 0.5) * 0.04) *
          H;
        const radius = b.radiusFrac * Math.max(W, H);

        const grd = ctx.createRadialGradient(bx, by, 0, bx, by, radius);
        b.stops.forEach((s) => grd.addColorStop(s.pos, s.color));

        ctx.beginPath();
        ctx.arc(bx, by, radius, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      });
    };

    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="hn-aurora-canvas" />;
};

/* ─────────────────────────────────────────
   REVEAL HELPERS
───────────────────────────────────────── */
const LineReveal = ({ children, delay = 0, className }) => (
  <div
    style={{ overflow: "hidden", display: "inline-flex", alignItems: "center" }}
  >
    <motion.span
      className={className}
      initial={{ y: "110%", opacity: 0, skewY: 3 }}
      animate={{ y: "0%", opacity: 1, skewY: 0 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay }}
      style={{ display: "inline-flex", alignItems: "center" }}
    >
      {children}
    </motion.span>
  </div>
);

const FadeUp = ({ children, delay = 0, className, style }) => (
  <motion.div
    className={className}
    style={style}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
  >
    {children}
  </motion.div>
);

/* ─────────────────────────────────────────
   TOGGLE
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

const BrandLogos = () => (
  <FadeUp delay={1.0}>
    <div className="hn-logos">
      <motion.p
        className="hn-logos-label"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.05, duration: 0.6 }}
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
              delay: 1.1 + i * 0.07,
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
  return (
    <section className="hn-section">
      {/* ── BACKGROUND ── */}
      <div className="hn-bg" aria-hidden="true">
        {/* Aurora blobs on canvas — the main cinematic glow */}
        <AuroraCanvas />
        {/* Edge darkening so content stays readable */}
        <div className="hn-edge-dark" />
        {/* Vignette */}
        <div className="hn-vignette" />
        {/* Film grain */}
        <div className="hn-noise" />
      </div>

      {/* Grid lines travel on top */}
      <GridLines />
      <DotGrid />
      <div className="hn-bottom-fade" aria-hidden="true" />

      {/* ── CONTENT ── */}
      <div className="auto-container">
        <div className="hn-inner">
          <FadeUp delay={0.05}>
            <div className="hn-eyebrow-wrap">
              <span className="hn-eyebrow">
                Digital Agency &amp; Growth Partner
              </span>
            </div>
          </FadeUp>

          <h1 className="hn-title">
            <LineReveal delay={0.15} className="hn-line1">
              We Build <ArrowBadge />
            </LineReveal>

            <div style={{ overflow: "hidden", display: "block" }}>
              <motion.span
                className="hn-line2"
                initial={{ y: "105%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.95,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.28,
                }}
                style={{ display: "block" }}
              >
                <ToggleWord />
              </motion.span>
            </div>

            <LineReveal delay={0.44} className="hn-line3">
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
                  src="https://lottie.host/11c4931e-f8e2-4064-8263-64b3011a5a01/aZtSibBLe6.lottie"
                  loop
                  autoplay
                />
              </motion.div>
              <span className="hn-line3-text">
                for Your <em className="hn-accent">Business</em>
              </span>
            </LineReveal>
          </h1>

          <FadeUp delay={0.6}>
            <p className="hn-sub">
              We turn great ideas into working products.
              <br />
              We focus on clear communication and understanding your business.
            </p>
          </FadeUp>

          <FadeUp delay={0.72}>
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

          <BrandLogos />
        </div>
      </div>

      <CircleBadge openPopup={openPopup} />
    </section>
  );
};

export default Hero;
