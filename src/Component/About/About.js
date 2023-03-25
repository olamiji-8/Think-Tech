import React from 'react'
import AboutImg from "../../Assets/amico.svg"
import "./About.css"

const About = () => {
  return (
    <div className='About'>
        <p className='About_para'>Register to participate in <p style={{color:"#F3A310", marginTop:"-2%"}}>Think Tech 3.0</p></p>
        <div className='About_flex'>
        <div className='About_img'>
        <img src={AboutImg} alt=""/>
        </div>
        <div className='About_grid'>
            <p className='About_subpara'>and gain access to free courses, games, and lots more. Register to participate in Think Tech 3.0 and gain access to free courses, games, and lots more. Register to participate in Think Tech 3.0 and gain access to free courses, games, and lots more.</p>
        </div>

        </div>
    </div>
  )
}

export default About



