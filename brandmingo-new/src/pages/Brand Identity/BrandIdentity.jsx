import React from "react";

import BrandIdentityHero from "./BrandIdentityComponent/BrandIdentityHero";
import BrandIdentityAbout from "./BrandIdentityComponent/BrandIdentityAbout";
import BrandIdentitySections from "./BrandIdentityComponent/BrandIdentitySections";
import BrandIdentityExtra from "./BrandIdentityComponent/BrandIdentityExtra";

const BrandIdentity = () => {
  return (
    <div className="page-wrapper">
      {/* HERO */}
      <BrandIdentityHero />

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
                  <BrandIdentityAbout />
                  <BrandIdentitySections />
                  <BrandIdentityExtra />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandIdentity;
