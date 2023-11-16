import { useState } from "react";
import "./App.css";
import Layout from "./Components/Layout";
import Header from "./Components/Header";
import Lists from "./Components/Lists";
import Form from "./Components/Form";

function App() {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
    setTodos([...todos, {id: Date.now(), title : todo, done: false}])
    console.log(todos);
  }

  const delHandler = (todoId)=>{
    if(window.confirm('برای حذف مطمئن هستین؟')){
      const updateTodos = todos.filter((item)=> item.id !== todoId)
      setTodos(updateTodos)
    }
}
const doneHandler = (todoId)=>{
    const index = todos.findIndex((item) => item.id === todoId) 
}

  return (
    <div className="app">
      <Layout>
        <Header />
        <Form todo={todo} change={(e)=> setTodo(e.target.value)} submit={submitHandler} />
        <Lists del={delHandler} done={doneHandler} todos={todos} />
      </Layout>
    </div>
  );
}

export default App;
