import React from 'react'
import Speaker from "../../Data"
import "./Speakers.css"

const Speakers = () => {
  return (
    <div className='Speakers'>
        <p className='Speakers_text'>Who you’ll be learning from</p>
        <div className='Speakers_flex'>
        {Speaker.map( Data =>{
        return(
          <div className='Speakers_grid' key={Data.id }>
            <div className='Speakers_flex'>
            <img src={Data.img} alt="" width="40%" height="40%" className='product__img'/>
            <p>{Data.name}</p>
            <p>{Data.post}</p>
            </div>
            </div>
        )
      })}
</div>
        
    </div>
  )
}

export default Speakers
