import React from 'react'

// const TodoItem = ({todos,onDelete}) => {
const TodoItem = (props) => {
  // console.log("in the todoItem", props.todo)

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Sr.No</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {props.todo.map(item => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <th scope="row">{item.title}</th>
              <th scope="row">{item.desc}</th>
              <th scope="row">
                <button onClick={() => props.onDelete(item)} className='btn-sm btn-dark'>Delete</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}

export default TodoItem
