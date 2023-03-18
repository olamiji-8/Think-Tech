import React from 'react'
import "./Speakers.css"

const Speakers = () => {
  return (
    <div className='Speakers'>
        {
            Speakers?.map((Speakers)=>(
                <div key={Speakers.id}>
                   { <div> <img src={Speakers.images} alt="#" width="80%" height="40%" className='product__img'/> </div>}  
                   <div>
                    <h6>{Speakers.name}</h6>
                    <h6>{Speakers.post}</h6>
                   </div>
                </div>

            ))}
        
    </div>
  )
}

export default Speakers
