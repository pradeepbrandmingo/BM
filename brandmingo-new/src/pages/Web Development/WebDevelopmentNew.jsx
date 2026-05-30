import React from "react";
import WebDevelopmentHero from "../Web Development/webDevComponent/WebDevelopmentHero";
import WebDevAbout from "./webDevComponent/WebDevAbout";
import WebDevServices from "./webDevComponent/WebDevSections";
import WebDevExtra from "./webDevComponent/WebDevExtra";

const WebDevelopmentNew = ({ openPopup }) => {
  return (
    <div className="page-wrapper">
      {/* HERO */}
      <WebDevelopmentHero openPopup={openPopup} />

      {/* MAIN */}
      <section
        className="services-details pt-120 pb-120"
        // style={{ marginTop: "-40px", marginBottom: "10px" }}
      >
        <div className="service-details-page">
          <div className="container">
            <div className="wd-outer">
              <div className="wd-content-col">
                <div className="services-details__content">
                  {/* S1 */}
                  <WebDevAbout />
                  <div className="WebDev-Services-spacing">
                    <WebDevServices openPopup={openPopup} />
                  </div>

                  <div className="WebDev-Extra-spacing">
                    <WebDevExtra />
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

export default WebDevelopmentNew;
