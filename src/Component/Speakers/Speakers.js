import React from 'react'
import "./Speakers.css"

const Speakers = () => {
  return (
    <div className='Speakers'>
        <p className='Speakers_text'>SPEAKERS</p>
        {/* {
            Speakers?.map((data)=>(
                <div key={data.id}>
                   { <div> <img src={data.images} alt="#" width="80%" height="40%" className='product__img'/> </div>}  
                   <div>
                    <h6>{data.name}</h6>
                    <h6>{data.post}</h6>
                   </div>
                </div>

            ))} */}
        
    </div>
  )
}

export default Speakers
