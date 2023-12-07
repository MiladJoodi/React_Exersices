import React, { useState,useEffect } from 'react';
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import { SiAnaconda } from "react-icons/si";
import './Navbar.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const [showIcon , setShowIcon] = useState(false);

  const toggleMenu = () => {
    setShowIcon(!showIcon);
  }

  useEffect(()=>{
    AOS.init({
      duration: 1000
    });
  },[])

  return (
    <nav className="navbar container">
      <div className="menu">
        <ul className="nav-links" id={showIcon ? "show-links-mobile" : "show-links-mobile-hide" }>
          <li><a href="" className="btn btn-dark">آموزش بیشتر</a></li>
          <li><a href="#header">خانه</a></li>
          <li><a href="#features">امکانات</a></li>
          <li><a href="#download">دانلود</a></li>
          <li><a href="#subscribe">مشترک شوید</a></li>
        </ul>
      </div>
      <div className="logo">
        <SiAnaconda color="#fff" size={30} />
        <p className='logo-text'>
          Social
          <span>X</span>
        </p>
      </div>

      <div className="menu-icons" onClick={toggleMenu}>
        {
          showIcon ? 
          <RiCloseLine size={35} color={"#fff"} cursor={"pointer"}/>
          :
          <AiOutlineBars size={35} color={"#fff"} cursor={"pointer"} />
           
        }
      </div>
    </nav>
  );
};

export default Navbar;
