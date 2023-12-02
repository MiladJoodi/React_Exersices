import { useState } from "react";
import Filter from "./Filter";
import Products from "./Products";
import Cart from "./Cart";
import data from '../data.json'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegUser } from "react-icons/fa";


export default function Home() {


  const [item, setItem] = useState(data.products)
  const [sort, setSort] = useState('asc')
  const [brand, setBrand] = useState("")
  const [cartItems, setCartItems] = useState([])

  console.log(cartItems);


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

  const addProducts = (product) => {
    const exist = cartItems.find((element) => element.id === product.id)
    if (exist) {
      setCartItems(
        cartItems.map((element) => element.id === product.id ? { ...exist, qty: exist.qty + 1 } : element)
      )
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])

    }
  }

  const removeProducts = (product)=>{
    const exist = cartItems.find((element) => element.id === product.id)
    if(exist.qty === 1){
      setCartItems(cartItems.filter((element)=> element.id !== product.id))
      toast.success("محصول حذف شد", {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,


      });
    
    }else{
      setCartItems(cartItems.map((element) => element.id === product.id ? { ...exist, qty: exist.qty - 1 } : element))
    }
  }

  return (
    <div className="container">
      <header>
        <a href="">فروشگاه من</a>
        <div className="header-left">
        <ul className="menu">
            <li><a href="#">گوشی</a></li>
            <li><a href="#">لوازم جانبی</a></li>
            <li><a href="#">قطعات</a></li>
            <li><a href="#">پشتیبانی</a></li>
          </ul>
          <FaRegUser className="login-icon" />
        </div>
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
              addProducts={addProducts}
            />
          </div>
          <div className="sidebar">
            <Cart
              cartItems={cartItems}
              removeProducts={removeProducts}
            />
          </div>
        </div>
      </main>
      <footer>
        طراحی و توسعه توسط من
      </footer>
      <ToastContainer autoClose={1000} />
    </div>
  )
}
