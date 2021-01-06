import React from "react";
import { Product } from "../index";
import { products } from "../product/productData";
import { background } from "./homeData";
import "./Home.scss";

export default function Home() {
  return (
    <section className="home">
      <div className="home__image-container">
        <img
          src={background.tutorial_image}
          alt=""
          className="home__background-image"
        />
      </div>

      <div className="content-container">
        <div className="home__row">
          {products.row1.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>

        <div className="home__row">
          {products.row2.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>

        <div className="home__row">
          {products.row3.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
