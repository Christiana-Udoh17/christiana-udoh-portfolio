import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.jpeg";

const data = [
  { skill: "HTML & CSS", level: 85 },
  { skill: "Tailwind & Bootstrap", level: 80 },
  { skill: "React Js", level: 75 },
  { skill: "Next JS", level: 65 },
  { skill: "JavaScript", level: 75 },
  { skill: "TypeScript", level: 50 },
  { skill: "Git & GitHub", level: 85 },
];

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-title">
        <h2>About me</h2>
        <img src={theme_pattern} alt="theme_pattern_img" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img
            src={profile_img}
            alt="profile_img"
            className="bounce"
            loading="lazy"
          />
        </div>
        <div className="about-right">
          <div className="about-paragraph">
            <p>
              I'm a Front-end developer passionate about crafting seamless
              digital journeys, transforming concepts into interactive,
              intuitive, and accessible web designs.
            </p>

            {/* Skills Chart */}
            <div className="about-skills">
              {data.map((item, index) => (
                <div key={index} className="skill-bar">
                  <p>{item.skill}</p>
                  <div className="bar">
                    <div
                      className="bar-fill"
                      style={{ width: `${item.level}%` }}
                    ></div>
                    <div
                      className="bar-tooltip"
                      style={{ left: `${item.level}%` }}
                    >
                      {item.level}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h2>1+</h2>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h2>25+</h2>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h2>15+</h2>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
