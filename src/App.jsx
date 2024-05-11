
import React, { useState } from 'react'
import Navbar from './Components/navbar/Navbar'
import {Route,Routes } from 'react-router-dom'
import Home from './Pages/home/Home'
import Video from './Pages/video/Video'

function App() {
  const [toggle,setToggle]=useState(true)
  // console.log(toggle)
  return (
    <div>
      <Navbar setToggle={setToggle} />
      <Routes>
        <Route path='/' element={<Home  toggle={toggle}/>} />
        <Route path='/video/:catagoryId/:videoId' element={<Video />} />
      </Routes>
    </div>
  )
}

export default App
