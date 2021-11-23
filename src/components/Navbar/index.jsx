import React, { useEffect, useRef, useState } from "react";
import "./navbar.css";
import MenuButton from "../../assets/images/menu-button.svg";
import CloseButton from "../../assets/images/close-button.svg";

const Menu = () => (
  <ul className="navbar__menu">
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

  const prevScrollY = useRef(0);

  console.log("===> scrollY: ", scrollY, prevScrollY, goingUp);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }
      prevScrollY.current = currentScrollY;
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  return (
    <div
      className={`navbar section__padding navbar__fixed ${
        prevScrollY.current > 45 && !goingUp ? "bg__white" : ""
      }`}
    >
      <div className="navbar__logo">
        <p className="gradient__logo">Portfolio</p>
      </div>
      <div className="navbar__desktop-menu">
        <Menu />
      </div>
      <div className="navbar__desktop-buttons_container">
        <button className="navbar__button-connect gradient__button">
          Connect
        </button>
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
            <button className="navbar__button-connect gradient__button">
              Connect
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
