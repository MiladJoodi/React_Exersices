import React from "react";

export default function PasswordInput() {
  return (
    <div className="input-container">
      <form className="form-inline">
        <div className="form-group">
          <label for="inputPassword6">رمز خود را وارد کنید</label>
          <input
            type="password"
            id="inputPassword6"
            className="form-control"
            aria-describedby="passwordHelpInline"
          />
        </div>
      </form>
    </div>
  );
}
