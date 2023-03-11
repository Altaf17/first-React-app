import React,{useState,useEffect} from 'react'
import axios from 'axios'
// import Data from '../db.json'

const EmployeeList = () => {
    const [post,setPost]=useState("")

    // console.log(Data)


        

    useEffect(()=>{
        axios.get('http://localhost:3000/employees')
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    },[])
    console.log(post)
    return (
        <div className='container'>
            <div className="card">
                <div className="card-title">
                    <h1>Employee Listing</h1>
                </div>
                <div className="card-body">
                    <table className='table table-bordered'>
                        <thead className='bg-dark text-white'>
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>

                    </table>

                </div>
                <div className="card-footer">

                </div>
            </div>
        </div>
    )
}

export default EmployeeList