import React from 'react'
import ListItem from './ListItem'

export default function Lists({todos, delHandler, doneHandler}) {
  return (
    <div className='listWrap py-3'>
        <ul className='list-group '>
          {
            todos && todos.map((todo, index)=> (
              <ListItem
              key={index}
              id= {todo.id}
              title= {todo.title}
              delHandler={delHandler}
              doneHandler={doneHandler}
              done= {todo.done}
              />
            ))
          }
        </ul>
    </div>
  )
}
