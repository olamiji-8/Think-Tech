import React from 'react'
import Cloth from "../../Assets/Tee 1.svg"
import "./Sales.css"

const Sales = () => {
  return (
    <div className='Sales'>
        <p className='Sales_text'>MERCH SALES</p>
        <div className='Sales_flex'>
            <p className='Sales_textp'>Get the Thinktech 3.0 merch @ N3200. Order yours now and join the Thinktech revolution in style! Click the link below to order.</p>
            <img src={Cloth} alt='' style={{marginLeft:"4%"}}/>
        </div>
        <button className='Sales_button'>Buy Merchandise</button>
    </div>
  )
}

export default Sales