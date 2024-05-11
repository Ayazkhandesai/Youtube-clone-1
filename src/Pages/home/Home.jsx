import React, { useState } from 'react'
import "./Home.css"
import SideBar from '../../Components/sidebar/SideBar'
import Feed from '../../Components/feed/Feed'

function Home({toggle}) {

  const [catagory,setCatagory]=useState(0)
  return (
    <div>
      <SideBar toggle={toggle} catagory={catagory} setCatagory={setCatagory} />
      <div className={`container ${toggle ? "":"large-container"}`}>
        <Feed catagory={catagory} />
      </div>
    </div>
  )
}

export default Home
