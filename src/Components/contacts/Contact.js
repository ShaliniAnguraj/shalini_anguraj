import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import "./contact.css";
import { toast } from "react-toastify";

const Contact = () => {
  const [ result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Message Send Successfully....");
    const formData = new FormData(event.target);

    formData.append("access_key", "91ab2ecd-4d48-4794-81e6-ad055dca59b0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.dark("Message send Successfully😍");
      event.target.reset();
    } else {
      toast.dark(data.message);
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk </h1>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>arshalinianguraj@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91 6383101381</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Salem, TamilNadu</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your Name" name="name" />
          <br/>

          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your Email" name="email" />
          <br/>

          <label htmlFor="">Your message here</label>
          <textarea name="message" rows="8" placeholder="Enter your Message"></textarea>
          <h1 className="result">{result}</h1>
          <button type="submit" className="contact-submit"> Submit now</button>


        </form>
      </div>
    </div>
  );
};

export default Contact;

