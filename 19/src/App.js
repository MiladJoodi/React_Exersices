import { useState } from "react";
import "./App.css";
import axios from 'axios';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'


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

  const download =()=>{
    const pdf = new jsPDF();
    pdf.autoTable({html: "#table"});
    pdf.save("Msi.pdf")
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
            <button className="btn btn-primary" onClick={download}>دانلود جدول</button>

            <h2 className="py-5">جدول اطلاعات</h2>

            <table className="table table-borderless" id="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item)=> 
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{String(item.completed)}</td>
              </tr>
              )
            }
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
