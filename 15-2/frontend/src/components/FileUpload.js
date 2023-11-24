import React, { useState } from "react";
import axios from 'axios';
import Progress from "./Progress";
import ShowData from "./ShowData";

function FileUpload() {

  const [file, setFile] = useState("")
  const [fileName, setFileName] = useState("انتخاب عکس")
  

  const onChange = e=> {
    setFile(e.target.files[0])
    setFileName(e.target.files[0].name)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    const formData = new FormData()
    formData.append('image', file)
    axios.post('http://localhost:5080/products', formData, {
      headers:{
        "Content-Type" : "multipart/form-data"
      }
    })
    .then(res=> {
      console.log(res);
    })
    .catch()

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-5">
          <label htmlFor="customFile" className="custom-file-lable mb-2">
            {fileName}
          </label>
          <input type="file"
          className="form-control"
          name="image"
          id="customFile" 
          onChange={onChange}
          />

          <Progress />
        </div>
        <input
          type="submit"
          className="btn btn-primary mt-5"
          value="ارسال عکس"
        />
      </form>

      <ShowData />
    </>
  );
}

export default FileUpload;
