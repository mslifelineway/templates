import React, { useEffect, useState } from "react";
import "./navbar.css";
import MenuButton from "../../assets/images/menu-button.svg";
import CloseButton from "../../assets/images/close-button.svg";

const Menu = () => (
  <ul className="navbar__menu">
    <li>
      <a href="#home" className="gradient__text">
        Home
      </a>
    </li>
    <li>
      <a href="#about" className="gradient__text">
        About
      </a>
    </li>
    <li>
      <a href="#services" className="gradient__text">
        Services
      </a>
    </li>
    <li>
      <a href="#contact" className="gradient__text">
        Contact
      </a>
    </li>
    <li>
      <a href="#blogs" className="gradient__text">
        Blogs
      </a>
    </li>
  </ul>
);
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [goingUp, setGoingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (scrollY < currentScrollY) {
        setGoingUp(false);
      }
      if (scrollY > currentScrollY && !goingUp) {
        setGoingUp(true);
      }
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp, scrollY]);

  return (
    <div
      className={`navbar section__padding navbar__fixed ${
        scrollY > 45 ? "bg__white" : ""
      }`}
    >
      <div className="navbar__logo">
        <p className="gradient__logo">Portfolio</p>
      </div>
      <div className="navbar__desktop-menu">
        <Menu />
      </div>
      <div className="navbar__desktop-buttons_container">
        <a
          href="//api.whatsapp.com/send?phone=917015720216&text=Thanks for contacting me. I will respond you soon."
          target="_blank"
          rel="noreferrer"
        >
          <button className="navbar__button-connect gradient__button">
            Connect
          </button>
        </a>
      </div>

      <div className="navbar-mobile_menu">
        {toggleMenu ? (
          <img
            src={CloseButton}
            alt="close"
            onClick={() => setToggleMenu(false)}
            className="btnClose"
          />
        ) : (
          <img
            src={MenuButton}
            alt="open"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <Menu />
            <a
              href="//api.whatsapp.com/send?phone=917015720216&text=Thanks for contacting me. I will respond you soon."
              target="_blank"
              rel="noreferrer"
            >
              <button className="navbar__button-connect gradient__button">
                Connect
              </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
