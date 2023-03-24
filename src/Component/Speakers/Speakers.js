import React from 'react'
import Speaker from "../../Data"
import "./Speakers.css"

const Speakers = () => {
  return (
    <div className='Speakers'>
        <p className='Speakers_text'>SPEAKERS</p>
        <div className='Speakers_flex'>
        {Speaker.map( Data =>{
        return(
          <div className='Speakers_grid' key={Data.id }>
            <div className='Speakers_flex'>
            <img src={Data.img} alt="" width="10%" height="40%" className='product__img'/>
            <div className='Speakers_textp'>
            <h2>{Data.name}</h2>
            <h5>{Data.post}</h5>
            </div>
            </div>
            
        </div>
        )
      })}
</div>
        
    </div>
  )
}

export default Speakers
