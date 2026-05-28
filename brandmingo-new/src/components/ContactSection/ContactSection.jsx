import star from "../../assets/images/icons/star.png";
import arrow from "../../assets/images/icons/right-arrow-1-2.png";

import bgImage from "../../assets/images/resource/contact-1-1.jpg";
import vecShape from "../../assets/images/resource/contact-shape-1-2.png";
import lineShape from "../../assets/images/resource/contact-shape-1-1.png";

import locationIcon from "../../assets/images/icons/location.svg";
import emailIcon from "../../assets/images/icons/email.svg";

const ContactSection = () => {
  return (
    <section className="contact-section section-padding position-relative">
      {/* SIDE SHAPE */}
      <div className="vec-shape d-none d-xl-block">
        <img src={vecShape} alt="" />
      </div>

      {/* BACKGROUND IMAGE */}
      <div className="contact-image fix">
        <img src={bgImage} alt="" />
      </div>

      <div className="container">
        <div className="row align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <div className="contact-content-1">
              <div className="sec-title mb-0">
                <span className="sub-title">
                  <img src={star} alt="" />
                  Contact us
                </span>

                <h2 className="title">
                  Always Happy to{" "}
                  <span className="d-xl-block">Hear from You</span>
                </h2>
              </div>

              <div className="contact-text">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </div>

              <div className="contact-list-items">
                {/* LOCATION */}
                <div className="contact-list">
                  <h4 className="title">Location</h4>

                  <div className="contact-icon">
                    <div className="icon">
                      <img src={locationIcon} alt="" />
                    </div>

                    <p>Holland Park Holland, London 7QU</p>
                  </div>
                </div>

                <div className="line"></div>

                {/* EMAIL */}
                <div className="contact-list">
                  <h4 className="title">Email:</h4>

                  <div className="contact-icon">
                    <div className="icon">
                      <img src={emailIcon} alt="" />
                    </div>

                    <p>
                      <a href="mailto:example@gmail.com" className="d-block">
                        example@gmail.com
                      </a>

                      <a href="mailto:info8797@gmail.com">info8797@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="col-lg-6">
            <div className="contact-form-style-1">
              <div className="line-shape d-none d-xl-block">
                <img src={lineShape} alt="" />
              </div>

              <form className="contact-form-box">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="form-clt">
                      <input type="text" placeholder="Your Name *" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-clt">
                      <input type="text" placeholder="Email Address *" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-clt">
                      <input type="text" placeholder="Phone *" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-clt">
                      <input type="text" placeholder="Subject (Optional)" />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-clt">
                      <textarea placeholder="Type Your Message"></textarea>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="contact-button">
                      <button type="submit" className="btn-style-one">
                        <span className="btn-arrow-left">
                          <img src={arrow} alt="" />
                        </span>

                        <span className="btn-title">Send Message</span>

                        <span className="btn-arrow-right">
                          <img src={arrow} alt="" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
