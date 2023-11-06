import { useState } from "react";
import "./App.css";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import Reviews from "./Components/Reviews/Reviews";

function App() {



  return (
    <main>
      <div className="container">
        <h2 className="title">نظرات همکاران</h2>
      <Reviews />
      </div>
    </main>
  );
}

export default App;
