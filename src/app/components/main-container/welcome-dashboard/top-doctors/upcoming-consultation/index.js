import React from 'react';
import doctorimage1 from "../../../../../assets/images/doctor1.webp";
import Calender from "../../../../../assets/images/calender.png"
import clock from "../../../../../assets/images/Clock.png"
import "./style.css";
const Consultation = () => {
  return (
    <div className="popularproductconsultant-container">
    <div className="popularproduct-head">
      <label className="popular-product-name">Upcoming Consultation</label>
    </div>
    <div className='doctor-info'>
     <div className='doctor-image-name'>
       <img src={doctorimage1} alt="" className='doctor-image-consulting'/>
       <div className='doctor-name-work'>
        <label className='doctor-name'>Dr. Darlence Robertson</label>
        <label className='doctor-work-info'>Dental Specialist</label>
       </div>
     </div>
     <div className='clock-name'>
      <img src={Calender} alt="Calender" className='calender-image'/>
      <label className='date'>11-03-2002</label>
      <img src={clock} alt="clock" className='clock-image'/>
      <label className='date'>12:00 am</label>
     </div>
     <div className='button-css'>
      <button className='cancel-button'>Cancel</button>
      <button className='reschedule-button'>Reschedule</button>
     </div>
    </div>
  </div>
  )
}

export default Consultation