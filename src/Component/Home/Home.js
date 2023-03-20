import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hometext from "../../Assets/Home_text.svg"
import "./Home.css"

const Home = () => {
  return (
    <div className='Home'>
        <Navbar/>
        <img src={Hometext} alt="" style={{marginLeft:"10%", marginTop:"10%"}}/>
        <p className='Home_text'>Register to participate in Think Tech 3.0 and gain access to free courses, games, and lots more.</p>
        <button className='Home_button'>Register</button>
    </div>
  )
}

export default Home