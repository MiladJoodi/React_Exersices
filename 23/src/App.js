import { useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import "./App.css";
import Products from "./component/Products";
import Cart from "./component/Cart";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
