import React from "react";
import "./contact.css";
import Banner from "../../assets/images/customer-contact-banner.svg";
import EmailIcon from "../../assets/images/email.svg";
import CallIcon from "../../assets/images/call.svg";

const Contact = () => {
  return (
    <div className="contact section__padding" id="contact">
      <img src={Banner} className="contact--image" alt="banner" />
      <div className="contact__details">
        <div className="contact__details--basic">
          <h4>
            <span>H</span>i There,
          </h4>
          <h4>Glad to contact me</h4>
          <p>A wing, Somani Dream Punewaale, Pune - 411033</p>
        </div>
        <div className="contact__communication contact__email">
          <img src={EmailIcon} alt="Email" />
          <p>mukeshms40003@gmail.com</p>
        </div>
        <div className="contact__communication contact__call">
          <img src={CallIcon} alt="Call" />
          <p>+91 7015720216</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
