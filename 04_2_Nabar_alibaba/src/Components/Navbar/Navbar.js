import React, { useState } from "react";
import { rightLinks, leftLinks } from "./data";
import logo from "../../logo.svg";
import "./Navbar.css";

export default function Navbar() {
  const [rightLink, setRightLinks] = useState(rightLinks);
  const [leftLink, setLeftLinks] = useState(leftLinks);

  return (
    <div className="navbar">
      <div className="container">
        {/* right */}
        <div className="navbar-right">
          <div className="navbar-right-logo">
            <img src={logo} />
          </div>
          <ul className="navbar-right-links">
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
              <li key={id}>
                <a href={url}>
                  {icon} {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
