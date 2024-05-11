import React from 'react'
import "./Video.css"
import PlayVideo from '../../Components/playvideo/PlayVideo'
import Recommended from '../../Components/recommended/Recommended'

import thumbnail1 from "../../assets/thumbnail1.png"
import thumbnail2 from "../../assets/thumbnail2.png"
import thumbnail3 from "../../assets/thumbnail3.png"
import thumbnail4 from "../../assets/thumbnail4.png"
import thumbnail5 from "../../assets/thumbnail5.png"
import thumbnail6 from "../../assets/thumbnail6.png"
import thumbnail7 from "../../assets/thumbnail7.png"
import thumbnail8 from "../../assets/thumbnail8.png"
import { useParams } from 'react-router-dom'


function Video() {
  const {catagoryId,videoId}=useParams()


  return (
    <div className='play-containers'>
      <PlayVideo videoId={videoId}/>
      <Recommended  catagoryId={catagoryId}/>
    </div>
  )
}

export default Video
