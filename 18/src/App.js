import { useState } from "react";
import "./App.css";
import Filter from "./components/Filter";

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
            <div className="products"></div>
          </div>
          <div className="sidebar"></div>
        </div>
      </main>
      {/* end header */}

      {/* start footer */}
      <footer></footer>
      {/* end footer */}
    </div>
  );
}

export default App;
