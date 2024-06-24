import React from "react";
import "./Work.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../Workdata";
const Work = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>Portfolio</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map(( work, index) => {
          return (
            <div className="mywork-image">
              <img key={index} src={work.w_src} />
              <h1>
                {" "}
                <a href={work.demo} target="_blank" rel="noreferrer">
                  Demo
                </a>
                <a href={work.code} target="_blank" rel="noreferrer">
                  Code
                </a>
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
