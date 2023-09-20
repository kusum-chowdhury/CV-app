import React from 'react'


function InputGenInfo() {

  return (
    <div className='input-general-info input-field'>
      <h3>General Informations</h3>
      <form>
      <label for="name">Full Name</label>
      <input id="name" name="name" type="text" placeholder='Enter your full name' />
      <label for="email">Email Address</label>
      <input id='email' type='email' name="email" placeholder='Enter your email address' />
      <label for="phone">Phone Number</label>
      <input id='phone' type='text' name='phone' placeholder='Enter your phone number' />
      </form>
    </div>
  )
}

export default InputGenInfo