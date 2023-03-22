import React from 'react'
import Cloth from "../../Assets/Tee 1.svg"
import "./Sales.css"

const Sales = () => {
  return (
    <div className='Sales'>
        <p className='Sales_text'>MERCH SALES</p>
        <div className='Sales_flex'>
            <p className='Sales_textp'>Don't miss out on the opportunity to get your hands on exclusive Think Tech merchandise! Show your love for technology and join the hype by purchasing our limited edition t-shirts, mugs, and more. Stock is running low, so act fast and secure your gear before it's too late!</p>
            <img src={Cloth} alt='' style={{marginLeft:"4%"}}/>
        </div>
        <button>Buy Merchandise</button>
    </div>
  )
}

export default Sales