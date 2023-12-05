import React from 'react';
import './Download.css'
import {FaApple, FaWindows} from "react-icons/fa"
import {GrAndroid} from "react-icons/gr"

function Download() {
  return (
    <section id='download'>
       <div className='container download'>
        <div className="download-title">
          <h2>دانلود ااپلکیشن ما</h2>
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
