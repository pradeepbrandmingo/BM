import React from "react";
import AdsAndCampaignsHero from "./AdsCampaignsComponent/AdsAndCampaignsHero";
import AdsAndCampaignsAbout from "./AdsCampaignsComponent/AdsAndCampaignsAbout";
import AdsAndCampaignsSections from "./AdsCampaignsComponent/AdsAndCampaignsSections";
import AdsAndCampaignsExtra from "./AdsCampaignsComponent/AdsAndCampaignsExtra";

const AdsAndCampaigns = () => {
  return (
    <div className="page-wrapper">
      {/* HERO */}
      <AdsAndCampaignsHero />

      {/* MAIN */}
      <section
        className="services-details pt-120 pb-120"
        // style={{ marginTop: "40px", marginBottom: "120px" }}
      >
        <div className="service-details-page">
          <div className="container">
            <div className="wd-outer">
              <div className="wd-content-col">
                <div className="services-details__content">
                  {/* S1 */}
                  <AdsAndCampaignsAbout />

                  <div className="WebDev-Services-spacing">
                    <AdsAndCampaignsSections />
                  </div>

                  <div className="WebDev-Extra-spacing">
                    <AdsAndCampaignsExtra />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdsAndCampaigns;
