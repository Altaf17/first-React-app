import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const EmployeeCreate = () => {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [isActive, setIsActive] = useState(true);
    const [validation, setValidation] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const empdata = { id, name, email, phone, isActive }
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empdata)
        }).then((res) => {
          toast.success("Employee Successfully Created",{autoClose:800});
          setTimeout(()=>{
              navigate('/');
          },2000)
        }).catch((err) => {
            toast.error("Somthing Went Wrong")
        })
    }
    return (
        <div >
            <div className="row">
            <ToastContainer />
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="card">
                            <div className="card-title text-center">
                                <h2>Create Employee </h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="">ID</label>
                                            <input type="text" placeholder='Auto Generated' value={id} disabled='disabled' className='form-control' />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="">Name</label>
                                            <input type="text" required value={name} onMouseDown={(e) => setValidation(true)} placeholder="Enter Name" onChange={(e) => setName(e.target.value)} className='form-control' />
                                            {name.length == 0 && validation && <span className='text-danger'>Enter the  Name</span>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="">Email</label>
                                            <input type="text" value={email} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} className='form-control' />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="">Phone</label>
                                            <input type="text" value={phone} placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} className='form-control' />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-check">
                                            <input type="checkbox" checked={isActive} className='form-check-input' value={isActive} onChange={(e) => setIsActive(e.target.checked)} />
                                            <label htmlFor="" className='form-check-label'>Is Active</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button type='submit' className='btn btn-success'>Save</button>
                                            <Link to='/' className='btn btn-danger'>Back</Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EmployeeCreate