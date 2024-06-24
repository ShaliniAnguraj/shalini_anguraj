import React from "react";
import "./Service.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../Servicesdata";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Skills</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{service.s_title}</h3>
              <img src={service.s_img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
