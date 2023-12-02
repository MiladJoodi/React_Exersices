import { useState } from "react";
import Filter from "./Filter";
import Products from "./Products";
import Cart from "./Cart";
import data from '../data.json'

export default function Home() {


  const [item, setItem] = useState(data.products)
  const [sort, setSort] = useState('asc')
  const [brand, setBrand] = useState("")

  const sortProducts = (event) => {
    setSort(event.target.value)

    if (sort === 'asc') {
      setItem(data.products.sort((a, b) => (a.id < b.id ? 1 : -1)))
    }
    if (sort === 'desc') {
      setItem(data.products.sort((a, b) => (a.id > b.id ? 1 : -1)))
    }
  }

  const filterProducts = (event) => {
    if (event.target.value == "") {
      setBrand(event.target.value)
      setItem(data.products)
    } else {
      setBrand(event.target.value)
      setItem(data.products.filter((product) => product.availableBrand.indexOf(event.target.value) >= 0))
    }
  }

  return (
    <div className="container">
      <header>
        <a href="">فروشگاه من</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter
              count={item.length}
              sortProducts={sortProducts}
              brand={brand}
              filterProducts={filterProducts}
            />
            <Products
              item={item}
            />
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
  )
}
