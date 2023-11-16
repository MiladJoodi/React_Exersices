import React from 'react'
import ListItem from './ListItem'

function Lists({del, done, todos}) {

  return (
    <div className='listWrap'>
        <ul className='list-group'>
            {
                todos && todos.map((todo, index)=>(
                    <ListItem 
                    key={index}
                    id= {todo.id}
                    title={todo.title}
                    delHandler = {del} 
                    doneHandler={done} />
                ))
            }
        </ul>
    </div>
  )
}

export default Lists