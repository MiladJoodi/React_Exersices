import React, { useState } from "react";
import "./Reviews.css";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
// import Typewriter from 'typewriter-effect/dist/core';
import Typewriter from 'typewriter-effect';
import data from '../../data'

export default function Reviews() {

  const [index, setIndex] = useState(0)
  const {name, job, image} = data[index];

  console.log(data);

  return (
    <div className="reviews">
      <div className="review-img">
        <img src={image} />
      </div>
      <h4 className="author">{name}</h4>
      <Typewriter
            className="job"
            onInit={(typeWriter)=>{
            typeWriter
              .typeString({job})
              .start()
              .pauseFor(2000)
              .deleteAll()
              .start()
            }}
            options={{
              loop: true,
            }}
            />

      {/* <p className="job">گرافیست</p> */}
      <p className="info">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز است.</p>
      <div className="review-button">
        <button><FaChevronRight /></button>
        <button><FaChevronLeft /></button>
      </div>
      <button className="random-btn">تصادفی</button>
    </div>
  );
}
