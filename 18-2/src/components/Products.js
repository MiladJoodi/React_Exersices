import React from 'react'

function Products(props) {

    // console.log(props.item)

    return (
        <div>
            <ul className='products'>
                {
                    props.item.map((product)=>
                    <li>
                    <div className='product'>
                        <img src={product.image} />
                        <p>{product.title}</p>
                        <div className='product-price'>
                            <button>افزودن به سبد خرید</button>
                            <div className='price'>{product.price}</div>
                        </div>
                    </div>
                </li>
                    )
                }
                
                
            </ul>
        </div>
    )
}

export default Products