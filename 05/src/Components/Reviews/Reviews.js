import React, { useEffect, useState } from "react";
import "./Reviews.css";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
// import Typewriter from 'typewriter-effect/dist/core';
import Typewriter from 'typewriter-effect';
import data from '../../data'

export default function Reviews() {

  const [index, setIndex] = useState(0)
  const {name, job, image, text } = data[index];

  console.log(index);

  const checkNumber = (number)=>{
    if(number > data.length-1){
      return 0
    }
    if(number < 0) { 
      return data.length-1
    }
    return number
  }

  const nextSlide = ()=>{
    setIndex(index=> {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }

  const prevSlide = ()=>{
    setIndex(index=> {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }

  const randomPerson = ()=> {
    let randomNumber = Math.floor(Math.random() * data.length)
    if(randomNumber === index){
      randomNumber = index+1
    }
    console.log(randomNumber);
    setIndex(checkNumber(randomNumber))
  }

  return (
    <div className="reviews">
      <div className="review-img">
        <img src={image} />
      </div>
      <h4 className="author">{name}</h4>
      <h4 className="job">{job}</h4>
      {/* <Typewriter
            className="job"
            onInit={(typeWriter)=>{
            typeWriter
              .typeString(job)
              .start()
              .pauseFor(2000)
              .deleteAll()
              .start()
            }}
            options={{
              loop: true,
            }}
            /> */}

      {/* <p className="job">گرافیست</p> */}
      <p className="info">{text}</p>
      <div className="review-button">
        <button onClick={nextSlide}><FaChevronRight /></button>
        <button onClick={prevSlide}><FaChevronLeft /></button>
      </div>
      <button onClick={randomPerson} className="random-btn">تصادفی</button>
    </div>
  );
}
