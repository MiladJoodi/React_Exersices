import React, { useState } from "react";
import "./Sidebar.css";
import { FaTimes } from "react-icons/fa";
import Background from "./Background";
import {links} from "../../data";

export default function Sidebar() {
  const [sidebarLinks, setSidebarLinks] = useState(links);

//   console.log(sidebarLinks);

  return (
    <div className="sidebar">
      <div className="container">
        <Background />

        <div className="sidebar-header">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/022/721/714/small/youtube-logo-for-popular-online-media-content-creation-website-and-application-free-png.png" />
          <button className="close-btn">
            <FaTimes />
          </button>
        </div>

        <ul className="links">
            {sidebarLinks && sidebarLinks.map((link)=>{
                const {url,text, icon} = link
                return (
                    <li>
                        <a href={url}>{icon} {text}</a>
                    </li>
                )
            })}
        </ul>
      </div>
    </div>
  );
}
