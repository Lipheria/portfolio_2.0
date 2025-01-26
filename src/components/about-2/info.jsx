import React from 'react'
import "./about2.css"
import pic from "../../assets/avatar-2.svg"
import info from "./info.jsx"


const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class="fa-solid fa-graduation-cap"></i>
            <h3 className="about__title">
                Education
            </h3>
            <span className="about__subtitle">

            </span>
        </div>
        <div className="about__box">
        <i class="fa-solid fa-briefcase"></i>
            <h3 className="about__title">
                Experience
            </h3>
            <span className="about__subtitle">
                
            </span>
        </div>
    </div>
  )
}

export default Info