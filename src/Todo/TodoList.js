import React, { useState } from 'react'
import TodoItem from './TodoItem'

export default function TodoList(props) {
    
    const [todos] = useState([]);

    return (
        <ul className="ul">
            { todos.map((todo) => {
            return <TodoItem 
            todo={todo}
            key={todo.id} 
            onChange={props.onToggle}
            removeTodo={props.removeTodo}
            editTodo={props.editTodo}
            />})}
            { props.todos.map((todo) => {
            return <TodoItem 
            todo={todo}
            key={todo.id} 
            onChange={props.onToggle}
            removeTodo={props.removeTodo}
            editTodo={props.editTodo}
            />})}
        </ul>
    )

}


