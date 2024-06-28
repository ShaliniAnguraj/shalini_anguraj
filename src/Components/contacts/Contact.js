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
    setResult("Sending....");
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
          <button type="submit" className="contact-submit"> Submit now</button>


        </form>
      </div>
    </div>
  );
};

export default Contact;

/**import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Contact = () => {
  return (
    <div>
      {/**contact *
      <div className="flex flex-col items-center justify-center gap-20 my-20 mx-40">
        {/**contact-title *
        <div className="relative">
          <h1 className="py-0 px-7 font-semibold text-6xl">Get In Touch</h1>
          <div className="absolute bottom-0 right-0 -z-10">
            <img src={theme_pattern} alt="" />
          </div>
        </div>
        {/**contact-section *
        <div className="flex gap-48">
          {/**contact-left *
          <div className="flex flex-col gap-7">
            <h1 className="text-6xl font-bold bg-primary-color3 bg-clip-text text-transparent">
              Let's Talk
            </h1>

            {/**contact-details *
            <div className="flex flex-col gap-7 text-slate-200 text-xl">
              {/**contact-detail *
              <div className="flex items-center gap-5">
                <img src={mail_icon} alt="" />
                <p>arshalinianguraj@gmail.com</p>
              </div>
              <div className="flex items-center gap-5">
                <img src={call_icon} alt="" />
                <p>+91 6383101381</p>
              </div>
              <div className="flex items-center gap-5">
                <img src={location_icon} alt="" />
                <p>Salem, TamilNadu</p>
              </div>
            </div>
          </div>
          {/**contact-right *
          <form className="flex flex-col items-start gap-4">
            <label htmlFor="" className="text-slate-400 text-xl font-medium">
              Your Name
            </label>
            <input
              type="text"
              className="border-none h-9 p-3 rounded bg-gray-500 text-slate-200 text-xl"
              placeholder="Enter your Name"
              name="name"
            />
            <label htmlFor="" className="text-slate-400 text-xl font-medium">
              Your Email
            </label>
            <input
              type="email"
              className="border-none h-9 p-3 rounded bg-gray-500 text-slate-200 text-xl"
              placeholder="Enter your Email"
              name="email"
            />
            <label htmlFor="" className="text-slate-400 text-xl font-medium">
              Message here
            </label>
            <textarea
              name="message"
              rows="8"
              placeholder="Enter your Message"
              className="border-none w-full rounded bg-gray-500 text-slate-200 text-xl"
            />
            {/**contact-submit *
            <button type="submit" className="border-none text-slate-50 rounded-full bg-primary-color3 text-xl py-14 px-5 mb-12 cursor-pointer translate-x-2">Submit Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
 */
