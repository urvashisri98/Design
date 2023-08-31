import React from 'react'
import "./style.css"
import Sidebar from '../sidebar'
import Maincontainer from '../main-container'
const DashboardInner = () => {
  return (
    <div className='dashboard-inner-container'>
        <Sidebar/>
        <Maincontainer/>
    </div>
  )
}

export default DashboardInner