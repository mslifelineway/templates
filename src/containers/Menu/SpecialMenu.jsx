import React from "react";
import { SubHeading, MenuItem } from "../../components";
import { data, images } from "../../utils";

import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="gericht__specialMenu flex__center section__padding" id="menu">
    <div className="gericht__specialMenu-title">
      <SubHeading title="Menu That Fits Your Palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    <div className="gericht__specialMenu-menu">
      <div className="gericht__specialMenu-menu_wine flex__center">
        <p className="gericht__specialMenu-menu_heading">Wine & Beer</p>
        <div className="gericht__specialMenu_menu_items">
          {data?.wines.map((wine, index) => (
            <React.Fragment key={wine.title + index}>
              <MenuItem
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="gericht__specialMenu_menu_img">
        <img src={images.menu} alt="menu_image" />
      </div>
      <div className="gericht__specialMenu-menu_cocktails flex__center">
        <p className="gericht__specialMenu-menu_heading">Wine & Beer</p>
        <div className="gericht__specialMenu_menu_items">
          {data?.cocktails.map((cocktail, index) => (
            <React.Fragment key={cocktail.title + index}>
              <MenuItem
                title={cocktail.title}
                price={cocktail.price}
                tags={cocktail.tags}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
    <div className="gericht__specialMenu-button">
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
