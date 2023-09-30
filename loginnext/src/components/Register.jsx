import React from 'react'
import { useState } from 'react'
import axios from '../api/axios.js'

import { useNavigate,useLocation } from 'react-router-dom'
function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin=async(e)=>{
    e.preventDefault();
    console.log(JSON.stringify({ username, password }))
    axios.post(`/users/register`,{"username":username,"password":password})
    .then((res)=>{
      console.log(res.data)
      auth.login(res.data)
    })
    
  }
  
  return (
    <div >
      <div className='flex flex-col justify-center items-center gap-[19px]'>
      <h4>just-register</h4>
      <label>
        Username:{' '}
        <input className='bg-primary' type='text' onChange={e=>setUsername(e.target.value)}/>
      </label>
      <label>
        password:{' '}
        <input className='bg-primary' type='text' onChange={e=>setPassword(e.target.value)}/>
      </label>
      <button onClick={handleLogin}>Register</button>
      </div>
    </div>
    )
}

export default Register