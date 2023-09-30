import React, { useState } from 'react'
import { useAuth } from '../hooks/Auth'
import axios from '../api/axios.js'
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
    axios.post(`/users/login`,{"username":username,"password":password}, {withCredentials: true, credentials: 'include'})
    .then((res)=>{
      console.log(res.data)
      auth.login(res.data)
    })
    
    navigate(redirectPath,{replace:true})
  }
  
  return (
    <div >
      <div className='flex flex-col justify-center items-center gap-[19px]'>
      <h4>just-login</h4>
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
    </div>
  )
}

export default Login