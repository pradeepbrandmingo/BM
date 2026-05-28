import { useState } from "react";
import star from "../../assets/images/icons/star.png";
import shape from "../../assets/images/icons/work-process-shape1-1.png";

const steps = [
  {
    step: "Step 01",
    title: "Tailored Solutions",
  },
  {
    step: "Step 02",
    title: "Project Planning",
  },
  {
    step: "Step 03",
    title: "Content Creation",
  },
  {
    step: "Step 04",
    title: "Seamless Execution",
  },
];

const WorkProcess = () => {
  const [activeStep, setActiveStep] = useState(1); // Step 02 default active

  return (
    <section className="work-process-section section-padding">
      <div className="container">
        <div className="row g-4">
          {/* LEFT */}
          <div className="col-lg-6">
            <div className="work-process-content-1">
              <div className="sec-title mb-0">
                <span className="sub-title">
                  <img src={star} alt="" />
                  Working Process
                </span>

                <h2 className="title">
                  Shaping the Future Through{" "}
                  <span>Step-by-Step Innovation</span>
                </h2>
              </div>

              <div className="work-process-thumb" data-aos="fade-up">
                <img src={shape} alt="" className="rotate-circle" />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-6">
            {steps.map((item, index) => (
              <div
                key={index}
                className="working-block-one"
                data-aos="fade-up"
                data-aos-delay={index * 200}
                onClick={() => setActiveStep(index)}
              >
                <div
                  className={`inner-block ${
                    index === 0 ? "top-margin-none" : ""
                  } ${index === activeStep ? "active" : ""}`}
                >
                  <div className="step">{item.step}</div>

                  <div className="content-box">
                    <h4 className="title">{item.title}</h4>

                    <div className="text">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when
                    </div>

                    <div className="line"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
