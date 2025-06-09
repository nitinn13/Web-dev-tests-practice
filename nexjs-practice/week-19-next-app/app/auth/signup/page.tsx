
"use client"
import axios from "axios"
import { useState } from "react";
export default function Signup() {
    const [username , setUsername ] = useState("");
    const [password, setPassword] = useState("")
    return (
        <div>
            <div>
                <input type="text" placeholder="username" onChange={(e)=>{
                    setUsername(e.target.value);
                }}/>
                <input type="password" placeholder="password" onChange={(e)=>{
                    setPassword(e.target.value);
                }} />
                <button onClick={() => {
                    axios.post("http://localhost:3000/api/v1/auth/signup",
                        {
                            username,
                            password 
                        }
                    )
                }}>sign up</button>
            </div>
        </div>
    )
}