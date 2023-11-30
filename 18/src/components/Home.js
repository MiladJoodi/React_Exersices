import React from "react";
import { useState } from "react";
import Filter from "./Filter";
import Products from "./Products";
import Cart from "./Cart";
import data from '../data.json'

export default function Home() {

    const [item, setItem] = useState(data.products)
    console.log(item)


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
            <Products item={item} />
          </div>
          <div className="sidebar">
            <Cart />
          </div>
        </div>
      </main>
      {/* end header */}

      {/* start footer */}
      <footer>طراحی شده توسط من</footer>
      {/* end footer */}
    </div>
  );
}
