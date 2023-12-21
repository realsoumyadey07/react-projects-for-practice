import React from "react";
import style from "../components/Herosection.module.css";

function Herosection() {
  return (
    <div className={`${style.sections}`}>
      <div className={`${style.textSection}`}>
        <h1 className={`${style.heading}`}>YOR FEET DESERVE THE BEST</h1>
        <p >
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className={`${style.buttons}`}>
          <button>Shop Now</button>
          <button className={`${style.second}`}>Category</button>
        </div>
        <p>Also Available on</p>
        <div className={`${style.aviLogo}`}>
          <img src="/images/flipkart.png" alt="" />
          <img src="/images/amazon.png" alt="" />
        </div>
      </div>
      <div className={`${style.imageSection}`}>
        <img className={`${style.shoeImage}`} src="/images/shoe_image.png" alt="" />
      </div>
    </div>
  );
}
export default Herosection;
