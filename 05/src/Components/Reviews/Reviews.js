import React from "react";
import "./Reviews.css";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

export default function Reviews() {
  return (
    <div className="reviews">
      <div className="review-img">
        <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </div>
      <h4 className="author">جودی</h4>
      <p className="job">گرافیست</p>
      <p className="info">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز است.</p>
      <div className="review-button">
        <button><FaChevronRight /></button>
        <button><FaChevronLeft /></button>
      </div>
      <button className="random-btn">تصادفی</button>
    </div>
  );
}
