import { useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="container">
      {/* start header */}
      <header>
        <a href="">فروشگاه من</a>
      </header>
      {/* end header */}

      {/* start header */}
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
      {/* end header */}

      {/* start footer */}
      <footer>
        طراحی شده توسط من
      </footer>
      {/* end footer */}
    </div>
  );
}

export default App;
