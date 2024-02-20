import "./Header.css";
import Logo from "../../images/homepage/logo2.png";
import * as React from "react";


import { Link } from "react-router-dom";

const Header = () => {
 
  return (
    <div className="header">
      <section class="container">
        <div class="bar logo">
          <img src={Logo} alt="" />
        </div>

        <div class="bar app-bar">
          <Link to="/login">Login</Link>
          
          <button className="sign-btn">
            <Link to="/sign-up">Sign up</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Header;
