import React from "react";
import "./footer.css";
import FooterImage from "../../assets/images/footer.svg";

const Footer = () => {
  return (
    <div className="footer " id="footer">
      <img src={FooterImage} alt="Footer" />
    </div>
  );
};

export default Footer;
