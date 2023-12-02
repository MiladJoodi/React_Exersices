import React from 'react'

function Cart(props) {

    const { cartItems, removeProducts } = props;

    return (
        <>
            <div className='empty-price'>سبد خرید خالی است</div>
            <div className='cart-item'>
                {
                    cartItems.map((item) =>
                        <div className='product-item' key={item.id}>
                            <div className='product-detail'>
                                <img src={item.image} />
                                <h2>{item.title}</h2>
                            </div>
                            <div className='product-price'>
                                <div className='price'>
                                    <span>{item.price}</span>
                                    <span className='qty'>{item.qty} خرید</span>
                                </div>
                                <div className='remove-item'>
                                    <button onClick={()=> removeProducts(item)} className='remove-item'>حذف از سبد</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='total-price'>
                <div className='total-text'>مجموع قیمت:</div>
                <div className='total'>15000 تومان</div>
            </div>
        </>
    )
}

export default Cart