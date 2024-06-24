import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I Am an experienced Frontend Developer with over a decade of
              professional expertise in the field. Throughout my career, I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
        </div>
        
      </div>
      <div className="about-achievements">
          <div className="about-achievement">
            <h1> 2024💻</h1>
            <p> Full Stack Web Development</p>
            <p> Guvi Geek Network Private Limited.</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1> 2022🎓</h1>
            <p> Computer Science And Engineering</p>
            <p> Tamilnadu college Of Engineering, Coimbatore.</p>
          </div>
        </div>
    </div>
  );
};

export default About;
