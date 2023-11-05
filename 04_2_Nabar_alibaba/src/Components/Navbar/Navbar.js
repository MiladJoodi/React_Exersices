import React, { useState } from "react";
import { rightLinks, leftLinks } from "./data";
import logo from "../../logo.svg";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";



export default function Navbar() {
  const [rightLink, setRightLinks] = useState(rightLinks);
  const [leftLink, setLeftLinks] = useState(leftLinks);
  const [showLink, setShowLink] = useState(false)

  return (
    <div className="navbar">
      <div className="container">
        {/* right */}
        <div className="navbar-right">
          <div className="navbar-right-logo">
            <button
            className="nav-toggle"
            onClick={()=> setShowLink(!showLink)}>
                {showLink ? <FaTimes /> : <FaBars />}
                
              </button>
            <img src={logo} />
          </div>
          <ul className={`navbar-right-links ${showLink && "active"}`}>
            {rightLink.map((link) => {
              const { id, url, title, icon } = link;
              return (
                <li key={id}>
                  <a href={url}>
                     {title} {icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* left */}
        <ul className="navbar-left">
          {leftLink.map((link) => {
            const { id, url, title, icon } = link;
            return (
              <>
              <li key={id} className="navbar-left-link-icon">
                <a href={url}>
                  {icon} {title}
                </a>
              </li>
              <li key={id} className="navbar-left-icon">
                <a href={url}>
                  {icon}
                </a>
              </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
