import React from 'react'

function Lists() {
  return (
    <div className='listWrap'>
        <ul className='list-group'>
            <li className='list-group-item d-flex justify-content-between'>
                تست
                <div>
                    <button className='btn btn-small bg-danger text-white ms-2'><i className='fas fa-trash'></i></button>
                    <button className='btn btn-small btn-success text-white'><i className='fas fa-check'></i></button>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Lists