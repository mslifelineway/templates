import React from "react";
import { images } from "../../utils";
import "./styles.css";

const SubHeading = ({ title }) => {
  return (
    <div className="gericht__subheading">
      <p className="p__cormorant">{title}</p>
      <img src={images.spoon} alt="spoon" className="spoon__img" />
    </div>
  );
};

export default SubHeading;
