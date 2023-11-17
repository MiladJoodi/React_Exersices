import React from "react";
import ListItem from "./ListItem";

export default function Lists({todos, delHandler, doneHandler}) {
  return (
    <div className="tasks">
        {todos.length ? todos.map((todo, index)=>(
            <ListItem
            key={index}
            id= {todo.id}
            title={todo.title}
            done={todo.done}
            delHandler={delHandler}
            doneHandler={doneHandler}
            />
        )) : 
        <div>یادداشتی ندارید</div>
        }
    </div>
  );
}

