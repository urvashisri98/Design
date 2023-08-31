import React from 'react';
import "./style.css";
import Welcomedashboard from './welcome-dashboard';
import Searchprofile from './dashboard-search-profile';
const Maincontainer = () => {
  return (
    <div className='main-container'>
       <Searchprofile/>
       <Welcomedashboard/>
        </div>
  )
}

export default Maincontainer