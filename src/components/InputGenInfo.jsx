import React from 'react'


function InputGenInfo() {

  return (
    <div>

        <label htmlFor="name">Name</label>
        <input type="text" id='name' onChange={changeName}/>
        <label htmlFor="email">Email</label>
        <input type="text" id='email'/>
        <label htmlFor="phone-no">Phone no</label>
        <input type="text" id='phone-no'/>
    </div>
  )
}

export default InputGenInfo