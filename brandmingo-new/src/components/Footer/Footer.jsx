import logo from "../../assets/images/logo/white-logo.png";
import shape from "../../assets/images/icons/footer-shape-1-1.png";
import line from "../../assets/images/icons/footer-line1-1.png";

const Footer = () => {
  return (
    <footer className="footer-section">
      {/* SHAPE */}
      <div className="shape-1">
        <img src={shape} alt="" />
      </div>

      <div className="foorer-area section-padding pb-0">
        {/* LINE */}
        <div className="footer-line">
          <img src={line} alt="" />
        </div>

        <div className="container">
          {/* TOP */}
          <div className="footer-top-wrapper" data-aos="fade-up">
            <a href="/" className="footer-logo">
              <img src={logo} alt="" />
            </a>

            <div className="footer-info">
              <a className="mail" href="mailto:needhelp@company.com">
                needhelp@company.com
              </a>

              <a className="phone" href="tel:+12345678900">
                (+123) 456789 00
              </a>
            </div>
          </div>

          {/* MAIN GRID */}
          <div className="footer-widget-wrapper">
            <div className="row justify-content-between">
              {/* LEFT CONTENT */}
              <div className="col-xl-5 col-lg-6" data-aos="fade-up">
                <div className="footer-content">
                  <h2 className="title">
                    Let’s Talk
                    <span className="d-xl-block">Work Together</span>
                  </h2>

                  <h3 className="title-2">
                    Get the latest inspiration & insights
                  </h3>

                  <form>
                    <div className="form-group">
                      <input
                        type="email"
                        className="email"
                        placeholder="Enter your email"
                        required
                      />

                      <button type="button" className="circle-btn">
                        <i className="fa-solid fa-paper-plane"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-xl-2 d-none d-xl-block"></div>

              {/* QUICK LINKS */}
              <div
                className="col-xl-2 col-sm-6 col-md-6 col-lg-3"
                data-aos="fade-up"
              >
                <div className="footer-widget-items mt-40">
                  <div className="widget-head mb-20">
                    <h4 className="widget-title">Quick Link</h4>
                  </div>

                  <ul className="user-links">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Our Team</a>
                    </li>
                    <li>
                      <a href="#">Our Portfolio</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* SERVICES */}
              <div
                className="col-xl-2 col-sm-6 col-md-6 col-lg-3"
                data-aos="fade-up"
              >
                <div className="footer-widget-items mt-40">
                  <div className="widget-head mb-20">
                    <h4 className="widget-title">Our Solutions</h4>
                  </div>

                  <ul className="user-links">
                    <li>
                      <a href="#">Web Development</a>
                    </li>
                    <li>
                      <a href="#">UI/UX Design</a>
                    </li>
                    <li>
                      <a href="#">Mobile Application</a>
                    </li>
                    <li>
                      <a href="#">Cloud Service</a>
                    </li>
                    <li>
                      <a href="#">Cyber Security</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="footer-bottom">
            <div className="footer-bottom-wrapper" data-aos="fade-up">
              <p>© Copyright 2026 by Company.com</p>

              <div className="social-icon">
                <a href="#">
                  <i className="fa-brands fa-x-twitter"></i> Twitter
                </a>
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i> Facebook
                </a>
                <a href="#">
                  <i className="fa-brands fa-pinterest"></i> Pinterest
                </a>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i> Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
