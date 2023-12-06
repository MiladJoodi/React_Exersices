import React from "react";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { questions } from "./data.js";

function Faq() {
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
              <div className="question" key={question.id}>
            <div className="question-title">
              <h4>{question.title}</h4>
              <button>
                <AiOutlinePlus />
              </button>
            </div>
            <div className="question-answer">
              <p>{question.answer}</p>
            </div>
          </div>)
          }
        </div>
      </div>
    </section>
  );
}

export default Faq;
