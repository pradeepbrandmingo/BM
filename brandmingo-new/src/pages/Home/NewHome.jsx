import React from "react";
import Hero from "../../components/Hero/Hero";
// import Feature from "../../components/Feature/Feature";
// import AboutSection from "../../components/AboutSection/AboutSection";
// import ServicesSection from "../../components/ServicesSection/ServicesSection";
import MarqueeSection from "../../components/MarqueeSection/MarqueeSection";
import WorkProcess from "../../components/WorkProcess/WorkProcess";
import VideoSection from "../../components/VideoSection/VideoSection";
// import ChooseUs from "../../components/ChooseUs/ChooseUs";
import Testimonial from "../../components/Testimonial/Testimonial";
import TestimonialHome from "../../components/Testimonial/TestimonialHome";
import FaqSection from "../../components/FaqSection/FaqSection";
// import FeatureSection from "../../components/FeatureSection/FeatureSection";
import BrandSection from "../../components/BrandSection/BrandSection";
// import AwardSection from "../../components/AwardSection/AwardSection";
// import ContactSection from "../../components/ContactSection/ContactSection";
// import NewsSection from "../../components/NewsSection/NewsSection";
import ClientForm from "../../components/contactfrom/ClientForm";
import AboutUsHome from "../../components/AboutSection/AboutUsHome";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import ServicesSectionHome from "../../components/ServicesSection/ServicesSectionHome";
import Client from "../../components/Testimonial/Client";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import BlogHome from "../../components/BlogHome/BlogHome";
// import HeroSection from "../../components/HeroSection/HeroSection";

const NewHome = ({ openPopup }) => {
  return (
    <>
      {/* <HeroSection /> */}
      <Hero openPopup={openPopup} />
      <div className="marqueeSection">
        <MarqueeSection />
      </div>
      {/* <Feature /> */}

      <div className="aboutUsHome">
        <AboutUsHome />
      </div>
      
      <WhyChooseUs />
      {/* <AboutSection /> */}

      <div className="servicesSectionHome">
        <ServicesSectionHome />
      </div>
      {/* <ServicesSection /> */}
      <div className="project-Section-home">
        <ProjectSection />
      </div>

      <WorkProcess />
      <VideoSection />
      {/* <ChooseUs /> */}

      <div className="client-home">
        <Client />
      </div>

      <div className="faqSection-home">
        <FaqSection />
      </div>

      {/* <FeatureSection /> */}

      <BrandSection />

      <TestimonialHome />
      {/* <AwardSection /> */}
      {/* <ContactSection /> */}
      <div className="newsSection-home">
        {/* <NewsSection /> */}
        <BlogHome />
      </div>

      <div className="clientForm-home">
        <ClientForm />
      </div>
    </>
  );
};

export default NewHome;
