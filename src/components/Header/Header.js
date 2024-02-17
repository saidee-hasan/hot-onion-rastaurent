import React from "react";
import "./Header.css";
import Logo from "../../images/homepage/logo2.png";
import Bg_img from "../../images/homepage/bannerbackground.png";

const Header = () => {
  return (
    <div className="header">
      <section class="container">
        <div class="bar logo">
          <img src={Logo} alt="" />
        </div>

        <div class="bar app-bar">
          <a href="/login">Login</a>
          <button className="sign-btn">
            <a href="/sign-up">Sign up</a>
          </button>
        </div>
      </section>
      <div className="bg-image">
        <img src={Bg_img} alt="" />
      </div>
      <div className="search">
        <h1 style={{color:'black'}}>Best foods item</h1>
        <input type="text" placeholder="Search food itmes" />
        <button>Search</button>
      </div>
    
    </div>
  );
};

export default Header;
