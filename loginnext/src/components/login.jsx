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
    axios.post('https://loginapi-hs1tn3el1-codingdud.vercel.app/users/login',{"username":username,"password":password}, {withCredentials: true, credentials: 'include'})
    .then((res)=>{
      console.log(res.data)
      auth.login(res.data)
    })
    
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