import React from 'react'
import { Course, Subcourses } from '../../Data'
import "./Courses.css"

const Courses = () => {
  return (
    <div className='Courses'>
        <p className='Courses_title'>What you’ll be <span style={{backgroundColor:" #157EBF",width:"%", color:"white"}}> learning</span></p>
        <div>
            <p className='Courses_subtitle'>Major Courses</p>
        </div>
        <div className='Courses_flex'>
          {
            Course.map(data =>{
              return(
                <div className='Courses_border'>
                  <p className='Courses_stack'>{data.title}</p>
                  <p className='Courses_description'>{data.description}</p>
                </div>
              )
            })
          }
            
        </div>
        <p className='Courses_addition'>Additional Courses</p>
        <div className='Courses_subflex'>
           {
            Subcourses.map(data=>{
              return(
                <div className='Courses_subborder'>
                  <img src={data.img} alt="" />
                  <p>{data.title}</p>
                  <p>{data.description}</p>
                </div>
              )
            })
           } 
        </div>
    </div>
  )
}

export default Courses