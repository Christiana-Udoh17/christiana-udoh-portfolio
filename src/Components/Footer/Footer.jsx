import React from "react";
import "./Footer.css";
import blue_logo from "../../assets/blue_logo.svg";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={blue_logo} alt="footer_logo_img" className="blue_logo" />
          <p>
            I am a detail-oriented frontend developer with over 5 years of
            experience.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="user_icon_img" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">
            <a
              href="https://wa.me/2348060764675?text=Welcome%20to%20Xiana%20Dev!%20👋%20We%20specialize%20in%20building%20user-friendly%20and%20functional%20websites,%20as%20well%20as%20offering%20professional%20tech%20services%20including%20AI%20animation,%20web%20design,%20video%20editing,%20content%20writing,%20and%20graphic%20design."
              target="_blank"
            >
              Let's Chat
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &copy;2025 Christiana Udoh. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
