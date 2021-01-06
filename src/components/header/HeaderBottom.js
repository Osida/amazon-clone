import React from "react";
import "./HeaderBottom.scss";
import MenuIcon from "@material-ui/icons/Menu";

export default function HeaderBottom() {
  return (
    <nav className="nav-bottom">
      <div className="nav-container row">
        <div className="nav-bottom__center">
          <div className="nav-bottom__menuContainer">
            <MenuIcon />
            <span className="nav-bottom__option nav-bottom__option--bold">
              All
            </span>
          </div>
          <span className="nav-bottom__option">Best Sellers</span>
          <span className="nav-bottom__option">Prime</span>
          <span className="nav-bottom__option">Customer Service</span>
          <span className="nav-bottom__option">New Releases</span>
          <span className="nav-bottom__option">Find a Gift</span>
          <span className="nav-bottom__option">Whole Foods</span>
          <span className="nav-bottom__option">Today's Deals</span>
          <span className="nav-bottom__option">Gift Cards</span>
          <span className="nav-bottom__option">AmazonBrands</span>
          <span className="nav-bottom__option">Sell</span>
        </div>

        <div className="nav-bottom__right">
          <span className="nav-bottom__option nav-bottom__option--bold">
            Introducing Amazon Pharmacy
          </span>
        </div>
      </div>
    </nav>
  );
}
