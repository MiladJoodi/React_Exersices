import { useState } from "react";
import "./App.css";
import PasswordInput from "./components/PasswordInput";
import Progressbar from "./components/Progressbar";

function App() {
  return (
    <div className="app">
      <div className="container pt-5 ">
        <div className="row d-flex justify-content-center  align-items-center col-md-4">
          <PasswordInput />
          <Progressbar />
        </div>
      </div>
    </div>
  );
}

export default App;
