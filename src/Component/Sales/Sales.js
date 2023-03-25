import React from 'react'
import Cloth from "../../Assets/Tee 1.svg"
import Certificate from "../../Assets/certificate.svg"
import price from "../../Assets/3200.svg"
import price2 from "../../Assets/1000.svg"
import "./Sales.css"

const Sales = () => {
  return (
    <div className='Sales'>
        <div className='Sales_flex'>
            <p className='Sales_textp'>Get the <span style={{color:"#157EBF"}}> Thinktech 3.0 </span> merch @ <span style={{color:"#F3A310"}}> N3200 </span>. Order yours now and join the Thinktech revolution in style! Click the link below to order.</p>
            <img src={Cloth} alt='' style={{ width:"53%"}} />
        </div>
        <button className='Sales_button'>Buy Merchandise</button>
        <img src={price} alt=""  className='Sales_price'/>

        <div className='Sales_flex2'>
          <img src={Certificate} alt=' ' className='Sales_certificate'/>
          <p className='Sales_textp2'>Get a certificate for the event for <span style={{color:"#F3A310"}}>N1,000 </span>  only!</p>
        </div>
        <button className='Sales_button2'>Buy Merchandise</button> 
        <img src={price2} alt=""  className='Sales_price2'/>
    </div>
  )
}

export default Sales