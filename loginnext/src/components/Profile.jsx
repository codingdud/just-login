import React from 'react'
import axios from 'axios'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'

function Profile() {
  const auth=useAuth()
  const navigate=useNavigate()
  const handleLogout=()=>{
    auth.logout()
    navigate('/')
  }


  const handleRefresh=async(e)=>{
    e.preventDefault();
    axios.post('https://loginapi-hs1tn3el1-codingdud.vercel.app/users/refreshToken',{},{withCredentials: true, credentials: 'include'})
    .then((res)=>{
      console.log(res.data)
    })
    navigate(redirectPath,{replace:true})
  }
  return (
    <div>Wellcom {auth?.user?.accessToken}
    <button onClick={handleLogout}>Logout</button>
    <button onClick={handleRefresh}>referesh</button>
    </div>

  )
}

export default Profile