import React, {useContext, useState} from 'react'
import { DataContext } from "./Context";
import { useParams } from 'react-router-dom';
import formatCurrency from '../util'


function Details() {

    const {id}  = useParams();

    const value = useContext(DataContext);
    const [products, setProducts] = value.products;

    const [index, setIndex] = useState(0);

    const details = products.filter((product, index)=>{
        return product._id === id
    })



  return (
    <>
      {
        details.map(product=> (
          <div className="details" key={product._id}>
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
                <div className='thumb'>
                  {product.images.map((img, index)=> (
                    <img src={img} key={index} onClick={()=> setIndex(index)} />
                  ))}
                </div>
                <button className='cart'>افزودن به سبد خرید</button>
              </div>
          </div>
        ))
      }
    </>
  )
}

export default Details