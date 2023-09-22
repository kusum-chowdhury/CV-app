import { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
// import { useState } from 'react'
import Resume from './components/Resume'
import SideBar from './components/SideBar'
function App() {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [degree, setDegree] = useState("");
const [school, setSchool] = useState("");
const [start, setStart] = useState("");
const [end, setEnd] = useState("");
const [job, setJob] = useState("");
const [company, setCompany] = useState("");
const [start1, setStart1] = useState("");
const [end1, setEnd1] = useState("");
const [description, setDescription] = useState("");



//for changing and entering the name in the resume
const changeName = (inputValue)=> {
  console.log("helllow")
  setName(inputValue);
}

//for changing and entering the email in the resume
const changeEmail = (inputValue) => {
  setEmail(inputValue);
};

//for changing and entering the phone number in the resume
const changePhone = (inputValue) => {
  setPhone(inputValue);
};

const changeDegree = (inputValue) => {
  setDegree(inputValue);
};

const changeSchool = (inputValue) => {
  setSchool(inputValue);
};

const changeStartDate = (inputValue) => {
  setStart(inputValue);
};

const changeEndDate = (inputValue) => {
  setEnd(inputValue);
};
const changeJob = (inputValue) => {
  setJob(inputValue);
};

const changeCompany = (inputValue) => {
  setCompany(inputValue);
};
const changeStartDate1 = (inputValue) => {
  setStart1(inputValue);
};

const changeEndDate1 = (inputValue) => {
  setEnd1(inputValue);
};

const changeDescription = (inputValue) => {
  setDescription(inputValue);
};


  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: 0, margin: 0}}>
      <SideBar />
      {/* lifting the state up */}
      <InputField 
      changeName={changeName} 
      changeEmail={changeEmail} 
      changePhone={changePhone}
      changeDegree={changeDegree}
      changeSchool={changeSchool} 
      changeStartDate={changeStartDate}
      changeEndDate={changeEndDate}
      changeJob={changeJob}
      changeCompany={changeCompany}
      changeStartDate1={changeStartDate1}
      changeEndDate1={changeEndDate1}
      changeDescription={changeDescription}
      />
      {/* lifting the state up */}
      <Resume 
      name={name}
      email={email}
      phone={phone}
      degree={degree}
      school={school}
      start={start}
      end={end}
      job={job}
      company={company}
      start1={start1}
      end1={end1}
      description={description}
      />
    </div>
  )
}

export default App
