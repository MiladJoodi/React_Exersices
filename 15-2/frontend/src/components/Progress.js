import React from 'react'

function Progress() {
  return (
    <div className="progress mt-3">
    <div
      className="progress-bar progress-bar-striped bg-success"
      role="progressbar"
      style={{ width: "25%" }}
      aria-valuenow="25"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      30%
    </div>
  </div>
  )
}

export default Progress