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
    setTodos([...todos, {title : todo}])
    console.log(todos);
  }

  const delHandler = ()=>{
    console.log('حذف')
}
const doneHandler = ()=>{
    console.log('done')
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
