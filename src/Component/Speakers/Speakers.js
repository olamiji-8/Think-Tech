import React from 'react'
import Speaker from "../../Data"
import "./Speakers.css"

const Speakers = () => {
  return (
    <div className='Speakers'>
        <p className='Speakers_text' >Who you’ll be learning from</p>
        <div className='Speakers_flex'>
        {Speaker.map( Data =>{
        return(
          <div className='Speakers_grid' key={Data.id }>
            <div className='Speaker_grid'>
            <img src={Data.img} alt=""  height="280px" className='product__img'/>
            <p className='Speaker_name'>{Data.name}</p>
            <p className='Speaker_post'>{Data.post}</p>
            </div>
            </div>
        )
      })}
</div>
        
    </div>
  )
}

export default Speakers
