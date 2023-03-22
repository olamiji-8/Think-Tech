import React from 'react'
import FooterImg from "../../Assets/ThinkTech_logo 1.svg"
import "./Footer.css"

const Footer = () => {
  return (
    <div className='Footer'>
        <img src={FooterImg} alt=""/>
        <p>Business * Data * Dev</p>
        <p>© 2023. All rights reserved</p>
    </div>
  )
}

export default Footer