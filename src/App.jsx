import Form from './components/form/Form'
import { useState,useEffect } from 'react'
import Bmi from './components/Bmi/Bmi'
import './App.css'
import Tabel from './components/Table/Tabel'

function App() {
  const [bmi,setBmi] = useState()
  const [bmiType,setBmiType] = useState('Not Calculated')
  
  useEffect(()=>{
    type(bmi)
  },[bmi])

  const getBmi = (weight,height)=>{
    console.log('hyy',weight);
    console.log('byy',height);
    setBmi((weight/(height*height)).toFixed(2))
    type(bmi)
    
    // setBmiType(bType) 
  }
  
  const type = (bmi)=>{
    if(bmi < 18.5){
      setBmiType('underweight')
    }else if(18.5 < bmi && bmi < 24.9){
      setBmiType('normal')
    }else if(24.9 < bmi && bmi < 29.9){
      setBmiType('overweight')
    }else if(bmi > 29.9){
      setBmiType('obesity')
    }
  }
  
  
  console.log('yesss',bmiType)
  console.log('nooo',bmi);
  return (
    <>
    <div className='body'>
      <div className='container p-4'>
        <h4 className='heading'>BMI Calculator..</h4>
        <Form getData = {getBmi}/>
        <div className=' col-md-12 mx-auto'>
          <div className='col-md-5 col-xs-12 mx-auto'>
            <Bmi bmi={bmi} bmiType={bmiType}/>
          </div>
          <div className='col-md-5 col-xs-12 mx-auto'>
            <Tabel/>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
