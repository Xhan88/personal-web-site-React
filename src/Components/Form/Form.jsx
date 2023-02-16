import React from 'react'

const Form = () => {
  return (
    <div className='form-container'>
      <div className='form'>
        <form>
          <input 
          type="email"
          placeholder='Tu Email'
           />
          <input 
          type="text"
          placeholder='Tu nombre'
           />
          <input 
          type="text-area"
          placeholder='Asunto' />
        </form>

      </div>
    </div>
  )
}

export default Form
