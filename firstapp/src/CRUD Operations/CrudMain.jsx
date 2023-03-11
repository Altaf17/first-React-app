import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import EmployeeList from './EmployeeList'

const CrudMain = () => {
  return (
    <div>
        <h1>CRUD Operations in React</h1>
        
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<EmployeeList/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default CrudMain