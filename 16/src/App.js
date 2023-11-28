import { useState } from "react";
import data from './data'
import "./App.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


function App() {

  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);


  return (
    <div className="section">
      <div className="title">
        <span>نظرات مشتریان</span>
      </div>
      <div className="section-center">
        {
          people.map((person, personIndex) => {
            const { id, image, title, qoute } = person;

            let position = "nextSlide";
            
            if(personIndex === index){
              position = "activeSlide"
            }
            if(personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)){
              position = "lastSlide"
            }
 
            return (
              <article className={position} key={id}>
                <img src={image} alt={title} className="person-img" />
                <h4>{title}</h4>
                <p className="title">{title}</p>
                <p className="qoute">{qoute}</p>
              </article>
            )
          })
        }

        <button className="next" onClick={()=> setIndex(index+1)}><FiChevronRight /></button>
        <button className="prev" onClick={()=> setIndex(index-1)}><FiChevronLeft /></button>

      </div>
    </div>
  );
}

export default App;
