import { useState, useEffect, useRef } from "react";
import "./Dashboard.css";
import { getDashboardStats } from "../services/dashboardService";
// import Link from "next/link";
import { Link } from "react-router-dom";

/* ══════════════════════════════════════════
   ICONS
══════════════════════════════════════════ */
const IcBlog = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14,2 14,8 20,8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);
const IcLeads = () => (
  <svg
    width="18"
    height="18"
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
const IcDraft = () => (
  <svg
    width="18"
    height="18"
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
const IcEye = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
const IcClock = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
);
const IcArrow = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12,5 19,12 12,19" />
  </svg>
);
const IcCheck = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20,6 9,17 4,12" />
  </svg>
);
const IcTrendUp = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" />
    <polyline points="17,6 23,6 23,12" />
  </svg>
);
const IcCalendar = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const IcRefresh = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23,4 23,10 17,10" />
    <polyline points="1,20 1,14 7,14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
);

/* ── Animated Counter ── */
function Counter({ target, duration = 1400, prefix = "", suffix = "" }) {
  const [val, setVal] = useState(0);
  const raf = useRef(null);
  useEffect(() => {
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 4);
      setVal(Math.floor(ease * target));
      if (p < 1) raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, [target, duration]);
  return (
    <>
      {prefix}
      {val.toLocaleString()}
      {suffix}
    </>
  );
}

/* ── Sparkline ── */
function Sparkline({ data, color, height = 48 }) {
  const w = 100,
    h = height;
  const max = Math.max(...data),
    min = Math.min(...data);
  const pts = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * w;
      const y = h - ((v - min) / (max - min || 1)) * (h - 8) - 4;
      return `${x},${y}`;
    })
    .join(" ");
  const area = `0,${h} ${pts} ${w},${h}`;
  const id = `sg${color.replace(/[^a-z0-9]/gi, "")}`;
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      style={{ width: "100%", height }}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={area} fill={`url(#${id})`} />
      <polyline
        points={pts}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Bar Chart ── */
function BarChart({ data }) {
  const max = Math.max(...data.map((d) => d.val));
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <div className="db-barchart">
      {data.map((d, i) => (
        <div key={i} className="db-bar-col">
          <div className="db-bar-wrap">
            <div
              className={`db-bar-fill${d.today ? " db-bar-fill--active" : ""}`}
              style={{ height: `${(d.val / max) * 100}%` }}
            >
              {d.today && <div className="db-bar-tip">{d.val}</div>}
            </div>
          </div>
          <span className={`db-bar-lbl${d.today ? " db-bar-lbl--active" : ""}`}>
            {days[i]}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ── Donut Chart ── */
function Donut({ slices, total }) {
  const r = 68,
    cx = 90,
    cy = 90,
    stroke = 20;
  const circ = 2 * Math.PI * r;
  let offset = 0;
  return (
    <svg viewBox="0 0 180 180" className="db-donut-svg">
      {/* Track */}
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke="rgba(255,255,255,0.05)"
        strokeWidth={stroke}
      />
      {slices.map((s, i) => {
        const dash = (s.pct / 100) * circ;
        const gap = circ - dash;
        const rot = (offset / 100) * 360 - 90;
        offset += s.pct;
        return (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke={s.color}
            strokeWidth={stroke}
            strokeDasharray={`${dash} ${gap}`}
            strokeLinecap="round"
            transform={`rotate(${rot} ${cx} ${cy})`}
            style={{
              transition: "stroke-dasharray 1.2s cubic-bezier(0.4,0,0.2,1)",
              filter: s.glow ? `drop-shadow(0 0 6px ${s.color}88)` : "none",
            }}
          />
        );
      })}
      {/* Center text */}
      <text x={cx} y={cy - 8} textAnchor="middle" className="db-donut-num">
        {total}
      </text>
      <text x={cx} y={cy + 12} textAnchor="middle" className="db-donut-lbl">
        Blogs
      </text>
    </svg>
  );
}

/* ── Progress Bar ── */
function ProgressBar({ label, value, max, color }) {
  const pct = Math.round((value / max) * 100);
  return (
    <div className="db-progress-item">
      <div className="db-progress-row">
        <span className="db-progress-label">{label}</span>
        <span className="db-progress-val" style={{ color }}>
          {pct}%
        </span>
      </div>
      <div className="db-progress-track">
        <div
          className="db-progress-fill"
          style={{
            width: `${pct}%`,
            background: color,
            boxShadow: `0 0 10px ${color}55`,
          }}
        />
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   MAIN DASHBOARD
════════════════════════════════════════ */
export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      setLoading(true);

      const data = await getDashboardStats();

      setDashboardData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // const stats = [
  //   {
  //     label: "Published Blogs",
  //     value: 47,
  //     desc: "3 published today",
  //     badge: "+18%",
  //     badgeColor: "#22c55e",
  //     icon: <IcBlog />,
  //     iconColor: "orange",
  //     lineColor: "orange",
  //     spark: [12, 18, 14, 22, 19, 28, 47],
  //     sparkColor: "#ff6b1e",
  //   },
  //   {
  //     label: "Total Form Leads",
  //     value: 312,
  //     desc: "47 new leads today",
  //     badge: "+24%",
  //     badgeColor: "#22c55e",
  //     icon: <IcLeads />,
  //     iconColor: "green",
  //     lineColor: "green",
  //     spark: [80, 120, 95, 140, 175, 210, 312],
  //     sparkColor: "#22c55e",
  //   },
  //   {
  //     label: "Draft Blogs",
  //     value: 9,
  //     desc: "2 awaiting review",
  //     badge: "Pending",
  //     badgeColor: "rgba(255,255,255,0.3)",
  //     icon: <IcDraft />,
  //     iconColor: "purple",
  //     lineColor: "purple",
  //     spark: [3, 5, 4, 6, 8, 7, 9],
  //     sparkColor: "#a855f7",
  //   },
  // ];

  const stats = [
    {
      label: "Published Blogs",
      value: dashboardData?.stats?.publishedBlogs || 0,
      desc: "Live published blogs",
      badge: "+Live",
      badgeColor: "#22c55e",
      icon: <IcBlog />,
      iconColor: "orange",
      lineColor: "orange",
      spark: [12, 18, 14, 22, 19, 28, 47],
      sparkColor: "#ff6b1e",
    },

    {
      label: "Total Form Leads",
      value: dashboardData?.stats?.totalLeads || 0,
      desc: "Live leads count",
      badge: "+Live",
      badgeColor: "#22c55e",
      icon: <IcLeads />,
      iconColor: "green",
      lineColor: "green",
      spark: [80, 120, 95, 140, 175, 210, 312],
      sparkColor: "#22c55e",
    },

    {
      label: "Draft Blogs",
      value: dashboardData?.stats?.draftBlogs || 0,
      desc: "Blogs in draft mode",
      badge: "Draft",
      badgeColor: "#a855f7",
      icon: <IcDraft />,
      iconColor: "purple",
      lineColor: "purple",
      spark: [3, 5, 4, 6, 8, 7, 9],
      sparkColor: "#a855f7",
    },
  ];

  const barData = [
    { val: 6 },
    { val: 9 },
    { val: 7 },
    { val: 18, today: true },
    { val: 5 },
    { val: 8 },
    { val: 4 },
  ];

  // const donutSlices = [
  //   { pct: 55, color: "#3b82f6", glow: true },
  //   { pct: 30, color: "#ff6b1e", glow: true },
  //   { pct: 15, color: "rgba(255,255,255,0.15)", glow: false },
  // ];

  const totalBlogs = dashboardData?.stats?.totalBlogs || 1;

  const publishedPercent = Math.round(
    ((dashboardData?.stats?.publishedBlogs || 0) / totalBlogs) * 100,
  );

  const draftPercent = Math.round(
    ((dashboardData?.stats?.draftBlogs || 0) / totalBlogs) * 100,
  );

  const remaining = 100 - publishedPercent - draftPercent;

  const donutSlices = [
    {
      pct: publishedPercent,
      color: "#22c55e",
      glow: true,
    },

    {
      pct: draftPercent,
      color: "#ff6b1e",
      glow: true,
    },

    {
      pct: remaining,
      color: "rgba(255,255,255,0.12)",
      glow: false,
    },
  ];

  const recentBlogs = dashboardData?.recentBlogs || [];
  const recentLeads = [
    {
      name: "Rahul Sharma",
      college: "IIT Bombay",
      form: "Admission Enquiry",
      time: "10m ago",
    },
    {
      name: "Priya Singh",
      college: "DU North Campus",
      form: "Scholarship Form",
      time: "32m ago",
    },
    {
      name: "Amit Kumar",
      college: "BITS Pilani",
      form: "Course Enquiry",
      time: "1h ago",
    },
    {
      name: "Neha Patel",
      college: "NIT Trichy",
      form: "Admission Enquiry",
      time: "2h ago",
    },
  ];

  const avatarColors = ["#ff6b1e", "#22c55e", "#3b82f6", "#a855f7"];

  if (loading) {
    return <div className="db-loading">Loading dashboard...</div>;
  }

  return (
    <div className="db-root">
      {/* Ambient bg */}
      <div className="db-orb db-orb-1" />
      <div className="db-orb db-orb-2" />
      <div className="db-orb db-orb-3" />

      <div className="db-content">
        {/* ── Page Header ── */}
        <div className="db-page-header">
          <div>
            <h1 className="db-page-title">Dashboard</h1>
            <p className="db-page-date">
              <IcCalendar /> {today}
            </p>
          </div>
          <button className="db-refresh-btn">
            <IcRefresh /> Refresh
          </button>
        </div>

        {/* ══ STAT CARDS ══ */}
        <div className="db-stat-grid">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`db-stat-card db-stat-card--${s.lineColor}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className={`db-stat-line db-stat-line--${s.lineColor}`} />
              <div
                className={`db-stat-corner-glow db-stat-corner-glow--${s.lineColor}`}
              />

              <div className="db-stat-top">
                <div className={`db-stat-icon db-stat-icon--${s.iconColor}`}>
                  {s.icon}
                </div>
                <span
                  className="db-stat-badge"
                  style={{
                    color: s.badgeColor,
                    background: `${s.badgeColor}18`,
                    border: `1px solid ${s.badgeColor}30`,
                  }}
                >
                  {s.badgeColor === "#22c55e" && <IcTrendUp />} {s.badge}
                </span>
              </div>

              <div className="db-stat-body">
                <p className="db-stat-label">{s.label}</p>
                <h2 className="db-stat-num">
                  <Counter target={s.value} />
                </h2>
                <p className="db-stat-desc">{s.desc}</p>
              </div>

              <div className="db-stat-spark">
                <Sparkline data={s.spark} color={s.sparkColor} height={48} />
              </div>
            </div>
          ))}
        </div>

        {/* ══ MID ROW ══ */}
        <div className="db-mid-row">
          {/* Publishing Velocity */}
          <div className="db-card">
            <div className="db-card-line" />
            <div className="db-card-header">
              <div>
                <h3 className="db-card-title">Publishing Velocity</h3>
                <p className="db-card-sub">Weekly blog activity — this week</p>
              </div>
              <div className="db-legend">
                <span className="db-legend-item">
                  <span
                    className="db-legend-dot"
                    style={{ background: "rgba(255,255,255,0.2)" }}
                  />{" "}
                  Blogs
                </span>
                <span className="db-legend-item">
                  <span
                    className="db-legend-dot"
                    style={{
                      background: "#ff6b1e",
                      boxShadow: "0 0 6px #ff6b1e88",
                    }}
                  />{" "}
                  Today
                </span>
              </div>
            </div>
            <BarChart data={barData} />
          </div>

          {/* Donut */}
          <div className="db-card db-card--donut">
            <div className="db-card-line" />
            <div className="db-card-header">
              <div>
                <h3 className="db-card-title">Blogs</h3>
                <p className="db-card-sub">Traffic source breakdown</p>
              </div>
            </div>
            <div className="db-donut-wrap">
              {/* <Donut slices={donutSlices} total={21} /> */}
              <Donut
                slices={donutSlices}
                total={dashboardData?.stats?.totalBlogs || 0}
              />
              <div className="db-donut-legend">
                {[
                  {
                    label: "Published",
                    pct: `${publishedPercent}%`,
                    color: "#22c55e",
                  },

                  {
                    label: "Draft",
                    pct: `${draftPercent}%`,
                    color: "#ff6b1e",
                  },

                  {
                    label: "Other",
                    pct: `${remaining}%`,
                    color: "rgba(255,255,255,0.25)",
                  },
                ].map((s, i) => (
                  <div key={i} className="db-donut-row">
                    <span
                      className="db-donut-dot"
                      style={{
                        background: s.color,
                        boxShadow: `0 0 6px ${s.color}88`,
                      }}
                    />
                    <span className="db-donut-name">{s.label}</span>
                    <span className="db-donut-pct">{s.pct}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ══ PROGRESS ROW ══ */}
        <div className="db-card db-card--progress">
          <div className="db-card-line" />
          <div className="db-card-header">
            <div>
              <h3 className="db-card-title">Content Health Overview</h3>
              <p className="db-card-sub">
                Publishing completion rates by category
              </p>
            </div>
          </div>
          <div className="db-progress-grid">
            <ProgressBar
              label="Engineering"
              value={38}
              max={50}
              color="#ff6b1e"
            />
            <ProgressBar label="Medical" value={22} max={40} color="#22c55e" />
            <ProgressBar
              label="Management"
              value={15}
              max={30}
              color="#3b82f6"
            />
            <ProgressBar
              label="Arts & Commerce"
              value={8}
              max={20}
              color="#a855f7"
            />
          </div>
        </div>

        {/* ══ BOTTOM ROW ══ */}
        <div className="db-bottom-row">
          {/* Recent Blogs */}
          <div className="db-card">
            <div className="db-card-line" />
            <div className="db-card-header">
              <div>
                <h3 className="db-card-title">Recent Blogs</h3>
                <p className="db-card-sub">Latest content activity</p>
              </div>
              <Link to="/admin/blogs">
                <button className="db-view-btn db-view-btn--green">
                  View All <IcArrow />
                </button>
              </Link>
            </div>
            <div className="db-table">
              {recentBlogs.slice(0, 5).map((b, i) => (
                <div key={i} className="db-table-row">
                  <div className="db-table-icon">
                    <IcBlog />
                  </div>
                  <div className="db-table-info">
                    <span className="db-table-title">{b.title}</span>
                    <span className="db-table-sub">{b.category || "Blog"}</span>
                  </div>
                  <div className="db-table-meta">
                    {b.status === "published" && (
                      <span className="db-meta-views">
                        <IcEye /> {(b.views || 0).toLocaleString()}
                      </span>
                    )}
                    <span className="db-meta-time">
                      <IcClock /> {new Date(b.createdAt).toLocaleDateString()}
                    </span>
                    <span className={`db-status db-status--${b.status}`}>
                      {b.status === "published" ? (
                        <>
                          <IcCheck /> Published
                        </>
                      ) : (
                        "Draft"
                      )}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Leads */}
          <div className="db-card">
            <div className="db-card-line db-card-line--green" />
            <div className="db-card-header">
              <div>
                <h3 className="db-card-title">Recent Leads</h3>
                <p className="db-card-sub">Latest form submissions</p>
              </div>
              <Link href="/admin/blogs">
                <button className="db-view-btn db-view-btn--green">
                  View All <IcArrow />
                </button>
              </Link>
            </div>
            <div className="db-table">
              {recentLeads.map((l, i) => (
                <div key={i} className="db-table-row">
                  <div
                    className="db-table-avatar"
                    style={{
                      background: `${avatarColors[i]}20`,
                      color: avatarColors[i],
                      border: `1px solid ${avatarColors[i]}40`,
                    }}
                  >
                    {l.name.charAt(0)}
                  </div>
                  <div className="db-table-info">
                    <span className="db-table-title">{l.name}</span>
                    <span className="db-table-sub">
                      {l.college} · {l.form}
                    </span>
                  </div>
                  <div className="db-table-meta">
                    <span className="db-meta-time">
                      <IcClock /> {l.time}
                    </span>
                    <span className="db-status db-status--new">New</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
