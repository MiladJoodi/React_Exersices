import React from 'react'

export default function Layout({children}) {
  return (
    <div className='container'>
        <div className="row d-flex justify-content-center align-items-center vh-100">
            <div className='col-xl-7 col-lg-8 col-md-6 '>
                {children}
            </div>
        </div>
    </div>
  )
}
