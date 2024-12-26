    import React from 'react'
    import { Link } from 'react-router-dom'
    const Navbar = () => {
    return (
        <div className='flex items-center justify-between py-5 px-10 text-xl font-medium'>
        <h3>Sheryians</h3>
        <div className='flex gap-10'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/product">Product</Link>
        </div>
        </div>
    )
    }

    export default Navbar
