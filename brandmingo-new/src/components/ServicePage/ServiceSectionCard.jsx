import React from "react";
import { useNavigate } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

/* ─── Lottie Icon Map ───────────────────────────────── */
const LOTTIE_SRCS = {
  webdev:
    "https://lottie.host/96418d4d-e6c8-4404-aee3-426b7504a4f4/3FEIvrd95G.lottie",
  ads: "https://lottie.host/ae87bd6f-cca4-4bbf-9cd5-550685b9c756/8uvxORn8Nt.lottie",
  social:
    "https://lottie.host/78616e9b-fab8-4eb5-9aaf-3e72512dc386/vsOWoP2AaD.lottie",
  uiux: "https://lottie.host/ddc6980e-69c2-49d3-b088-960b506187f2/1ffIEtNJ8w.lottie",
  seo: "https://lottie.host/66ac1cbb-d906-44b8-8725-f5aaa788f549/LnWeYDVb96.lottie",
  ecommerce:
    "https://lottie.host/631d8e50-0d72-4394-9b70-f8238c8fcabe/DzBa2qZPBS.lottie",
  brand:
    "https://lottie.host/f0ecf788-6465-47be-a8f8-f21feb4e662e/Jy1zxAcsMq.lottie",
};

const LottieIcon = ({ type }) => (
  <DotLottieReact
    src={LOTTIE_SRCS[type]}
    loop
    autoplay
    style={{ width: 54, height: 54 }}
  />
);

/* ─── Arrow SVG ─────────────────────────────────────── */
const ArrowSvg = () => (
  <svg width="19" height="16" viewBox="0 0 19 16">
    <path
      d="M0 8.00008L15 8.00008M18.3361 8.01939C15.2241 7.82927 9 9.16017 9 16.0048M18.3361 7.98545C15.2241 8.17558 9 6.84467 9 0"
      stroke="#FF6B1E"
      strokeWidth="1.5"
    />
  </svg>
);

/* ─── Services Data ─────────────────────────────────── */
const SERVICES = [
  {
    num: "01",
    iconType: "webdev",
    title: "Web Development",
    path: "/web-development-new",
    desc: "Build fast, responsive websites designed to convert visitors into customers.",
  },
  {
    num: "02",
    iconType: "ads",
    title: "Ads And Campaigns",
    path: "/ads-and-campaigns",
    desc: "Run targeted ad campaigns that drive quality leads and maximize ROI.",
  },
  {
    num: "03",
    iconType: "social",
    title: "Social Media Management",
    path: "/social-media-management",
    desc: "Grow your brand presence with engaging content and consistent social strategies.",
  },
  {
    num: "04",
    iconType: "uiux",
    title: "UI/UX And Audits",
    path: "/ui-ux-audits",
    desc: "Improve user experience with data-driven audits and optimized design flow.",
  },
  {
    num: "05",
    iconType: "seo",
    title: "SEO Optimizing",
    path: "/seo-optimizing",
    desc: "Boost your visibility on Google with strategic SEO and performance tracking.",
  },
  {
    num: "06",
    iconType: "ecommerce",
    title: "Ecommerce Management",
    path: "/ecommerce-management",
    desc: "Manage and scale your online store with optimized listings and conversion strategies.",
  },
  {
    num: "07",
    iconType: "brand",
    title: "Brand Identity",
    path: "/brand-identity",
    desc: "Create a strong brand image with impactful design and consistent visual identity.",
  },
];

/* ─── Scoped Styles ─────────────────────────────────── */
const CSS = `
  .ssc-card {
    position: relative;
    height: 100%;
    background: #111111;
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 18px;
    padding: 32px 28px 28px;
    cursor: pointer;
    overflow: hidden;
    transition: background .35s, border-color .35s, transform .35s, box-shadow .35s;
  }
  .ssc-card::after {
    content: "";
    position: absolute; inset: 0;
    background: linear-gradient(155deg, rgba(255,107,30,0.05) 0%, transparent 50%);
    opacity: 0;
    transition: opacity .35s;
    pointer-events: none;
    border-radius: 18px;
  }
  .ssc-card:hover {
    background: #161616;
    border-color: rgba(255,107,30,0.35);
    transform: translateY(-8px);
    box-shadow: 0 32px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,107,30,0.1), inset 0 1px 0 rgba(255,255,255,0.04);
  }
  .ssc-card:hover::after { opacity: 1; }

  .ssc-num {
    position: absolute; top: 18px; right: 24px;
    font-size: 46px; font-weight: 800;
    color: rgba(255,255,255,0.035);
    line-height: 1; letter-spacing: -2px;
    user-select: none;
    transition: color .35s;
    font-family: inherit;
  }
  .ssc-card:hover .ssc-num { color: rgba(255,107,30,0.07); }

  .ssc-dot {
    width: 7px; height: 7px; border-radius: 50%;
    background: #FF6B1E;
    margin-bottom: 22px;
    position: relative; z-index: 1;
  }
  .ssc-dot::after {
    content: "";
    position: absolute; inset: -3px;
    border-radius: 50%;
    background: rgba(255,107,30,0.3);
    animation: ssc-ping 2.2s infinite;
  }
  @keyframes ssc-ping {
    0%,100% { transform: scale(1); opacity: .6; }
    55% { transform: scale(2.2); opacity: 0; }
  }

  .ssc-ico {
    width: 74px; height: 74px; border-radius: 17px;
    background: rgba(255,107,30,0.07);
    border: 1px solid rgba(255,107,30,0.14);
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 24px;
    position: relative; z-index: 1;
    overflow: hidden;
    transition: all .4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .ssc-card:hover .ssc-ico {
    background: rgba(255,107,30,0.13);
    border-color: rgba(255,107,30,0.4);
    box-shadow: 0 12px 36px rgba(255,107,30,0.22);
    transform: translateY(-4px) scale(1.05);
  }

  .ssc-title {
    font-size: 19px; font-weight: 700; color: #fff;
    margin-bottom: 10px; line-height: 1.3;
    position: relative; z-index: 1;
  }
  .ssc-desc {
    font-size: 13.5px; color: rgba(255,255,255,0.42);
    line-height: 1.72; margin-bottom: 28px;
    position: relative; z-index: 1;
  }

  .ssc-link {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: 13px; font-weight: 600;
    color: #FF6B1E; letter-spacing: .3px;
    position: relative; z-index: 1;
    transition: gap .25s;
  }
  .ssc-card:hover .ssc-link { gap: 13px; }

  .ssc-bar {
    position: absolute; bottom: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent 0%, #FF6B1E 50%, transparent 100%);
    opacity: 0; transition: opacity .35s;
    border-radius: 0 0 18px 18px;
  }
  .ssc-card:hover .ssc-bar { opacity: 1; }

  .ssc-corner {
    position: absolute; top: 0; right: 0;
    width: 60px; height: 60px;
    background: linear-gradient(225deg, rgba(255,107,30,0.08) 0%, transparent 60%);
    border-radius: 0 18px 0 0;
    opacity: 0; transition: opacity .35s;
    pointer-events: none;
  }
  .ssc-card:hover .ssc-corner { opacity: 1; }
`;

/* ─── Component ─────────────────────────────────────── */
const ServiceSectionCard = () => {
  const navigate = useNavigate();

  const go = (path) => {
    window.scrollTo({ top: 0, behavior: "instant" });
    navigate(path);
  };

  return (
    <>
      <style>{CSS}</style>
      <section className="service-section pt-120 mt-15 mb-15 pb-120">
        <div className="auto-container">
          <div className="row g-3">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                className="col-xl-4 col-lg-6 col-sm-6 wow fadeInUp"
                data-wow-delay={`${0.1 + i * 0.08}s`}
              >
                <div className="ssc-card" onClick={() => go(s.path)}>
                  <span className="ssc-num">{s.num}</span>
                  <div className="ssc-corner" />
                  <div className="ssc-dot" />
                  <div className="ssc-ico">
                    <LottieIcon type={s.iconType} />
                  </div>
                  <h4 className="ssc-title">{s.title}</h4>
                  <p className="ssc-desc">{s.desc}</p>
                  <span className="ssc-link">
                    View Details <ArrowSvg />
                  </span>
                  <div className="ssc-bar" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSectionCard;
