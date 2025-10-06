import React from "react";
import "./MyProjects.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import myprojects_data from "../../assets/myprojects_";

const MyProjects = () => {
  return (
    <div className="myprojects" id="projects">
      <div className="myprojects-title">
        <h2> My latest projects</h2>
        <img src={theme_pattern} alt="theme_pattern_img" />
      </div>
      <div className="myprojects-container">
        {myprojects_data.map((project, index) => {
          return (
            <div>
              <a
                href={project.w_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="imagespro">
                  <img key={index} src={project.w_img} alt="project_img_1" />
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyProjects;
