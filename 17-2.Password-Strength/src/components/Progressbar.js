import React from "react";

export default function Progressbar({percent, functionProgressColor, changePasswordColor, createPassLabel}) {


  return (
    <div className="progressbar-container mt-2">
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={changePasswordColor()}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <small style={{color: functionProgressColor()}} id="passwordHelpInline" className="text-muted">
        {createPassLabel()}
      </small>
    </div>
  );
}
