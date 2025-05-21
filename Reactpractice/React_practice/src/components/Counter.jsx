import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)
    const increase = () => {
        setCount(count + 1)
    }
  return (
    <div className='flex flex-col items-center justify-center p-5 text-black bg-blue-400 h-64 w-64'>
        <h1 className='text-2xl m-10'>You clicked {count} times</h1>
        <button onClick={increase} className='bg-red-800 p-5 m-5'>Increase count</button>
    </div>
  )
}

export default Counter