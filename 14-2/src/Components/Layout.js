import React from 'react'

export default function Layout({children}) {
  return (
    <div className='container p-3 -sm-1'>
        <div className="row justify-content-center py-4">
            <div className='col-xl-6 col-lg 7 col-md-8'>
                    <div className="card bg-transparent border-3">
                        <div className='card-body bg-transparent '>
                            {children}
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}
