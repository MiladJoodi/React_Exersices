import { useState } from "react";
import "./App.css";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import Home from "./Components/Home/Home";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {

  

  return (
    <div className="app">
      <Home />
      <Sidebar />
    </div>
  );
}

export default App;
