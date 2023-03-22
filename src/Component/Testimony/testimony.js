import React from 'react'
import {Questions, Testi} from "../../Data"
import "./Testimony.css"

const Testimony = () => {
  return (
    <div className='Testimony'>
      <p className='Testimony_text'>TESTIMONIALS</p>
      <div>
      {Testi.map(Info =>{
        return(
          <div>
            <p>{Info.testimony}</p>
            <p>{Info.name}</p>
            <p>{Info.post}</p>
          </div>
        )
      })}
      </div>
      <div>
        <p className='Testimony_question'>Frequently Asked Questions</p>
        <div>
        {Questions.map(Info =>{
        return(
          <div>
            <p>{Info.question}</p>
          </div>
        )
      })}
        </div>
      </div>
      <div>
        <p className='Testimony_register'>Register Here</p>
        <div>
          <div>
            <img src='' alt=""/>
            <img src='' alt=""/>
          </div>
          <div>
            <p>Name</p>
            <input type="text"/>
            <p>Email</p>
            <input type="text"/>
            <p>Phone Number</p>
            <input type="number"/>
            <p>What Stack Are You Interested In?</p>
            <div>
              <p>Mobile Deveopment</p>
              <p>Data Analysis</p>
            </div>
            <div>
              <p>Do You Have Any Knowledge Of The Stack?</p>
              <div>
                <p>Beginner</p>
                <p>Intermediate </p>
              </div>
            </div>
            <div>
              <p>How Did You Hear About Us?</p>
              <input type="text"/>
            </div>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimony