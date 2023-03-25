import React from 'react'
import "./Navbar.css"
import ThinkTech from "../../Assets/ThinkTech_logo 1 (1).svg"

const Navbar = () => {
  return (
    <div className='Navbar'>
       <img src={ThinkTech} alt='' style={{cursor:"pointer", marginLeft:"-3%"}}/>
       <div className='Navbar_text'>
       <p>About</p>
       <p>Courses</p>
       <p>Speakers</p>
       <p>Speakers</p>
       <p>Shop</p>
       <button style={{backgroundColor:"#CAE6FF", height:"60px", width:"28%"}} className="Navbar_button">Register</button>
       </div>
    </div>
  )
}

export default Navbar