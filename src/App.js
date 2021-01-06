import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HeaderTop, HeaderBottom } from "./components";
import { Homepage, CheckoutPage } from "./pages";
import * as ROUTES from "./pages/routes";

export default function App() {
  return (
    // BEM
    <>
      <Router>
        <div className="app">
          <header>
            <HeaderTop />
            <HeaderBottom />
          </header>
          <Route exact path={ROUTES.HOME} component={Homepage} />
          <Route exact path={ROUTES.CHECKOUT} component={CheckoutPage} />
          {/* Footer */}
        </div>
      </Router>
    </>
  );
}
