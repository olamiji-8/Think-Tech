import React from 'react'
import AboutImg from "../../Assets/amico.svg"
import "./About.css"

const About = () => {
  return (
    <div>
        <p>About Us</p>
        <div>
            <p>Lorem ipsum dolor sit amet consectetur. Bibendum ultrices amet commodo donec quis.</p>
            <img src={AboutImg} alt=""/>
        </div>
        <div>
            <p>Think Tech is a tech event organised by the ICT Team of RCFFUTA targeted at individuals around FUTA with an interest.</p>
            <button>Get Started Here</button>
        </div>
    </div>
  )
}

export default About