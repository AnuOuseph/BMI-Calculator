/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Bmi.css'

function Bmi({bmi,bmiType}) {
 
  return (
    <div className='col-md-12 text-center m-0'>
      <div className='bmi  m-5 p-4'>
        <h5>Your BMI Score !</h5>
        <h4>{bmi}</h4>
        <h4>{bmiType}</h4>
      </div>
    </div>
  )
}

export default Bmi
