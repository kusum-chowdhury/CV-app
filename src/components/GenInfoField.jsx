import React from 'react'


function Geninfo(props) {

  return (
    <div className='genInfo'>
       <h3>General Info</h3>
       <p>{props.name}</p>
      <p>email</p>
      <p>Phone number</p>
    </div>
  )
}

export default Geninfo