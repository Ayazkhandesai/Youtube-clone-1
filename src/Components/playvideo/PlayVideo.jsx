import React, { useEffect, useState } from 'react'
import "./playVideo.css"

import videoI from "../../assets/video.mp4"
import like from "../../assets/like.png"
import dislike from "../../assets/dislike.png"
import share from "../../assets/share.png"
import save from "../../assets/save.png"
import jack from "../../assets/Faiz_Desai.png"
import user_profile from "../../assets/user_profile.jpg"
import { API_KEY, ConvertC } from '../../Data'
import moment from 'moment'
import { useParams } from 'react-router-dom'





function PlayVideo() {
    const [vidapiData, setVidAPIData] = useState([])
    const [channelDetails,setChannelDetails]=useState([])
    const [commentList,setCommentList]=useState([])
    const {videoId}= useParams()

    const fetchVideoData = async () => {
        const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`).then(res => res.json())
            .then(data => setVidAPIData(data?.items[0]))
    }
    const channelId=vidapiData?.snippet?.channelId
    const fetchChannel=async ()=>{
        const channelDet=await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`).then(res=>res.json()).then(data => setChannelDetails(data?.items[0]))
        const Comment=await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`).then(res => res.json()).then(data => setCommentList(data?.items))
    }


    useEffect(()=>{fetchChannel()},[channelId])
    useEffect(() => {
        fetchVideoData()
    }, [videoId])

    const vi =vidapiData?.statistics?.viewCount || 10000
    // console.log(channelDetails)
    return (
        <div className='play-video'>
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <h3>{vidapiData?.snippet?.title}</h3>
            <div className="play-video-info">
                <p>{ConvertC(vi)} &bull; { moment(vidapiData?.snippet?.publishedAt).fromNow()}</p>
                <div>
                    <span><img src={like} alt="" />{ConvertC(vidapiData?.statistics?.likeCount)}</span>
                    <span><img src={dislike} alt="" />{vidapiData?.statistics?.dislike || 0}</span>
                    <span><img src={share} alt="" />share</span>
                    <span><img src={save} alt="" />save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={channelDetails?.snippet?.thumbnails?.high?.url || jack} alt="" />
                <div>
                    <p>{vidapiData?.snippet?.channelTitle}</p>
                    <span>{ConvertC(channelDetails?.statistics?.subscriberCount || 10000)} Subscriber</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className='vid-discription'>
                <p>Channel that makes learning Easy</p>
                <p>{vidapiData?.snippet?.description.slice(0,250)}</p>
                <hr />
                <h4>{ConvertC(vidapiData?.statistics?.commentCount) || 0} Comments</h4>
                {
                    commentList.map((val,index)=>(
                    <div className='comment' key={index}>
                        <img src={val?.snippet?.topLevelComment?.snippet?.authorProfileImageUrl || user_profile} alt="" />
                        <div>
                            <h3>
                            {val?.snippet?.topLevelComment?.snippet?.authorDisplayName || "Unknown"}
                                <span>{moment( val?.snippet?.topLevelComment?.snippet?.publishedAt).fromNow()}</span>
                            </h3>
                            <p>{val?.snippet?.topLevelComment?.snippet?.textDisplay || ""}</p>
                            <div className='comment-action'>
                                <img src={like} alt="" />
                                <span>{val?.snippet?.topLevelComment?.snippet?.likeCount || 0}</span>
                                <img src={dislike} alt="" />
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>

        </div>
    )
}

export default PlayVideo
