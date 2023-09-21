import React from 'react'


function InputGenInfo(props) {
const handleChangeName = (e)=> props.changeName(e.target.value)
const handleChangeEmail = (e)=> props.changeEmail(e.target.value)
const handleChangePhone = (e)=> props.changePhone(e.target.value)
  return (
    <div className='input-general-info input-field'>
      <h3>General Informations</h3>
      <form>
      <label htmlFor="name">Full Name</label>
      <input id="name" name="name" type="text" placeholder='Enter your full name' onChange={handleChangeName} />
      <label htmlFor="email">Email Address</label>
      <input id='email' type='email' name="email" placeholder='Enter your email address' onChange={handleChangeEmail} />
      <label htmlFor="phone">Phone Number</label>
      <input id='phone' type='text' name='phone' placeholder='Enter your phone number' onChange={handleChangePhone} />
      </form>
    </div>
  )
}

export default InputGenInfo