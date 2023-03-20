import React from 'react'
import "./Testimony.css"

const Testimony = () => {
  return (
    <div className='Testimony'>

      <div>
        <p>Frequently Asked Questions</p>
        <div>

        </div>
      </div>
      <div>
        <p>Register Here</p>
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