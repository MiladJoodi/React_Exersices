import React from "react";
import { Form, Link } from "react-router-dom";
import { IoBasketOutline, IoHomeSharp } from "react-icons/io5";
import Navbar from "./Navbar";

export default function Products() {
  return (
    <>
      <Navbar />
      <div className="products"></div>
    </>
  );
}
