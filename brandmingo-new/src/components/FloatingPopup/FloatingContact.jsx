/**
 * FloatingContact.jsx — Production Ready v3
 * ─ Real WhatsApp / Email / Location links
 * ─ Vertically centered on ALL devices
 * ─ Auto-hides when navbar hamburger is open
 *   (Navbar must toggle  document.body.dataset.navOpen = "true" / "false")
 */

import React, { useState, useEffect, useRef, useCallback, memo } from "react";
import "./FloatingContact.css";

/* ─────────────────────────────────────────
   ✏️  YOUR REAL DETAILS
───────────────────────────────────────── */
const CONFIG = {
  whatsapp: "+91 99906 13140", // redirects to wa.me
  email: "hello@brandmingo.com", // opens mail client
  mapsUrl:
    "https://maps.google.com/?q=B-806,+8th+Floor,+Ithum+Tower,+Block+A,+Sector+62,+Noida,+Uttar+Pradesh+201301",
  address: "Ithum Tower, Sector 62, Noida", // short label shown in tooltip
};

/* ─────────────────────────────────────────
   ITEMS
───────────────────────────────────────── */
const getItems = (cfg) => [
  {
    id: "whatsapp",
    href: `https://wa.me/${cfg.whatsapp.replace(/\D/g, "")}`,
    icon: "fa-brands fa-whatsapp",
    label: "WhatsApp",
    clr: "#25D366",
    glow: "rgba(37,211,102,0.35)",
    bg: "rgba(37,211,102,0.15)",
  },
  {
    id: "email",
    href: `mailto:${cfg.email}`,
    icon: "fa-solid fa-envelope",
    label: "Email Us",
    clr: "#FF6B1E",
    glow: "rgba(255,107,30,0.35)",
    bg: "rgba(255,107,30,0.15)",
  },
  {
    id: "location",
    href: cfg.mapsUrl,
    icon: "fa-solid fa-location-dot",
    label: cfg.address,
    clr: "#3B9EFF",
    glow: "rgba(59,158,255,0.35)",
    bg: "rgba(59,158,255,0.15)",
  },
];

/* ─────────────────────────────────────────
   COMPONENT
───────────────────────────────────────── */
const FloatingContact = memo((props) => {
  const cfg = { ...CONFIG, ...props };
  const items = getItems(cfg);

  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [navIsOpen, setNavIsOpen] = useState(false);
  const rootRef = useRef(null);

  /* 300ms mount delay — avoids hydration / first-paint flash */
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 300);
    return () => clearTimeout(t);
  }, []);

  /* ── Watch for navbar open state ──────────────────────────
     Navbar should set:  document.body.dataset.navOpen = "true"
     when hamburger opens and remove / set "false" when closes.
     This component reads that attribute via MutationObserver.
  ────────────────────────────────────────────────────────── */
  useEffect(() => {
    const check = () => {
      setNavIsOpen(document.body.dataset.navOpen === "true");
    };

    check(); // initial

    const observer = new MutationObserver(check);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["data-nav-open"],
    });

    return () => observer.disconnect();
  }, []);

  /* close this panel when nav opens */
  useEffect(() => {
    if (navIsOpen) setIsOpen(false);
  }, [navIsOpen]);

  /* outside click / tap */
  const handleOutside = useCallback(
    (e) => {
      if (isOpen && rootRef.current && !rootRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    },
    [isOpen],
  );

  /* Escape key */
  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    },
    [isOpen],
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside, { passive: true });
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, [handleOutside, handleKey]);

  /* hide while nav is open */
  if (!mounted || navIsOpen) return null;

  return (
    <aside
      ref={rootRef}
      className={`pfc-root${isOpen ? " pfc-root--open" : ""}`}
      role="complementary"
      aria-label="Quick contact options"
    >
      {/* ── Icon Pill ── */}
      <div className="pfc-pill" role="list" aria-hidden={!isOpen}>
        {items.map((item, i) => (
          <a
            key={item.id}
            href={item.href}
            target={item.id === "email" ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className="pfc-link"
            role="listitem"
            aria-label={item.label}
            style={{
              "--clr": item.clr,
              "--glow": item.glow,
              "--bg": item.bg,
              "--i": i,
            }}
            tabIndex={isOpen ? 0 : -1}
          >
            <span className="pfc-tooltip" role="tooltip">
              {item.label}
            </span>
            <span className="pfc-icon" aria-hidden="true">
              <i className={item.icon} />
            </span>
          </a>
        ))}
      </div>

      {/* ── Trigger Pill ── */}

      <button
        className="pfc-trigger"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
        title="Contact Us"
      >
        {!isOpen && <span className="pfc-ring" aria-hidden="true" />}
        <span className="pfc-trigger-inner" aria-hidden="true">
          {isOpen ? (
            <i className="fa-solid fa-xmark pfc-icon-xmark" />
          ) : (
            <>
              <i className="fa-solid fa-headset pfc-icon-dots" />
              <span className="pfc-trigger-label">Contact</span>
            </>
          )}
        </span>
      </button>
    </aside>
  );
});

FloatingContact.displayName = "FloatingContact";
export default FloatingContact;
