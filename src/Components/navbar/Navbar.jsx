import React from 'react'
import "./Navbar.css"
import menu_Icon from "../../assets/menu.png"
import logo from "../../assets/logo.png"
import search_Icon from "../../assets/search.png"
import upload_Icon from "../../assets/upload.png"
import more_Icon from "../../assets/more.png"
import notifi_Icon from "../../assets/notification.png"
import profile_Icon from "../../assets/user_profile.jpg"
import { Link } from 'react-router-dom'




function Navbar({setToggle}) {

    return (
        <nav className='flex-div'>
            <div className='nav-left flex-div'>

                <img onClick={()=>setToggle(prev => !prev)} className='menu-icon' src={menu_Icon} alt="" />
                <Link to="/"><img className='logo' src={logo} alt="" /></Link>
                
            </div>

            <div className='nav-middle flex-div '>
                <div className="search-box flex-div">
                    <input type="text" placeholder='Search' />
                    <img src={search_Icon} alt="" />
                </div>
            </div>
            <div className="nav-right flex-div" >
                <img src={upload_Icon} alt="" />
                <img src={more_Icon} alt="" />
                <img src={notifi_Icon} alt="" />
                <img className='user-icon' src={profile_Icon} alt="" />
            </div>
        </nav>
    )
}

export default Navbar
