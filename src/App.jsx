import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contact from './pages/Contact'
import "./App.css"
import Navbar from './pages/Navbar'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
         <Route  path="/" element={<Home />}/>
         <Route path='/about' element={<About />}/>
         <Route path='/product' element={<Product />}/>
         <Route path='/contact' element={<Contact />}/>
      </Routes>
    </div>
  )
}

export default App
