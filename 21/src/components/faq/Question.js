import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";


function Question({title,answer}) {
  const [showAnswer, setShowAnswer] = useState(false)

  const handleClick = ()=>{
    setShowAnswer(!showAnswer)
    }


  return (
    <div className="question container">
            <div className="question-title">
              <h2>{title}</h2>
              <button onClick={handleClick}>
                <AiOutlinePlus color="#1f93ff" />
              </button>
            </div> 
            <div className="question-answer">
              {
                showAnswer && <p>{answer}</p>
              }
            </div>
          </div>
  )
}

export default Question