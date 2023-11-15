import React from 'react'

export default function Categories({filterItems, categories}) {
  return (
    <div className='btn-container'>
      {categories.map((category, index)=> {
        return (
          <button key={index} className='filter-btn' onClick={()=> filterItems(category)}>{category}</button>
        )
      })}

    </div>
  )
}
