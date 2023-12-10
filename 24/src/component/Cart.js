import React, {useContext} from 'react'
import { DataContext } from "./Context";
import formatCurrency from '../util'


function Cart() {

    const value = useContext(DataContext)
    const [cart, setCart] = value.cart

  return (
    <>
      {
        cart.map(product=> (
          <div className="details cart" key={product._id}>
                <div className='img-container' style={{backgroundImage: `url(${product.images[0]})`}}></div>

              <div className='box-details'>
                <h2>{product.title}</h2>
                <h3>{product.price}</h3>
                <div className='colors'>
                  {
                    product && product.colors.map((color, index)=>(
                      <button key={index} style={{background: color}}></button>
                    ))
                  }
                </div>
                <p>{product.description}</p>
                <p>{product.content}</p>
              </div>
          </div>
        ))
      }
    </>
  )
}

export default Cart