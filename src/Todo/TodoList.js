import React, {useEffect, useState} from 'react'
import TodoItem from './TodoItem'

export default function TodoList(props) {
    
    const [todos, setTodos] = useState([]);

    async function fetchTodo() {
    const res = await fetch('http://localhost:3001/')
        res
        .json()
        .then(res => setTodos(res))
    
    }

    useEffect(() => {
        fetchTodo();
    }, [])


    // function todoList() {
    //     return useState.todos.map(function (currentTodo, i) {
    //         return <TodoItem todo={currentTodo} key={i} />;
    //     })
    // }
    if(!todos.length){
        return <div></div>
    }
    return (
        <ul className="ul">
            { todos.map((todo, index) => {
            return <TodoItem 
            todo={todo}
            key={todo.id} 
            index={index} 
            onChange={props.onToggle}
            removeTodo={props.removeTodo}
            editTodo={props.editTodo}
            />})}
            { props.todos.map((todo, index) => {
            return <TodoItem 
            todo={todo}
            key={todo.id} 
            index={index} 
            onChange={props.onToggle}
            removeTodo={props.removeTodo}
            editTodo={props.editTodo}
            />})}
        </ul>
    )

}


