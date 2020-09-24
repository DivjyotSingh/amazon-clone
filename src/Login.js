import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";

import { auth } from "./firebase";
function Login() {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
    //some fancy firebase login shitttt
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
    //do some fancy firebase register
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-amazon_logo.svg.png"
          alt=""
          className="login_logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-In</h1>
        <form action="">
          <h5>E-mail</h5>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login_signInButton" onClick={signIn} type="submit">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Fake Clone Conditions of Use &
          Sale. Please see our privacy Notice, our Cookies Notice and our
          Interest Based Ads Notice.
        </p>
        <button className="login_registerButton" onClick={register}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
