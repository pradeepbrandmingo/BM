// import { useEffect, useRef } from "react";
// import logo from "../../assets/images/logo/white-logo.png";
// import { Link } from "react-router-dom";

// const NewFooter = () => {
//   const quickLinks = [
//     { name: "About Us", path: "/about" },
//     { name: "Services", path: "/services" },
//     { name: "Portfolio", path: "/portfolio" },
//     { name: "Blog", path: "/blogs" },
//     { name: "Contact", path: "/contact-us" },
//   ];

//   const footerRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("reveal-active");
//           }
//         });
//       },
//       { threshold: 0.08 },
//     );

//     const items = footerRef.current?.querySelectorAll(".reveal-item");
//     items?.forEach((item) => observer.observe(item));

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');

//         .foorer-area {
//           position: relative;
//           overflow: hidden;
//           font-family: var(--body-font-family, 'Syne', sans-serif);
//           color: #fff;
//         }

//         /* ── GRADIENT BACKGROUND ── */
//         .footer-gradient-bg {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             125deg,
//             #e85c0d 0%,
//             #ff6b1e 40%,
//             #ff9a5c 75%,
//             #ff6b1e 100%
//           );
//           z-index: 0;
//         }

//         .footer-gradient-bg::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
//           opacity: 0.08;
//           mix-blend-mode: overlay;
//           pointer-events: none;
//         }

//         .footer-deco-circle-1 {
//           position: absolute;
//           width: 480px;
//           height: 480px;
//           border-radius: 50%;
//           background: rgba(255, 255, 255, 0.07);
//           top: -150px;
//           right: -100px;
//           z-index: 0;
//           pointer-events: none;
//         }

//         .footer-deco-circle-2 {
//           position: absolute;
//           width: 300px;
//           height: 300px;
//           border-radius: 50%;
//           background: rgba(255, 255, 255, 0.05);
//           bottom: -80px;
//           left: -80px;
//           z-index: 0;
//           pointer-events: none;
//         }

//         .footer-deco-line {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           height: 3px;
//           background: rgba(255,255,255,0.35);
//           z-index: 1;
//         }

//         /* ── CONTAINER ── */
//         .footer-container {
//           max-width: 1280px;
//           margin: 0 auto;
//           padding: 70px 40px 35px;
//           position: relative;
//           z-index: 2;
//         }

//         @media (max-width: 1199px) {
//           .footer-container { padding: 60px 28px 30px; }
//         }

//         @media (max-width: 767px) {
//           .footer-container { padding: 50px 20px 25px; }
//         }

//         /* ── TOP ROW ── */
//         .f-top-flex {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding-bottom: 45px;
//           border-bottom: 2px solid rgba(255,255,255,0.3);
//           margin-bottom: 55px;
//         }

//         @media (max-width: 767px) {
//           .f-top-flex {
//             flex-direction: column;
//             align-items: flex-start;
//             gap: 25px;
//             padding-bottom: 30px;
//             margin-bottom: 35px;
//           }
//         }

//         .f-logo img {
//           max-height: 42px;
//           filter: brightness(0) invert(1);
//           object-fit: contain;
//         }

//         .f-cta-block {
//           display: flex;
//           align-items: center;
//           gap: 25px;
//         }

//         .f-cta-label { text-align: right; }

//         .f-cta-label span {
//           display: block;
//           font-size: 11px;
//           font-weight: 700;
//           text-transform: uppercase;
//           letter-spacing: 2.5px;
//           color: rgba(255,255,255,0.75);
//           margin-bottom: 6px;
//         }

//         .f-cta-label a {
//           font-size: 26px;
//           font-weight: 800;
//           color: #fff;
//           text-decoration: none;
//           line-height: 1;
//           text-shadow: 0 2px 10px rgba(0,0,0,0.15);
//           transition: opacity 0.2s;
//         }

//         .f-cta-label a:hover { opacity: 0.85; }

//         @media (max-width: 991px) {
//           .f-cta-label a { font-size: 20px; }
//         }

//         @media (max-width: 767px) {
//           .f-cta-block { flex-direction: column; align-items: flex-start; gap: 10px; }
//           .f-cta-label { text-align: left; }
//         }

//         /* ── MAIN 5-COLUMN GRID ── */
//         .footer-main-grid {
//           display: grid;
//           grid-template-columns: 1.1fr 1fr 1fr 1fr 1fr;
//           gap: 20px;
//           align-items: start;
//         }

//         @media (max-width: 1199px) {
//           .footer-main-grid { grid-template-columns: 1fr 1fr 1fr; gap: 18px; }
//         }

//         @media (max-width: 767px) {
//           .footer-main-grid { grid-template-columns: 1fr 1fr; gap: 14px; }
//         }

//         @media (max-width: 480px) {
//           .footer-main-grid { grid-template-columns: 1fr; gap: 12px; }
//         }

//         /* ── FOOTER CARD ── */
//         .footer-card {
//           background: transparent;
//           border: 1.5px solid rgba(255, 255, 255, 0.28);
//           padding: 30px 28px;
//           border-radius: 20px;
//           transition: all 0.35s ease;
//           height: 100%;
//           box-sizing: border-box;
//         }

//         .footer-card:hover {
//           background: rgba(0, 0, 0, 0.07);
//           border-color: rgba(255, 255, 255, 0.5);
//           transform: translateY(-4px);
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
//         }

//         @media (max-width: 767px) {
//           .footer-card { padding: 22px 18px; }
//         }

//         /* ── CARD TITLE ── */
//         .f-card-title {
//           font-size: 14px;
//           font-weight: 800;
//           text-transform: uppercase;
//           letter-spacing: 2px;
//           color: #fff;
//           margin-bottom: 22px;
//           display: flex;
//           align-items: center;
//           gap: 10px;
//         }

//         .f-card-title::before {
//           content: '';
//           display: inline-block;
//           width: 22px;
//           height: 3px;
//           background: rgba(255,255,255,0.7);
//           border-radius: 2px;
//           flex-shrink: 0;
//         }

//         /* ── LINKS ── */
//         .f-links {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//         }

//         .f-links li { margin-bottom: 13px; }

//         .f-links li a {
//   color: rgba(255, 255, 255, 0.9);
//   text-decoration: none;
//   font-size: 14.5px;
//   font-weight: 500;
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   transition: all 0.25s ease;
//   letter-spacing: 0.2px;
// }

// .f-links li a:hover {
//   color: #fff;
//   gap: 14px;
//   text-shadow: 0 0 12px rgba(255,255,255,0.4);
// }

// .f-links li a i {
//   font-size: 9px;
//   opacity: 0.7;
//   transition: opacity 0.25s;
// }

// .f-links li a:hover i {
//   opacity: 1;
// }

//         /* ── CONTACT CARD ── */
//         .f-contact-item {
//           display: flex;
//           align-items: flex-start;
//           gap: 12px;
//           margin-bottom: 18px;
//           color: rgba(255,255,255,0.9);
//           font-size: 14px;
//           font-weight: 500;
//         }

//         .f-contact-item:last-child { margin-bottom: 0; }

//         .f-contact-icon {
//           width: 34px;
//           height: 34px;
//           background: rgba(255,255,255,0.2);
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 13px;
//           color: #fff;
//           flex-shrink: 0;
//         }

//         .f-contact-item a {
//           color: rgba(255,255,255,0.9);
//           text-decoration: none;
//           transition: color 0.2s;
//         }

//         .f-contact-item a:hover { color: #fff; text-decoration: underline; }

//         /* ── PARTNERS ── */
//         .f-partners-list {
//           display: flex;
//           flex-direction: column;
//           gap: 10px;
//         }

//         /* FIXED: badge is now a proper row — image left, text right, no overflow */
//         .f-partner-badge {
//           background: rgba(0, 0, 0, 0.08);
//           border: 1px solid rgba(255,255,255,0.28);
//           border-radius: 12px;
//           padding: 10px 14px;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           gap: 10px;
//           transition: all 0.3s ease;
//           cursor: default;
//           overflow: hidden;       /* nothing spills outside badge */
//           min-width: 0;           /* flex children can shrink */
//         }

//         .f-partner-badge:hover {
//           background: rgba(0, 0, 0, 0.14);
//           border-color: rgba(255,255,255,0.45);
//           transform: translateX(4px);
//         }

//         /* FIXED: icon container — no fixed px size, just constrains the image */
//         .f-partner-icon {
//           flex-shrink: 0;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           /* width controlled by the img inside */
//         }

//         /* FIXED: all partner images — max-width so they never overflow */
//         .f-partner-icon img {
//           display: block;
//            max-width: 140px;
//           width: 100%;
//           height: auto;
//           max-height: 60px;
//            margin: 0 auto;
//           object-fit: contain;
//           filter: brightness(0) invert(1);
//           opacity: 0.92;
//         }

//         /* shrink image a bit on small cards */
//         @media (max-width: 1199px) {
//           .f-partner-icon img { max-width: 70px; }
//         }

//         @media (max-width: 767px) {
//           .f-partner-icon img { max-width: 80px; }
//         }

//         .f-partner-name {
//           line-height: 1.2;
//           min-width: 0;     /* allows text to truncate if needed */
//         }

//         .f-partner-name .p-brand {
//           font-size: 12px;
//           font-weight: 800;
//           color: #fff;
//           display: block;
//           white-space: nowrap;
//         }

//         .f-partner-name .p-label {
//           font-size: 9px;
//           font-weight: 500;
//           color: rgba(255,255,255,0.7);
//           text-transform: uppercase;
//           letter-spacing: 0.8px;
//           white-space: nowrap;
//         }

//         /* ── BOTTOM BAR ── */
//         .f-bottom {
//           margin-top: 50px;
//           padding-top: 28px;
//           border-top: 1.5px solid rgba(255,255,255,0.25);
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }

//         @media (max-width: 767px) {
//           .f-bottom {
//             flex-direction: column;
//             gap: 20px;
//             text-align: center;
//             margin-top: 35px;
//           }
//         }

//         .f-copyright {
//           font-size: 13px;
//           color: rgba(255, 255, 255, 0.7);
//           font-weight: 500;
//         }

//         .f-copyright strong { color: #fff; }

//         .f-bottom-right {
//           display: flex;
//           align-items: center;
//           gap: 20px;
//         }

//         .f-policy-links { display: flex; gap: 18px; }

//         .f-policy-links a {
//           font-size: 12px;
//           color: rgba(255,255,255,0.6);
//           text-decoration: none;
//           transition: color 0.2s;
//         }

//         .f-policy-links a:hover { color: #fff; }

//         .f-socials { display: flex; gap: 10px; }

//         .f-socials a {
//           width: 38px;
//           height: 38px;
//           background: rgba(255, 255, 255, 0.15);
//           border: 1.5px solid rgba(255, 255, 255, 0.3);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           border-radius: 50%;
//           color: #fff;
//           font-size: 14px;
//           text-decoration: none;
//           transition: all 0.3s ease;
//         }

//         .f-socials a:hover {
//           background: #fff;
//           color: #e85c0d;
//           border-color: #fff;
//           transform: translateY(-3px) scale(1.08);
//           box-shadow: 0 8px 20px rgba(0,0,0,0.2);
//         }

//         @media (max-width: 767px) {
//           .f-bottom-right { flex-direction: column; gap: 12px; }
//           .f-policy-links { justify-content: center; }
//         }

//         /* ── REVEAL ANIMATION ── */
//         .reveal-item {
//           opacity: 0;
//           transform: translateY(28px);
//           transition: opacity 0.65s cubic-bezier(0.22,1,0.36,1),
//                       transform 0.65s cubic-bezier(0.22,1,0.36,1);
//         }

//         .reveal-active {
//           opacity: 1;
//           transform: translateY(0);
//         }
//       `}</style>

//       <footer className="foorer-area" ref={footerRef}>
//         <div className="footer-gradient-bg" />
//         <div className="footer-deco-circle-1" />
//         <div className="footer-deco-circle-2" />
//         <div className="footer-deco-line" />

//         <div className="footer-container">
//           {/* ── TOP ── */}
//           <div className="f-top-flex reveal-item">
//             <div className="f-logo">
//               <img src={logo} alt="Brand Logo" />
//             </div>
//             <div className="f-cta-block">
//               <div className="f-cta-label">
//                 <span>Ready to start a project?</span>
//                 <a href="mailto:hello@brandmingo.com">hello@brandmingo.com</a>
//               </div>
//             </div>
//           </div>

//           {/* ── GRID ── */}
//           <div className="footer-main-grid">
//             {/* Quick Links */}
//             <div
//               className="footer-card reveal-item"
//               style={{ transitionDelay: "0.05s" }}
//             >
//               <h4 className="f-card-title">Quick Links</h4>
//               <ul className="f-links">
//                 {quickLinks.map((link) => (
//                   <li key={link.name}>
//                     <Link to={link.path}>
//                       <i className="fa-solid fa-chevron-right"></i>
//                       {link.name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Company */}
//             <div
//               className="footer-card reveal-item"
//               style={{ transitionDelay: "0.12s" }}
//             >
//               <h4 className="f-card-title">Company</h4>
//               <ul className="f-links">
//                 {[
//                   "Our Story",
//                   "Careers",
//                   "Case Studies",
//                   "Testimonials",
//                   "FAQs",
//                 ].map((link) => (
//                   <li key={link}>
//                     <a href="#">
//                       <i className="fa-solid fa-chevron-right"></i>
//                       {link}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Services */}
//             <div
//               className="footer-card reveal-item"
//               style={{ transitionDelay: "0.19s" }}
//             >
//               <h4 className="f-card-title">Services</h4>
//               <ul className="f-links">
//                 {[
//                   "Web Design",
//                   "Development",
//                   "Shopify Stores",
//                   "Marketing",
//                   "SEO & Growth",
//                 ].map((link) => (
//                   <li key={link}>
//                     <a href="#">
//                       <i className="fa-solid fa-chevron-right"></i>
//                       {link}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Office */}
//             <div
//               className="footer-card reveal-item"
//               style={{ transitionDelay: "0.26s" }}
//             >
//               <h4 className="f-card-title">Office</h4>
//               <div className="f-contact-item">
//                 <div className="f-contact-icon">
//                   <i className="fa-solid fa-location-dot"></i>
//                 </div>
//                 <span>
//                   Office No. B-806, 8th Floor, Ithum Tower, Block A, Sector 62,
//                   Noida, Uttar Pradesh 201301
//                 </span>
//               </div>
//               <div className="f-contact-item">
//                 <div className="f-contact-icon">
//                   <i className="fa-solid fa-phone"></i>
//                 </div>
//                 <a href="tel:+919990613140">+91 99906 13140</a>
//               </div>
//               <div className="f-contact-item">
//                 <div className="f-contact-icon">
//                   <i className="fa-solid fa-envelope"></i>
//                 </div>
//                 <a href="mailto:hello@brandmingo.com">hello@brandmingo.com</a>
//               </div>
//             </div>

//             {/* Partners */}
//             <div
//               className="footer-card reveal-item"
//               style={{ transitionDelay: "0.33s" }}
//             >
//               <h4 className="f-card-title">Partners</h4>
//               <div className="f-partners-list">
//                 {/* Shopify — wide wordmark logo, no extra text needed */}
//                 <div className="f-partner-badge">
//                   <div className="f-partner-icon">
//                     <img
//                       src="https://res.cloudinary.com/dpdn7kzll/image/upload/v1776765825/partner1_stzwuz.svg"
//                       alt="Shopify Partners"
//                     />
//                   </div>
//                   {/* <div className="f-partner-name">
//                     <span className="p-label">Partners</span>
//                   </div> */}
//                 </div>

//                 {/* Meta */}
//                 <div className="f-partner-badge">
//                   <div className="f-partner-icon">
//                     <img
//                       src="https://res.cloudinary.com/dpdn7kzll/image/upload/v1776765825/partner2_lps5nu.svg"
//                       alt="Meta Business Partners"
//                     />
//                   </div>
//                   {/* <div className="f-partner-name">
//                     <span className="p-brand">Meta</span>
//                     <span className="p-label">Business Partners</span>
//                   </div> */}
//                 </div>

//                 {/* Google */}
//                 <div className="f-partner-badge">
//                   <div className="f-partner-icon">
//                     <img
//                       src="https://res.cloudinary.com/dpdn7kzll/image/upload/v1776765825/partner3_jgutpi.svg"
//                       alt="Google Partner"
//                     />
//                   </div>
//                   {/* <div className="f-partner-name">
//                     <span className="p-brand">Google</span>
//                     <span className="p-label">Partner</span>
//                   </div> */}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ── BOTTOM BAR ── */}
//           <div
//             className="f-bottom reveal-item"
//             style={{ transitionDelay: "0.4s" }}
//           >
//             <div className="f-copyright">
//               © 2026 <strong>Pradeep Gaud</strong>. All Rights Reserved.
//             </div>
//             <div className="f-bottom-right">
//               <div className="f-policy-links">
//                 <a href="#">Privacy Policy</a>
//                 <a href="#">Terms of Use</a>
//               </div>
//               <div className="f-socials">
//                 <a href="#" aria-label="Facebook">
//                   <i className="fa-brands fa-facebook-f"></i>
//                 </a>
//                 <a href="#" aria-label="Twitter/X">
//                   <i className="fa-brands fa-x-twitter"></i>
//                 </a>
//                 <a href="#" aria-label="LinkedIn">
//                   <i className="fa-brands fa-linkedin-in"></i>
//                 </a>
//                 <a href="#" aria-label="Instagram">
//                   <i className="fa-brands fa-instagram"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default NewFooter;

import { useEffect, useRef } from "react";
import logo from "../../assets/images/logo/white-logo.png";
import { Link } from "react-router-dom";

const NewFooter = () => {
  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blogs" },
    { name: "Contact", path: "/contact-us" },
  ];

  const companyLinks = [
    { name: "Our Story", path: "/about#our-story" },
    { name: "Careers", path: "/careers" },
    { name: "Case Studies", path: "/portfolio" },
    { name: "Testimonials", path: "/about#testimonials" },
    { name: "FAQs", path: "/faqs" },
  ];

  const serviceLinks = [
    { name: "Web Design", path: "/services/web-design" },
    { name: "Development", path: "/services/development" },
    { name: "Shopify Stores", path: "/services/shopify" },
    { name: "Marketing", path: "/services/marketing" },
    { name: "SEO & Growth", path: "/services/seo-growth" },
  ];

  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
          }
        });
      },
      { threshold: 0.08 },
    );

    const items = footerRef.current?.querySelectorAll(".reveal-item");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');

        .foorer-area {
          position: relative;
          overflow: hidden;
          font-family: var(--body-font-family, 'Syne', sans-serif);
          color: #fff;
        }

        /* ── GRADIENT BACKGROUND ── */
        .footer-gradient-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            125deg,
            #e85c0d 0%,
            #ff6b1e 40%,
            #ff9a5c 75%,
            #ff6b1e 100%
          );
          z-index: 0;
        }

        .footer-gradient-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.08;
          mix-blend-mode: overlay;
          pointer-events: none;
        }

        .footer-deco-circle-1 {
          position: absolute;
          width: 480px;
          height: 480px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.07);
          top: -150px;
          right: -100px;
          z-index: 0;
          pointer-events: none;
        }

        .footer-deco-circle-2 {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          bottom: -80px;
          left: -80px;
          z-index: 0;
          pointer-events: none;
        }

        .footer-deco-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: rgba(255,255,255,0.35);
          z-index: 1;
        }

        /* ── CONTAINER ── */
        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 70px 40px 35px;
          position: relative;
          z-index: 2;
        }

        @media (max-width: 1199px) {
          .footer-container { padding: 60px 28px 30px; }
        }

        @media (max-width: 767px) {
          .footer-container { padding: 50px 20px 25px; }
        }

        /* ── TOP ROW ── */
        .f-top-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 45px;
          border-bottom: 2px solid rgba(255,255,255,0.3);
          margin-bottom: 55px;
        }

        @media (max-width: 767px) {
          .f-top-flex {
            flex-direction: column;
            align-items: flex-start;
            gap: 25px;
            padding-bottom: 30px;
            margin-bottom: 35px;
          }
        }

        .f-logo img {
          max-height: 42px;
          filter: brightness(0) invert(1);
          object-fit: contain;
        }

        .f-cta-block {
          display: flex;
          align-items: center;
          gap: 25px;
        }

        .f-cta-label { text-align: right; }

        .f-cta-label span {
          display: block;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2.5px;
          color: rgba(255,255,255,0.75);
          margin-bottom: 6px;
        }

        .f-cta-label a {
          font-size: 26px;
          font-weight: 800;
          color: #fff;
          text-decoration: none;
          line-height: 1;
          text-shadow: 0 2px 10px rgba(0,0,0,0.15);
          transition: opacity 0.2s;
        }

        .f-cta-label a:hover { opacity: 0.85; }

        @media (max-width: 991px) {
          .f-cta-label a { font-size: 20px; }
        }

        @media (max-width: 767px) {
          .f-cta-block { flex-direction: column; align-items: flex-start; gap: 10px; }
          .f-cta-label { text-align: left; }
        }

        /* ── MAIN 5-COLUMN GRID ── */
        .footer-main-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr 1fr 1fr 1fr;
          gap: 20px;
          align-items: start;
        }

        @media (max-width: 1199px) {
          .footer-main-grid { grid-template-columns: 1fr 1fr 1fr; gap: 18px; }
        }

        @media (max-width: 767px) {
          .footer-main-grid { grid-template-columns: 1fr 1fr; gap: 14px; }
        }

        @media (max-width: 480px) {
          .footer-main-grid { grid-template-columns: 1fr; gap: 12px; }
        }

        /* ── FOOTER CARD ── */
        .footer-card {
          background: transparent;
          border: 1.5px solid rgba(255, 255, 255, 0.28);
          padding: 30px 28px;
          border-radius: 20px;
          transition: all 0.35s ease;
          height: 100%;
          box-sizing: border-box;
        }

        .footer-card:hover {
          background: rgba(0, 0, 0, 0.07);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 767px) {
          .footer-card { padding: 22px 18px; }
        }

        /* ── CARD TITLE ── */
        .f-card-title {
          font-size: 14px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #fff;
          margin-bottom: 22px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .f-card-title::before {
          content: '';
          display: inline-block;
          width: 22px;
          height: 3px;
          background: rgba(255,255,255,0.7);
          border-radius: 2px;
          flex-shrink: 0;
        }

        /* ── LINKS ── */
        .f-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .f-links li { margin-bottom: 13px; }

        .f-links li a {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-size: 14.5px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.25s ease;
          letter-spacing: 0.2px;
        }

        .f-links li a:hover {
          color: #fff;
          gap: 14px;
          text-shadow: 0 0 12px rgba(255,255,255,0.4);
        }

        .f-links li a i {
          font-size: 9px;
          opacity: 0.7;
          transition: opacity 0.25s;
        }

        .f-links li a:hover i {
          opacity: 1;
        }

        /* ── CONTACT CARD ── */
        .f-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 18px;
          color: rgba(255,255,255,0.9);
          font-size: 14px;
          font-weight: 500;
        }

        .f-contact-item:last-child { margin-bottom: 0; }

        .f-contact-icon {
          width: 34px;
          height: 34px;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          color: #fff;
          flex-shrink: 0;
        }

        .f-contact-item a {
          color: rgba(255,255,255,0.9);
          text-decoration: none;
          transition: color 0.2s;
        }

        .f-contact-item a:hover { color: #fff; text-decoration: underline; }

        /* ── PARTNERS ── */
        .f-partners-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .f-partner-badge {
          background: rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(255,255,255,0.28);
          border-radius: 12px;
          padding: 10px 14px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          cursor: default;
          overflow: hidden;
          min-width: 0;
        }

        .f-partner-badge:hover {
          background: rgba(0, 0, 0, 0.14);
          border-color: rgba(255,255,255,0.45);
          transform: translateX(4px);
        }

        .f-partner-icon {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .f-partner-icon img {
          display: block;
          max-width: 140px;
          width: 100%;
          height: auto;
          max-height: 60px;
          margin: 0 auto;
          object-fit: contain;
          filter: brightness(0) invert(1);
          opacity: 0.92;
        }

        @media (max-width: 1199px) {
          .f-partner-icon img { max-width: 70px; }
        }

        @media (max-width: 767px) {
          .f-partner-icon img { max-width: 80px; }
        }

        .f-partner-name {
          line-height: 1.2;
          min-width: 0;
        }

        .f-partner-name .p-brand {
          font-size: 12px;
          font-weight: 800;
          color: #fff;
          display: block;
          white-space: nowrap;
        }

        .f-partner-name .p-label {
          font-size: 9px;
          font-weight: 500;
          color: rgba(255,255,255,0.7);
          text-transform: uppercase;
          letter-spacing: 0.8px;
          white-space: nowrap;
        }

        /* ── BOTTOM BAR ── */
        .f-bottom {
          margin-top: 50px;
          padding-top: 28px;
          border-top: 1.5px solid rgba(255,255,255,0.25);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        @media (max-width: 767px) {
          .f-bottom {
            flex-direction: column;
            gap: 20px;
            text-align: center;
            margin-top: 35px;
          }
        }

        .f-copyright {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 500;
        }

        .f-copyright strong { color: #fff; }

        .f-bottom-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .f-policy-links { display: flex; gap: 18px; }

        .f-policy-links a {
          font-size: 12px;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          transition: color 0.2s;
        }

        .f-policy-links a:hover { color: #fff; }

        .f-socials { display: flex; gap: 10px; }

        .f-socials a {
          width: 38px;
          height: 38px;
          background: rgba(255, 255, 255, 0.15);
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #fff;
          font-size: 14px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .f-socials a:hover {
          background: #fff;
          color: #e85c0d;
          border-color: #fff;
          transform: translateY(-3px) scale(1.08);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }

        @media (max-width: 767px) {
          .f-bottom-right { flex-direction: column; gap: 12px; }
          .f-policy-links { justify-content: center; }
        }

        /* ── REVEAL ANIMATION ── */
        .reveal-item {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.65s cubic-bezier(0.22,1,0.36,1),
                      transform 0.65s cubic-bezier(0.22,1,0.36,1);
        }

        .reveal-active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <footer className="foorer-area" ref={footerRef}>
        <div className="footer-gradient-bg" />
        <div className="footer-deco-circle-1" />
        <div className="footer-deco-circle-2" />
        <div className="footer-deco-line" />

        <div className="footer-container">
          {/* ── TOP ── */}
          <div className="f-top-flex reveal-item">
            <div className="f-logo">
              <Link to="/" aria-label="Go to homepage">
                <img src={logo} alt="Brandmingo Logo" />
              </Link>
            </div>
            <div className="f-cta-block">
              <div className="f-cta-label">
                <span>Ready to start a project?</span>
                <a href="mailto:hello@brandmingo.com">hello@brandmingo.com</a>
              </div>
            </div>
          </div>

          {/* ── GRID ── */}
          <div className="footer-main-grid">
            {/* Quick Links */}
            <div
              className="footer-card reveal-item"
              style={{ transitionDelay: "0.05s" }}
            >
              <h4 className="f-card-title">Quick Links</h4>
              <ul className="f-links">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path}>
                      <i className="fa-solid fa-chevron-right"></i>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div
              className="footer-card reveal-item"
              style={{ transitionDelay: "0.12s" }}
            >
              <h4 className="f-card-title">Company</h4>
              <ul className="f-links">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path}>
                      <i className="fa-solid fa-chevron-right"></i>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div
              className="footer-card reveal-item"
              style={{ transitionDelay: "0.19s" }}
            >
              <h4 className="f-card-title">Services</h4>
              <ul className="f-links">
                {serviceLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path}>
                      <i className="fa-solid fa-chevron-right"></i>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Office */}
            <div
              className="footer-card reveal-item"
              style={{ transitionDelay: "0.26s" }}
            >
              <h4 className="f-card-title">Office</h4>
              <div className="f-contact-item">
                <div className="f-contact-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <span>
                  Office No. B-806, 8th Floor, Ithum Tower, Block A, Sector 62,
                  Noida, Uttar Pradesh 201301
                </span>
              </div>
              <div className="f-contact-item">
                <div className="f-contact-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <a href="tel:+919990613140">+91 99906 13140</a>
              </div>
              <div className="f-contact-item">
                <div className="f-contact-icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <a href="mailto:hello@brandmingo.com">hello@brandmingo.com</a>
              </div>
            </div>

            {/* Partners */}
            <div
              className="footer-card reveal-item"
              style={{ transitionDelay: "0.33s" }}
            >
              <h4 className="f-card-title">Partners</h4>
              <div className="f-partners-list">
                <div className="f-partner-badge">
                  <div className="f-partner-icon">
                    <img
                      src="https://res.cloudinary.com/dpdn7kzll/image/upload/v1776765825/partner1_stzwuz.svg"
                      alt="Shopify Partners"
                    />
                  </div>
                </div>

                <div className="f-partner-badge">
                  <div className="f-partner-icon">
                    <img
                      src="https://res.cloudinary.com/dpdn7kzll/image/upload/v1776765825/partner2_lps5nu.svg"
                      alt="Meta Business Partners"
                    />
                  </div>
                </div>

                <div className="f-partner-badge">
                  <div className="f-partner-icon">
                    <img
                      src="https://res.cloudinary.com/dpdn7kzll/image/upload/v1776765825/partner3_jgutpi.svg"
                      alt="Google Partner"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── BOTTOM BAR ── */}
          <div
            className="f-bottom reveal-item"
            style={{ transitionDelay: "0.4s" }}
          >
            <div className="f-copyright">
              © {new Date().getFullYear()} <strong>Brandmingo</strong>. All
              Rights Reserved.
            </div>
            <div className="f-bottom-right">
              <div className="f-policy-links">
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/terms-of-use">Terms of Use</Link>
              </div>
              <div className="f-socials">
                <a
                  href="https://facebook.com/brandmingo"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a
                  href="https://x.com/brandmingo"
                  aria-label="Twitter/X"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a
                  href="https://linkedin.com/company/brandmingo"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a
                  href="https://instagram.com/brandmingo"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default NewFooter;
