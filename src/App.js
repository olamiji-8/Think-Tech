import React from 'react'
import About from './Component/About/About'
import Courses from './Component/Courses/Courses'
import Home from './Component/Home/Home'
import Partners from './Component/Partners/Partners'
import Sales from './Component/Sales/Sales'
import Schedule from './Component/Schedule/Schedule'
import Speakers from './Component/Speakers/Speakers'

const App = () => {
  return (
    <div>
      <Home/>
      <Schedule/>
      <About/>
      <Speakers/>
      <Courses/>
      <Partners/>
      <Sales/>
    </div>
  )
}

export default App