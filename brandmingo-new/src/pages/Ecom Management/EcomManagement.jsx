import React from "react";

import EcomManagementHero from "./EcomManagementComponent/EcomManagementHero";
import EcomManagementAbout from "./EcomManagementComponent/EcomManagementAbout";
import EcomManagementSections from "./EcomManagementComponent/EcomManagementSections";
import EcomManagementExtra from "./EcomManagementComponent/EcomManagementExtra";

const EcomManagement = () => {
  return (
    <div className="page-wrapper">
      {/* HERO */}
      <EcomManagementHero />

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
                  <EcomManagementAbout />
                  <EcomManagementSections />
                  <EcomManagementExtra />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcomManagement;
