import React from 'react'

function FileUpload() {
  return (
    <>
        <form>
            <div className='form-group mt-5'>
                <label htmlFor="customFile" className='custom-file-lable mb-2'>انتخاب عکس</label>
                <input type="file" className='form-control' id='customFile' />
                <div className="progress mt-3">
                <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">30%</div>
                </div>
                <input type="submit" className='btn btn-primary mt-5' value="ارسال عکس" />
            </div>
        </form>

        <div className='show-data'></div>
    </>
  )
}

export default FileUpload