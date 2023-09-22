import React from 'react'
import '../styles/Resume.css'
function Resume(props) {
  return (
    <div className='resume'>
      <h3 className='name'>{props.name}</h3>
      <div className='emailPhone'>
      <p className='email'>{props.email}</p>
      <p className='phone'>{props.phone}</p>
      </div>
      <hr />
      <h4>Education</h4>
      <div className='education'>
      <p className='degree upper-case'>{props.degree}</p>
      <p className='cap'>{props.school}</p>
      <p className='date'>{props.start}</p>
      <p className='date'> - {props.end}</p>
      </div>
      <h4>Work Experience</h4>
      <div className='work-exp'>
      <p className='upper-case'>{props.job}</p>
      <p className='cap'>{props.company}</p>
      <p className='date'>{props.start1}</p>
      <p className='date'> - {props.end1}</p>
      <p>{props.description}</p>
      </div>
    </div>
  )
}
// name={name}
export default Resume