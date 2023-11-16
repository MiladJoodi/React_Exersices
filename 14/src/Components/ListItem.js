import React from "react";

function ListItem({title, delHandler, doneHandler}) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center ">
      {title}
      <div>
        <button onClick={delHandler} className="btn btn-small bg-danger text-white ms-2">
          <i className="fas fa-trash"></i>
        </button>
        <button onClick={doneHandler} className="btn btn-small btn-success text-white">
          <i className="fas fa-check"></i>
        </button>
      </div>
    </li>
  );
}

export default ListItem;
