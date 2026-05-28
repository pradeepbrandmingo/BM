import bgImg from "../../assets/images/background/service-bg-1-1.jpg";
import star from "../../assets/images/icons/star.png";

import icon1 from "../../assets/images/icons/service-icon-1-1.png";
import icon2 from "../../assets/images/icons/service-icon-1-2.png";
import icon3 from "../../assets/images/icons/service-icon-1-3.png";
import icon4 from "../../assets/images/icons/service-icon-1-4.png";
import icon5 from "../../assets/images/icons/service-icon-1-5.png";
import icon6 from "../../assets/images/icons/service-icon-1-6.png";

const services = [
  { id: "01", title: "UI/UX Design", icon: icon1 },
  { id: "02", title: "Brand Strategy", icon: icon2 },
  { id: "03", title: "Web Development", icon: icon3 },
  { id: "04", title: "App Development", icon: icon4 },
  { id: "05", title: "Search Optimization", icon: icon5 },
  { id: "06", title: "Digital Marketing", icon: icon6 },
];

const ServicesSection = () => {
  return (
    <section
      className="service-section section-padding bg-cover"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="container">
        {/* TITLE */}
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9">
            <div className="sec-title text-center mb-60">
              <span className="sub-title">
                <img src={star} alt="" />
                Who We Are
              </span>

              <h2 className="title">
                Helping You Succeed Through{" "}
                <span>Creative & Digital Services</span>
              </h2>
            </div>
          </div>
        </div>

        {/* CARDS */}
        <div className="row g-2">
          {services.map((item, index) => (
            <div
              key={index}
              className="col-xl-4 col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay={300 + index * 200}
            >
              <div className="service-block-one">
                <div className="inner-block">
                  <span className="dot"></span>
                  <span className="number">{item.id}</span>

                  <div className="content-box">
                    <div className="icon">
                      <img src={item.icon} alt="" />
                    </div>

                    <h4 className="title">
                      <a href="#">{item.title}</a>
                    </h4>

                    <div className="text">
                      It is a long established fact that a reader will be
                      distracted by the readable
                    </div>

                    <a href="#" className="arrow-link">
                      View Details
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
