import React, { useState } from 'react'
import './Reviews.css'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { LiaRandomSolid } from "react-icons/lia";
import { GoVerified } from "react-icons/go";


import data from '../../data'


export default function Reviews() {

  const [index, setIndex] = useState(0)
  const {name, job, image, text, date} = data[index]
  console.log(name);

  const nextUser = ()=> {
    setIndex(index=> {
      let newIndex = index + 1
      console.log(newIndex);
      return checkNumber(newIndex)
    })
  }
  const prevUser = ()=> {
    setIndex(index=> {
      let newIndex = index - 1
      console.log(newIndex);
      return checkNumber(newIndex)
    })
  }

  const checkNumber = (number)=>{
    if(number > data.length-1){
      return 0
    }if(number < 0){
      return data.length-1
    }
    return number
  }

  const randomNum = ()=>{
    let randomIndex = Math.floor(Math.random() * data.length)
    if(randomIndex === index){
      randomIndex = index + 1
    }
    setIndex(checkNumber(randomIndex))
  }
  

  return (
    <div className='review'>
        <div className='container'>
          <span className='date'>{date}</span>
          <span className='verify'><GoVerified /></span>
            <img src={image} />
            <h4 className='name'>{name}</h4>
            <h4 className='job'>{job}</h4>
            <p className='info'>{text}</p>
            <div className='review-buttons'>
                <div className='review-button'>
                  <button onClick={nextUser}><FaChevronRight /></button>
                  <button onClick={prevUser}><FaChevronLeft /></button>
                </div>
                  <button onClick={randomNum} className='random-button'><LiaRandomSolid /></button>
            </div>
        </div>
    </div>
  )
}
