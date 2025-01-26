import React from 'react'
import "./about.css"
import pic from "../../assets/avatar-2.svg"

const About = () => {
  return (
    <section className="about container section">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={pic} alt="" className='about__img' />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
            Passionate software developer with a thirst for learning and problem-solving looking to contribute innovative solutions to the digital landscape.
            </p>
            <a href="" className="btn"></a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills_titles">
                <h3 className="skills_name">Development</h3>
                <span className="skills__number development">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage">

                </span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills_titles">
                <h3 className="skills_name">Stuff 2</h3>
                <span className="skills__number development">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage">

                </span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills_titles">
                <h3 className="skills_name">Stuff 3</h3>
                <span className="skills__number development">90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage">

                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About