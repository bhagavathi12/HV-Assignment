import ConsentManager from "./components/ConsentManager"
import Home from "./components/Home"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import InputScreen from "./components/InputScreen"
import ConsentScreen from "./components/ConsentScreen"
import Token from "./components/Token"
import Validationdetails from "./components/Validationdetails"

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<InputScreen />} />
        <Route path="/consentscreen" element={<ConsentScreen />} />
        <Route path="/consentscreen/token" element={<Token />}/>
        <Route path="/consentscreen/token/validate" element={<Validationdetails />}/>
      </Routes>
    </>
  )
}

export default App
