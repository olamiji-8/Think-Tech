import React from 'react'
import "./Schedule.css"

const Schedule = () => {
  return (
    <div className='Schedule'>
       <p className='Schedule_text'>SCHEDULE</p>
       <div className='Schedule_text_session'>
        <p>MORNING SESSION</p>
        <p>AFTERNOON SESSION</p>
       </div>
       <div>
        <p>DAY ONE</p>
        <p>DAY TWO</p>
       </div>
       <div>
        <p>WhatsApp Business</p>
        <p>Meta Business</p>
       </div>
       <div>
        <div>
          <p>Breakout Session 1</p>
          <p>Mobile Development & Data Analysis</p>
        </div>
        <div>
          <p>Breakout Session 2</p>
          <p>Mobile Development & Data Analysis</p>
        </div>
       </div>
       <div>
        <p>Mobile Development & Data Analysis</p>
       </div>
    </div>
  )
}

export default Schedule