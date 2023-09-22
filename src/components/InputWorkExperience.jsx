import React from 'react'

function InputWorkExperience(props) {
  const handleChangeJob = (e)=> props.changeJob(e.target.value)
  const handleChangeCompany = (e)=> props.changeCompany(e.target.value)
  const handleChangeStart = (e)=> props.changeStartDate1(e.target.value)
  const handleChangeEnd = (e)=> props.changeEndDate1(e.target.value)
  const handleChangeDescription = (e)=> props.changeDescription(e.target.value)
  return (
    <div className='input-field'>
    <h3>Professional Experience</h3>
    <form>
    <label htmlFor="job-title">Job Title</label>
    <input id="job-title" name="job-title" type="text" placeholder='Enter Job title' onChange={handleChangeJob} />
    <label htmlFor="company">Company</label>
    <input id='company' type='text' name="company" placeholder='Enter company name' onChange={handleChangeCompany} />
    <div id='date'>
    <label htmlFor="start-date">Start Date</label>
    <input type="date" id="start-date" name="start-date" value="yy-mm-dd" onChange={handleChangeStart} />
    <label htmlFor="end-date">End Date</label>
    <input type="date" id="end-date" name="end-date" value="yy-mm-dd" onChange={handleChangeEnd} />
    </div>
    <label htmlFor="description">Description</label>
    <textarea id='description' type='text' name="description" placeholder='Main tasks' onChange={handleChangeDescription} />
    </form>
  </div>
  )
}

export default InputWorkExperience