import axios from 'axios';
import { useEffect, useState } from "react";
import Table from "./Table";
import { Users } from "./users";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([])

  console.log(data)

  useEffect(()=>{
    const fetchUsers = async()=> {
      const res = await axios.get(`http://localhost:5000?q=${query}`)
      setData(res.data)
    };
    fetchUsers()
  },[query])

  return (
    <div className="app">
      <input
        type="text"
        placeholder="جستجو..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={data} />
    </div>
  );
}

export default App;
