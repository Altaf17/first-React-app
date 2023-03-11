import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='d-flex align-items-center justify-content-space-between' style={{justifyContent:"space-between"}}>
        <span className='logo'>Redux-Toolkit</span>
        <div>
            <Link to='/' className='navLink'>Home</Link>
            <Link to='/cart' className='navLink'>Cart</Link>
            <span className='cartCount'>Cart-Items: 0</span>
        </div>


    </div>
  )
}

export default Navbar