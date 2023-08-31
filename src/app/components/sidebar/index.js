import React from "react";
import medikLogo from "../../assets/images/mediklogo.JPG";
import { SidebarIcons } from "../../data/data.js";
import "./style.css";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-heading">
        <img src={medikLogo} alt="logo" />
        <label className="logo-name">medik</label>
      </div>

      <div className="sidebar-options">
        {SidebarIcons.map((item, index) => (
          <div className="icon-name" key={index}>
            <img src={item.image} alt="" />
            <label className="name">{item.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
