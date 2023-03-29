import React from 'react'
import "./index.css"
import About from './Component/About/About'
import Courses from './Component/Courses/Courses'
import Footer from './Component/Footer/Footer'
import Home from './Component/Home/Home'
import Partners from './Component/Partners/Partners'
import Sales from './Component/Sales/Sales'
import Schedule from './Component/Schedule/Schedule'
import Speakers from './Component/Speakers/Speakers'
import Register from './Component/Testimony/Register'
import Question from './Component/Testimony/Question'
import Testimony from './Component/Testimony/Testimony'

const App = () => {
  return (
    <div>
      <Home/>
      <Schedule/>
      <About/>
      <Courses/>
      <Testimony/>
      <Register/>
      <Sales/>
      <Question/>
      <Footer/>
    </div>
  )
}

export default App