import React from "react";
import { images } from "../../utils";

import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="gericht__aboutus gericht__bg flex__center section__padding"
    id="about"
  >
    <div className="gericht__aboutus-overlay flex__center">
      <img src={images.G} alt="g_letter" />
    </div>
    <div className="gericht__aboutus-content flex__center">
      <div className="gericht__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra
          Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec
          Aliquet Eu Proin Mauris Et.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
      <div className="gericht__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>
      <div className="gericht__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Adipiscing Tempus Ullamcorper Lobortis Odio Tellus Arcu Volutpat.
          Risus Placerat Morbi Volutpat Habitasse Interdum Mi Aliquam In Sed
          Odio Nec Aliquet.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
