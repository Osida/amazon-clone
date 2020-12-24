import React from "react";
import { Product } from "../index";
import "./styles/HomeStyles.css";
import { productRow1, productRow2, productRow3 } from "../product/productData";

export default function Home() {
  const homeImgWinter =
    "https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YTQzYWRkNWYt/YTQzYWRkNWYt-YTRjMDIzNTUt-w3000._CB413865406_.jpg";
  const homeImgTutorial =
    "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg";

  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={homeImgTutorial} alt="home-img" />
      </div>

      <div className="home__row">
        {productRow1.map((product) => (
          <Product
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
      <div className="home__row">
        {productRow2.map((product) => (
          <Product
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
      <div className="home__row">
        {productRow3.map((product) => (
          <Product
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
}
