import Form from './components/form/Form'
import { useState } from 'react'
import Bmi from './components/Bmi/Bmi'
import './App.css'

function App() {
  const [bmi,setBmi] = useState()
  const getBmi = ()=>{
    console.log(setBmi);
    console.log(bmi);
  }

  return (
    <>
      <h4 className='heading'>BMI Calculator</h4>
      <Form getData = {getBmi}/>
      <Bmi />
    </>
  )
}

export default App
