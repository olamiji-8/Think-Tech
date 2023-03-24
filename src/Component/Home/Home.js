import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hometext from "../../Assets/Home_text.svg"
import "./Home.css"

const Home = () => {
  return (
    <div className='Home'>
        <Navbar/>
        <img src={Hometext} alt="" style={{marginLeft:"10%", marginTop:"10%"}}/>
        <p className='Home_text'>There's room for you in the tech ecosystem. Join us to kickstart your tech journey with the right information and in-demand skills.</p>
        <button className='Home_button'>Register</button>
    </div>
  )
}

export default Home