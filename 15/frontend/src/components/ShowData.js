import React from 'react'

function ShowData() {
  return (
    <div className="show-data mt-5">
        <div className="row">
          <div className="col-lg-3 mt-4">
            <img src="image/1.jpg" className="w-100" style={{height: "300px", objectFit: "cover"}} alt="" />
          </div>
          <div className="col-lg-3 mt-4">
            <img src="image/2.jpg" className="w-100" style={{height: "300px", objectFit: "cover"}} alt="" />
          </div>
          <div className="col-lg-3 mt-4">
            <img src="image/3.jpg" className="w-100" style={{height: "300px", objectFit: "cover"}} alt="" />
          </div>
          <div className="col-lg-3 mt-4">
            <img src="image/4.jpg" className="w-100" style={{height: "300px", objectFit: "cover"}} alt="" />
          </div>
        </div>
      </div>
      
  )
}

export default ShowData