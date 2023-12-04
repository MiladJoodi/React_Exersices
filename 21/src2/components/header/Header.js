import React from 'react'
import './Header.css'
import phoneHeader from '../../assets/phone-header-bg.png'
import { BsMouse } from "react-icons/bs";


const Header = () => {
  return (
    <section id='header'>
      <div className="container header">
        <div className="header-right">
          <h1>
            <span>پیشرو در سطح جهانی</span>
            <span>امنیت در همه پلتفرم ها</span>
            <span>سیستم پیام رسانی</span>
          </h1>
          <p>ارائه بهترین سرویس ها با بالاترین کیفیت و تضمین قیمت با خدمات و گارانتی پس از فروش</p>
          <div className="header-btn">
            <a href="" className='btn btn-dark'>بیاین شروع کنیم</a>
            <a href="" className='btn btn-light'>چطوری کار میکنیم</a>
          </div>
        </div>
        <div className="header-left">
          <img src={phoneHeader} />
        </div>
      </div>

      <div className='floating-icon'>
        <a href=""><BsMouse color={"#fff"} size={25} className='mouse' /></a>
      </div>

    </section>
  )
}

export default Header