import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Logout() {
    const navigate=useNavigate()

const logoutHandle=()=>{
    navigate('/Login')
}
  return (

<button onClick={logoutHandle}> Logout</button>

    )
}
