import React, {useState} from 'react';
import TodoList from './Todo/TodoList'
import AddTodo from './Todo/AddTodo';

function App() {


  // const initialTodos =() => JSON.parse(localStorage.getItem('todos')) || []
  
  const [todos, setTodos] = useState([]);//initialTodos

  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos))
  // }, [todos])
  

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed   
      }
      return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function editTodo(id, value) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id && value !=='') {
          todo.title = value
        } 
        return todo
      })
    )
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed:false
        }
      ])
    )
  }

  return (
    <div className="wrapper">
      <h1>Todo list))</h1>
      <AddTodo onCreate={addTodo} />
      {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} removeTodo={removeTodo} editTodo={editTodo}/> : <p>no todos!</p>}
    </div>
  )
}

export default App;
