import React from "react";
import "./Home.css";
import { FaBars } from "react-icons/fa";
import {useGlobalContext } from "../context/context";

export default function Home() {

  // const data = useGlobalContext()
  const {openSidebar} = useGlobalContext()

  
  return (
    <div>
      <FaBars className="toggle-btn" onClick={openSidebar} />
    </div>
  );
}
