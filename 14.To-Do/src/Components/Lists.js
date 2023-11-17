import React from 'react'
import ListItem from './ListItem'

function Lists({del, done, todos}) {

  if(todos.length <= 0){
    return(
      <div className='bg-danger p-3'>
        <h2 className='text-white'>کار برای انجام نیست</h2>
      </div>
    )
  }


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
                    doneHandler={done}
                    done= {todo.done}
                    />
                    
                ))
            }
        </ul>
    </div>
  )
}

export default Lists