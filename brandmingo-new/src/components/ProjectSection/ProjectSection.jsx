import { useState } from "react";
import { Link } from "react-router-dom";
import PopUpPortfolio from "../PopUpPortfolio/PopUpPortfolio";

// ── Icons ────────────────────────────────────────────────────────────
import star from "../../assets/images/icons/star.png";
import arrow from "../../assets/images/icons/right-arrow-1-2.png";
import arrowIcon from "../../assets/images/icons/arrow-icon.png";
import shape from "../../assets/images/icons/ellipse1-1.png";

// ── Single source of truth ───────────────────────────────────────────
import projects from "../../data/projects";

/* ═══════════════════════════════════════════════════════
   COMPONENT  —  homepage par sirf 3 projects dikhata hai
   ═══════════════════════════════════════════════════════ */
const ProjectSection = () => {
  const [activeProject, setActiveProject] = useState(null);

  const openPopup = (project) => setActiveProject(project);
  const closePopup = () => setActiveProject(null);

  // Homepage par sirf 3 cards
  const visibleProjects = projects.slice(0, 3);

  return (
    <>
      <section className="project-section section-padding">
        {/* Decorative shape */}
        <div className="light-shape">
          <img src={shape} alt="" />
        </div>

        <div className="container">
          <div className="sec-title text-center text-lg-start">
            <div className="row g-4 justify-content-between align-items-end">
              <div className="col-xl-7 col-lg-8">
                <span className="sub-title">
                  <img src={star} alt="" />
                  Case Study
                </span>
                <h2 className="title">
                  Our Recently Completed <span>Latest Projects</span>
                </h2>
              </div>

              {/* ── View All → /portfolio ── */}
              <div className="col-xl-3 col-lg-4" data-aos="fade-up">
                <div className="project-btn text-center text-lg-end">
                  <Link to="/portfolio" className="btn-style-one">
                    <span className="btn-arrow-left">
                      <img src={arrow} alt="" />
                    </span>
                    <span className="btn-title">View All Project</span>
                    <span className="btn-arrow-right">
                      <img src={arrow} alt="" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Cards ── */}
        <div className="row">
          {visibleProjects.map((item, index) => (
            <div
              key={index}
              className="col-xl-4 col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay={300 + index * 200}
            >
              <div
                className="project-block"
                onClick={() => openPopup(item)}
                style={{ cursor: "pointer" }}
              >
                <div className="inner-block">
                  <div className="image-block">
                    <img className="hover-img" src={item.img} alt="" />
                    <img className="hover-img" src={item.img} alt="" />
                    <a
                      href="#"
                      className="arrow-icon"
                      onClick={(e) => {
                        e.preventDefault();
                        openPopup(item);
                      }}
                    >
                      <img src={arrowIcon} alt="" />
                    </a>
                  </div>
                  <div className="content-block">
                    <h4 className="title">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          openPopup(item);
                        }}
                      >
                        {item.title}
                      </a>
                    </h4>
                    <ul>
                      <li>{item.category}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {activeProject && (
        <PopUpPortfolio project={activeProject} onClose={closePopup} />
      )}
    </>
  );
};

export default ProjectSection;
