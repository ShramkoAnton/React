import React, {useState} from "react"
// import axios from 'axios'

function AddTodo({onCreate}) {

    const [value, setValue] = useState('')
    // const [newTodo, setNewTodo] = useState({})

    // axios.post('http://localhost:4000/todos', newTodo)
    // .then(res => console.log(res.data));

    // setNewTodo({
    //     title: '',
    //     completed: false
    // })
    function submitHandler(event) {
        event.preventDefault()

        if(value.trim()) {
            onCreate(value)
            setValue('')
        }
    }

    return(
        <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
            <input placeholder="write something interesting" value={value} onChange={event => setValue(event.target.value)}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default AddTodo