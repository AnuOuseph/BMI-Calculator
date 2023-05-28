/* eslint-disable no-unused-vars */
import React from 'react'
import Bmi from '../Bmi/Bmi'
import { useState } from 'react'
import './Form.css'

function Form() {
    const [weight,setWeight] = useState()
    const [height,setHeight] = useState()
    const [bmi,setBmi] = useState()
   
    function bmiCalc(){
        setBmi(weight/(height*2))
        
    }

  return (
    <div className='form col-md-5 mx-auto'>
      <form action="">
        <div>
        <label htmlFor="weight" className='label'> Weight:</label>
        <input className='w-input' type="tel" onChange={(e)=>{setWeight(e.target.value)}} />
        </div>
        <div>
        <label htmlFor="height" className='label'>Height:</label>
        <input type="tel" className='h-input' onChange={(e)=>{setHeight(e.target.value)}} /> 
        </div>
        <button onClick={(e)=>{e.preventDefault()
            bmiCalc()
           
            }}>Submit</button>
      </form>

      <div>weight:{weight}</div>
      <div>height:{height}</div>
      <div>bmi:{bmi}</div>
    </div>
  )
}

export default Form
