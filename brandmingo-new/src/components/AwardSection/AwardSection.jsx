import { useEffect, useRef } from "react";

import star from "../../assets/images/icons/star.png";

import shape1 from "../../assets/images/icons/award-shape-1-2.png";
import shape2 from "../../assets/images/icons/award-shape-1-3.png";
import light from "../../assets/images/icons/award-light-1-1.png";
import circle from "../../assets/images/icons/award-shape-1-1.png";

import award1 from "../../assets/images/icons/award-1-1.png";
import award2 from "../../assets/images/icons/award-1-2.png";
import award3 from "../../assets/images/icons/award-1-3.png";

const AwardSection = () => {
  const counterRef = useRef(null);

  // 🔥 COUNTER ANIMATION (same theme style)
  useEffect(() => {
    let start = 0;
    const end = 15;
    const duration = 2000;
    const stepTime = Math.floor(duration / end);

    const timer = setInterval(() => {
      start++;
      if (counterRef.current) {
        counterRef.current.innerText = start;
      }
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="award-section section-padding position-relative">
      {/* SHAPES */}
      <div className="award-shape-1">
        <img src={shape1} alt="" />
      </div>

      <div className="award-light-shape">
        <img src={light} alt="" />
      </div>

      <div className="award-shape-2">
        <img src={shape2} alt="" />
      </div>

      <div className="container">
        <div className="row g-4">
          {/* LEFT SIDE */}
          <div className="col-xl-6 col-lg-6">
            {/* ITEM 1 */}
            <div className="award-box-items-one">
              <div className="inner-block">
                <div className="icon-box">
                  <span className="year">2026</span>
                  <div className="icon">
                    <img src={award1} alt="" />
                  </div>
                </div>

                <div className="content-box">
                  <h4 className="title">Awwwards Interior Excellence</h4>
                  <div className="text">
                    It is a long established fact that a reader will be
                    distracted by the readable
                  </div>
                </div>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="award-box-items-one">
              <div className="inner-block">
                <div className="icon-box">
                  <span className="year">2023</span>
                  <div className="icon">
                    <img src={award2} alt="" />
                  </div>
                </div>

                <div className="content-box">
                  <h4 className="title">
                    Awesome <br /> business models
                  </h4>
                  <div className="text">
                    It is a long established fact that a reader will be
                    distracted by the readable
                  </div>
                </div>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="award-box-items-one">
              <div className="inner-block style-bottom-0">
                <div className="icon-box">
                  <span className="year">2020</span>
                  <div className="icon">
                    <img src={award3} alt="" />
                  </div>
                </div>

                <div className="content-box">
                  <h4 className="title">
                    Creative Agencies <br /> Worldwide
                  </h4>
                  <div className="text">
                    It is a long established fact that a reader will be
                    distracted by the readable
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-xl-6 col-lg-6">
            <div className="award-right-items-1">
              <div className="sec-title mb-0">
                <span className="sub-title">
                  <img src={star} alt="" />
                  Award Wining Company
                </span>

                <h2 className="title">
                  Innovation for Business <span>Growth with Genciio</span>
                </h2>
              </div>

              <div className="award-text" data-aos="fade-up">
                We understand that every business is unique. That's why we offer{" "}
                <br />
                customized solutions to meet your specific needs.
              </div>

              <div className="award-thumb">
                <img src={circle} alt="" />
              </div>

              {/* COUNTER */}
              <div className="content" data-aos="fade-up">
                <h3 className="count-box">
                  <span ref={counterRef}>0</span>
                </h3>

                <div className="text">Years In Providing Digital Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardSection;
