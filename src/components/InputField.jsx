import React from 'react'
import '../styles/InputField.css'
import InputGenInfo from './InputGenInfo'
import InputEducation from './InputEducation'
import InputWorkExperience from './InputWorkExperience'

function InputField(props) {
  return (
    <div className='inputs'>
        <InputGenInfo
         changeName={props.changeName} 
         changeEmail={props.changeEmail} 
         changePhone={props.changePhone}
        
         />
        <InputEducation
         changeDegree={props.changeDegree}
         changeSchool={props.changeSchool}
         changeStartDate={props.changeStartDate}
         changeEndDate={props.changeEndDate}
          />
        <InputWorkExperience />
    </div>
  )
}

export default InputField