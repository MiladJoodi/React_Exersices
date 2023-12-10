import React from 'react'
import { Routes, Route } from "react-router-dom";
import Products from "./Products";
import Details from "./Details";
import Cart from "./Cart";

function Content() {
  return (
    <Routes>
    <Route path="/products" element={<Products />}></Route>
    <Route path="/cart" element={<Cart />}></Route>
    <Route path="/products/:id" element={<Details />}></Route>
  </Routes>
  )
}

export default Content