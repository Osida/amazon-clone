import React from "react";
import { Checkout, HeaderBottom, HeaderTop } from "../components";

export default function CheckoutPage() {
  return (
    <>
      <header>
        <HeaderTop />
        <HeaderBottom />
      </header>
      <main>
        <Checkout />
      </main>
    </>
  );
}
