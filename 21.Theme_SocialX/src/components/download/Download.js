import React, {useEffect} from 'react';
import './Download.css'
import {FaApple, FaWindows} from "react-icons/fa"
import {GrAndroid} from "react-icons/gr"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Download() {

  useEffect(()=>{
    AOS.init({
      duration: 1000
    });
  },[])

  return (
    <section id='download'>
       <div className='container download' data-aos="fade-up">
        <div className="download-title">
          <h2>دانلود اپلیکیشن ما</h2>
          <p>برنامه های ما برای دانلود در همه فرودشگاه ها موجود است.</p>
        </div>
        <div className='download-apps'>
          <div className='download-app'>
            <FaApple />
            <p>آیفون</p>
          </div>
          <div className='download-app'>
            <FaWindows />
            <p>ویندوز</p>
          </div>
          <div className='download-app'>
            <GrAndroid />
            <p>اندروید</p>
          </div>
        </div>
       </div>
  </section>
  )
}

export default Download;
