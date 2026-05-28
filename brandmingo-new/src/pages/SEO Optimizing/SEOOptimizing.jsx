import React from "react";
import SEOHero from "./SEOOptimizingComponent/SEOHero";
import SEOAbout from "./SEOOptimizingComponent/SEOAbout";
import SEOSections from "./SEOOptimizingComponent/SEOSections";
import SEOExtra from "./SEOOptimizingComponent/SEOExtra";

const SEOOptimizing = () => {
  return (
    <div className="page-wrapper">
      {/* HERO */}
      <SEOHero />

      {/* MAIN */}
      <section
        className="services-details pt-120 pb-120"
        style={{ marginTop: "40px", marginBottom: "120px" }}
      >
        <div className="service-details-page">
          <div className="container">
            <div className="wd-outer">
              <div className="wd-content-col">
                <div className="services-details__content">
                  {/* S1 */}
                  <SEOAbout />
                  <SEOSections />
                  <SEOExtra />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOOptimizing;
