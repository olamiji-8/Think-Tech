import React from 'react'
import FooterImg from "../../Assets/Footer.svg"
import "./Footer.css"

const Footer = () => {
  return (
    <div className='Footer'>
        <img src={FooterImg} alt=""/>
        <p>© 2023. All rights reserved</p>
    </div>
  )
}

export default Footer