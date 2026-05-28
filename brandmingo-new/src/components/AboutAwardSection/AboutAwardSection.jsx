import React from "react";
import { Link } from "react-router-dom";

// ✅ Import all images (same naming)
import awardLight from "../../assets/images/icons/award-light-2-1.png";
import awardVec from "../../assets/images/icons/award-vec-2-1.png";
import starIcon from "../../assets/images/icons/star.png";
import awardsImg from "../../assets/images/icons/awards.png";
import arrowIcon from "../../assets/images/icons/arrow.png";

const AboutAwardSection = () => {
  return (
    <section className="award-section-2 section-padding">
      {/* Background Elements */}
      <div className="award-light">
        <img src={awardLight} alt="" />
      </div>

      <div className="award-vec tm-gsap-animate-circle">
        <img src={awardVec} alt="" />
      </div>

      <div className="container">
        {/* Section Title */}
        <div className="sec-title mb-60 text-center text-lg-start">
          <div className="row g-4 justify-content-between align-items-end">
            <div className="col-xl-6 col-lg-8">
              <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
                <img src={starIcon} alt="img" /> Awards
              </span>

              <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
                Innovation for Business <span>Growth with Genciio</span>
              </h2>
            </div>

            <div className="col-xl-4">
              <div className="text">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum
              </div>
            </div>
          </div>
        </div>

        {/* Content Row */}
        <div className="row">
          {/* Left Image */}
          <div className="col-xl-3 col-lg-4 wow fadeInUp" data-wow-delay=".3s">
            <div className="award-image1">
              <img src={awardsImg} alt="" />
            </div>
          </div>

          {/* Right List */}
          <div
            className="col-xl-9 col-lg-8 mt-4 mt-lg-0 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="award-block-two">
              {/* Item */}
              {[
                { year: "2026", title: "Best SEO Agency", tag: "Excellence" },
                {
                  year: "2024",
                  title: "Excellence in Technical SEO",
                  tag: "Innovation",
                },
                {
                  year: "2023",
                  title: "Innovation in Search Optimization",
                  tag: "Technical",
                },
                {
                  year: "2022",
                  title: "Client Satisfaction Award",
                  tag: "Trusted",
                },
                { year: "2021", title: "Best SEO Agency", tag: "Industry" },
              ].map((item, index) => (
                <div className="list-item" key={index}>
                  <div className="content-box">
                    <div className="title-box">
                      <div className="year">{item.year}</div>
                      <h5 className="title">{item.title}</h5>
                    </div>

                    <div className="right-text">
                      <div className="text">{item.tag}</div>

                      <Link to="/about" className="arrow-icon">
                        <img src={arrowIcon} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAwardSection;
