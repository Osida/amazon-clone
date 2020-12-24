import React from "react";
import { Product } from "../index";
import "./styles/HomeStyles.css";

export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YTQzYWRkNWYt/YTQzYWRkNWYt-YTRjMDIzNTUt-w3000._CB413865406_.jpg"
          alt="home-img"
        />
      </div>

      <div className="home__row">
        <Product />
        {/* card component */}
      </div>
      <div className="home__row">
        {/* card component */}
        {/* card component */}
        {/* card component */}
      </div>
      <div className="home__row">{/* card component */}</div>
    </div>
  );
}
