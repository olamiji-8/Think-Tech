import React from 'react'
import Cloth from "../../Assets/Tee 1.svg"
import "./Sales.css"

const Sales = () => {
  return (
    <div>
        <p>Merch sales</p>
        <div>
            <p>Don't miss out on the opportunity to get your hands on exclusive Think Tech merchandise! Show your love for technology and join the hype by purchasing our limited edition t-shirts, mugs, and more. Stock is running low, so act fast and secure your gear before it's too late!</p>
            <img src={Cloth} alt=''/>
        </div>
        <button>Buy Merchandise</button>
    </div>
  )
}

export default Sales