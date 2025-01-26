import React from 'react'
import "./skills.css"
import Skills from './skill-list'

const skills = () => {
  return (
    <div className='container test' id='skills'>
      <h2 className="section__title">Skills</h2>
        <Skills />
    </div>
  )
}

export default skills