import React, { useState, useEffect } from "react";
import "./Bookstore.css";
import Book from './Book'

const getDataFromLs = ()=>{
  const data = localStorage.getItem('books')
  if(data){
    return JSON.parse(data)
  }else{
    return []
  }
}


export default function Bookstore() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [number, setNumber] = useState("");
  const [books, setBooks] = useState(getDataFromLs);

  console.log(books);

  const submitHandler = (e) => {
    e.preventDefault();

    const book = {
      title,
      author,
      number,
    };

    if(books.length<6){
      setBooks([...books, book]);
    }else{
      alert('6 item added')
    }
  };

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <div className="bookstore">
      <div className="bookstore-header">
        <h2>لیست کتاب ها</h2>
        <p>کتاب جدید خود را به کتابخانه اضافه کنید</p>
      </div>
      <div className="main">
        <div className="form-container">
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <label htmlFor="">عنوان</label>
              <input
                type="text"
                className="form-control"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">نام نویسنده</label>
              <input
                type="text"
                className="form-control"
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">شماره</label>
              <input
                type="text"
                className="form-control"
                required
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-success w-100 mt-2">
                افزودن
              </button>
            </div>
          </form>
        </div>
        <div className="view-container">
          {books.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-striped ">
                <thead>
                  <tr>
                    <th>#شماره</th>
                    <th>عنوان</th>
                    <th>نویسنده</th>
                    <th>حذف</th>
                  </tr>
                </thead>
                <tbody>
                  <Book books={books} />
                </tbody>
              </table>
            </div>
          ) : (
            <div class="alert alert-danger" role="alert">
              کتابی موجود نیست
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
