import React from 'react'
// import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset} from './features/counter/counterSlice'
const App = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const handleinc = () => {
    dispatch(increment())
  }
  const handledec = () => {
    dispatch(decrement())
  }
  const handlereset= () => {
    dispatch(reset())
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='flex justify-around items-center'>
        <button onClick={handleinc} className='text-black text-2xl border-black border-2 rounded-md px-5 py-3'>+</button>
        <h1>Count: {count}</h1>
        <button onClick={handledec} className='text-black text-2xl border-black border-2 rounded-md px-5 py-3'>-</button>
      </div>
      
      <br />
      <br />
      <button onClick={handlereset} className='text-black text-2xl border-black border-2 rounded-md px-5 py-3'>Reset</button>
    </div>
  )
}

export default App