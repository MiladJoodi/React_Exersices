import { useState } from "react";
import "./App.css";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import emailjs from 'emailjs-com'
import Contact from "./Components/Contact/Contact";

function App() {

  // emailjs.sendForm()

  return (
    <div className="app">
      <Contact />
    </div>
  );
}

export default App;
