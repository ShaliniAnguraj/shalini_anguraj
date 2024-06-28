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
            <div key={index} className="mywork-image">
              <img  src={work.w_src} alt=""/>
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




/**.mywork{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
  margin: 80px 170px;
}
.mywork-title{
  position: relative;
}
.mywork-title h1{
  padding: 0px 30px;
  font-size: 80px;
  font-weight: 600;
}
.mywork-title img{
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
}
.mywork-container{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr ;
  gap: 40px;
}
.mywork-image img{
  box-sizing: border-box;
  width: 319px;
  height: 180px;
  transition: 0.5s;
  cursor: pointer;
}
.mywork-image h1{
  display: flex;
  justify-content: space-between;
  padding: 2px;
  font-size: large;
}
.mywork-image h1 a{
  color: azure;
  text-decoration: none;
}
.mywork-image img:hover{
  transform: scale(1.10);
  border: 4px solid #ff00ff;
  border-radius: 10px;
  transition: 0.4s;
}
.mywork-image h1 a:hover{
  color:blueviolet;
  text-decoration: none;
}
@media(max-width:768px){
  .mywork{
      gap: 50px;
      margin: 50px 20px;
      align-items: start;
  }
  .mywork-title h1{
      padding: 0;
      font-size: 50px;
      font-weight: 600;
  }
  .mywork-title img{
      width: 130px;
      margin-right: -20px;
  }
  .mywork-container{
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}
 
  
} */