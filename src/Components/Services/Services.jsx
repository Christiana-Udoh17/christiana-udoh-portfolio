import React from "react";
import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import services_Data from "../../assets/services_data";
const Services = () => {
  return (
    <div className="services" id="services">
      <div className="services-title">
        <h2>My Services</h2>
        <img src={theme_pattern} alt="theme_pattern_img" />
      </div>
      <div className="services-cointainer">
        {services_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
