import React from "react";

export default function Progressbar() {
  return (
    <div className="progressbar-container mt-2">
      <div className="progress">
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{width: "25%"}}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <small id="passwordHelpInline" className="text-muted">
        قوی
      </small>
    </div>
  );
}
