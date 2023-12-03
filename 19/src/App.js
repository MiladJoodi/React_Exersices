import { useState } from "react";
import "./App.css";
import axios from 'axios';

function App() {

  const [data, setData] = useState([])

  const getData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        const data = response.data
        // console.log(data)
        setData(data)
      })
  }


  return (
    <div className="container">
      <h2 className="py-5 text-center">دانلود جدول به صورت PDF</h2>
      <div className="py-5">
        <button onClick={getData} className="btn btn-success">نمایش جدول</button>
      </div>

      {
        data.length > 0 && (
          <div className="download-data">
            <button className="btn btn-primary">دانلود جدول</button>

            <h2 className="py-5">جدول اطلاعات</h2>

            <table className="table table-borderless">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
          </tbody>
            </table>

          </div>
        )
      }

    </div>
  );
}

export default App;
