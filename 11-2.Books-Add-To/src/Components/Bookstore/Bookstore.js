import React, { useState } from "react";
import "./Bookstore.css";
import View from "./View";
import Loading from "../Loading/Loading";

export default function Bookstore() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [number, setNumber] = useState("");
  const [books, setBooks] = useState([]);

  const [loading, setLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const deleteHandler = (number) => {
    setTimeout(() => {
      const filteredBooks = books.filter((element, index) => {
        return element.number !== number;
      });
      setBooks(filteredBooks);
    }, 500);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const newBook = {
      title,
      author,
      number,
    };
    if (books.length >= 10) {
      alert("کتابخانه پر است");
    } else {
      setTimeout(() => {
        setBooks([...books, newBook]);
        setLoading(false);
        clearInputs()
      }, 1000);

    }
  };

  const clearAllBtn = () => {
    setDeleteLoading(true);
    setTimeout(() => {
      setBooks([]);
      setDeleteLoading(false);
    }, 1500);
  };

  const clearInputs = () => {
    setTitle("");
    setAuthor("");
    setNumber("");
  };

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
                <input
                  type="text"
                  className="form-control"
                  placeholder="نام کتاب"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div class="mb-3">
                {/* <label className="form-label">نام نویسنده</label> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="نویسنده"
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>

              <div class="mb-3">
                {/* <label className="form-label">شماره</label> */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="شماره"
                  required
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
                
              </div>

              <button type="submit" className="btn btn-primary w-100 mt-4">
                افزودن
                {loading && <Loading />}
              </button>
            </form>
          </div>

          {/* form list */}
          <div className="list-container">
            {books.length > 0 && (
              <>
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
                    <View
                      books={books}
                      deleteHandler={deleteHandler}
                      deleteLoading={deleteLoading}
                    />
                  </tbody>
                </table>
                <button
                  className="btn btn-danger w-100 mt-4"
                  onClick={clearAllBtn}
                >
                  حذف همه
                </button>
              </>
            )}
            {!books.length > 0 && (
              <div class="alert alert-danger" role="alert">
                فعلاً کتابی توی کتابخونه نداری
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
