import React from 'react'
import { useEffect } from 'react'
import "./home.css"
import Socials from "./socials"
import ScrollDown from './scrolldown'
import me from "../../assets/avatar-1.png"
import Typed from 'typed.js';


const Home = () => {
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hi Hi!", 'I&apos;m Mayowa.'],
      typeSpeed: 60,
      loop: true,
      showCursor: false,
      fadeOut: true,
  });



    return () => {
      typed.destroy();
    };
  }, []);


  return (
    <section className="home container" id='home'>
      <div className="intro">
        <img 
          src={me} 
          alt="" 
          className='home__img'
          style={{ width: '100px', height: '100px' }}
        />
        <h1 className='home__name typewriter' ref={el}></h1>
        <span className="home__education">I'm a developer</span>
        <Socials />
        <a href="" className="btn">Here's my CV</a>
        <ScrollDown></ScrollDown>
      </div>
    </section>
  )
}

export default Home