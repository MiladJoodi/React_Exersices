import React from 'react'

export default function Products() {
  return (
    <div>
        <ul className='products'>
            <li>
                <div className='product'>
                    <img src="images/mobile1.jpg" />
                    <p>محصول اول</p>
                    <div className='price'>
                        <button>افزودن به سبد خرید</button>
                        <div className='price'>1600000</div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
  )
}
