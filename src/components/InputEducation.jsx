import React from 'react'

function InputEducation() {
  return (
    <div className='input-field'>
    <h3>Education Experience</h3>
    <form>
    <label htmlFor="degree">Degree</label>
    <input id="degree" name="degree" type="text" placeholder='Enter Degree/Field of study' />
    <label htmlFor="school">School</label>
    <input id='school' type='text' name="school" placeholder='Enter school / University' />
    <div id='date'>
    <label htmlFor="start-date">Start Date</label>
    <input type="date" id="start-date" name="start-date" value="yy-mm-dd" />
    <label htmlFor="end-date">End Date</label>
    <input type="date" id="end-date" name="end-date" value="yy-mm-dd" />
    </div>
    </form>
  </div>
  )
}

export default InputEducation