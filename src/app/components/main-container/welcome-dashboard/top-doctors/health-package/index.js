import React from "react";
import Arrow from "../../../../../assets/images/arrow.png";
import { Package } from "../../../../../data/data";
import "./style.css";
const Healthpackage = () => {
  return (
    <div className="popularproducthealth-container">
      <div className="popularproduct-head">
        <label className="popular-product-name">Health Package</label>
        <div className="view-image">
          <label className="view-all">View all</label>
          <img src={Arrow} alt="" className="image-size" />
        </div>
      </div>
      {Package.map((item) => {
        return (
          <div className="package">
            <img src={item.image} alt="" className="package-icon" />
            <div className="package-ideal">
              <label className="package-name">{item.packagename}</label>
              <label className="ideal-name">{item.Ideal}</label>
            </div>
            <img src={item.optionimage} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Healthpackage;
