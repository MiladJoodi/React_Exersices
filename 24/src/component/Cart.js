import React, {useContext} from 'react'
import { DataContext } from "./Context";
import formatCurrency from '../util'


function Cart() {

    const value = useContext(DataContext)
    const [cart, setCart] = value.cart;

    const increase = value.increase;
    const decrease = value.decrease;

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

                
              </div>
          </div>
        ))
      }
    </>
  )
}

export default Cart