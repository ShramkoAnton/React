import React, {useState} from "react"
import axios from 'axios'

function AddTodo({onCreate}) {

    const [value, setValue] = useState('')
    


    function submitHandler(event) {
        event.preventDefault()
        if(value.trim()) {
            axios.post('http://localhost:3003/',  {title: value})
            onCreate(value)
            setValue('')
        }
    }

    return(
        <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
            <input placeholder="write something interesting" value={value} onChange={event => setValue(event.target.value)} />
            <button type="submit" >Add</button>
        </form>
    )
}

export default AddTodo