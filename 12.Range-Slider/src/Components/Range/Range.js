import React, { useState } from 'react'
import './Range.css'
import Background from '../Background/Background'

export default function Range() {

    const [hori, setHori] = useState(10)
    const [veri, setVeri] = useState(10)
    const [blur, setBlue] = useState(10)
    const [spread, setSpread] = useState(10)
    const [color, setColor] = useState("black")

  return (
    <div className='range'>
        <Background />
        {/* Right side control */}
        <div className='control'>
            <div className='form-group'>
                <label>طول افقی</label>
                <input type="range"
                value={hori}
                onChange={(e)=> setHori(e.target.value)}
                min="-100"
                max="200"
                />
            </div>

            <div className='form-group'>
                <label>طول عمودی</label>
                <input type="range"
                value={veri}
                onChange={(e)=> setVeri(e.target.value)}
                min="-100"
                max="200"
                />
            </div>

            <div className='form-group'>
                <label>تاری</label>
                <input type="range"
                value={blur}
                onChange={(e)=> setBlue(e.target.value)}
                />
            </div>

            <div className='form-group'>
                <label>گسترش رنگ</label>
                <input type="range"
                value={spread}
                onChange={(e)=> setSpread(e.target.value)}
                min="-100"
                max="50"
                />
            </div>

            <div className='form-group'>
                <label>رنگ</label>
                <input type="color"
                  value={color}
                  onChange={(e)=> setColor(e.target.value)}
                />
            </div>

        </div>

        {/* Left Side  */}
        <div className='output' style={{'boxShadow': `${hori}px ${veri}px ${blur}px ${spread}px ${color}`}}>
            <div className="box">
                <p>box-shadow: {hori}px {veri}px {blur}px {spread}px {color}</p>
            </div>
        </div>

    </div>
  )
}
