import React from 'react'
import '../Form/Form.css'

const Form = () => {
  return (
    <div className='form-container'>
      <div className='form'>
        <form>
          <input 
          type="email"
          placeholder='Email'
           />
          <input 
          type="text"
          placeholder='Name'
           />
          <input 
          type="text-area"
          placeholder='Enter your menssage' />
        </form>

      </div>
    </div>
  )
}

export default Form
