import React from "react";

function Form({todo, change, submit}) {
  return (
    <form onSubmit={submit} className="py-3">
      <div className="form-group row">
        <div className="col-4">
          <button type="submit" className="btn btn-primary">افزودن کار</button>
        </div>
        <div className="col-8">
          <input type="text"
          className="form form-control-plaintext mb-2 border-bottom " 
          value={todo}
          onChange={change}
          />
        </div>
      </div>
    </form>
  );
}

export default Form;
