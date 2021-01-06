import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../context";
import * as ROUTES from "../../pages/routes";
import SearchIcon from "@material-ui/icons/Search";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import "./HeaderTop.scss";

export default function HeaderTop() {
  const logo = "http://pngimg.com/uploads/amazon/amazon_PNG11.png";
  const [{ basket }, dispatch] = useStateValue();

  return (
    <>
      <nav className="nav-top">
        <div className="nav-container row">
          <div className="nav-top__left">
            <div className="nav-top__logoContainer">
              <Link to={ROUTES.HOME}>
                <img src={logo} alt="amazon logo" className="nav-top__logo" />
              </Link>
            </div>
            <div className="nav-top__option nav-top__option--locationContainer">
              <div className="nav-top__locationIcon">
                <LocationOnOutlinedIcon />
              </div>
              <div className="nav-top__option nav-top__option--locationText">
                <span className="nav-top__line1">Hello</span>
                <span className="nav-top__line2">Select your address</span>
              </div>
            </div>
          </div>

          <div className="nav-top__center">
            <div className="nav-top__searchContainer">
              <input type="text" className="nav-top__input" />
            </div>
            <div className="nav-top__searchIcon">
              <SearchIcon />
            </div>
          </div>

          <div className="nav-top__right">
            <div className="nav-top__option">
              <span className="nav-top__line1">Hello, Guest</span>
              <span className="nav-top__line2">Sign in</span>
            </div>

            <div className="nav-top__option">
              <span className="nav-top__line1">Returns</span>
              <span className="nav-top__line2">& Orders</span>
            </div>

            <div className="nav-top__option">
              <span className="nav-top__line1">Your</span>
              <span className="nav-top__line2">Prime</span>
            </div>

            <div className="nav-top__option nav-top__option--basket">
              <Link to={ROUTES.CHECKOUT}>
                <span className="nav-top__basketIcon">
                  <ShoppingBasketOutlinedIcon />
                </span>
              </Link>
              <span className="nav-top__line2 nav-top__line2--basket-count">
                {basket?.length}
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
