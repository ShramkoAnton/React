import React,{useState} from 'react'

function TodoItem({todo, onChange, removeTodo, editTodo}) {
    
    const classes = []

    const [edit, setEdit] = useState(false)
    const [value, setValue] = useState(todo.title)

    if (todo.completed){
        classes.push('done')
    }
    function ewg() {
        editTodo(todo._id, value)
        setEdit(!edit)
        setValue(todo.title)
    }

    return (
        <li className="li">
            <span className={classes.join(' ')}>
                <input className="input"
                type="checkbox" 
                checked={todo.completed}  
                onChange={() => onChange(todo._id)}
                />
                &nbsp;
                {edit ? <input value={value} onChange={event => setValue(event.target.value)} onKeyDown={event => event.key==='Enter'&& ewg()}/> : `${todo.title}`}
            </span>
            <div style={{display:'flex', flexDirection:'column'}}>
                <button className="editBtn" onClick={() => setEdit(!edit)}>edit</button>
                <button className="rm" onClick={() => removeTodo(todo._id)}>&times;</button>
            </div>
        </li>
    )
}
export default TodoItem