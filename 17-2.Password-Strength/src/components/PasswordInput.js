import React, { useState } from "react";

export default function PasswordInput({password,setPassword, percent}) {

    
  return (
    <div className="input-container">
      <form className="form-inline">
        <div className="form-group">
          <label>رمز خود را وارد کنید</label>
          <input
            type="password"
            id="inputPassword6"
            className="form-control mt-1"
            aria-describedby="passwordHelpInline"
            onChange={(e)=> setPassword(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}
