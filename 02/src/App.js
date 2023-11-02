import { useState } from "react";
import "./App.css";
import Question from "./Question";
import data from './data'

function App() {

  const [questions, setQuestions] = useState(data)



  return (
    <div className="container">
      <h3>سوالی برایتان پیش آمده</h3>
      <div className="info">
        {questions.map((questions)=> {
          return <Question />
        })}
        
      </div>
    </div>
  );
}

export default App;
