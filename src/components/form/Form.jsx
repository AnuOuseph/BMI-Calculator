/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import Bmi from '../Bmi/Bmi'
import { useState } from 'react'
import './Form.css'

function Form({getData}) {
    const [weight,setWeight] = useState()
    const [height,setHeight] = useState()
    const [bmi,setBmi] = useState()
   
    function bmiCalc(){
        getData(weight,height)
        setBmi(weight/(height*2))
        
    }

  return (
    <div className='form col-md-5 mx-auto'>
      <form action="">
        <div>
        <label htmlFor="weight" className='label'> Weight (Kg):</label>
        <input className='w-input' type="tel" placeholder='Eg.45' onChange={(e)=>{setWeight(e.target.value)}} />
        </div>
        <div>
        <label htmlFor="height" className='label'>Height (m):</label>
        <input type="tel" className='h-input' placeholder='Eg.1.6' onChange={(e)=>{setHeight(e.target.value)}} /> 
        </div>
        <button className='btn' onClick={(e)=>{e.preventDefault()
            bmiCalc()
            }}>Submit</button>
      </form>
    </div>
  )
}

export default Form
