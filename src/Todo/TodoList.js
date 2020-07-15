import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList(props) {
    
    const list =  props.todos.map((todo) =>
    <TodoItem 
    todo={todo}
    key={todo._id} 
    onChange={props.onToggle}
    removeTodo={props.removeTodo}
    editTodo={props.editTodo}
    />)
    
    return (
        <ul className="ul">
            {list}
        </ul>
    )

}


