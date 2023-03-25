import React from 'react'
import {Questions} from "../../Data"
import Register from './Register'
import "./Testimony.css"
const Question = () => {
  return (
    <div className='Question'>
        <p className='Testimony_question'>Frequently Asked Questions</p>
        <div className='Questions_flex'>
        {Questions.map(Info =>{
        return(
          <div className='Questions_border'>
            <p className='Questions_text'>{Info.question}</p>
          </div>
        )
      })}
        </div>
        <Register/>
    </div>
  )
}

export default Question