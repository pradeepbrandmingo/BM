import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "./Sidebar.css";

/* ═══════════════════════════════════════
   SVG ICONS
═══════════════════════════════════════ */
const IconDashboard = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </svg>
);

const IconBlog = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);

const IconLeads = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconLogout = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

const IconChevronLeft = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const IconClose = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const NAV_SECTIONS = [
  {
    label: "Main",
    items: [
      {
        key: "dashboard",
        label: "Dashboard",
        icon: <IconDashboard />,
        path: "/admin/dashboard",
      },
    ],
  },
  {
    label: "Content",
    items: [
      {
        key: "blogs",
        label: "Blogs",
        icon: <IconBlog />,
        path: "/admin/blogs",
      },
    ],
  },
  {
    label: "Leads",
    items: [
      { key: "leads", label: "Leads", icon: <IconLeads />, path: "/leads" },
    ],
  },
];

/* ═══════════════════════════════════════
   SIDEBAR COMPONENT
═══════════════════════════════════════ */
const Sidebar = ({ onLogout }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth > 768 && window.innerWidth <= 1024,
  );

  const navigate = useNavigate();
  const location = useLocation();
  const sidebarRef = useRef(null);

  /* ── Breakpoint detection ── */
  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      setIsMobile(w <= 768);
      setIsTablet(w > 768 && w <= 1024);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ── Close drawer on navigation ── */
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  /* ── Close drawer on outside click ── */
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [mobileOpen]);

  /* ── Lock body scroll when mobile drawer open ── */
  useEffect(() => {
    document.body.style.overflow = isMobile && mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobile, mobileOpen]);

  const isActive = (path) => location.pathname === path;

  const handleNav = (path) => {
    navigate(path);
    if (isMobile) setMobileOpen(false);
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      localStorage.removeItem("adminToken");
      localStorage.removeItem("adminUser");
      navigate("/admin/login");
    }
  };

  /* ── Compute class string ── */
  const sidebarClass = [
    "mc-sidebar",
    !isMobile && !isTablet && collapsed ? "collapsed" : "",
    isMobile && mobileOpen ? "mobile-open" : "",
    isTablet ? "tablet-mode" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      {/* ══ MOBILE HAMBURGER — only shown when drawer is CLOSED ══ */}
      {isMobile && !mobileOpen && (
        <button
          className="mc-hamburger"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <span className="mc-hamburger__bar" />
          <span className="mc-hamburger__bar" />
          <span className="mc-hamburger__bar" />
        </button>
      )}

      {/* ══ OVERLAY ══ */}
      <div
        className={`mc-overlay${isMobile && mobileOpen ? " visible" : ""}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* ══ SIDEBAR ══ */}
      <aside
        className={sidebarClass}
        ref={sidebarRef}
        aria-label="Admin sidebar"
      >
        {/* ── Desktop collapse toggle — rendered OUTSIDE overflow:hidden area ── */}
        {!isMobile && !isTablet && (
          <button
            className={`mc-sidebar__toggle${collapsed ? " rotated" : ""}`}
            onClick={() => setCollapsed((p) => !p)}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <span className="mc-sidebar__toggle-icon">
              <IconChevronLeft />
            </span>
          </button>
        )}

        {/* ── Mobile close button — top-right inside drawer ── */}
        {isMobile && (
          <button
            className="mc-sidebar__close"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <IconClose />
          </button>
        )}

        {/* ── Logo ── */}
        <Link className="mc-sidebar__logo" to="/admin/dashboard">
          <div className="mc-sidebar__logo-icon" aria-hidden="true">
            B
          </div>
          <div className="mc-sidebar__logo-text">
            <span className="mc-sidebar__logo-name">
              Brand<em>mingo</em>
            </span>
            <span className="mc-sidebar__logo-sub">Admin Panel</span>
          </div>
        </Link>

        {/* ── Nav ── */}
        <nav
          className="mc-sidebar__nav"
          role="navigation"
          aria-label="Admin navigation"
        >
          {NAV_SECTIONS.map((section, si) => (
            <div key={section.label} className="mc-sidebar__section">
              <span className="mc-sidebar__section-label">{section.label}</span>
              {section.items.map((item) => {
                const active = isActive(item.path);
                return (
                  <button
                    key={item.key}
                    className={`mc-sidebar__item${active ? " active" : ""}`}
                    onClick={() => handleNav(item.path)}
                    data-tooltip={item.label}
                    aria-label={item.label}
                    aria-current={active ? "page" : undefined}
                    style={{ animationDelay: `${(si + 1) * 0.06}s` }}
                  >
                    <span className="mc-sidebar__item-icon">{item.icon}</span>
                    <span className="mc-sidebar__item-label">{item.label}</span>
                    {active && (
                      <span
                        className="mc-sidebar__item-pip"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </nav>

        {/* ── Footer ── */}
        <footer className="mc-sidebar__footer">
          <div className="mc-sidebar__divider" aria-hidden="true" />
          <button
            className="mc-sidebar__logout"
            onClick={handleLogout}
            data-tooltip="Logout"
            aria-label="Logout"
          >
            <span className="mc-sidebar__logout-icon">
              <IconLogout />
            </span>
            <span className="mc-sidebar__logout-label">Logout</span>
          </button>
        </footer>
      </aside>
    </>
  );
};

export default Sidebar;
