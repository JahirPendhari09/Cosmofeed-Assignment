import { useEffect, useState } from "react"
import {Navigate} from "react-router-dom"

const Home =()=>{
    const [state , setState] = useState(false)
    const auth  = localStorage.getItem("auth") || ""

    const handleLogout =()=>{
        setState(!state)
        localStorage.removeItem("auth")
    }

    if(!auth)   return <Navigate to="/login" />

    return ( <button onClick={handleLogout}>Logout</button> )
}

export default Home