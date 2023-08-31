import React from "react";
import notification from "../../../assets/images/Notificationbell.png";
import doctorimage from "../../../assets/images/image5.jpg";
import search from "../../../assets/images/search.png";
import "./style.css";
const Searchprofile = () => {
  return (
    <div className="search-profile-container" style={{ borderBottom: "1px solid #e0e0e0" }}>
      <div className="option-search">
        <select name="cars" id="cars" className="options">
          <option value="">Default</option>
          <option value="Abc">Abc</option>
          <option value="xyz">xyz</option>
          <option value="jkl">jkl</option>
          <option value="gdhd">gdhd</option>
        </select>
        <div className="search-input">
          <img src={search} alt="search" style={{ width: "10%" }} />
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Search here"
          />
        </div>
      </div>
      <div className="notification-profile">
        <img src={notification} alt="notification" />
        <img src={doctorimage} alt="doctorimage" className="doctor-profile" />
      </div>
    </div>
  );
};

export default Searchprofile;
