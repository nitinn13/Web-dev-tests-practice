import React from 'react'

const Card = (props) => {
  return (
    <div className='bg-blue-500 h-48 w-40 rounded-lg text-black flex flex-col items-center justify-center m-5 '>
        <h1>{props.name}</h1>
        <p>{props.desc}</p>
    </div>
  )
}

export default Card
