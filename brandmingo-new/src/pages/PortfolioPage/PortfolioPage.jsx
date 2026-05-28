import { useState, useMemo } from "react";
import PopUpPortfolio from "../../components/PopUpPortfolio/PopUpPortfolio";
import projects from "../../data/projects";
import "./PortfolioPage.css";

import star from "../../assets/images/icons/star.png";
import arrowIcon from "../../assets/images/icons/arrow-icon.png";

const ALL_LABEL = "All Projects";

const getCategories = () => {
  const cats = projects.map((p) => p.category);
  return [ALL_LABEL, ...Array.from(new Set(cats))];
};

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState(ALL_LABEL);
  const [activeProject, setActiveProject] = useState(null);

  const categories = useMemo(() => getCategories(), []);

  const filtered = useMemo(
    () =>
      activeFilter === ALL_LABEL
        ? projects
        : projects.filter((p) => p.category === activeFilter),
    [activeFilter],
  );

  const openPopup = (project) => setActiveProject(project);
  const closePopup = () => setActiveProject(null);

  return (
    <>
      <section className="portfolio-page section-padding">
        {/* ── HERO ── */}
        <div className="pf-hero">
          {/* Orbs */}
          <div className="pf-orb pf-orb--1" aria-hidden="true" />
          <div className="pf-orb pf-orb--2" aria-hidden="true" />
          <div className="pf-orb pf-orb--3" aria-hidden="true" />

          <div className="container">
            <div className="pf-hero-inner">
              {/* Sub tag */}
              <span className="sub-title pf-subtag" data-aos="fade-up">
                <img src={star} alt="" />
                Our Work
              </span>

              {/* Heading */}
              <h1 className="pf-heading" data-aos="fade-up" data-aos-delay="60">
                Explore Our <span>Projects</span>
              </h1>

              {/* Description */}
              <p className="pf-subtext" data-aos="fade-up" data-aos-delay="120">
                Discover how we help brands grow, engage, and lead through
                strategic digital marketing and creative solutions.
              </p>

              {/* Filter tabs */}
              <div
                className="pf-filters"
                role="tablist"
                aria-label="Project categories"
                data-aos="fade-up"
                data-aos-delay="180"
              >
                {categories.map((cat) => (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={activeFilter === cat}
                    className={`pf-filter-btn${activeFilter === cat ? " is-active" : ""}`}
                    onClick={() => setActiveFilter(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* /HERO */}

        {/* ── GRID ── */}
        <div className="container">
          <div className="row pf-grid">
            {filtered.length === 0 ? (
              <div className="pf-empty">No projects found.</div>
            ) : (
              filtered.map((item, index) => (
                <div
                  key={item.title}
                  className="col-xl-4 col-lg-6 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 80}
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
              ))
            )}
          </div>
        </div>
      </section>

      {activeProject && (
        <PopUpPortfolio project={activeProject} onClose={closePopup} />
      )}
    </>
  );
};

export default PortfolioPage;
