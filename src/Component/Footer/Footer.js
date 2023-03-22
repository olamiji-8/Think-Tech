import React from 'react'
import FooterImg from "../../Assets/ThinkTech_logo 1.svg"
import "./Footer.css"

const Footer = () => {
  return (
    <div className='Footer'>
        <img src={FooterImg} alt=""/>
        <p className='Footer_text'>Business * Data * Dev</p>
        <p className='Footer_textp'>© 2023. All rights reserved</p>
    </div>
  )
}

export default Footer