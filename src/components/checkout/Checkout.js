import React from "react";
import { useStateValue } from "../../context";
import { Subtotal, CheckoutProduct } from "../index";
import "./Checkout.scss";

export default function Checkout() {
  const [{ basket, user }] = useStateValue();
  const banner =
    "https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg";

  return (
    <section className="checkout">
      <div className="checkout__left">
        <div className="checkout__ad">
          <img src={banner} alt="ad banner" />
        </div>

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title"> Your shopping basket</h2>
          {basket.map((item, index) => (
            <CheckoutProduct
              key={`${JSON.stringify(item.id + index)}`}
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </section>
  );
}
