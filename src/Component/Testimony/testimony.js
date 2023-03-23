import React from 'react'
import {Questions, Testi} from "../../Data"
import Testimg from '../../Assets/Testimony.svg'
import "./Testimony.css"

const Testimony = () => {
  return (
    <div className='Testimony'>
      <p className='Testimony_text'>TESTIMONIALS</p>
      <div className='Testimony_flex'>
      {Testi.map(Info =>{
        return(
          <div className='Testimony_border'>
            <p className='Testimonytext'>{Info.testimony}</p>
            <p className='Testimonyname'>{Info.name}</p>
            <p className='Testimonypost'>{Info.post}</p>
          </div>
        )
      })}
      </div>
      <div>
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
      </div>
      <div>
        <p className='Testimony_register'>Register Here</p>
        <div className='Register_flex'>
          <div>
            <img src={Testimg} alt=""/>
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