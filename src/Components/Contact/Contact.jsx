import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "4f159dec-bcae-490b-8234-c348ef2fcf1d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h2>Get in touch</h2>
        {
          <img
            src={theme_pattern}
            alt="theme_pattern_img"
            className="theme_pattern"
          />
        }
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h3>Let's talk</h3>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact me anytime .
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="mail_icon" />
              <p>xianaudoh17@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="location_icon" />
              <p>Calabar, Nigeria</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call_icon" />
              <p>+234 8080837683</p>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Fullname:</label>
            <input type="text" placeholder="Enter your name" name="name" />
            <label htmlFor="">Email:</label>
            <input type="email" placeholder="Enter your email" name="email" />
            <label htmlFor="">Message:</label>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="8"
              placeholder="enter your message here"
            ></textarea>
            <button type="submit" className="contact-submit">
              Submit now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
