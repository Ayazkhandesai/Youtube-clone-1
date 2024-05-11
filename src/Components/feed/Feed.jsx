import React, { useEffect, useState } from 'react'
import "./Feed.css"
import thumbnail1 from "../../assets/thumbnail1.png"
import thumbnail2 from "../../assets/thumbnail2.png"
import thumbnail3 from "../../assets/thumbnail3.png"
import thumbnail4 from "../../assets/thumbnail4.png"
import thumbnail5 from "../../assets/thumbnail5.png"
import thumbnail6 from "../../assets/thumbnail6.png"
import thumbnail7 from "../../assets/thumbnail7.png"
import thumbnail8 from "../../assets/thumbnail8.png"
import { Link } from 'react-router-dom'
import { API_KEY, ConvertC } from '../../Data'
import moment from 'moment'


function Feed({ catagory }) {

    const [items, setItems] = useState([])
    const fetchData = async () => {
        console.log("data")
        // let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${catagory}&key=${API_KEY}`
        let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${catagory}&key=${API_KEY}`
        let data = await fetch(url).then(res => res.json()).then(data => setItems(data?.items))
    }
    useEffect(() => {
        fetchData()
    }, [catagory])
    // console.log(items)
    return (
        <div className="feed">
            {items?.map((val, index) => (
            <Link to={`/video/${val?.snippet?.categoryId}/${val.id}`} className="card" key={val?.id}>
                {/* {console.log(val)} */}
                <img src={`${val?.snippet?.thumbnails?.high?.url}`} alt="" />
                <h2>{val?.snippet?.title}</h2>
                <h3>{val?.snippet?.channelTitle}</h3>
                <p>{ConvertC(val?.statistics?.viewCount)} &bull; {moment(val?.snippet?.publishedAt).fromNow()}</p>
            </Link>
            ))}

        </div>
    )
}

export default Feed
