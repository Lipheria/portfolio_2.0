import React from 'react'
import "./about2.css"
import pic from "../../assets/avatar-2.svg"
import Info from "./info.jsx"



const About = () => {
  return (
    <section className="about container section" id="about">
        <h2 className="section__title">About Me</h2>
        <div className="about__container grid">
            <img src={pic} alt="" className='about__img' />
            
            <div className="about__data">
                <div className="about__info grid">
                    <div className="about__box">
                        <h3 className="about__title">Education</h3>
                        <span className="about__subtitle">BSc. Software Engineering</span>
                    </div>

                    <div className="about__box">
                        <h3 className="about__title">Experience</h3>
                        <span className="about__subtitle">3 years working</span>
                    </div>
                </div>

                <p className="about__description">
                Passionate software developer with a thirst for learning and problem-solving looking to contribute innovative solutions to the digital landscape.
                </p>
            </div>
        </div>
    </section>
  )
}

export default About