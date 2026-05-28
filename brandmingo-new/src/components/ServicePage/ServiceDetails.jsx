import React, { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// IMAGES (PATH CHECK KARO)
import pageTitleBg from "../../assets/images/background/page-title.jpg";
import serviceImg from "../../assets/images/resource/service-details.jpg";
import d1 from "../../assets/images/resource/service-d1.jpg";
import d2 from "../../assets/images/resource/service-d2.jpg";

// ✅ GSAP Plugin Register — sirf ek baar karo (ideally main.jsx mein)
gsap.registerPlugin(ScrollTrigger);

const ServiceDetails = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // ✅ Refs for GSAP targets
  const imageWrapperRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // ✅ Swiper Init
    const swiper = new Swiper(".project-image-slider", {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: true,
      autoHeight: false,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
      },
    });

    // ✅ GSAP Parallax — Exactly like data-speed=".8" in your HTML theme
    // HTML theme mein: <img data-speed=".8"> → image 0.8x speed par scroll hoti hai
    // Yahan: ScrollTrigger scrub se same effect milta hai
    const ctx = gsap.context(() => {
      if (imageRef.current && imageWrapperRef.current) {
        gsap.fromTo(
          imageRef.current,
          { yPercent: 0 },
          {
            yPercent: -12, // ✅ Scroll par image thodi upar shift hoti hai
            ease: "none",
            scrollTrigger: {
              trigger: imageWrapperRef.current,
              start: "top bottom", // Jab element screen ke bottom se enter kare
              end: "bottom top", // Jab element screen ke top se exit kare
              scrub: true, // ✅ Smooth scroll ke saath sync — theme jaisa
            },
          },
        );
      }
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      if (swiper && swiper.destroy) swiper.destroy(true, true);
    };
  }, []);

  return (
    <div className="page-wrapper">
      {/* HERO SECTION */}
      <section
        className="page-title"
        style={{ backgroundImage: `url(${pageTitleBg})` }}
      >
        <div className="auto-container">
          <div className="title-outer text-center">
            <h1 className="title">Web Development</h1>
            <ul className="page-breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>Web Development</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section
        className="services-details pt-120 pb-120"
        style={{ marginTop: "120px", marginBottom: "120px" }}
      >
        <div className="container">
          <div className="row">
            {/* LEFT SIDEBAR */}
            <div className="col-lg-4">
              <div className="service-sidebar">
                <div className="sidebar-widget service-sidebar-single">
                  <div className="sidebar-service-list">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-angle-right"></i>
                          <span>App Development</span>
                        </a>
                      </li>
                      <li className="current">
                        <a href="#">
                          <i className="fas fa-angle-right"></i>
                          <span>UI/UX Design</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-angle-right"></i>
                          <span>Website Design</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-angle-right"></i>
                          <span>Web Development</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-angle-right"></i>
                          <span>E-commerce Development</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-angle-right"></i>
                          <span>Branding Identity</span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* CONTACT BOX */}
                  <div className="service-details-help">
                    <div className="help-shape-1"></div>
                    <div className="help-shape-2"></div>
                    <h2 className="help-title">
                      Contact with <br /> us for any <br /> advice
                    </h2>
                    <div className="help-icon">
                      <span className="lnr-icon-phone-handset"></span>
                    </div>
                    <div className="help-contact">
                      <p>Need help? Talk to an expert</p>
                      <a href="tel:12463330079">+892 (123) 112 - 9999</a>
                    </div>
                  </div>

                  {/* DOWNLOAD */}
                  <div className="service-sidebar-single-btn mt-4">
                    <a href="#" className="theme-btn btn-style-one d-grid">
                      <span>
                        <i className="fas fa-file-pdf"></i> download pdf file
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="col-lg-8">
              <div className="services-details__content">
                {/* ✅ PARALLAX IMAGE WRAPPER */}
                {/*
                  Wrapper: overflow hidden — zaruri hai warna image bahar dikhegi
                  Image: height 115% — thoda bada taaki yPercent shift ke time gap na aaye
                  willChange: transform — GPU acceleration for smooth animation
                */}
                <div
                  ref={imageWrapperRef}
                  className="service-details-image fix"
                  style={{
                    overflow: "hidden", // ✅ Must have — clips the parallax movement
                    borderRadius: "8px",
                    width: "100%",
                    height: "400px", // ✅ Fixed height
                  }}
                >
                  <img
                    ref={imageRef}
                    src={serviceImg}
                    alt=""
                    style={{
                      width: "100%",
                      height: "115%", // ✅ Slightly taller — parallax ke liye room
                      objectFit: "cover",
                      display: "block",
                      transformOrigin: "center center",
                      willChange: "transform", // ✅ Smooth GPU rendering
                    }}
                  />
                </div>

                <h3 className="mt-4 mb-2">Service Overview</h3>
                <p className="text mb-3">
                  Lorem ipsum is simply free text used by copytyping refreshing.
                  Neque porro est qui dolorem ipsum quia quaed inventore
                  veritatis et quasi architecto beatae vitae dicta sunt
                  explicabo. Aelltes port lacus quis enim var sed efficitur
                  turpis gilla sed sit amet finibus eros.
                </p>
                <p className="text mb-3">
                  When an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged Lorem ipsum dolor sit amet
                  consec tetur adipis icing elit
                </p>

                <div className="content mt-40">
                  <div className="text">
                    <h3 className="mb-2">Service Center</h3>
                    <p className="text mb-3">
                      Lorem ipsum is simply free text used by copytyping
                      refreshing. Neque porro est qui dolorem ipsum quia quaed
                      inventore veritatis et quasi architecto beatae vitae dicta
                      sunt explicabo.
                    </p>
                    <blockquote className="blockquote-one mb-3">
                      Lorem ipsum dolor sit amet, consectetur notted adipisicing
                      elit sed do eiusmod remaining essentially unchanged Lorem
                      ipsum dolor sit amet consec tetur
                    </blockquote>
                  </div>

                  {/* ✅ SLIDER — Fixed height images, layout stable */}
                  <div
                    className="swiper project-image-slider pb-0"
                    style={{ width: "100%" }}
                  >
                    <div className="swiper-wrapper">
                      {[d1, d2, d1].map((img, i) => (
                        <div className="swiper-slide" key={i}>
                          <figure
                            className="image"
                            style={{
                              width: "100%",
                              height: "220px",
                              overflow: "hidden",
                              borderRadius: "6px",
                              margin: 0,
                            }}
                          >
                            <img
                              src={img}
                              alt=""
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                              }}
                            />
                          </figure>
                          <p className="text mt-2">
                            Lorem ipsum dolor sit amet consec adipis elit Dolor
                            repellat pariatur temporibus doloribus hic conse
                            quatur copy typing refreshing
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* FAQ */}
                <div className="faq-content mt-5">
                  <h3 className="mb-3">Frequently Asked Question</h3>
                  <p className="text mb-3">
                    Lorem ipsum is simply free text used by copytyping
                    refreshing. Neque porro est qui dolorem ipsum quia quaed
                    inventore veritatis.
                  </p>
                  <ul className="accordion-box p-0 mt-40">
                    {[
                      "What services does your creative agency offer?",
                      "Do you provide brand guidelines?",
                      "Will my website be mobile-friendly?",
                      "Do you provide digital marketing services?",
                    ].map((q, index) => (
                      <li
                        key={index}
                        className={`accordion block ${
                          activeIndex === index ? "active-block" : ""
                        }`}
                      >
                        <div
                          className="acc-btn"
                          onClick={() =>
                            setActiveIndex(activeIndex === index ? null : index)
                          }
                        >
                          {q}
                          <div
                            className={`icon fa ${
                              activeIndex === index ? "fa-minus" : "fa-plus"
                            }`}
                          ></div>
                        </div>
                        <div
                          className={`acc-content ${
                            activeIndex === index ? "current" : ""
                          }`}
                        >
                          <div className="content">
                            <div className="text">
                              There are many variations of passages the majority
                              have suffered alteration in some form, injected
                              humour, or randomised words believable.
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
