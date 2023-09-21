import './App.css'
import InputField from './components/InputField'
import Resume from './components/Resume'
import SideBar from './components/SideBar'
function App() {

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: 0, margin: 0}}>
      <SideBar />
      <InputField />
      <Resume />
    </div>
  )
}

export default App
