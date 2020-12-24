import React from "react";
import "./styles/ProductStyles.css";

export default function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The product description</p>
        <p className="product__price">
          <small>$</small>
          <strong>29.99</strong>
        </p>

        <div className="product__rating">
          <p>star</p>
        </div>
      </div>

      <img
        src="https://images.unsplash.com/photo-1607656311408-1e4cfe2bd9fc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
        alt="product"
      />
    </div>
  );
}
