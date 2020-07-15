import React, {useState} from "react"

function AddTodo({onCreate, todo, onChange, checkAll}) {

    const [value, setValue] = useState('')
    
    const addValue = (text) => {
        onCreate(text);
        setValue('');
    }
    
    return(
        <div className="header-input">
            <input className="header-input__input" placeholder="write something interesting" 
                onKeyDown={event => event.key==='Enter' && addValue(value)} 
                value={value} 
                onChange={event => setValue(event.target.value)} 
            />
            <button type="click" onClick={() => addValue(value)} >Add</button>
            {/* <div className="checkAll">
                <input className="input" type="checkbox" 
                    checked={todo.completed}  
                    onChange={() => onChange(todo._id)}
                />
                <p>check all</p>
            </div> */}
        </div>
    )
}

export default AddTodo