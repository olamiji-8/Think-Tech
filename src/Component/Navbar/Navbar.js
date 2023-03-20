import React from 'react'
import "./Navbar.css"
import ThinkTech from "../../Assets/ThinkTech_logo 1.svg"

const Navbar = () => {
  return (
    <div className='Navbar'>
       <img src={ThinkTech} alt='' />
       <div className='Navbar_text'>
       <p>About</p>
       <p>Courses</p>
       <p>Speakers</p>
       <p>Speakers</p>
       <p>Shop</p>
       <button>Register</button>
       </div>
    </div>
  )
}

export default Navbar