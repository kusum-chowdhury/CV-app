import React from 'react'
import '../styles/InputField.css'
import InputGenInfo from './InputGenInfo'
import InputEducation from './InputEducation'

function InputField() {
  return (
    <div className='inputs'>
        <InputGenInfo />
        <InputEducation />
    </div>
  )
}

export default InputField