import React, { useState } from "react";
import "./Bookstore.css";
import View from "./View";


export default function Bookstore() {

  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [number, setNumber] = useState("")
  const [books, setBooks] = useState([])

const submitHandler = (e)=>{
    e.preventDefault()
    const newBook = {
      title,
      author,
      number,
    }
    if(books.length >= 10){
      alert('کتابخانه پر است')
    }else{
      setBooks([...books, newBook])
    }

}

  return (
    <div className="bookstore">
      <div className="container">
        <div className="bookstore-header">
            <h3>کتابخانه ی من</h3>
            <p>برای افزودن کتاب به کتابخانه از فرم زیر استفاده کنید</p>
        </div>
        <div className="bookstore-main">
          {/* form container */}
          <div className="form-container">
            <h5>مشخصات کتاب را اینجا وارد کنید</h5>
            <form onSubmit={submitHandler}>
              
            <div class="mb-3">
              {/* <label className="form-label">نام کتاب</label> */}
              <input type="text" 
              className="form-control" 
              placeholder="نام کتاب را اینجا وارد کنید"
              value={title}
              onChange={(e)=> setTitle(e.target.value)}
              />
            </div>
            <div class="mb-3">
              {/* <label className="form-label">نام نویسنده</label> */}
              <input type="text" 
              className="form-control" 
              placeholder="نام نویسنده را اینجا وارد کنید"
              value={author}
              onChange={(e)=> setAuthor(e.target.value)}
               />
              
            </div>

            <div class="mb-3">
              {/* <label className="form-label">شماره</label> */}
              <input type="text" 
              className="form-control"
              placeholder="شماره کتاب را اینجا وارد کنید" 
              value={number}
              onChange={(e)=> setNumber(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-4">افزودن</button>

            </form>
          </div>

          {/* form list */}
          <div className="list-container">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>شماره</th>
                    <th>کتاب</th>
                    <th>نویسنده</th>
                    <th>حذف</th>
                  </tr>
                </thead>
                <tbody>
                 <View books= {books} />
                  
                </tbody>
              </table>
            <button className="btn btn-danger w-100 mt-4">حذف همه</button>
          </div>
        </div>
      </div>
    </div>
  );
}
