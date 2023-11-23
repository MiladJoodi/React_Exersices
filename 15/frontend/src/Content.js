import React from 'react'
import FileUpload from './components/FileUpload'


function Content() {
     return (
          <div className="container mt-5">
          <h2 className="text-center fw-bold">
            آپلودر عکس
          </h2>
    
          <FileUpload />
        </div>
   
     )
}

export default Content
