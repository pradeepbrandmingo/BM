import React, { useState } from "react";
import logo from "../../assets/images/logo/white-logo.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <>
      {/* HEADER */}
      <header className="main-header header-style-one header-1">
        <div className="container">
          <div className="header-lower">
            <div className="main-box">
              {/* LOGO */}
              <div className="logo">
                <a href="/">
                  <img src={logo} alt="logo" />
                </a>
              </div>

              {/* NAV */}
              <div className="nav-outer">
                <nav className="nav main-menu">
                  <ul className="navigation">
                    <li className="dropdown">
                      <a href="#">Home</a>
                      <ul>
                        <li>
                          <a href="#">Digital Agency</a>
                        </li>
                        <li>
                          <a href="#">SEO Agency</a>
                        </li>
                        <li>
                          <a href="#">IT Company</a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a href="#">About</a>
                    </li>

                    <li className="dropdown">
                      <a href="#">Pages</a>
                      <ul>
                        <li>
                          <a href="#">Project</a>
                        </li>
                        <li>
                          <a href="#">Team</a>
                        </li>
                        <li>
                          <a href="#">Pricing</a>
                        </li>
                      </ul>
                    </li>

                    <li className="dropdown">
                      <a href="#">Services</a>
                      <ul>
                        <li>
                          <a href="#">Web Development</a>
                        </li>
                        <li>
                          <a href="#">SEO</a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a href="#">News</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </nav>

                {/* RIGHT SIDE */}
                <div className="outer-box">
                  <div className="ui-btn-search">
                    <button className="ui-btn search-btn">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>

                    <a href="#" className="contact-btn">
                      Let’s Talk
                    </a>
                  </div>

                  {/* HAMBURGER */}
                  <div
                    className="mobile-nav-toggler"
                    onClick={() => setMobileOpen(true)}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${mobileOpen ? "active" : ""}`}>
        {/* BACKDROP */}
        <div
          className="menu-backdrop"
          onClick={() => setMobileOpen(false)}
        ></div>

        <div className="menu-box">
          {/* TOP */}
          <div className="upper-box">
            <div className="nav-logo">
              <img src={logo} alt="logo" />
            </div>

            <div className="close-btn" onClick={() => setMobileOpen(false)}>
              ✕
            </div>
          </div>

          {/* MOBILE NAV */}
          <ul className="navigation">
            {/* HOME */}
            <li>
              <div onClick={() => toggleMenu("home")}>
                Home <span>+</span>
              </div>
              {activeMenu === "home" && (
                <ul>
                  <li>
                    <a href="#">Digital Agency</a>
                  </li>
                  <li>
                    <a href="#">SEO Agency</a>
                  </li>
                </ul>
              )}
            </li>

            {/* ABOUT */}
            <li>
              <a href="#">About</a>
            </li>

            {/* PAGES */}
            <li>
              <div onClick={() => toggleMenu("pages")}>
                Pages <span>+</span>
              </div>
              {activeMenu === "pages" && (
                <ul>
                  <li>
                    <a href="#">Project</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                </ul>
              )}
            </li>

            {/* SERVICES */}
            <li>
              <div onClick={() => toggleMenu("services")}>
                Services <span>+</span>
              </div>
              {activeMenu === "services" && (
                <ul>
                  <li>
                    <a href="#">Web Dev</a>
                  </li>
                  <li>
                    <a href="#">SEO</a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>

          {/* CONTACT */}
          <ul className="contact-list-one">
            <li>
              <div className="contact-info-box">
                <i className="fa-solid fa-phone"></i>
                <span>+91 8800 98670</span>
              </div>
            </li>

            <li>
              <div className="contact-info-box">
                <i className="fa-solid fa-envelope"></i>
                <span>help@brandmingo.com</span>
              </div>
            </li>

            <li>
              <div className="contact-info-box">
                <i className="fa-regular fa-clock"></i>
                <span>Mon - Sat 8:00 - 6:30</span>
              </div>
            </li>
          </ul>

          {/* SOCIAL */}
          <ul className="social-links">
            <li>
              <i className="fab fa-twitter"></i>
            </li>
            <li>
              <i className="fab fa-facebook-f"></i>
            </li>
            <li>
              <i className="fab fa-instagram"></i>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
