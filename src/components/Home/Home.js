import React, { useContext } from "react";
import Bg_img from "../../images/homepage/bannerbackground.png";
import "./Home.css";
import { CategoryContaxt } from "../../App";
import Button from 'react-bootstrap/Button';

const Home = (props) => {
  const [productCount, setProductCount] = useContext(CategoryContaxt);

  return (
    <div>
      <div className="bg-image">
        <img src={Bg_img} alt="" />
      </div>
      <div className="search">
        <h1 style={{ color: "black" }}>Best foods item</h1>
        <input type="text" placeholder="Search food itmes" />
        <button>Search</button>
      </div>
     <div className="pd-btn">
      <button onClick={() => setProductCount("Breakfast")}>Breakfast</button>
      <button onClick={() => setProductCount("Lunch")}>Lunch</button>
      <button onClick={() => setProductCount("Dinner")}>Deanier</button>
      
      </div>
    </div>
  );
};

export default Home;
