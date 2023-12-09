import React from 'react'
import {Link} from 

function Header() {
  return (
    <header>
      <div className='cart-icon'>
        <span>3</span>
        <Link to="/">
          <FaShoppingBag />
        </Link>
      </div>
      <ul>
        <li><Link to="/">خانه</Link></li>
        <li><Link to="/">محصولات</Link></li>
        <li><Link to="/">درباره ما</Link></li>
        <li><Link to="/">تماس با ما</Link></li>
        <li><Link to="/">ثبت نام /ورود</Link></li>
      </ul>
      <div className='logo'>
        <Link to="/">My Shop</Link>
      </div>
      <div className='menu'></div>
    </header>
  )
}

export default Header