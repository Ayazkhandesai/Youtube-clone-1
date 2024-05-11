import React from 'react'
import './Sidebar.css'
import home from "../../assets/home.png"
import game_Icon from "../../assets/game_icon.png"
import automobile from "../../assets/automobiles.png"
import sports from "../../assets/sports.png"
import entertainment from "../../assets/entertainment.png"
import tech from "../../assets/tech.png"
import music from "../../assets/music.png"
import blogs from "../../assets/blogs.png"
import news from "../../assets/news.png"
import jack from "../../assets/jack.png"
import simon from "../../assets/simon.png"
import tom from "../../assets/tom.png"
import megan from "../../assets/megan.png"
import cameron from "../../assets/cameron.png"
import faiz_Desai from "../../assets/Faiz_Desai.png"



function SideBar({toggle,catagory,setCatagory}) {
  return (
    <div className={`sidebar ${toggle ? "" : "small-sidebar"  } `}>
        <div className="shortcut-links">
            <div className={`sidelinks ${catagory==0 && "active"}`} onClick={()=>setCatagory(0)} >
                <img src={home} alt="" />
                <p>Home</p>
            </div>
            <div className={`sidelinks ${catagory==20 && "active"}`} onClick={()=>setCatagory(20)}>
                <img src={game_Icon} alt="" />
                <p>Gaming</p>
            </div>
            <div className={`sidelinks ${catagory==2 && "active"}`} onClick={()=>setCatagory(2)}>
                <img src={automobile} alt="" />
                <p>AutoMobiles</p>
            </div>
            <div className={`sidelinks ${catagory==17 && "active"}`} onClick={()=>setCatagory(17)}>
                <img src={sports} alt="" />
                <p>Sports</p>
            </div>
            <div className={`sidelinks ${catagory==24 && "active"}`} onClick={()=>setCatagory(24)}>
                <img src={entertainment} alt="" />
                <p>Entertainment</p>
            </div>
            <div className={`sidelinks ${catagory==28 && "active"}`} onClick={()=>setCatagory(28)}>
                <img src={tech} alt="" />
                <p>Technology</p>
            </div>
            <div className={`sidelinks ${catagory==10 && "active"}`} onClick={()=>setCatagory(10)}>
                <img src={music} alt="" />
                <p>Music</p>
            </div>
            <div className={`sidelinks ${catagory==22 && "active"}`} onClick={()=>setCatagory(22)}>
                <img src={blogs} alt="" />
                <p>Blogs</p>
            </div>
            <div className={`sidelinks ${catagory==25 && "active"}`} onClick={()=>setCatagory(25)}>
                <img src={news} alt="" />
                <p>News</p>
            </div>
        </div>
        <hr />
        <div className="subscribed-list">
            <h3>Subscribed</h3>
            <div className="sidelink flex-div">
                <img src={jack} alt="" />
                <p>PewDiepie</p>
            </div>
            <div className="sidelink flex-div">
                <img src={simon} alt="" />
                <p>Mr Beast</p>
            </div>
            <div className="sidelink flex-div">
                <img src={tom} alt="" />
                <p>Justin Bieber</p>
            </div>
            <div className="sidelink flex-div">
                <img src={megan} alt="" />
                <p>5 Minutes Craft</p>
            </div>
            <div className="sidelink flex-div">
                <img src={faiz_Desai} alt="" />
                <p>Faiz Desai</p>
            </div>
        </div>
    </div>
  )
}

export default SideBar