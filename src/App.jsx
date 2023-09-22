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
      />
    </div>
  )
}

export default App
