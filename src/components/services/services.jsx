import React from 'react'
import "./services.css"
import img1 from "../../assets/service-1.svg"
import img2 from "../../assets/service-2.svg"
import img3 from "../../assets/service-3.svg"
import auto from "../../assets/auto.svg"
import datapic from "../../assets/data.svg"

const data = [
    {
      id: 1,
      image: img2,
      title: "Web Development",
      description:
        "I specialize in creating custom, high-performance websites tailored to meet the unique needs of businesses and individuals. ",
    },
    {
      id: 2,
      image: auto,
      title: "Automation",
      description:
        "With over 10 processes automated, I specialize in designing and implementing automated solutions to streamline business processes, reduce manual effort, and improve operational efficiency.",
    },
    {
      id: 3,
      image: datapic,
      title: "Data Analysis",
      description:
        "I specialize in transforming raw data into actionable insights that drive informed decision-making and business growth.",
    },
  ];

const Services = () => {
  return (
    <section className="services container" id="services">
        <h2 className="section__title">Services</h2>

        <div className="services__container grid">
            {data.map(({id, image, title, description}) =>{
                return(
                    <div className="services__card" key={id}>
                        <img src={image} alt=""  className='services__img' />
                        <h3 className="services__title">{title}</h3>
                        <p className="services__description">{description}</p>
                    </div>
                )
            })}
        </div>

    </section>
  )
}

export default Services