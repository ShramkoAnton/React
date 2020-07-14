import React, {useState} from "react"
import axios from 'axios'

function AddTodo({onCreate}) {

    const [value, setValue] = useState('')
    
    const addValue = (text) => {
        onCreate(text);
        setValue('');
    }

    return(
        <>
            <input placeholder="write something interesting" value={value} onChange={event => setValue(event.target.value)} />
            <button type="click" onClick={() => addValue(value)} >Add</button>
        </>
    )
}

export default AddTodo