/* eslint-disable no-unused-vars */
import React from 'react'
import './Table.css'

function Tabel() {
  return (
    <div className='col-md-12 text-center m-0'>
        <div className='table1 m-5 p-4'>
            <h5 className='text-center'>BMI Table</h5>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Type</th>
                    <th scope="col">BMI</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">Underweight</th>
                    <td>less than 18.5</td>
                    </tr>
                    <tr>
                    <th scope="row">Normal</th>
                    <td>18.5 - 24.9</td>
                    </tr>
                    <tr>
                    <th scope="row">Overweight</th>
                    <td>24.9 - 34.9</td>
                    </tr>
                    <tr>
                    <th scope="row">Obeisity</th>
                    <td>greater than 34.9</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Tabel
