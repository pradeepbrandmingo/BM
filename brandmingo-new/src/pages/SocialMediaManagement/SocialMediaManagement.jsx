import React from "react";

import SocialMediaHero from "./SocialMediaComponent/SocialMediaHero";
import SocialMediaAbout from "./SocialMediaComponent/SocialMediaAbout";
import SocialMediaSections from "./SocialMediaComponent/SocialMediaSections";
import SocialMediaExtra from "./SocialMediaComponent/SocialMediaExtra";

const SocialMediaManagement = () => {
  return (
    <div className="page-wrapper">
      {/* HERO */}
      <SocialMediaHero />

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
                  <SocialMediaAbout />
                  <SocialMediaSections />
                  <SocialMediaExtra />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaManagement;
