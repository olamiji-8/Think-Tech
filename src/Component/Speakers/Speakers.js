import React from 'react'
import Speaker from "../../Data"
import "./Speakers.css"

const Speakers = () => {
  return (
    <div className='Speakers'>
        <p className='Speakers_text'>SPEAKERS</p>
{Speaker.map( Data =>{
        return(
          <div key={Data.id}>
            <div>
            <img src={Data.img} alt="" width="80%" height="40%" className='product__img'/>
            </div>
            <h2>{Data.name}</h2>
            <h5>{Data.post}</h5>
            </div>
        )
      })}

        
    </div>
  )
}

export default Speakers
