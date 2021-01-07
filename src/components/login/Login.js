import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import * as ROUTES from "../../pages/routes";
import "./Login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const logo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png";
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();
    // firebase login
    auth
      .signInWithEmailAndPassword(email, password)
      .then((authObj) => {
        history.push(ROUTES.HOME);
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    // prevent page from refreshing
    e.preventDefault();
    // firebase register
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authObj) => {
        console.log("successful register = ", authObj);
        if (authObj) {
          history.push(ROUTES.HOME);
        }
      })
      // .catch((error) => console.log("register error = ", error.message));
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to={ROUTES.HOME}>
        <img className="login__logo" src={logo} alt="amazon logo" />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login__signInBtn" onClick={signIn}>
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON CLONE Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button type="submit" className="login__registerBtn" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}
