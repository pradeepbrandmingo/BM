import { useState } from "react";

import star from "../../assets/images/icons/star.png";
import light from "../../assets/images/icons/faq-light-1-1.png";
import shape from "../../assets/images/icons/faq-shape-1-1.png";

const faqData = [
  {
    question: "What services does your digital agency offer?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    question: "How do you approach a new project?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    question: "Do you offer custom website or app development?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    question: "What is your pricing model or cost structure?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    question: "Can you help with ongoing support?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    question: "Do you work with startups or only established?",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // first open same as theme

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section section-padding position-relative">
      {/* Shapes */}
      <div className="faq-light-shape">
        <img src={light} alt="" />
      </div>

      <div className="faq-shape">
        <img src={shape} alt="" />
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="sec-title text-center mb-60">
              <span className="sub-title">
                <img src={star} alt="" />
                Faqs
              </span>

              <h2 className="title">
                Have Questions in Your Mind? <br />
                <span>Get the Answers Now</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {[0, 1].map((col) => (
            <div className="col-lg-6" key={col}>
              {faqData
                .slice(
                  col * Math.ceil(faqData.length / 2),
                  (col + 1) * Math.ceil(faqData.length / 2),
                )
                .map((item, index) => {
                  const actualIndex =
                    col * Math.ceil(faqData.length / 2) + index;

                  return (
                    <div
                      key={actualIndex}
                      className={`faq-block-one ${
                        activeIndex === actualIndex ? "active" : ""
                      }`}
                    >
                      <div
                        className="title-box"
                        onClick={() => toggleFAQ(actualIndex)}
                        style={{ cursor: "pointer" }}
                      >
                        <div className="content">
                          <h5 className="title">{item.question}</h5>
                        </div>

                        <span className="icon">
                          <i className="fa-sharp fa-solid fa-plus"></i>
                        </span>
                      </div>

                      <div
                        className={`content-box ${
                          activeIndex === actualIndex ? "show" : ""
                        }`}
                      >
                        <div className="inner">
                          <div className="text">{item.answer}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
