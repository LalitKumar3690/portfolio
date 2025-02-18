import React from 'react'
import { useForm } from 'react-hook-form'


const Form = () => {

    const { register, handleSubmit, watch, formState:{errors} } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
        <div>
          <div>
            <label htmlFor="email">
            Email
            </label>  
          </div>  
        </div>
    </form>
  )
}

export default Form
