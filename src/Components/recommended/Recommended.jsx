import React, { useEffect, useState } from 'react'
import "./Recommended.css"
import thumbnail1 from "../../assets/thumbnail1.png"
import thumbnail2 from "../../assets/thumbnail2.png"
import thumbnail3 from "../../assets/thumbnail3.png"
import thumbnail4 from "../../assets/thumbnail4.png"
import thumbnail5 from "../../assets/thumbnail5.png"
import thumbnail6 from "../../assets/thumbnail6.png"
import thumbnail7 from "../../assets/thumbnail7.png"
import thumbnail8 from "../../assets/thumbnail8.png"
import { API_KEY } from '../../Data'
import { ConvertC } from '../../Data'
import { Link } from 'react-router-dom'
import moment from 'moment'

function Recommended({ catagoryId }) {

  const [items, setItems] = useState([])
  const fetchData = async () => {
    console.log("data")
    let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${catagoryId}&key=${API_KEY}`
    let data = await fetch(url).then(res => res.json()).then(data => setItems(data?.items))
  }
  useEffect(() => {
    fetchData()
  }, [catagoryId])

  console.log(items)

  return (
    <div className='recommended'>
      {
        items.map((val, index) => (
          <Link to={`/video/${val?.snippet?.categoryId}/${val.id}`} key={val.id} className="side-video-list">
            <img src={val?.snippet?.thumbnails?.high?.url} alt="" />
            <div className='vid-info'>
              <h4>{val?.snippet?.title}</h4>
              <div>
                <p>{val?.snippet?.channelTitle}</p>
                <p>{ConvertC(val?.statistics?.viewCount)} &bull; {moment( val?.snippet?.publishedAt).fromNow()}</p>
              </div>
            </div>
          </Link>

        ))
      }

    </div>
  )
}

export default Recommended
