import React from 'react'
import './index.css';

import { useRef } from 'react'

const App = () => {
  const btnref = useRef()
  const handler = () => {
    btnref.current.style.backgroundColor === 'white'
      ? (btnref.current.style.backgroundColor = 'red')
      : (btnref.current.style.backgroundColor = 'white');
  };
  
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <div ref = {btnref} className='border-black border-2 m-10 p-10 text-center bg-white'>
        BOX
      </div>
      <button onClick={handler}  className='border-black border-2 bg-red-500 p-2'>Change color</button>
    </div>
  )
}

export default App