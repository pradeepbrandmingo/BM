import star from "../../assets/images/icons/star.png";

import blog1 from "../../assets/images/resource/news-1-1.jpg";
import blog2 from "../../assets/images/resource/news-1-2.jpg";
import blog3 from "../../assets/images/resource/news-1-3.jpg";

const NewsSection = () => {
  const blogs = [
    {
      img: blog1,
      date: "20",
      title: "Why Your Brand Needs a Strong Online Presence",
    },
    {
      img: blog2,
      date: "05",
      title: "Designing User Experiences That Actually Convert",
    },
    {
      img: blog3,
      date: "08",
      title: "Brand Identity Essentials for Digital Businesses",
    },
  ];

  return (
    <section className="news-section-3 fix section-padding">
      <div className="container">
        {/* TITLE */}
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="sec-title text-center">
              <span className="sub-title">
                <img src={star} alt="" />
                Our Blog
              </span>

              <h2 className="title">
                Check Out Latest News
                <span>Update & Articles</span>
              </h2>
            </div>
          </div>
        </div>

        {/* BLOG CARDS */}
        <div className="row">
          {blogs.map((item, index) => (
            <div
              className="col-xl-4 col-lg-6 col-md-6"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="blog-box">
                <div className="inner-box">
                  {/* IMAGE */}
                  <div className="image-box">
                    <img src={item.img} alt="" />
                    <img src={item.img} alt="" />
                    <div className="num">{item.date}</div>
                  </div>

                  {/* CONTENT */}
                  <div className="content-box">
                    <a href="#" className="post-text">
                      Digital Agency
                    </a>

                    <h4 className="title">
                      <a href="#">{item.title}</a>
                    </h4>

                    <a href="#" className="arrow-link">
                      Read More
                      {/* SVG SAME */}
                      <svg
                        width="13"
                        height="12"
                        viewBox="0 0 13 12"
                        fill="none"
                      >
                        <path
                          d="M0 5.60006L10.5 5.60006M12.8353 5.61358C10.6569 5.48049 6.3 6.41212 6.3 11.2034M12.8353 5.58981C10.6569 5.7229 6.3 4.79127 6.3 0"
                          stroke="white"
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

export default NewsSection;
