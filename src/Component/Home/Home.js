import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hometext from "../../Assets/Home_text.svg"
import Pie from "../../Assets/Pie chart with comment.svg"
import Chart from "../../Assets/chart window.svg"
import Monitor from "../../Assets/monitor with document.svg"
import Work from "../../Assets/Work from home.svg"
import "./Home.css"

const Home = () => {
  return (
    <div className='Home'>
        <Navbar/>
        <div className='Home_flex'>
        <img src={Pie} alt='' className='Home_pie'/>
        <img src={Hometext} alt="" className="Home_picture"/>
        </div>
        <div>
        <img src={Chart} alt='' className='Home_chart'/>
        </div>
         <p className='Home_text'>There's room for you in the tech ecosystem. Join us to kickstart your tech journey with the right information and in-demand skills.</p>
        <button className='Home_button'>Register</button>
        <div className='Home_anime'>
        <img src={Monitor} alt='' className='Home_monitor'/>
        <img src={Work} alt='' className='Home_work'/>
        </div> 
        
       
    </div>
  )
}

export default Home