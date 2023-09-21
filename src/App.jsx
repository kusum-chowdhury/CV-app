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
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: 0, margin: 0}}>
      <SideBar />
      {/* lifting the state up */}
      <InputField 
      changeName={changeName} 
      changeEmail={changeEmail} 
      changePhone={changePhone} 
      />
      {/* lifting the state up */}
      <Resume 
      name={name}
      email={email}
      phone={phone}
      />
    </div>
  )
}

export default App
