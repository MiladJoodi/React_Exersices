import React from "react";
import Lists from "./Lists";

export default function Form({todo,change,submit}) {
  return (
    <form onSubmit={submit} className="d-flex justify-content-center py-2">
      <input 
      type="text" 
      className="form-control w-50" 
      placeholder="اینجا تایپ کنید" 
      value={todo}
      onChange={change}
      />
      <button 
      type="submit" 
      className="btn btn btn-primary px-2 mx-1">
        افزودن
      </button>
    </form>
  );
}
