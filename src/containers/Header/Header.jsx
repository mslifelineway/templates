import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../utils";

import "./Header.css";

const Header = () => (
  <div className="gericht__header gericht__wrapper section__padding" id="home">
    <div className="gericht__wrapper_info">
      <SubHeading title="Chase the new flavor" />
      <h1 className="gericht__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans gericht__header-p">
        Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat
        Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet
        Tellus
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>
    <div className="gericht__wrapper_img">
      <img src={images.welcome} alt="Welcome" />
    </div>
  </div>
);

export default Header;
