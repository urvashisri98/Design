import React from "react";
import "./style.css";
import Arrow from "../../../../assets/images/arrow.png";

import { Doctordetails } from "../../../../data/data.js";
const Doctorslist = () => {
  return (
    <div className="doctors-list">
      <div className="top-doctor-view">
        <label className="top-doctors-head">Top Doctors</label>
        <div className="view-image">
          <label className="view-all">View all</label>
          <img src={Arrow} alt="" className="image-size" />
        </div>
      </div>
      <div className="doctors-name-specialist">
        {Doctordetails.map((item, index) => {
          return (
            <div className="doctor-detail-container" key={index}>
              <img src={item.image} alt="doctor" className="image-doctor" />
              <div className="doctors-detail">
                <label className="doctor-name">{item.doctorname}</label>
                <label className="doctors-work">{item.doctorwork}</label>
                <label className="rating">{item.rating}</label>
              </div>
              <img src={item.arrowicon} alt="Arrow" className="arrow-icon" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Doctorslist;
