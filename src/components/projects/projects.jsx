import React from 'react'
import "./projects.css"
import bus from "../../assets/business.svg"
import list from "../../assets/list.svg"
import food from "../../assets/food.svg"

const Projects = () => {
  return (
    <section className="projects container section" id='projects'>
        <div className="projects__title section__title">Projects</div>

        <div className="projects__container grid">
            <div className="projects__item">
                <img src={food} alt="" />
                <h3 className="projects__plan">Restaurant Website</h3>
                <p className="project__title">A responsive website made for a restaurant. Demonstrates my skills with plain HTML, CSS and JavaScript</p>
                <p className="projects__support"></p>
                <h3 className="price"></h3>
                <a href="https://restaurantsite-github-io.vercel.app/" className="btn">Demo</a>
            </div>
            <div className="projects__item">
                <img src={bus} alt="" />
                <h3 className="projects__plan">Consulting Company Website</h3>
                <p className="project__title">
                I developed a modern, user-friendly website for a consulting company. The goal was to create a professional online presence that reflects their expertise, builds trust with potential clients, and effectively communicates their services.
                </p>
                <p className="projects__support"></p>
                <h3 className="price"></h3>
                <a href="https://www.axankosi.africa/" className="btn">Demo</a>
            </div>
            <div className="projects__item">
                <img src={list} alt="" />
                <h3 className="projects__plan">To do List</h3>
                <p className="project__title">
                A simple todo list made with REACT. Demonstrates my ability to implement CRUD functionalities using NodeJs, Express and MongoDB.
                </p>
                <p className="projects__support"></p>
                <h3 className="price"></h3>
                <a href="https://lipheria.github.io/todoList/" className="btn">Demo</a>
            </div>
        </div>
    </section>
  )
}

export default Projects