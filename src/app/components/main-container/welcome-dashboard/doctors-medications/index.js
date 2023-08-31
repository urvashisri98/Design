import React from 'react';
import threedots from "../../../../assets/images/threedots.png";
import {Medicationsdata} from "../../../../data/data"
import "./style.css"
const Medications = () => {
  return (
    <div className='medication-container'>
     <div className='medication-heading' style={{borderBottom:"1px solid #e0e0e0"}}>
       <label className='medication'>Medications</label>
       <img src={threedots} alt="threedots"/>
     </div>
     <div className='medication-options'>
       {Medicationsdata.map((item)=>{
        return(

       <div className='medication-name' style={{borderBottom:"1px solid #e0e0e0"}}>
         <label className='medicine'>{item.medicinename}</label>
         <p className='medicine-detail'>{item.medicineroutine}</p>
       </div >
        )})}
     </div>
    </div>
  )
}

export default Medications