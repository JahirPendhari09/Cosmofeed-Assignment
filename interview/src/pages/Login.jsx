import React ,{ useEffect, useState } from 'react'
import {Navigate} from 'react-router-dom'


const Login = () => {
    const auth = localStorage.getItem("auth") || ""
    const [state , setState ]= useState(false);

    const username ="jahir@gmail.com";
    const password = "123456"

    const handleSubmit = (e)=>{
        e.preventDefault();
        setState(!state) 
        localStorage.setItem("auth",JSON.stringify(true))
    }

    if(auth)    return <Navigate to="/home" />
    
    return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='enter email 'value={username}  />
        <input type="password" placeholder='enter password' value={password}  />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Login
