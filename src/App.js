import React from 'react'
import About from './Component/About/About'
import Home from './Component/Home/Home'
import Schedule from './Component/Schedule/Schedule'
import Speakers from './Component/Speakers/Speakers'

const App = () => {
  return (
    <div>
      <Home/>
      <Schedule/>
      <About/>
      <Speakers/>

    </div>
  )
}

export default App