import React, { useState } from 'react'
import {rightLinks, leftLinks} from './data'
import logo from '../../logo.svg' 

export default function Navbar() {

    const [rightLink, setRightLinks] = useState(rightLinks)
    const [leftLink, setLeftLinks] = useState(leftLinks)


  return (
    <div className='navbar'>
        {/* right */}
        <div className='navbar-right'>
            <div className='navbar-right-logo'>
                <img src={logo} />
            </div>
            <ul className='navbar-right-links'>
                {rightLink.map((link)=>{
                    const {id, url, title} = link
                    return (
                        <li key={id}>
                            <a href={url}>{title}</a>
                        </li>
                    )
                })
                }
            </ul>
        </div>

        {/* left */}
        <ul className='navbar-left'>
            {leftLink.map((link)=>{
                const {id, url, title, icon} = link;
                return (
                    <li key={id}>
                        <a href={url}>{icon} {title}</a>
                    </li>
                )
                
            })}
        </ul>
    </div>
  )
}
