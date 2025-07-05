import React from 'react'
import { useState } from 'react'
import axios from "axios"

const Signup = () => {
    
    const [email, setEmail] = useState("")
    const [name, setname] = useState("")
    const [password, setpassword] = useState("")


    const handleSubmit = async () =>{
        const response = await axios.post("http://localhost:3000/signup",{
            email , name , password
        })
    }



  return (
    
    
    <div>
        <input type="text" placeholder='email'  onChange={(e)=>{
            setEmail(e.target.value)
        }}/>
        <input type="text" placeholder='password'  onChange={(e)=>{
            setpassword(e.target.value)
        }}/>
        <input type="text" placeholder='name'  onChange={(e)=>{
            setname(e.target.value)
        }}/>

        <button onClick={handleSubmit}>
            Signup
        </button>

    </div>
  )
}

export default Signup