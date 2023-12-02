import React from 'react'
import formatCurrency from '../util'
import Fade from 'react-reveal/Fade';

function Products(props) {

    // console.log(props.item)

    return (
        <div>
            <Fade bottom cascade>
            <ul className='products'>
                {
                    props.item.map((item) =>
                        <li key={item.id}>
                            <div className='product'>
                                <img src={item.image} />
                                <p>{item.title}</p>
                                <div className='product-price'>
                                    <button onClick={() => props.addProducts(item)}>افزودن به سبد خرید</button>
                                    <div className='price'>{formatCurrency(item.price)}</div>
                                </div>
                            </div>
                        </li>
                    )
                }
            </ul>
            </Fade>
        </div>
    )
}

export default Products