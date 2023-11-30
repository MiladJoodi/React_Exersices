import React from "react";

export default function Filter(props) {

  console.log(props)

  return (
    <div className="filter">
      <div className="result">
          تعداد محصولات: {props.count} محصول
      </div>
      <div className="sort">
        <div className="sort-title">مرتب سازی بر اساس</div>
        <div className="form-checkbox">
          <div className="form-group ">
            <input type="radio" value="asc" name="radioValues" onChange={props.sortProducts} />
            <label>جدیدترین محصولات</label>
          </div>
          <div className="form-group">
            <input type="radio" value="desc" name="radioValues" onChange={props.sortProducts} />
            <label>قدیمی ترین محصولات</label>
          </div>
        </div>
      </div>
      <div className="brand">
        برندها
        <select>
            <option value="">همه</option>
            <option value="">سامسونگ</option>
            <option value="">آیفون</option>
            <option value="">موتورولا</option>
            <option value="">بلک بری</option>
            <option value="">ال جی</option>
            <option value="">سونی</option>
        </select>
      </div>
    </div>
  );
}
