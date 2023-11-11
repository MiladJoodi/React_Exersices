import React from 'react'
import './Sidebar.css'
import {FaTimes} from 'react-icons/fa'
import Background from './Background'

export default function Sidebar() {

    
  return (
    <div className='sidebar'>
        <div className="container">
        <Background />

            <div className="sidebar-header">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/022/721/714/small/youtube-logo-for-popular-online-media-content-creation-website-and-application-free-png.png" />
                <button className='close-btn'>
                    <FaTimes />
                </button>
            </div>

            <ul className='links'>

            </ul>

        </div>
    </div>
  )
}
