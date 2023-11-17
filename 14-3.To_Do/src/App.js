import { useState } from "react";
import "./App.css";
import Layout from "./Components/Layout";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Lists from "./Components/Lists";

function App() {

  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [error, setError] = useState(null)

  // submit
  const submitHandler = (e)=>{
    e.preventDefault()

    if(todo.length < 5){
      setError('لطفا حداقل 5 کاراکتر وارد کنید')
      return false
    }

    setTodos([...todos, {id: Date.now(), title: todo, done: false}])
    setError(null)
  }
  // submit

  // delete
  const delHandler = (todoId)=>{
    const filtered = todos.filter((item)=> item.id !== todoId)
    if(window.confirm('آیا از حذف اطمینان دارید؟')){
      setTodos(filtered)
    }
  }
  // delete

    // done
    const doneHandler = (todoId)=>{
      const index = todos.findIndex((item)=> item.id === todoId)
      
      const duplicateTodos = [...todos]
      duplicateTodos[index] = {
        id: todos[index].id,
        title: todos[index].title,
        done: !todos[index].done
      }
      setTodos(duplicateTodos)
    }
    // done
  



  return (
    <Layout>
      <Header />
      <Form error={error} todo={todo} change={(e)=>{
        setTodo(e.target.value)
        setError(null)
      }}
      submit={submitHandler} />
      <Lists todos = {todos} delHandler={delHandler} doneHandler={doneHandler} />
    </Layout>
  );
}

export default App;
