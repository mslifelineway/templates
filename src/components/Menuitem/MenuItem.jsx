import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => {
  return (
    <div className="gericht__menuItem">
      <div className="gericht__menuItem-head">
        <div className="gericht__menuItem-name">
          <p className="p__cormorant">{title}</p>
        </div>
        <div className="gericht__menuItem-line" />
        <div className="gericht__menuItem-price">
          <p className="p__cormorant">{price}</p>
        </div>
      </div>
      <div className="gericht__menuItem-tags">
        <p className="p__opensans">{tags}</p>
      </div>
    </div>
  );
};

export default MenuItem;
