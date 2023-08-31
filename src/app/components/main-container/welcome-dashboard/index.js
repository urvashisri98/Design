import React from "react";
import "./style.css";
import Doctorslist from "./top-doctors";
import Medications from "./doctors-medications";
import Popularproduct from "./top-doctors/popular-product";
import Healthpackage from "./top-doctors/health-package";
import Consultation from "./top-doctors/upcoming-consultation";
const Welcomedashboard = () => {
  return (
    <div className="welcome-dashboard-container">
      <div className="dashboard-heading-name">
        <label className="welcome-back">Welcome Back</label>
        <label className="jubed-ahmed">Jubed Ahmed</label>
      </div>
      <div className="top-doctors-name">
        <Doctorslist />
        <Medications />
      </div>
      <div className="popular-product">
        <Popularproduct/>
        <Healthpackage/>
        <Consultation/>
        
      </div>
    </div>
  );
};

export default Welcomedashboard;
