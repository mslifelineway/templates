import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Navbar from "../Navbar";
import "./header.css";
import Profile from "../../assets/images/profile-image-frame.svg";
import Instagram from "../../assets/images/instagram.svg";
import Facebook from "../../assets/images/facebook.svg";
import LinkedIn from "../../assets/images/linkedIn.svg";
import Twitter from "../../assets/images/twitter.svg";
import Github from "../../assets/images/github.svg";
import { HireMeForm } from "..";
import { ToastContainer } from "react-toastify";

const Header = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    open
      ? ReactDOM.render(
          <HireMeForm setOpen={setOpen} />,
          document.getElementById("hireme__form__modal")
        )
      : ReactDOM.render("", document.getElementById("hireme__form__modal"));
  }, [open]);

  return (
    <div className="header" id="home">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Navbar />
      <div style={{ height: 97 }}></div>
      <div className="header__content section__padding">
        <div className="header__content-details">
          <h4>Hello I'm Mukesh</h4>
          <h2>MERN full stack developer</h2>
          <p>
            Working as an associate bussiness analyst at Infosys and having the
            zeal to up-skill, being efficient & productive for the company &
            develop as well as diversifying my professional skill-set. Looking
            forward to working as a software developer in a Multinational
            Corporation to get more exposure to international clients. I have a
            team of 4 members and ready for freelancing.
          </p>
          <ul className="header__social-links">
            <li>
              <a
                href="https://www.instagram.com/crazy.dev.mukesh"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Instagram} alt="profile" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mukesh-kumar-4597a0146/"
                rel="noreferrer"
                target="_blank"
              >
                <img src={LinkedIn} alt="profile" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/mslifelineway"
                rel="noreferrer"
                target="_blank"
              >
                <img src={Facebook} alt="profile" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/oyemukesh"
                rel="noreferrer"
                target="_blank"
              >
                <img src={Twitter} alt="profile" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/mslifelineway"
                rel="noreferrer"
                target="_blank"
              >
                <img src={Github} alt="profile" />
              </a>
            </li>
          </ul>
        </div>
        <div className="header__content-profile_container">
          <img src={Profile} alt="profile" />
          <div className="header__profile__buttons">
            <a href="/assets/cv/mukesh_kumar_CV.docx" download>
              <button className="gradient__button">Download CV</button>
            </a>
            <button className="gradient__button" onClick={() => setOpen(true)}>
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
