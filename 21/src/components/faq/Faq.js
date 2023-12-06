import React, { useState } from "react";
import './Faq.css'
import { MdOutlineLibraryBooks } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { questions } from "./data.js";

function Faq() {

  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <section id="faq">
      <div className="container faq">
        <div className="faq-title">
          <MdOutlineLibraryBooks color="orangered" size={30} />
          <h2>سوالات متداول</h2>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای{" "}
          </p>
        </div>
        <div className="questions">
          {
              questions && questions.map((question)=> 
              <div className="question container" key={question.id}>
            <div className="question-title">
              <h2>{question.title}</h2>
              <button>
                <AiOutlinePlus color="#1f93ff" />
              </button>
            </div>
            <div className="question-answer">
              {
                showAnswer && <p>{question.answer}</p>
              }
            </div>
          </div>)
          }
        </div>
      </div>
    </section>
  );
}

export default Faq;
