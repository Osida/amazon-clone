import React from "react";
import { Subtotal, CheckoutProduct } from "../index";
import "./Checkout.scss";

export default function Checkout() {
  const banner =
    "https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg";

  return (
    <section className="checkout">
      <div className="checkout__left">
        <div className="checkout__ad">
          <img src={banner} alt="ad banner" />
        </div>

        <div>
          <h2 className="checkout__title"> Your shopping basket</h2>
          <CheckoutProduct />
          {/* CheckoutProduct */}
          {/* 2:43:27 */}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </section>
  );
}
