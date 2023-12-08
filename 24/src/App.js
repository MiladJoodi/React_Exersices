import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";

function App() {
  return (
    <div className="main-website">
      <div className="container">
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
