import React from "react";

import teamBg from "../../assets/images/background/team-bg-1-1.jpg";
import lightShape from "../../assets/images/icons/team-light-1-1.png";
import teamShape from "../../assets/images/icons/team-shape-1-1.png";
import star from "../../assets/images/icons/star.png";

import team1 from "../../assets/images/resource/team-1-1.jpg";
import team2 from "../../assets/images/resource/team-1-2.jpg";
import team3 from "../../assets/images/resource/team-1-3.jpg";

const teamMembers = [
  {
    image: team1,
    name: "Jenny Wilson",
    role: "Developer",
    delay: ".3s",
  },
  {
    image: team2,
    name: "Kristin Watson",
    role: "Developer",
    delay: ".5s",
  },
  {
    image: team3,
    name: "Bessie Cooper",
    role: "Developer",
    delay: ".7s",
  },
];

const TeamSection = () => {
  return (
    <section
      className="team-section section-padding bg-cover"
      style={{ backgroundImage: `url(${teamBg})` }}
    >
      {/* LIGHT SHAPE */}
      <div className="light-shape">
        <img src={lightShape} alt="img" />
      </div>

      {/* ROTATE SHAPE */}
      <div className="team-shape tm-gsap-animate-circle">
        <img src={teamShape} alt="img" />
      </div>

      <div className="container">
        {/* SECTION TITLE */}
        <div className="sec-title text-center">
          <span className="sub-title tz-sub-tilte tz-sub-anim tx-subTitle">
            <img src={star} alt="img" />
            Our Team
          </span>

          <h2 className="title tx-title sec_title tz-itm-title tz-itm-anim">
            Meet Our Experienced <br />
            <span>Team People</span>
          </h2>
        </div>

        {/* TEAM ROW */}
        <div className="row">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={member.delay}
            >
              <div className="team-block">
                <div className="inner-block">
                  {/* IMAGE */}
                  <div className="image-block">
                    <img src={member.image} alt={member.name} />
                    <img src={member.image} alt={member.name} />
                  </div>

                  {/* CONTENT */}
                  <div className="content-block">
                    <h4 className="title">
                      <a href="/team-details">{member.name}</a>
                    </h4>

                    <div className="text">{member.role}</div>

                    {/* SOCIAL ICONS */}
                    <div className="social-icon">
                      <a href="#">
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>

                      <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>

                      <a href="#">
                        <i className="fa-brands fa-pinterest"></i>
                      </a>

                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </div>
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

export default TeamSection;
