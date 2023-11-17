import React from 'react'
import { LuTrash } from "react-icons/lu";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


export default function ListItem({id, title, done,delHandler, doneHandler}) {
  return (
    <div className="task px-2 py-1 ">
        {done ? <del>{title}</del> : title}
        <div>
        <button onClick={()=>delHandler(id)} className='btn btn-sm btn-danger'><LuTrash /></button>
        <button onClick={()=>doneHandler(id)} className={`btn btn-sm btn-secondary mx-2 ${done && 'bg-success'}`}><IoMdCheckmarkCircleOutline /></button>
        </div>
      </div>
  )
}
