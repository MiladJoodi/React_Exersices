import React from "react";
import { useState } from "react";
import Filter from "./Filter";
import Products from "./Products";
import Cart from "./Cart";
import data from '../data.json'

export default function Home() {

    const [item, setItem] = useState(data.products)
    const [sort, setSort] = useState("asc")

    const sortProducts = (event)=>{
        setSort(event.target.value)
        if(sort === 'asc'){
            setItem(data.products.sort((a,b)=> (a.id < b.id ? 1 : -1)))
        }if(sort === 'desc'){
            setItem(data.products.sort((a,b)=> (a.id > b.id ? 1 : -1)))
        }
    }


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
            <Filter count={item.length} sortProducts={sortProducts} />
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
