import React from "react";
import notification from "../../../assets/images/Notificationbell.png"
import "./style.css";
const Searchprofile = () => {
  return (
    <div className="search-profile-container">
      <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
      <img src="" alt="" />
      <input type="text" name="name" />
      <img src={notification} alt=""/>
    </div>
  );
};

export default Searchprofile;
