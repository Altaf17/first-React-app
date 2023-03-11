import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import {Link} from 'react-router-dom'
import { BrowserRouter, Link, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { toast } from 'react-toastify';

const EmployeeList = () => {
    const [data, setData] = useState(null)
    const navigate = useNavigate()
    const { empid } = useParams();

    useEffect(() => {
        fetch("http://localhost:3000/users")
            .then((res) => {
                return res.json();
            }).then((res) => {
                setData(res)
            }).catch((error) => {
                console.log(error.message)
            })
    }, [])

    const handleEdit = (id) => {
        navigate("/employee/edit/" + id)

    }

    const handleRemove = (id) => {
        if (window.confirm("Do You want to Remove")) {
            fetch("http://localhost:3000/users/" + id, {
                method: "DELETE",
            }).then((res) => {
                alert('Remove successfully.')
                window.location.reload()
                navigate('/');
            }).catch((err) => {
                console.log(err.message)
            })
        }

    }
    const handleDetail = (id) => {
        navigate("/employee/detail/" + id)
    }
    return (
        <div className='container'  >
            <div className="card" style={{
                backgroundColor: "##f2f2f2",
            }}>
                <div className="card-title bg-light">
                    <h1 className='text-center' style={{ backgroundColor: "#00ff99" }}>Employee Listing</h1>
                </div>
                <div className="card-body">
                    <div className='d-flex justify-content-between mb-1'>
                        <span className='display-6'>Manage Employees</span>
                        <Link className='btn btn-success me-2' to='employee/create'>Add New</Link>
                    </div>
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
                            {
                                data && data.map((item) => {
                                    return (
                                        <tr key={item.id} className='text-black'>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td className='me-1'>
                                                <a className='btn btn-success me-1' onClick={() => { handleEdit(item.id) }}>edit</a>
                                                <a className='btn btn-danger me-1' onClick={() => { handleRemove(item.id) }}>Remove</a>
                                                <a className='btn btn-primary me-1' onClick={() => { handleDetail(item.id) }}>Details</a>
                                            </td>
                                        </tr>
                                    )
                                })

                            }

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