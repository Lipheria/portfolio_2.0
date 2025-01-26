import React from 'react'
import "./skill-list.css"
import html from "../../assets/html-5.png"
import css from "../../assets/css.png"
import js from "../../assets/javascript.png"
import node from "../../assets/node.png"
import uipath from "../../assets/uipath.png"
import python from "../../assets/python.png"
import mongo from "../../assets/mongo.png"
import sql from "../../assets/mysql.png"
import reactpic from "../../assets/react.png"

const Skills= () => {
  return (
    <div className='skills-container container'>
        <div className="box">
            <div className="content">
                <img src={html} alt="" />
                <p>HTML</p>
            </div>
        </div>
        <div className="box">
            <div className="content">
                <img src={css} alt="" />
                <p>CSS</p>
            </div>
        </div>
        <div className="box">
            <div className="content">
                <img src={js} alt="" />
                <p>Javascript</p>
            </div>
        </div>
        <div className="box">
            <div className="content">
                <img src={uipath} alt="" />
                <p>UiPath</p>
            </div>
        </div>
        <div className="box">
            <div className="content">
                <img src={node} alt="" />
                <p>Node</p>
            </div>
        </div>
        <div className="box">
            <div className="content">
                <img src={sql} alt="" />
                {/* <p>Mongo DB</p> */}
            </div>
        </div>
        <div className="box">
            <div className="content">
                <img src={reactpic} alt="" />
                <p>React</p>
            </div>
        </div>
        <div className="box">
            <div className="content">
                <img src={python} alt="" />
                <p>Python</p>
            </div>
        </div>
        
    </div>
  )
}

export default Skills