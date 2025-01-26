import React, { useState } from 'react'
import "./sidebar.css"

const Sidebar = () => {
  const [toggle, showMenu] = useState(false);
  return (
    <>
        <aside className={toggle ? "aside show-menu" : "aside"}>
        <a href="#home" className="nav__logo">MDL.</a>
        <nav className='nav'>
          <div className="nav__menu">
            <ul className="nav__list">

              <li className="nav__item">
                <a href="#home" className="nav__link" data-tooltip="Home">
                  <i className="icon-home"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" className="nav__link" data-tooltip="About">
                  <i className="icon-user"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#services" className="nav__link" data-tooltip="Services">
                  <i className="icon-layers"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#skills" className="nav__link" data-tooltip="Skills">
                  <i className="icon-game-controller"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#projects" className="nav__link" data-tooltip="Projects">
                <i className="icon-briefcase"></i>
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" className="nav__link" data-tooltip="Contact">
                <i className="icon-speech"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav__footer">
          Thing
        </div>
      </aside>
    
    <div className={toggle ? "nav__toggle nav__toggle-open" : 
      "nav__toggle"} onClick={() => showMenu(!toggle)}>
      <i className="icon-menu"></i>
    </div>
    </>
    
  )
}

export default Sidebar