// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";

// import star from "../../assets/images/icons/star.png";
// import circle from "../../assets/images/icons/text-circle1-1.png";
// import quote from "../../assets/images/icons/quote-icon-1-1.png";
// import client from "../../assets/images/resource/client1-1.jpg";

// const Testimonial = () => {
//   return (
//     <section className="testimonial-wrapper testimonial-one section-padding">
//       <div className="container">
//         {/* TITLE */}
//         <div className="sec-title">
//           <div className="row align-items-end">
//             <div className="col-lg-8">
//               <span className="sub-title">
//                 <img src={star} alt="" /> Testimonial
//               </span>

//               <h2 className="title">
//                 The Best Customers <br />
//                 Says <span>About Our Action</span>
//               </h2>
//             </div>

//             <div className="col-lg-4">
//               <div className="testi-counter">
//                 <h3>4.8</h3>
//                 <p>(5k+) Customer reviews</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="row">
//           {/* LEFT CIRCLE */}
//           <div className="col-lg-4">
//             <div className="left-content">
//               <div className="circle-box">
//                 <img src={circle} className="ani-circle" />

//                 <div className="icon">
//                   <img src={quote} />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT SLIDER */}
//           <div className="col-lg-8">
//             <Swiper
//               modules={[Navigation, Autoplay]}
//               spaceBetween={30}
//               slidesPerView={1}
//               autoplay={{ delay: 3000 }}
//               navigation={{
//                 nextEl: ".array-next",
//                 prevEl: ".array-prev",
//               }}
//             >
//               {[1, 2, 3].map((item, i) => (
//                 <SwiperSlide key={i}>
//                   <div className="testimonial-block-one">
//                     <div className="inner-box">
//                       <div className="star">
//                         {[...Array(5)].map((_, i) => (
//                           <i key={i} className="fa-solid fa-star"></i>
//                         ))}
//                       </div>

//                       <div className="text">
//                         Their data-driven SEO approach delivered real results.
//                         Our rankings improved and conversions increased.
//                       </div>

//                       <div className="infu">
//                         <div className="image">
//                           <img src={client} />
//                         </div>

//                         <div className="name-info">
//                           <h5>Emily Carter</h5>
//                           <span>Senior Project Manager</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>

//             {/* ARROWS */}
//             <div className="array-button">
//               <button className="array-prev">
//                 <i className="fa-solid fa-chevron-left"></i>
//               </button>

//               <button className="array-next">
//                 <i className="fa-solid fa-chevron-right"></i>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonial;

import { useEffect } from "react";
import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules"; // 🔥 ADD THIS
import "swiper/css";
import "swiper/css/navigation"; // 🔥 ADD THIS

import star from "../../assets/images/icons/star.png";

import bgShape from "../../assets/images/icons/testi-bg-shape.png";
import lightShape from "../../assets/images/icons/testi-light-shape-1-1.png";
import shape from "../../assets/images/icons/testi-shape-1-1.png";

import circle from "../../assets/images/icons/text-circle1-1.png";
import quote from "../../assets/images/icons/quote-icon-1-1.png";

import client1 from "../../assets/images/resource/client1-1.jpg";

import capterra from "../../assets/images/icons/capterra-1-1.png";
import google from "../../assets/images/icons/google-1-1.png";

const Testimonial = () => {
  useEffect(() => {
    new Swiper(".testimonial-slider", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        nextEl: ".array-next",
        prevEl: ".array-prev",
      },
    });
  }, []);

  useEffect(() => {
    const swiper = new Swiper(".testimonial-slider", {
      modules: [Navigation, Autoplay], // 🔥 MOST IMPORTANT

      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,

      autoplay: {
        delay: 3000,
        disableOnInteraction: false, // 🔥 button click ke baad bhi auto chalega
      },

      navigation: {
        nextEl: ".array-next",
        prevEl: ".array-prev",
      },
    });

    return () => {
      swiper.destroy(true, true); // cleanup
    };
  }, []);

  return (
    <section className="testimonial-wrapper testimonial-one section-padding">
      {/* BG SHAPES */}
      <div className="testi-bg-shape">
        <img src={bgShape} alt="" />
      </div>

      <div className="testi-light-shape-1">
        <img src={lightShape} alt="" />
      </div>

      <div className="testi-shape-1 tm-gsap-animate-circle">
        <img src={shape} alt="" />
      </div>

      <div className="container">
        {/* TITLE */}
        <div className="sec-title">
          <div className="row g-4 justify-content-between align-items-end">
            <div className="col-lg-8">
              <span className="sub-title">
                <img src={star} alt="" />
                Testimonial
              </span>

              <h2 className="title">
                The Best Customers <br />
                Says <span>About Our Action</span>
              </h2>
            </div>

            <div className="col-lg-4">
              <div className="testi-counter">
                <h3 className="count-box">4.8</h3>
                <p>
                  (5k+) Customer
                  <span className="d-block">reviews</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          {/* LEFT */}
          <div className="col-lg-5">
            <div className="left-content">
              <div className="circle-box">
                <img className="ani-circle" src={circle} alt="" />

                <a href="#" className="icon">
                  <img src={quote} alt="" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SLIDER */}
          <div className="col-lg-7">
            <div className="slider-box">
              <div className="swiper testimonial-slider">
                <div className="swiper-wrapper">
                  {/* SLIDE 1 */}
                  <div className="swiper-slide">
                    <div className="testimonial-block-one">
                      <div className="inner-box">
                        <div className="star">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>

                        <div className="text">
                          Their data-driven SEO approach delivered real results.
                          Our rankings improved across competitive keywords,
                          organic traffic grew steadily, and conversions
                          increased.
                        </div>

                        <div className="infu">
                          <div className="image">
                            <img src={client1} alt="" />
                          </div>
                          <div className="name-info">
                            <h5 className="name">Emily Carter</h5>
                            <span>Senior Project Manager</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SLIDE 2 */}
                  <div className="swiper-slide">
                    <div className="testimonial-block-one">
                      <div className="inner-box">
                        <div className="star">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>

                        <div className="text">
                          Working with this team has been a game-changer. Their
                          insights, execution, and attention to detail helped us
                          scale faster than expected.
                        </div>

                        <div className="infu">
                          <div className="image">
                            <img src={client1} alt="" />
                          </div>
                          <div className="name-info">
                            <h5 className="name">David Smith</h5>
                            <span>Marketing Head</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SLIDE 3 */}
                  <div className="swiper-slide">
                    <div className="testimonial-block-one">
                      <div className="inner-box">
                        <div className="star">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>

                        <div className="text">
                          Highly professional and results-focused team. They
                          understood our vision and delivered beyond
                          expectations with measurable ROI.
                        </div>

                        <div className="infu">
                          <div className="image">
                            <img src={client1} alt="" />
                          </div>
                          <div className="name-info">
                            <h5 className="name">Sophia Lee</h5>
                            <span>Business Owner</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ARROWS */}
              <div className="array-button">
                <button className="array-prev">
                  <i className="fa-solid fa-chevron-left"></i>
                </button>

                <button className="array-next">
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="testimonial-customar-area">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5">
              <div className="customar-content">
                <h4 className="customar-title">
                  <span>Our Customers </span> <br />
                  Consistently Rated 4.8/5
                </h4>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="customar-right-content">
                <div className="capterra-area">
                  <div className="icon">
                    <img src={capterra} alt="" />
                  </div>
                  <div className="content">
                    <h5>Capterra</h5>
                    <div className="text">4.8/5 (102 Reviews)</div>
                  </div>
                </div>

                <div className="line"></div>

                <div className="google-area">
                  <div className="icon">
                    <img src={google} alt="" />
                  </div>
                  <div className="content">
                    <h5>Google</h5>
                    <div className="text">4.8/5 (102 Reviews)</div>
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

export default Testimonial;
