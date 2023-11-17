import React from "react";
import Lists from "./Lists";

export default function Form({ todo, change, submit, error }) {
  return (
    <>
      <form onSubmit={submit} className="d-flex flex-column align-items-center  justify-content-center py-2">
        <div className="d-flex">
        <input
          type="text"
          className="form-control"
          placeholder="اینجا تایپ کنید"
          value={todo}
          onChange={change}
        />
        <button type="submit" className="btn btn btn-primary px-2 mx-1">
          افزودن
        </button>
        </div>
        {error && <small className="text-danger mt-2">{error}</small>}
      </form>
      
    </>
  );
}
