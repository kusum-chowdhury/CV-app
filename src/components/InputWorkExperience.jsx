import React from 'react'

function InputWorkExperience() {
  return (
    <div className='input-field'>
    <h3>Professional Experience</h3>
    <form>
    <label htmlFor="job-title">Job Title</label>
    <input id="job-title" name="job-title" type="text" placeholder='Enter Job title' />
    <label htmlFor="company">Company</label>
    <input id='company' type='text' name="company" placeholder='Enter company name' />
    <div id='date'>
    <label htmlFor="start-date">Start Date</label>
    <input type="date" id="start-date" name="start-date" value="yy-mm-dd" />
    <label htmlFor="end-date">End Date</label>
    <input type="date" id="end-date" name="end-date" value="yy-mm-dd" />
    </div>
    <label htmlFor="description">Description</label>
    <textarea id='description' type='text' name="description" placeholder='Main tasks' />
    </form>
  </div>
  )
}

export default InputWorkExperience