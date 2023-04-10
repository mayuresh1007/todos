import React from 'react'
import TodoItem from './TodoItem'
import Notodos from './Notodos'
const Todos = (props) => {
  // console.log("In the todo",props.todos.length)
  return (
    <div className='container'>
      <h3 className='text-center mt-2'>Todos List</h3>
      {props.todos.length !== 0 ? <TodoItem todo={props.todos} onDelete={props.onDelete} /> : <Notodos />}
    </div>
  )
}

export default Todos