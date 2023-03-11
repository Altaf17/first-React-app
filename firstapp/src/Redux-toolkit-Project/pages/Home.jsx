import React from 'react'
import Products from '../Components/Products'

const Home = () => {
    return (
        <div>
            <h1 className='heading'>Welcome To Skyline-Redux-Toolkit store</h1>
            <section>
                <h2>Products</h2>
                <Products/>
            </section>
        </div>
    )
}

export default Home