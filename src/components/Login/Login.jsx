import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  const login = (event) => {
    event.preventDefault(); // prevent the refresh
  };

  const register = (event) => {
    event.preventDefault(); // prevent the refresh
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="password" />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
        <p className="">
          By signing-in you agree to Amazon's Conditions of Use & Sale.Please
          see our Privacy Notice .Our Cookies Notice and our interest-Based Ads
          Notice
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
