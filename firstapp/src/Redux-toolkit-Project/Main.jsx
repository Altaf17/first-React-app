import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
// import { Navbar } from 'react-bootstrap'
import Navbar from './Components/Navbar'
import './main.css'

const Main = () => {
    return (
        <>
            <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/cart' element={<Cart/>} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default Main