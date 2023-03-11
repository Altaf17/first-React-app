import React ,{useState,useEffect}from 'react'
import { useNavigate, useParams,Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmployeeEdit = () => {
    // const [empData, setEmpData] = useState()
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [isActive, setIsActive] = useState(true);
    const [validation,setValidation]=useState(false)

    const { empid } = useParams();
    const navigate =useNavigate();

    useEffect(() => {
        fetch("http://localhost:3000/users/" + empid)
        .then((res) => {
          return res.json();
        }).then((res) => {
            setId(res.id)
            setName(res.name)
            setEmail(res.email)
            setPhone(res.phone)
            setIsActive(res.isActive)
            
        //   setEmpData(res)
        }).catch((err) => {
          console.log(err.message)
        })
    
      }, [])

    const handleSubmit = (e)=>{
        e.preventDefault();
        const empdata = {id,name,email,phone,isActive}
        fetch("http://localhost:3000/users/"+empid,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(empdata)
          }).then((res)=>{
              toast.success("Edit Successfully",{autoClose:800});
            //   alert('Saved successfully.')
              setTimeout(()=>{
                navigate('/');
              },2000)
             
          }).catch((err)=>{
            console.log(err.message)
          })
    }

    const handleTost = ()=>{
        toast.success("clicked successfull")
    }

  
  return (
    <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handleSubmit}>
                        <div className="card bg-light">
                            <div className="card-title text-center">
                                <h2>Edit Employee </h2>
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
                                            {name.length==0 && validation &&<span className='text-danger'>Enter the  Name</span>}
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
                                            {/* <ToastContainer /> */}
                                        </div>
                                        <ToastContainer />
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

export default EmployeeEdit