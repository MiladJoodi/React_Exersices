import React from "react";

export default function ListItem({ id, title, done, delHandler, doneHandler }) {
  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center py-1 ${done ? 'bg-success text-white' : ''}`}>
      {done ? <del>{title}</del> : title}
      <div>
        <button onClick={()=>delHandler(id)} className="btn btn-sm bg-danger text-white ms-2">
          <i className="fa-solid fa-trash"></i>
        </button>
        <button onClick={()=>doneHandler(id)} className={`btn btn-sm bg-success text-white ${done ? 'bg-warning' : ''}`}>
          <i className={done ? 'fas fa-undo' : 'fas fa-check'}></i>
        </button>
      </div>
    </li>
  );
}
