import star from "../../assets/images/icons/star.png";
import light from "../../assets/images/icons/feature-light-1-1.png";
import shape from "../../assets/images/icons/feature-shape-1-1.png";
import frame from "../../assets/images/icons/feature-frame1-1.png";
import arrow from "../../assets/images/icons/right-arrow-1-2.png";

import obj1 from "../../assets/images/resource/object.png";
import obj2 from "../../assets/images/resource/object2.png";
import obj3 from "../../assets/images/resource/object3.png";

const FeatureSection = () => {
  return (
    <section className="feature-section section-padding position-relative">
      {/* SHAPES */}
      <div className="light-shape-1">
        <img src={light} alt="" />
      </div>

      <div className="shape-1">
        <img src={shape} alt="" />
      </div>

      <div className="container">
        <div className="row g-4">
          {/* LEFT BIG BOX */}
          <div className="col-xl-8 col-lg-7" data-aos="fade-up">
            <div className="feature-box-style1">
              <div className="feature-frame">
                <img src={frame} alt="" />
              </div>

              <span className="sub-title">
                <img src={star} alt="" />
                Feature
              </span>

              <h2 className="title">
                Powerful Digital Capabilities Designed{" "}
                <span className="d-xl-block">for Long-Term Growth</span>
              </h2>

              <a href="#" className="btn-style-one">
                <span className="btn-arrow-left">
                  <img src={arrow} alt="" />
                </span>

                <span className="btn-title">Get in Touch</span>

                <span className="btn-arrow-right">
                  <img src={arrow} alt="" />
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT BOX 1 */}
          <div
            className="col-xl-4 col-lg-5"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="feature-box-style2">
              <div className="image">
                <img src={obj1} alt="" />
              </div>

              <div className="content">
                <h4 className="title font-weight-500">
                  Fast Project <span className="d-block">Turnaround</span>
                </h4>

                <div className="text">
                  It is a long established fact that a reader will be distracted
                  by the readable content
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT BOX 2 (ORANGE BG) */}
          <div
            className="col-xl-4 col-lg-5"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="feature-box-style2 bg-theme-color">
              <div className="image">
                <img src={obj2} alt="" />
              </div>

              <div className="content">
                <h4 className="title font-weight-500">
                  User-Centered <span className="d-block">Design</span>
                </h4>

                <div className="text">
                  It is a long established fact that a reader will be distracted
                  by the readable content
                </div>
              </div>
            </div>
          </div>

          {/* BIG RIGHT BOTTOM BOX */}
          <div
            className="col-xl-8 col-lg-7"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="feature-box-style3 fix">
              <div className="row">
                <div className="col-md-6">
                  <div className="image top_view">
                    <img src={obj3} alt="" />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="content content-style-2">
                    <h4 className="title font-weight-500">
                      Brand Identity <br />
                      Creation
                    </h4>

                    <div className="text">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
