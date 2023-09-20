import React from 'react'
import '../styles/SideBar.css'
import resumeLogo from '../assets/resume.svg'
function SideBar() {
  return (
    <div className='sidebar'>
      <img src={resumeLogo} alt="" />
      <h1>CV Generater</h1>
    </div>
  )
}

export default SideBar