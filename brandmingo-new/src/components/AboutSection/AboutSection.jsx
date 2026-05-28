import aboutImg from "../../assets/images/resource/about-1-1.jpg";
import thumbImg from "../../assets/images/resource/about-1-2.jpg";

import shape1 from "../../assets/images/icons/about-shape-1-1.png";
import shape2 from "../../assets/images/icons/about-shape-1-2.png";
import light1 from "../../assets/images/icons/about-light-1-1.png";
import light2 from "../../assets/images/icons/about-light-1-2.png";
import star from "../../assets/images/icons/star.png";
import arrow from "../../assets/images/icons/right-arrow-1-2.png";
import Counter from "./Counter";

const AboutSection = () => {
  return (
    <section className="about-section section-padding position-relative">
      {/* Shapes */}
      <div className="light-shape-1">
        <img src={light1} alt="" />
      </div>

      <div className="about-shape-1">
        <img src={shape1} alt="" />
      </div>

      <div className="light-shape-2">
        <img src={light2} alt="" />
      </div>

      <div className="about-shape-2">
        <img src={shape2} alt="" />
      </div>

      <div className="container">
        <div className="row g-4 align-items-start">
          {/* LEFT IMAGE */}
          <div className="col-lg-6" data-aos="fade-right">
            <div className="about-image-1 fix">
              <img src={aboutImg} alt="" />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6">
            <div className="about-content">
              <div className="sec-title mb-0">
                <span className="sub-title">
                  <img src={star} alt="" />
                  Who We Are
                </span>

                <h2 className="title" data-aos="fade-up">
                  A Creative Digital Agency Focused <span>on Real Results</span>
                </h2>
              </div>

              <div className="about-text" data-aos="fade-up">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </div>

              {/* LIST */}
              <div className="about-list-items">
                <ul data-aos="fade-up">
                  <li>
                    <span className="check-icon"></span>
                    Creativity Meets Strategy
                  </li>
                  <li>
                    <span className="check-icon"></span>
                    Design. Develop. Deliver
                  </li>
                </ul>

                <ul data-aos="fade-up">
                  <li>
                    <span className="check-icon"></span>
                    Innovative Development
                  </li>
                  <li>
                    <span className="check-icon"></span>
                    Unleashing Digital Power
                  </li>
                </ul>
              </div>

              {/* THUMB + COUNTER */}
              <div className="about-thumb-items">
                <div className="thumb1" data-aos="fade-up">
                  <img src={thumbImg} alt="" />
                </div>

                <div className="content" data-aos="fade-up">
                  <h3 className="count-box">
                    <Counter />
                  </h3>
                  <p>
                    Satisfied Clients <br />
                    Returning Often
                  </p>
                </div>
              </div>

              {/* BUTTON SAME AS HERO */}
              <a href="#" className="btn-style-one" data-aos="fade-up">
                <span className="btn-arrow-left">
                  <img src={arrow} alt="" />
                </span>

                <span className="btn-title">Discover More</span>

                <span className="btn-arrow-right">
                  <img src={arrow} alt="" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
