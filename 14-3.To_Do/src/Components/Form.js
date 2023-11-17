import React from "react";

export default function Form({ todo, change, submit, error }) {
  return (
    <>
      <div className="form d-flex flex-column ">
        <div className="w-75 d-flex justify-content-center ">
          <input type="text" className="input" value={todo} onChange={change} />
          <button
            type="submit"
            className="btn btn-success add mx-2"
            onClick={submit}
            
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        {error && <small className="mt-2 text-danger ">{error}</small>}
      </div>
    </>
  );
}
