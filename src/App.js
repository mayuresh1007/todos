
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Todos from './components/Todos';
import Footer from './components/Footer';
import Addtodo from './components/Addtodo';
function App() {
  let intialtodos;
  if (localStorage.getItem('todos') === null) {
    intialtodos = [];
  } else {
    intialtodos = JSON.parse(localStorage.getItem('todos'));
  }
  const [todos, setTodos] = useState(intialtodos)
  
  const onDelete = (item) => {
    // console.log('i am onDelete', item)
    setTodos(todos.filter((e) => {
      return e !== item;
    }))
    localStorage.getItem('todos', JSON.stringify(todos));

  }
  const addTodo = (title, details) => {
    // console.log(`I am adding this `, title, details)
    let id;
    if (todos.length === 0 && todos.id === null) {
      id = 1;
    }
    else {
      // console.log((todos.length - 1 )+1)
      id = (todos.length - 1) + 2;
    }
    const newitem = {
      id: id,
      title: title,
      desc: details
    }
    setTodos([...todos, newitem]);
    
  }
  // while adding todo and rerender the todos while new item added
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])
  return (
    <div className="App">
      <Navbar title="Todo's" searchBar={false} />
      <Addtodo todos={todos} addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer title="Todo's" />
    </div>
  );
}

export default App;

// localStorage.clear('todos');


// const [todos, setTodos] = useState([
  //   { id: 1, title: "mayuresh", desc: "anything in your mind" },
  //   { id: 2, title: "john", desc: "anything in your mind" },
  //   { id: 3, title: "sara", desc: "anything in your mind" },
  //   { id: 4, title: "peter", desc: "anything in your mind" },
  // ])

