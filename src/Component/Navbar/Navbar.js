import React from 'react'
import "./Navbar.css"
import ThinkTech from "../../Assets/ThinkTech_logo 1 (1).svg"
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <div className='Navbar'>
       <img src={ThinkTech} alt=''  className="Navbar_img"/>
       <div className='Navbar_text'>
       <p>About</p>
       <p>Courses</p>
       <p>Speakers</p>
       <p>Speakers</p>
       <p>Shop</p>
       <button className="Navbar_button">Register</button>
       </div>
    </div>
  )
}

export default Navbar