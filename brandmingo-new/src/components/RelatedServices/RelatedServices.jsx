import React from "react";
import { useNavigate } from "react-router-dom";
// import "./related-services.css";

const services = [
  {
    icon: "fab fa-wordpress",
    number: "01",
    title: "WordPress Website",
    sub: "Flexible & SEO-friendly websites",
    path: "/wordpress",
  },
  {
    icon: "fas fa-shopping-cart",
    number: "02",
    title: "WooCommerce Website",
    sub: "Powerful online store solution",
    path: "/woocommerce",
  },
  {
    icon: "fas fa-store",
    number: "03",
    title: "Shopify Website",
    sub: "Best for e-commerce stores",
    path: "/shopify",
  },
  {
    icon: "fab fa-react",
    number: "04",
    title: "React Development",
    sub: "Fast, modern & dynamic websites",
    path: "/react",
  },
  {
    icon: "fab fa-php",
    number: "05",
    title: "PHP Development",
    sub: "Custom backend solutions",
    path: "/php",
  },
  {
    icon: "fas fa-database",
    number: "06",
    title: "Custom CRM",
    sub: "Built for your business workflow",
    path: "/crm",
  },
  {
    icon: "fas fa-search-dollar",
    number: "07",
    title: "SEO Optimizing",
    sub: "Rank high & get organic traffic",
    path: "/seo",
  },
  {
    icon: "fas fa-lightbulb",
    number: "08",
    title: "Custom Solutions",
    sub: "Tailored strategies for your unique goals",
    path: "/custom-solutions",
  },
];

const RelatedServices = () => {
  const navigate = useNavigate();

  return (
    <section className="services-section pt-120 pb-120">
      <div className="container">
        {/* Section Header */}
        <div className="section-title text-center">
          <div className="eyebrow">Expertise</div>
          <h3>Our Core Services</h3>
          <div className="title-line" />
        </div>

        {/* Grid */}
        <div className="services-grid-container">
          {services.map((item, index) => (
            <div
              key={index}
              className="service-item-card"
              onClick={() => navigate(item.path)}
            >
              <div className="s-number">{item.number}</div>
              <div className="s-icon-box">
                <i className={item.icon} />
              </div>
              <h5>{item.title}</h5>
              <p>{item.sub}</p>
              <div className="s-explore">
                Explore <i className="fas fa-arrow-right" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
