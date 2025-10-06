import React, { useRef, useState } from "react";
import "./Navbar.css";
import blue_logo from "../../assets/blue_logo.svg";
import nav_underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-400px";

    setIsMenuOpen(false);
  };

  return (
    <div className="navbar">
      <img src={blue_logo} alt="logo" className="blue_logo" />

      {/* Mobile Open Button (hamburger) */}
      <img
        src={menu_open}
        onClick={openMenu}
        alt="menu_open_img"
        role="button"
        aria-label="Open menu"
        className={`nav-mob-open ${isMenuOpen ? "hide" : ""}`}
      />

      <ul ref={menuRef} className="nav-menu">
        {/* Mobile Close Button (X) */}
        <img
          src={menu_close}
          onClick={closeMenu}
          alt="menu_close_img"
          role="button"
          aria-label="Close menu"
          className={`nav-mob-close ${isMenuOpen ? "show" : ""}`}
        />

        <li>
          <AnchorLink
            href="#home"
            className="anchor-link"
            onClick={() => {
              setMenu("home");
              closeMenu();
            }}
          >
            Home
          </AnchorLink>
          {menu === "home" && (
            <img src={nav_underline} alt="underline" className="underline" />
          )}
        </li>

        <li>
          <AnchorLink
            href="#about"
            offset={50}
            className="anchor-link"
            onClick={() => {
              setMenu("about");
              closeMenu();
            }}
          >
            About me
          </AnchorLink>
          {menu === "about" && <img src={nav_underline} alt="underline" />}
        </li>

        <li>
          <AnchorLink
            href="#services"
            offset={50}
            className="anchor-link"
            onClick={() => {
              setMenu("services");
              closeMenu();
            }}
          >
            Services
          </AnchorLink>
          {menu === "services" && <img src={nav_underline} alt="underline" />}
        </li>

        <li>
          <AnchorLink
            href="#projects"
            offset={50}
            className="anchor-link"
            onClick={() => {
              setMenu("projects");
              closeMenu();
            }}
          >
            Projects
          </AnchorLink>
          {menu === "projects" && <img src={nav_underline} alt="underline" />}
        </li>

        <li>
          <AnchorLink
            href="#contact"
            offset={50}
            className="anchor-link"
            onClick={() => {
              setMenu("contact");
              closeMenu();
            }}
          >
            Contact
          </AnchorLink>
          {menu === "contact" && <img src={nav_underline} alt="underline" />}
        </li>
      </ul>

      {/* Connect With Me (hidden on mobile) */}
      <div className="nav-connect">
        <AnchorLink
          className="anchor-link"
          offset={50}
          href="#contact"
          onClick={closeMenu}
        >
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
