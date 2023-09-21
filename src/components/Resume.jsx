import React from 'react'
import '../styles/Resume.css'
function Resume(props) {
  return (
    <div className='resume'>
      <h3 className='name'>{props.name}</h3>
      <p>{props.email}</p>
      <p>{props.phone}</p>
    </div>
  )
}
// name={name}
export default Resume