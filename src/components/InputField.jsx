import React from 'react'
import '../styles/InputField.css'
import InputGenInfo from './InputGenInfo'
import InputEducation from './InputEducation'
import InputWorkExperience from './InputWorkExperience'

function InputField() {
  return (
    <div className='inputs'>
        <InputGenInfo />
        <InputEducation />
        <InputWorkExperience />
    </div>
  )
}

export default InputField