import React from 'react'
import { Routes, BrowserRouter, Route } from "react-router-dom"
import Signup from './pages/Signup'
import Login from './pages/Login'
import Todo from './pages/Todo'



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>

        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/todos' element={<Todo/>}/>


      </Routes>


      
      
      </BrowserRouter>

    </div>
  )
}

export default App