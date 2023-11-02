import React, { useState } from 'react'
import {AioutlineMinus, AiOutlinePlus} from 'react-icons/ai'

export default function Question() {

    const [showInfo, setShowInfo] = useState(false)

  return (
    <div className='question'>
        <header>
            <h4>سوال یکم</h4>
            <button onClick={()=> setShowInfo(!showInfo)}><AiOutlinePlus /></button>
        </header>
        {showInfo && (
            <p>محتوا</p>
        )}
        
    </div>
  )
}
