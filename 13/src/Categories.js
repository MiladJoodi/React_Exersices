import React from 'react'

export default function Categories({filterItems}) {
  return (
    <div className='btn-container'>
      <button onClick={()=> filterItems('همه')}>همه</button>
      <button onClick={()=> filterItems('هدفون')}>هدفون</button>
    </div>
  )
}
