import React, { useState } from "react";
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
