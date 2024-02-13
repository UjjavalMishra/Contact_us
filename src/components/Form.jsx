import React from 'react'
import Button from './Button'
const Form = () => {
  return (
    <form className='flex flex-col pt-5'>
      <p>Let us connect to you</p>
      <input className='pt-3 outline-none
      ' type="text" placeholder='Name'/>
      <input  className='pt-3 pb-5 outline-none'type="email" placeholder='Email'/>
      <Button text="submit" icon="" outline='true'/>
    </form>
  )
}

export default Form
