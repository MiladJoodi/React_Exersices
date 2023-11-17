import React from "react";

function ListItem({id, done, title, delHandler, doneHandler}) {
  return (
    <li className={`list-group-item d-flex justify-content-between ${done ? 'bg-success text-white' : ''}`}>
      {done ? <del>{title}</del> : title}
      <div>
        <button onClick={()=>delHandler(id)} className="btn btn-small bg-danger text-white ms-2">
          <i className="fas fa-trash"></i>
        </button>
        <button onClick={()=>doneHandler(id)} className={`btn btn-small btn-success text-white ${done ? "bg-warning": ""}`}>
          {done ? <i className="fas fa-undo-alt"></i> : <i className="fas fa-check"></i>}
        </button>
      </div>
    </li>
  );
}

export default ListItem;
