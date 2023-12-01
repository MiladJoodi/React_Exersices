import { useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {



  return (
    <div className="container">
      <header>
        <a href="">فروشگاه من</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter />
            <Products />
          </div>
          <div className="sidebar">
            <Cart />
          </div>
        </div>
      </main>
      <footer>
        طراحی و توسعه توسط من
      </footer>
    </div>
  );
}

export default App;
