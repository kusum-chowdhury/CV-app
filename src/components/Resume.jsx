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
    </div>
  )
}
// name={name}
export default Resume