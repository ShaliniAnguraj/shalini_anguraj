import React from "react";
import "./Profile.css";
import profile_img from "../../assets/profile.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Profile = () => {
  return (
    <div id="home" className="profile">
      <img src={profile_img} alt=" " />
      <h1>
        <span>I'm Shalini Anguraj,</span> Frontend Developer Based In India.
      </h1>
      <p>
        I'm A Self-Taught, Eager To Contribute To Success Through Hard Work,
        Skills, Attention To Details And Excellent Organizational Skills. I Am
        Currently A Leaner, Focused Mainly On Javascrpit Using Different
        Framework As React.
      </p>
      <div className="profile-action">
        <div className="profile-connect">
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>
        <div className="profile-resume">
          <a href="https://drive.google.com/file/d/1pJ0z7w-6N7ntX6kl6JwNvm_FAzTyNTYC/view" target="_blank" rel="noreferrer"> Resume</a>
         </div>
      </div>
    </div>
  );
};

export default Profile;
