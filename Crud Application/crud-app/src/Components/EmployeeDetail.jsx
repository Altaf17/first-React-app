import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const EmployeeDetail = () => {
  const [empData, setEmpData] = useState()
  const { empid } = useParams();


  useEffect(() => {
    fetch("http://localhost:3000/users/" + empid).then((res) => {
      return res.json();
    }).then((res) => {
      setEmpData(res)
    }).catch((err) => {
      console.log(err.message)
    })

  }, []);


  return (
    <div style={{height:"500px",width:"1330px",}}>
      
      {
        empData &&
        <div className="card bg-light ms-5 me-5">
          <div className="card-title">
          <h1>Employee Details</h1>
          </div>
          <div className="card-body">
            <h1>Employee Name is <b className='text-color-teal'>{empData.name}</b>  Employee Id is : <b>{empData.id}</b></h1>
            <h3>Employee Details</h3>
            <h5>Emai : {empData.email} </h5>
            <h5>Emai : {empData.phone} </h5>
          </div>
          <div className="card-footer">
            <Link to='/' className='btn btn-danger'>Back To List</Link>
          </div>
        </div>
      }

    </div>
  )
}

export default EmployeeDetail