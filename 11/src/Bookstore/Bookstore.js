import React from "react";
import "./Bookstore.css";
import { Icon } from 'react-icons-kit'
import { trash } from 'react-icons-kit/icomoon/home'

export default function Bookstore() {
  return (
    <div className="bookstore">
      <div className="bookstore-header">
        <h2>لیست کتاب ها</h2>
        <p>کتاب جدید خود را به کتابخانه اضافه کنید</p>
      </div>
      <div className="main">
        <div className="form-container">
          <form>
            <div className="form-group">
              <label htmlFor="">عنوان</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="">نام نویسنده</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="">شماره</label>
              <input type="text" className="form-control" required />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-success w-100">
                افزودن
              </button>
            </div>
          </form>
        </div>
        <div className="view-container">
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>#شماره</th>
                  <th>عنوان</th>
                  <th>نویسنده</th>
                  <th>حذف</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>کتاب تستی</td>
                  <td>جودی</td>
                  <td>
                  <Icon icon={trash} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
