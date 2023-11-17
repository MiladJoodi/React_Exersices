import { useState } from "react";
import "./App.css";
import Layout from "./Components/Layout";
import Header from "./Components/Header";
import Form from "./Components/Form";
import Lists from "./Components/Lists";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // Submit Handler
  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: Date.now(), title: todo, done: false }]);
  };

  const delHandler = (todoId) => {
    const filtered = todos.filter((item)=> item.id !== todoId)
    if(window.confirm('آیا از حذف مطمئن هستید؟')){
      setTodos(filtered)
    }
  };
  const doneHandler = (todoId) => {
    const index = todos.findIndex((item)=> item.id === todoId)
    const duplicateTodos = [...todos]

    duplicateTodos[index] = {
      id: todo[index].id,
      title: todos[index].title,
      done: !todos[index].done
    }

    setTodos(duplicateTodos)

  };

  return (
    <Layout>
      <Header />
      <Form
        todo={todo}
        change={(e) => setTodo(e.target.value)}
        submit={submitHandler}
      />
      <Lists 
      todos={todos}
      delHandler={delHandler} 
      doneHandler={doneHandler} />
    </Layout>
  );
}

export default App;
