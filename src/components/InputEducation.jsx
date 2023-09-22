import React from 'react'

function InputEducation(props) {
  const handleChangeDegree = (e)=> props.changeDegree(e.target.value)
  const handleChangeSchool = (e)=> props.changeSchool(e.target.value)
  const handleChangeStartDate = (e)=> props.changeStartDate(e.target.value)
  const handleChangeEndDate = (e)=> props.changeEndDate(e.target.value)
  return (
    <div className='input-field'>
    <h3>Education Experience</h3>
    <form>
    <label htmlFor="degree">Degree</label>
    <input id="degree" name="degree" type="text" placeholder='Enter Degree/Field of study' onChange={handleChangeDegree} />
    <label htmlFor="school">School</label>
    <input id='school' type='text' name="school" placeholder='Enter school / University' onChange={handleChangeSchool} />
    <div id='date'>
    <label htmlFor="start-date">Start Date</label>
    <input type="date" id="start-date" name="start-date" placeholder="yy-mm-dd" onChange={handleChangeStartDate} />
    <label htmlFor="end-date">End Date</label>
    <input type="date" id="end-date" name="end-date" placeholder="yy-mm-dd" onChange={handleChangeEndDate} />
    </div>
    </form>
  </div>
  )
}

export default InputEducation