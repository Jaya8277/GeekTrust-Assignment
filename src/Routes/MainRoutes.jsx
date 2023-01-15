import React from 'react'
import {Route,Routes} from 'react-router-dom';
import Home from '../components/Home';
import Cart from '../components/Cart/CartList'; 
import Navbar from '../components/Navbar/Navbar'
const MainRoutes = () => {
  return (
    <div>
    <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes