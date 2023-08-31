import React from "react";
import Arrow from "../../../../../assets/images/arrow.png";
import { Popularproducts } from "../../../../../data/data";
import "./style.css";
const Popularproduct = () => {
  return (
    <div className="popularproduct-container">
      <div className="popularproduct-head">
        <label className="popular-product-name">Popular Product</label>
        <div className="view-image">
          <label className="view-all">View all</label>
          <img src={Arrow} alt="" className="image-size" />
        </div>
      </div>
      {Popularproducts.map((item) => {
        return (
          <div className="popular-container">
            <div className="logo-plus-name">
              <img src={item.image} alt="" className="image-popular" />
              <label className="popularname">{item.popularName}</label>
            </div>
            <div className="Dollar-dollar">
              <label className="Dollar">{item.Dollar}</label>
              <label className="dollar">{item.dollar}</label>
            </div>
            <img src={item.arrowicon} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Popularproduct;
