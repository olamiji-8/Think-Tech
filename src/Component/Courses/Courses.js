import React from 'react'
import { Course } from '../../Data'
import "./Courses.css"

const Courses = () => {
  return (
    <div className='Courses'>
        <p className='Courses_title'>What you’ll be <span style={{backgroundColor:" #157EBF",width:"%", color:"white"}}> learning</span></p>
        <div>
            <p className='Courses_subtitle'>Major Courses</p>
        </div>
        <div>
          {
            Course.map(data =>{
              return(
                <div>
                  <p>{data.title}</p>
                  <p>{data.description}</p>
                </div>
              )
            })
          }
            
        </div>
        <p>Additional Courses</p>
        <div>
            
        </div>
    </div>
  )
}

export default Courses