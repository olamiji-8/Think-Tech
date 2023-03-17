import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./Home.css"

const Home = () => {
  return (
    <div className='Home'>
        <Navbar/>
        <p className='Home_text'>Where business, data and dev meet</p>
    </div>
  )
}

export default Home