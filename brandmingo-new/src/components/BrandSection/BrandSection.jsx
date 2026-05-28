import { useEffect } from "react";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const BrandSection = () => {
  useEffect(() => {
    const swiper = new Swiper(".brand-slider", {
      modules: [Autoplay],

      loop: true,
      slidesPerView: 5,
      spaceBetween: 30,

      autoplay: {
        delay: 0, // 🔥 continuous scroll
        disableOnInteraction: false,
      },

      speed: 4000, // 🔥 smooth continuous movement

      breakpoints: {
        320: { slidesPerView: 2 },
        576: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        992: { slidesPerView: 5 },
      },
    });

    return () => swiper.destroy(true, true);
  }, []);

  const brands = [
    "https://res.cloudinary.com/dpdn7kzll/image/upload/v1778851749/3_j0cc7o.png",
    "https://res.cloudinary.com/dpdn7kzll/image/upload/v1778851749/5_x20zrw.png",
    "https://res.cloudinary.com/dpdn7kzll/image/upload/v1778851749/4_dvfo9r.png",
    "https://res.cloudinary.com/dpdn7kzll/image/upload/v1778851749/2_xng6vk.png",
    "https://res.cloudinary.com/dpdn7kzll/image/upload/v1778851874/Untitled_design_1_hxmxur.png",
  ];

  return (
    <div className="brand-section">
      <div className="swiper brand-slider">
        <div className="swiper-wrapper">
          {brands.map((img, index) => (
            <div className="swiper-slide" key={index}>
              <div className="brand-box-1">
                <span className="brand-img-1">
                  <img src={img} alt="" />
                </span>
                <span className="brand-img-1">
                  <img src={img} alt="" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
