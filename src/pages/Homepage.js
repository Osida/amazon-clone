import React from "react";
import { HeaderBottom, HeaderTop, Home } from "../components";

export default function Homepage() {
  return (
    <>
      <header>
        <HeaderTop />
        <HeaderBottom />
      </header>
      <main>
        {/* <h1>Homepage</h1> */}
        <Home />
      </main>
    </>
  );
}
