import React, { useState } from 'react'
import { useAuth } from './Auth'
import axios from 'axios'
import { useNavigate,useLocation } from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const location =useLocation()
  const auth=useAuth()
  const navigate=useNavigate()
  const redirectPath=location.state?.path||'/'
  const handleLogin=async(e)=>{
    e.preventDefault();
    console.log(JSON.stringify({ username, password }))
    const temp=JSON.stringify({ username, password })
    axios.post('//localhost:5001/users/login',{"username":username,"password":password})
    .then((res)=>{
      console.log(res.data)
    })
    auth.login(username,password)
    navigate(redirectPath,{replace:true})
  }
  return (
    <div>
      <label>
        Username:{' '}
        <input className='bg-primary' type='text' onChange={e=>setUsername(e.target.value)}/>
      </label>
      <label>
        password:{' '}
        <input className='bg-primary' type='text' onChange={e=>setPassword(e.target.value)}/>
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login