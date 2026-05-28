import star from "../../assets/images/icons/star.png";
import icon1 from "../../assets/images/icons/choose-us-icon1-1.png";
import icon2 from "../../assets/images/icons/choose-us-icon1-2.png";

import client1 from "../../assets/images/icons/client-1-1.jpg";
import client2 from "../../assets/images/icons/client-1-2.jpg";
import client3 from "../../assets/images/icons/client-1-3.jpg";
import client4 from "../../assets/images/icons/client-1-4.jpg";

import ball from "../../assets/images/icons/ball.png";
import mainImg from "../../assets/images/resource/choose-us-1-1.jpg";

import Counter from "../AboutSection/Counter"; // reuse same counter

const ChooseUs = () => {
  return (
    <section className="choose-us-section section-padding pt-0">
      <div className="container">
        <div className="row g-4 align-items-center">
          {/* LEFT */}
          <div className="col-lg-6">
            <div className="choose-us-content-1">
              <div className="sec-title mb-0">
                <span className="sub-title">
                  <img src={star} alt="" />
                  Why Choose Us
                </span>

                <h2 className="title">
                  Here’s Why Brands Trust <span>Our Expertise</span>
                </h2>
              </div>

              <div className="choose-text" data-aos="fade-up">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </div>

              {/* FEATURES */}
              <div className="feature-box-wrapper">
                <div className="feature-box">
                  <div className="inner-box border-add">
                    <div className="icon">
                      <img src={icon1} alt="" />
                    </div>

                    <div className="content-box">
                      <h4 className="title">Long-Term Support</h4>
                      <div className="text">
                        It is a long established fact that a reader will be
                        distracted.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="feature-box">
                  <div className="inner-box">
                    <div className="icon">
                      <img src={icon2} alt="" />
                    </div>

                    <div className="content-box">
                      <h4 className="title">Data-Driven Strategy</h4>
                      <div className="text">
                        It is a long established fact that a reader will be
                        distracted.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CLIENTS */}
              <div className="choose-client-info">
                <div className="info-content">
                  <div className="client-image">
                    <span>+</span>
                    <img src={client1} className="icon-1" />
                    <img src={client2} className="icon-2" />
                    <img src={client3} className="icon-3" />
                    <img src={client4} className="icon-4" />
                  </div>

                  <p>300+ Happy Customer</p>
                </div>

                <div className="ball-icon">
                  <img src={ball} alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-6" data-aos="fade-left">
            <div className="choose-us-image-1">
              <img src={mainImg} alt="" />

              <div className="choose-counter">
                <div className="counter-inner">
                  <h3 className="count-box">
                    <Counter />%
                  </h3>

                  <p>
                    Satisfied Clients <br />
                    Returning Often
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
