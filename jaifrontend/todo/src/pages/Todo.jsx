import React, { useEffect, useState } from 'react'
import axios from "axios"

const Todo = () => {

    const [todos, setTodos] = useState([])
    useEffect(async ()=>{
        const allTodos = await axios.get("http://localhost:3000/todo")
        setTodos(allTodos)
    })
    return (
        <div>{todos.map(()=>{
            <div>
                {todos.title}
                {todos.desc}
            </div>
        })}</div>
    )
}

export default Todo