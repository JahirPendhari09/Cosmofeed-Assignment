import React from 'react'
import {Routes ,Navigate, Route} from "react-router-dom"

import Login from '../pages/Login'
import PrivateRoutes from '../components/PrivateRoutes'
import Home from '../pages/Home'


const Allroutes = () => {
  return (
   <Routes>
    <Route path="/home" element={<PrivateRoutes> <Home/></PrivateRoutes>}/>
    <Route path='/login' element={<Login/>} />
    <Route path="/" element={<Navigate to="/home" />} />
   </Routes>
  )
}

export default Allroutes
