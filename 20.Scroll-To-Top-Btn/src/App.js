import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import './App.css'
// import { useEffect } from "react/cjs/react.development";


function App() {

  const [showBtn, setShowBtn] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', function(){
      if(this.window.pageYOffset > 400){
        setShowBtn(true)
      }else{
        setShowBtn(false)
      }
    })
  }, [])
  
  return (
    <>
      <section id="sectionOne">بخش اول</section>
      <section id="sectionTwo">بخش دوم</section>
      <section id="sectionThree">بخش سوم</section>
      <section id="sectionFour">بخش چهارم</section>

      <a href="#" className={showBtn ? "to-top active" : "top-top"}>
       <FaChevronUp />
      </a>
    </>
  );
}

export default App;
