import React, { useEffect, useState } from 'react'
import './ScrollProgress.css'

export default function ScrollProgress() {

  const [scrollTop, setScrollTop] = useState(0)

  const onScroll = ()=>{
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
   const scrolled = (winScroll / height) * 100;
   setScrollTop(scrolled)
   console.log(scrolled);
  }

  useEffect(()=>{
    window.addEventListener('scroll', onScroll) 
  },[])


  return (
    <div className='wrapper'>
        <div className='progressbar'>
            <div className='progressbarMain' style={{width : `${scrollTop}%`}}></div>
        </div>
    </div>
  )
}
