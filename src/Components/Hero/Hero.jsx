import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <img src={profile_img} alt="my-profile-img" className="hero-img bounce" />
      <h1>
        <span>I'm Christiana Silas Udoh,</span> frontend developer
      </h1>
      <p>
        I am a proficient frontend developer enthusiatic about creating
        user-friendly, visually appealing and highly functional websites.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a
            href="https://drive.google.com/file/d/1a1ZJaFUQelIZ_1M72FsmC9s_XETalVrO/view?usp=sharing"
            target="_blank"
          >
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
