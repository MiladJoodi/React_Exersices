import { useState } from "react";
import "./App.css";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import Navbar from './Components/Navbar/Navbar'
import header from './header.png'


function App() {

  

  return (
    <div className="app">
      <Navbar />
      <img src={header} className="header" />
    </div>
  );
}

export default App;
