import React, {useState, useEffect} from 'react';
import TodoList from './Todo/TodoList'
import AddTodo from './Todo/AddTodo';
import axios from 'axios'

function App() {
  
  const [todos, setTodos] = useState([]);//initialTodos
  
  async function fetchTodo() {
    const res = await fetch('http://localhost:3003/')
    res.json().then(res => setTodos(res))

  }

  useEffect(() => {
    fetchTodo()
  }, [])

  function toggleTodo(id) {
    const currentTodo = todos.find(elem => elem._id === id)
    axios.patch(`http://localhost:3003/${id}`, {data: {completed: !currentTodo.completed}})
    .then (res => setTodos(
      todos.map(todo => {
      if (todo._id === id) {
        todo.completed = !todo.completed   
      }
      return todo
      })
    ))
  }

  function removeTodo(id) {
    axios.delete(`http://localhost:3003/${id}`)
    .then(() => setTodos(todos.filter(todo => todo._id !== id)))
    console.log(id);
  }


  function editTodo(id, value) {
    if(value.length>0) {
      axios.patch(`http://localhost:3003/${id}`, {data: {title: value}})
      .then(() => setTodos(
      todos.map(todo => {
        if (todo._id === id && value !=='') {
          todo.title = value
        } 
        return todo
      })
    ))}
  }


    const addTodo = async (title) => {
      
    const {data} = await axios.post(`http://localhost:3003/`, { data: { title } })
      const oldTodos = [...todos];
      oldTodos.push(data)
      setTodos(
        oldTodos
      )
  }

  return (
    <div className="wrapper">
      <h1>Todo list</h1>
      <AddTodo onCreate={addTodo} />
      {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} removeTodo={removeTodo} editTodo={editTodo} /> : <p>no todo</p>}
    </div>
  )
}

export default App;
