import React from 'react'
import '../index.css';
import { useForm , SubmitHandler } from "react-hook-form"

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const SubmitHandler = (data) => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(SubmitHandler)} className='text-black'>
      <div>
        <label >First Name: </label>
        <input {...register("firstname", { required: true })} />
      </div>
      
      <div>
        <label >Second Name: </label>
        <input {...register("Secondname", 
          { required:{value: true, message: "Please Enter your name "} },
           )} />
           {errors.Secondname && <p>{errors.Secondname.message}</p>}
      </div>
      <br />
      <input type="submit"  disabled={isSubmitting} />
      </form>

    
  )
}

export default Form