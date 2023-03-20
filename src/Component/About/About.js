import React from 'react'
import AboutImg from "../../Assets/amico.svg"
import "./About.css"

const About = () => {
  return (
    <div className='About'>
        <p className='About_text'>ABOUT US</p>
        <div className='About_flex'>
        <div className='About_grid'>
            <p className='About_para'>Lorem ipsum dolor sit amet consectetur. Bibendum ultrices amet commodo donec quis.</p>
            <p className='About_subpara'>Think Tech is a tech event organised by the ICT Team of RCFFUTA targeted at individuals around FUTA with an interest.</p>
            <button className='About_button'>Get Started Here</button>
        </div>
        <div className='About_img'>
        <img src={AboutImg} alt=""/>
        </div>
        </div>
    </div>
  )
}

export default About