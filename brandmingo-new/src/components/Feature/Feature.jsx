import shape1 from "../../assets/images/resource/feature-shape-1-1.png";
import shape2 from "../../assets/images/resource/feature-shape-1-2.png";

import icon1 from "../../assets/images/icons/icon-1-1.png";
import icon2 from "../../assets/images/icons/icon-1-2.png";
import icon3 from "../../assets/images/icons/icon-1-3.png";

const Feature = () => {
  return (
    <section className="feature-section-2 pt-100 pb-100 position-relative overflow-hidden">
      {/* Shapes */}
      <div className="shape-1">
        <img src={shape1} alt="img" />
      </div>

      <div className="shape-2">
        <img src={shape2} alt="img" />
      </div>

      <div className="container">
        <div className="row g-5 g-xl-4">
          {/* ITEM 1 */}
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="feature-block">
              <div className="inner-block">
                <div className="icon">
                  <img src={icon1} alt="img" />
                </div>
                <div className="content-box">
                  <h4 className="title">Creative Branding</h4>
                  <div className="text">
                    It is a long established fact that read will be distracted
                    by the readable content of a page when
                  </div>

                  <a href="#" className="arrow-link">
                    <span className="text">Read More</span>
                    <svg width="19" height="16" viewBox="0 0 19 16">
                      <path
                        d="M0 8L15 8M18.3 8C15.2 7.8 9 9.1 9 16M18.3 8C15.2 8.1 9 6.8 9 0"
                        stroke="#FF6B1E"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </a>
                </div>
                <div className="border-line"></div>
              </div>
            </div>
          </div>

          {/* ITEM 2 */}
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="feature-block">
              <div className="inner-block">
                <div className="icon">
                  <img src={icon2} alt="img" />
                </div>
                <div className="content-box">
                  <h4 className="title">Analytics & Strategy</h4>
                  <div className="text">
                    It is a long established fact that read will be distracted
                    by the readable content of a page when
                  </div>

                  <a href="#" className="arrow-link">
                    <span className="text">Read More</span>
                    <svg width="19" height="16" viewBox="0 0 19 16">
                      <path
                        d="M0 8L15 8M18.3 8C15.2 7.8 9 9.1 9 16M18.3 8C15.2 8.1 9 6.8 9 0"
                        stroke="#FF6B1E"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </a>
                </div>
                <div className="border-line"></div>
              </div>
            </div>
          </div>

          {/* ITEM 3 */}
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="feature-block">
              <div className="inner-block">
                <div className="icon">
                  <img src={icon3} alt="img" />
                </div>
                <div className="content-box">
                  <h4 className="title">Content Creation</h4>
                  <div className="text">
                    It is a long established fact that read will be distracted
                    by the readable content of a page when
                  </div>

                  <a href="#" className="arrow-link">
                    <span className="text">Read More</span>
                    <svg width="19" height="16" viewBox="0 0 19 16">
                      <path
                        d="M0 8L15 8M18.3 8C15.2 7.8 9 9.1 9 16M18.3 8C15.2 8.1 9 6.8 9 0"
                        stroke="#FF6B1E"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
