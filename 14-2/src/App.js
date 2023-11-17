import { useState } from "react";
import "./App.css";
import Layout from "./Components/Layout";
import Header from "./Components/Header";
import Form from "./Components/Form";

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])


// Submit Handler
const submitHandler = (e)=>{
  e.preventDefault()
  setTodos(todo)
  
}

  return (
    <Layout>
      <Header />
      <Form todo={todo} change={(e)=> setTodo(e.target.value)} submit={submitHandler} />
    </Layout>
  );
}

export default App;
