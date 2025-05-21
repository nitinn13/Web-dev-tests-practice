// import React, { useState } from 'react'

// const App = () => {
//   const [inputval, setInputval] = useState('')
//   const handlesubmit = (e) =>{
//     e.preventDefault()
//     setInputval('')
//   }
//   return (
//     <form  className='text-black'>
//       <input type="text" placeholder='Enter your name'  value={inputval} onChange={(e)=>setInputval(e.target.value)} className='border-2 border-black rounded-lg p-5 m-5' />
//       <button onClick={handlesubmit} className='bg-red-500 p-5 m-5'>Submit</button>
//       <h1>Input is : {inputval}</h1>
//     </form>
//   )
// }

// export default App
// import React, { createContext, useState } from 'react'
// import { useEffect } from 'react'
// import ChildA from './components/ChildA'
// const Themecontext = createContext()

// const App = () => {
//   const [count, setCount] = useState(0)
//   const [total, setTotal] = useState(1)
//   const handleclick = () => {
//     setCount(count + 1)
//   }
//   const handletotal = () => {
//     setTotal(total + 1)
//   }
//   useEffect(() => {
//     alert('useeffect called')
//   }, [count,total])
//   const [theme, setTheme] = useState('light')
  
//   return (
//     <div>
//       <button onClick={handleclick} className='bg-red-500 p-5 m-5 border-2 border-black rounded-lg'>Click</button>
//       <h1>Count is: {count}</h1>
//       <br />
//       <br />
//       <button onClick={handletotal} className='bg-red-500 p-5 m-5 border-2 border-black rounded-lg'>inctotal</button>
//       <h1>Total is: {total}</h1>
//     </div>
//     <Themecontext.Provider value = {{ theme, setTheme }}>
//       <ChildA />
//     </Themecontext.Provider>
//   )
// }

// export default App
// export { Themecontext }



// import React, { useState } from 'react'
// import ChildA from './components/ChildA'

// const ThemeContext = createContext()

// const App = () => {
//   const [theme, setTheme] = useState('light')
//   return (
//     <ThemeContext.Provider value = {{ theme, setTheme }}>
//       <ChildA />
//     </ThemeContext.Provider>
//   )
// }

// export default App
// export { ThemeContext }

// import React, { useState, createContext  } from 'react';
// import ChildA from './components/ChildA'; 

// const ThemeContext = createContext()

// const App = () => {
//   const [theme, setTheme] = useState('light')
//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       <ChildA />
//     </ThemeContext.Provider>
//   )
// }

// export default App
// export { ThemeContext }

// import React from 'react'
// import Card from './components/Card'
// import Counter from './components/Counter'
// import { createBrowserRouter, RouterProvider} from "react-router"
// import Home from './components/Home';

// const router = createBrowserRouter(
//   [
//     {path: '/',element : <Home />},
//     {path: '/card',element : <Card />},
//     {path: '/counter',element : <Counter />},
//   ]
// );
// const App = () => {
//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import './index.css';
// import { useForm , SubmitHandler } from "react-hook-form"

// const App = () => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm()
//   const SubmitHandler = (data) => {
//     console.log(data)
//   }
//   return (
//     <form onSubmit={handleSubmit(SubmitHandler)} className='text-black'>
//       <div>
//         <label >First Name: </label>
//         <input {...register("firstname", { required: true })} />
//       </div>
      
//       <div>
//         <label >Second Name: </label>
//         <input {...register("Secondname", 
//           { required:{value: true, message: "Please Enter your name "} },
//            )} />
//            {errors.Secondname && <p>{errors.Secondname.message}</p>}
//       </div>
//       <br />
//       <input type="submit"  disabled={isSubmitting} />
//       </form>

    
//   )
// }

// export default App
import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App