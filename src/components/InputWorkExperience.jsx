import React from 'react'

function InputWorkExperience() {
  return (
    <div className='input-field'>
    <h3>Professional Experience</h3>
    <form>
    <label for="job-title">Job Title</label>
    <input id="job-title" name="job-title" type="text" placeholder='Enter Job title' />
    <label for="company">Company</label>
    <input id='company' type='text' name="company" placeholder='Enter company name' />
    <div id='date'>
    <label for="start-date">Start Date</label>
    <input type="date" id="start-date" name="start-date" value="yy-mm-dd" />
    <label for="end-date">End Date</label>
    <input type="date" id="end-date" name="end-date" value="yy-mm-dd" />
    </div>
    <label for="description">Description</label>
    <textarea id='description' type='text' name="description" placeholder='Main tasks' />
    </form>
  </div>
  )
}

export default InputWorkExperience