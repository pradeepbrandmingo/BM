import React from "react";

import UiUxHero from "./UiuxComponent/UiUxHero";
import UiUxAbout from "./UiuxComponent/UiUxAbout";
import UiUxSections from "./UiuxComponent/UiUxSections";
import UiUxExtra from "./UiuxComponent/UiUxExtra";

const UiUx = () => {
  return (
    <div className="page-wrapper">
      {/* HERO */}
      <UiUxHero />

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
                  <UiUxAbout />
                  <UiUxSections />
                  <UiUxExtra />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UiUx;
