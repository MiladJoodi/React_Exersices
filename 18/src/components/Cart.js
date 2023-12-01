import React from 'react'

export default function Cart(props) {
  return (
    <>
        <div className='empty-price'>سبد خرید خالی است.</div>
        <div className='cart-item'>
          <div className='product-item'>
            <div className='product-detail'>
              <img src="images/mobile1.jpg" />
              <h2>محصول اول</h2>
            </div>
            <div className='product-price'>
              <div className='price'>
                <span>100000</span>
                <span className='qty'>1 خرید</span>
              </div>
              <div className='remove-item'>
                <button>حذف از سبد خرید</button>
              </div>
            </div>
          </div>
        </div>
        <div className='total-price'>
          <div className='total-text'>مجموع قیمت</div>
          <div className='total'>15000000</div>
        </div>
    </>
  )
}
