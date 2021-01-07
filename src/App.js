import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HeaderTop, HeaderBottom } from "./components";
import { useStateValue } from "./context";
import { auth } from "./firebase";
import { Homepage, CheckoutPage, LoginPage } from "./pages";
import * as ROUTES from "./pages/routes";

export default function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // listener for if the user is logged in or not
    auth.onAuthStateChanged((authUser) => {
      console.log("(logged in) - user is = ", authUser);

      if (authUser) {
        // user just logged in / user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // user if logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <>
      <Router>
        <div className="app">
          <Route exact path={ROUTES.LOGIN} component={LoginPage} />
          <Route exact path={ROUTES.HOME} component={Homepage} />
          <Route exact path={ROUTES.CHECKOUT} component={CheckoutPage} />
          {/* Footer */}
        </div>
      </Router>
    </>
  );
}
