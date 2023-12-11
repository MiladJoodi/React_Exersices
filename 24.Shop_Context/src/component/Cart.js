import React, {useContext, useEffect, useState} from 'react'
import { DataContext } from "./Context";
import formatCurrency from '../util'
import {Link} from 'react-router-dom'


function Cart() {

    const value = useContext(DataContext)
    const [cart, setCart] = value.cart;

    const increase = value.increase;
    const decrease = value.decrease;
    const removeProduct = value.removeProduct;
    const [total, setTotal] = useState(0)



    useEffect(()=>{
        const getTotal = ()=>{
            const res = cart.reduce((prev, item)=>{
                return prev + (item.price * item.count)
            }, 0)
            setTotal(res)
        }
        getTotal()
    },[cart])



    if(cart.length === 0){
        return <h2 style={{textAlign: "center", fontSize: "1.2rem"}}>سبد خرید خالی است</h2>
    }

  return (
    <>
      {
        cart.map(product=> (
          <div className="details cart" key={product._id}>
                <div className='img-container' style={{backgroundImage: `url(${product.images[0]})`}}></div>

              <div className='box-details'>
                <h2>{product.title}</h2>
                <h3>{formatCurrency(product.price)}</h3>
                <div className='colors'>
                  {
                    product && product.colors.map((color, index)=>(
                      <button key={index} style={{background: color}}></button>
                    ))
                  }
                </div>
                <p>{product.description}</p>
                <p>{product.content}</p>

                <div className='amount'>
                    <button className='count' onClick={()=> increase(product._id)}>+</button>
                    <span>{product.count}</span>
                    <button className='count' onClick={()=>  decrease(product._id)}>-</button>
                </div>

                <div className='delete' onClick={()=> removeProduct(product._id)}>X</div>
                
              </div>
          </div>
        ))
      }

      <div className='total'>
        <Link to="/">پرداخت</Link>
        <h3>مجموع قیمت: {formatCurrency(total)}</h3>
      </div>

    </>
  )
}

export default Cart