// import React, { useEffect, useRef, useState } from "react";
// import "./Founders.css";

// const foundersData = [
//   {
//     id: 1,
//     name: "Jenny Wilson",
//     role: "Lead Developer",
//     bio: "Driving technical excellence with over 8 years of expertise in building high-performance scalable architectures.",
//     image:
//       "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&auto=format&fit=crop",
//     linkedin: "#",
//   },
//   {
//     id: 2,
//     name: "Kristin Watson",
//     role: "UI/UX Designer",
//     bio: "Focusing on the intersection of human behavior and digital aesthetics to create award-winning experiences.",
//     image:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop",
//     linkedin: "#",
//   },
//   {
//     id: 3,
//     name: "Bessie Cooper",
//     role: "Full Stack Engineer",
//     bio: "A specialized engineer bridging the gap between complex backend logic and seamless frontend interactivity.",
//     image:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80&auto=format&fit=crop",
//     linkedin: "#",
//   },
// ];

// /* LinkedIn SVG Icon */
// const LinkedInIcon = () => (
//   <svg
//     width="16"
//     height="16"
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     aria-hidden="true"
//   >
//     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//   </svg>
// );

// const Founders = () => {
//   const sectionRef = useRef(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const io = new IntersectionObserver(
//       ([e]) => {
//         if (e.isIntersecting) {
//           setVisible(true);
//           io.disconnect();
//         }
//       },
//       { threshold: 0.1 },
//     );
//     if (sectionRef.current) io.observe(sectionRef.current);
//     return () => io.disconnect();
//   }, []);

//   return (
//     <section
//       className={`fd-section${visible ? " fd-section--visible" : ""}`}
//       ref={sectionRef}
//       aria-labelledby="fd-heading"
//     >
//       <div className="fd-container">
//         {/* Header */}
//         <header className="fd-header">
//           <div className="fd-eyebrow">
//             <span className="fd-eyebrow-dot" aria-hidden="true" />
//             Expert Team
//           </div>
//           <h2 className="fd-title" id="fd-heading">
//             Meet the Minds Behind
//             <br />
//             <em className="fd-title-accent">Modern Solutions</em>
//           </h2>
//         </header>

//         {/* Grid */}
//         <div className="fd-grid" role="list">
//           {foundersData.map((person, i) => (
//             <article
//               className="fd-card"
//               key={person.id}
//               role="listitem"
//               style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
//             >
//               {/* Image */}
//               <div className="fd-img-wrap">
//                 <img
//                   src={person.image}
//                   alt={`${person.name} — ${person.role} at Brandmingo`}
//                   className="fd-img"
//                   loading="lazy"
//                   decoding="async"
//                   width="600"
//                   height="400"
//                 />
//                 {/* Gradient overlay */}
//                 <div className="fd-img-overlay" aria-hidden="true" />

//                 {/* LinkedIn badge */}
//                 <a
//                   href={person.linkedin}
//                   className="fd-li-badge"
//                   aria-label={`${person.name} LinkedIn profile`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <LinkedInIcon />
//                 </a>

//                 {/* Role pill on image */}
//                 <div className="fd-role-pill" aria-hidden="true">
//                   {person.role}
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="fd-content">
//                 <h3 className="fd-name">{person.name}</h3>
//                 <p className="fd-bio">{person.bio}</p>
//               </div>

//               {/* Card top accent */}
//               <div className="fd-card-accent" aria-hidden="true" />
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Founders;

// import React, { useEffect, useRef, useState } from "react";
// import "./Founders.css";

// import team1 from "../../assets/images/resource/team-1-1.jpg";
// import team2 from "../../assets/images/resource/team-1-2.jpg";
// import team3 from "../../assets/images/resource/team-1-3.jpg";

// /* ── Team data ── */
// const teamMembers = [
//   {
//     image: team1,
//     name: "Jenny Wilson",
//     role: "Lead Developer",
//     delay: "0.1s",
//     bio: "Passionate developer with over 8 years of experience building scalable web applications and APIs.",
//     linkedin: "#",
//   },
//   {
//     image: team2,
//     name: "Kristin Watson",
//     role: "UI/UX Designer",
//     delay: "0.22s",
//     bio: "Creative designer who transforms complex problems into intuitive and beautiful digital experiences.",
//     linkedin: "#",
//   },
//   {
//     image: team3,
//     name: "Bessie Cooper",
//     role: "Full Stack Engineer",
//     delay: "0.34s",
//     bio: "Full-stack expert with a knack for performance optimization and building robust end-to-end solutions.",
//     linkedin: "#",
//   },
// ];

// const Founders = () => {
//   const sectionRef = useRef(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.12 },
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="fnd-section" ref={sectionRef}>
//       {/* Subtle dot-grid texture */}
//       <div className="fnd-bg-dots" aria-hidden="true" />

//       <div className="fnd-container">
//         {/* ── Section Header ── */}
//         <div className={`fnd-header ${visible ? "fnd-visible" : ""}`}>
//           <div className="fnd-label">
//             <span className="fnd-label-dot" />
//             Our Team
//           </div>

//           <h2 className="fnd-heading">
//             Meet Our Experienced
//             <span className="fnd-heading-accent">Team People</span>
//           </h2>

//           <span className="fnd-heading-line" />
//         </div>

//         {/* ── Cards Grid ── */}
//         <div className="fnd-grid">
//           {teamMembers.map((member, index) => (
//             <div
//               key={index}
//               className={`fnd-card ${visible ? "fnd-visible" : ""}`}
//               style={{ animationDelay: member.delay }}
//             >
//               {/* Top glow accent on hover */}
//               <div className="fnd-card-glow" aria-hidden="true" />

//               {/* Image */}
//               <div className="fnd-card-img">
//                 <img src={member.image} alt={member.name} loading="lazy" />
//                 {/* Base gradient — always shown */}
//                 <div className="fnd-card-overlay" aria-hidden="true" />
//                 {/* Hover gradient — fades in */}
//                 <div className="fnd-card-hover-overlay" aria-hidden="true" />
//               </div>

//               {/* Default content — name / role / linkedin icon */}
//               <div className="fnd-card-content">
//                 <h4 className="fnd-card-name">
//                   <a href="/team-details">{member.name}</a>
//                 </h4>
//                 <p className="fnd-card-role">{member.role}</p>
//                 <div className="fnd-card-divider" aria-hidden="true" />
//                 <div className="fnd-social">
//                   <a
//                     href={member.linkedin}
//                     aria-label={`${member.name} on LinkedIn`}
//                     rel="noopener noreferrer"
//                   >
//                     <i className="fa-brands fa-linkedin-in" />
//                   </a>
//                 </div>
//               </div>

//               {/* Hover bio content */}
//               <div className="fnd-card-bio">
//                 <h4 className="fnd-bio-name">
//                   <a href="/team-details">{member.name}</a>
//                 </h4>
//                 <p className="fnd-bio-role">{member.role}</p>
//                 <div className="fnd-bio-divider" aria-hidden="true" />
//                 <p className="fnd-bio-text">{member.bio}</p>
//                 <div className="fnd-bio-footer">
//                   <a
//                     href={member.linkedin}
//                     className="fnd-bio-linkedin"
//                     aria-label={`${member.name} on LinkedIn`}
//                     rel="noopener noreferrer"
//                   >
//                     <i className="fa-brands fa-linkedin-in" />
//                   </a>
//                   <a href="/team-details" className="fnd-bio-arrow">
//                     View Profile <i className="fas fa-arrow-right" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ── Bottom CTA strip ── */}
//         <div className={`fnd-cta ${visible ? "fnd-visible" : ""}`}>
//           <div className="fnd-cta-text">
//             <h3>
//               Want to Join Our <span>Creative Team?</span>
//             </h3>
//             <p>
//               We're always looking for talented people passionate about building
//               great digital experiences.
//             </p>
//           </div>
//           <a href="#contact" className="fnd-cta-btn">
//             <i className="fas fa-paper-plane" />
//             Apply Now
//             <span className="fnd-cta-btn-arrow">
//               <i className="fas fa-arrow-right" />
//             </span>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Founders;

// import React, { useEffect, useRef, useState } from "react";
// import "./Founders.css";

// import team1 from "../../assets/images/resource/team-1-1.jpg";
// import team2 from "../../assets/images/resource/team-1-2.jpg";
// import team3 from "../../assets/images/resource/team-1-3.jpg";

// /* ── Team data ── */
// const teamMembers = [
//   {
//     image: team1,
//     name: "Jenny Wilson",
//     role: "Lead Developer",
//     delay: "0.1s",
//     bio: "Passionate developer with over 8 years of experience building scalable web applications and APIs.",
//     linkedin: "#",
//   },
//   {
//     image: team2,
//     name: "Kristin Watson",
//     role: "UI/UX Designer",
//     delay: "0.22s",
//     bio: "Creative designer who transforms complex problems into intuitive and beautiful digital experiences.",
//     linkedin: "#",
//   },
//   {
//     image: team3,
//     name: "Bessie Cooper",
//     role: "Full Stack Engineer",
//     delay: "0.34s",
//     bio: "Full-stack expert with a knack for performance optimization and building robust end-to-end solutions.",
//     linkedin: "#",
//   },
// ];

// const Founders = () => {
//   const sectionRef = useRef(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.12 },
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="fnd-section" ref={sectionRef}>
//       <div className="fnd-bg-dots" aria-hidden="true" />

//       <div className="fnd-container">
//         {/* ── Header ── */}
//         <div className={`fnd-header ${visible ? "fnd-visible" : ""}`}>
//           <div className="fnd-label">
//             <span className="fnd-label-dot" />
//             Our Team
//           </div>
//           <h2 className="fnd-heading">
//             Meet Our Experienced
//             <span className="fnd-heading-accent">Team People</span>
//           </h2>
//           <span className="fnd-heading-line" />
//         </div>

//         {/* ── Cards ── */}
//         <div className="fnd-grid">
//           {teamMembers.map((member, index) => (
//             <div
//               key={index}
//               className={`fnd-card ${visible ? "fnd-visible" : ""}`}
//               style={{ animationDelay: member.delay }}
//             >
//               {/* ── FRONT: dark image face ── */}
//               <div className="fnd-card-front">
//                 <div className="fnd-card-img">
//                   <img src={member.image} alt={member.name} loading="lazy" />
//                   <div className="fnd-card-overlay" aria-hidden="true" />
//                 </div>
//                 <div className="fnd-card-glow" aria-hidden="true" />
//                 <div className="fnd-card-content">
//                   <h4 className="fnd-card-name">
//                     <a href="/team-details">{member.name}</a>
//                   </h4>
//                   <p className="fnd-card-role">{member.role}</p>
//                   <div className="fnd-card-divider" aria-hidden="true" />
//                   <div className="fnd-social">
//                     <a
//                       href={member.linkedin}
//                       aria-label={`${member.name} on LinkedIn`}
//                       rel="noopener noreferrer"
//                     >
//                       <i className="fa-brands fa-linkedin-in" />
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               {/* ── BACK: white bio panel ── */}
//               <div className="fnd-card-back" aria-hidden="true">
//                 {/* small greyscale image strip */}
//                 <div className="fnd-back-img-strip">
//                   <img
//                     src={member.image}
//                     alt=""
//                     aria-hidden="true"
//                     loading="lazy"
//                   />
//                 </div>

//                 {/* white content */}
//                 <div className="fnd-back-content">
//                   <h4 className="fnd-back-name">
//                     <a href="/team-details">{member.name}</a>
//                   </h4>
//                   <p className="fnd-back-role">{member.role}</p>
//                   <div className="fnd-back-divider" aria-hidden="true" />
//                   <p className="fnd-back-bio">{member.bio}</p>
//                   <div className="fnd-back-footer">
//                     <a
//                       href={member.linkedin}
//                       className="fnd-back-linkedin"
//                       aria-label={`${member.name} on LinkedIn`}
//                       rel="noopener noreferrer"
//                     >
//                       <i className="fa-brands fa-linkedin-in" />
//                     </a>
//                     <a href="/team-details" className="fnd-back-arrow">
//                       View Profile <i className="fas fa-arrow-right" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ── CTA strip ── */}
//         <div className={`fnd-cta ${visible ? "fnd-visible" : ""}`}>
//           <div className="fnd-cta-text">
//             <h3>
//               Want to Join Our <span>Creative Team?</span>
//             </h3>
//             <p>
//               We're always looking for talented people passionate about building
//               great digital experiences.
//             </p>
//           </div>
//           <a href="#contact" className="fnd-cta-btn">
//             <i className="fas fa-paper-plane" />
//             Apply Now
//             <span className="fnd-cta-btn-arrow">
//               <i className="fas fa-arrow-right" />
//             </span>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Founders;

import React, { useEffect, useRef, useState } from "react";
import "./Founders.css";

import team1 from "../../assets/images/resource/team-1-1.jpg";
import team2 from "../../assets/images/resource/team-1-2.jpg";
import team3 from "../../assets/images/resource/team-1-3.jpg";

/* ── Team data ── */
const teamMembers = [
  {
    image: team1,
    name: "Jenny Wilson",
    role: "Lead Developer",
    delay: "0.1s",
    bio: "Passionate developer with over 8 years of experience building scalable web applications and APIs.",
    tags: ["React", "Node.js", "AWS"],
    linkedin: "https://linkedin.com/in/jenny-wilson",
  },
  {
    image: team2,
    name: "Kristin Watson",
    role: "UI/UX Designer",
    delay: "0.22s",
    bio: "Creative designer who transforms complex problems into intuitive and beautiful digital experiences.",
    tags: ["Figma", "Design Systems", "Prototyping"],
    linkedin: "https://linkedin.com/in/kristin-watson",
  },
  {
    image: team3,
    name: "Bessie Cooper",
    role: "Full Stack Engineer",
    delay: "0.34s",
    bio: "Full-stack expert with a knack for performance optimization and building robust end-to-end solutions.",
    tags: ["TypeScript", "PostgreSQL", "Docker"],
    linkedin: "https://linkedin.com/in/bessie-cooper",
  },
];

const Founders = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="fnd-section" ref={sectionRef}>
      <div className="fnd-bg-dots" aria-hidden="true" />

      <div className="fnd-container">
        {/* ── Header ── */}
        <div className={`fnd-header ${visible ? "fnd-visible" : ""}`}>
          <div className="fnd-label">
            <span className="fnd-label-dot" />
            Our Team
          </div>
          <h2 className="fnd-heading">
            Meet Our Experienced
            <span className="fnd-heading-accent">Team People</span>
          </h2>
          <span className="fnd-heading-line" />
        </div>

        {/* ── Cards ── */}
        <div className="fnd-grid">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`fnd-card ${visible ? "fnd-visible" : ""}`}
              style={{ animationDelay: member.delay }}
              aria-label={`${member.name} — hover to see bio`}
            >
              <div className="fnd-card-inner">
                {/* ── FRONT: dark image ── */}
                <div className="fnd-card-front">
                  <div className="fnd-card-img">
                    <img src={member.image} alt={member.name} loading="lazy" />
                    <div className="fnd-card-overlay" aria-hidden="true" />
                  </div>
                  <div className="fnd-card-glow" aria-hidden="true" />

                  <div className="fnd-card-content">
                    <h4 className="fnd-card-name">{member.name}</h4>
                    <p className="fnd-card-role">{member.role}</p>
                    <div className="fnd-card-divider" aria-hidden="true" />
                    <div className="fnd-card-footer">
                      <div className="fnd-social">
                        <a
                          href={member.linkedin}
                          aria-label={`${member.name} on LinkedIn`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <i className="fa-brands fa-linkedin-in" />
                        </a>
                      </div>
                      <span className="fnd-view-profile">
                        View Profile <i className="fas fa-arrow-right" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* ── BACK: pure white bio panel ── */}
                <div className="fnd-card-back">
                  {/* decorative icon top-right */}
                  <div className="fnd-back-deco" aria-hidden="true">
                    <i className="fas fa-user-tie" />
                  </div>

                  <h4 className="fnd-back-name">{member.name}</h4>
                  <p className="fnd-back-role">{member.role}</p>
                  <div className="fnd-back-divider" aria-hidden="true" />
                  <p className="fnd-back-bio">{member.bio}</p>

                  {/* skill tags */}
                  <div className="fnd-back-tags">
                    {member.tags.map((tag) => (
                      <span key={tag} className="fnd-back-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="fnd-back-footer">
                    {/* LinkedIn button → redirects to linkedin */}
                    <a
                      href={member.linkedin}
                      className="fnd-back-linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-linkedin-in" />
                      View Profile
                    </a>
                    <a
                      href={member.linkedin}
                      className="fnd-back-arrow"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Connect <i className="fas fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA strip ── */}
        <div className={`fnd-cta ${visible ? "fnd-visible" : ""}`}>
          <div className="fnd-cta-text">
            <h3>
              Want to Join Our <span>Creative Team?</span>
            </h3>
            <p>
              We're always looking for talented people passionate about building
              great digital experiences.
            </p>
          </div>
          <a href="#contact" className="fnd-cta-btn">
            <i className="fas fa-paper-plane" />
            Apply Now
            <span className="fnd-cta-btn-arrow">
              <i className="fas fa-arrow-right" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Founders;
