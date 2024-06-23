import React from 'react'
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { useAuth } from '../hooks/Auth'
import { useNavigate } from 'react-router-dom'
import  useRefreshToken  from '../hooks/useRefreshToken'

function Profile() {
  const refresh=useRefreshToken()
  const axiosPrivate=useAxiosPrivate()
  const auth=useAuth()
  const navigate=useNavigate()
  const location =useLocation()
  const redirectPath=location.state?.path||'/'
  const handleLogout=()=>{
    auth.logout()
    navigate('/')
  }
  const handleTest=async(e)=>{
    e.preventDefault();
    axiosPrivate.get('/users/test')
    .then((res)=>{
      console.log(res.data)
      //console.log("auth",auth?.user)
    })
    .catch((err)=>{
      console.log(err)
    })
    navigate(redirectPath,{replace:true})
    console.log(auth?.user)
  }
  
  const handleAuth=async(e)=>{
    e.preventDefault();
    axiosPrivate.get('/users/authenticate')
    .then((res)=>{
      console.log(res.data)
      //console.log("auth",auth?.user)
    })
    .catch((err)=>{
      console.log(err)
    })
    navigate(redirectPath,{replace:true})
    console.log(auth?.user)
  }

  const handleRefresh=async(e)=>{
    e.preventDefault();
    axiosPrivate.get('/users/refreshToken')
    .then((res)=>{
      console.log(res.data)
      //console.log("auth",auth?.user)
    })
    .catch((err)=>{
      console.log(err)
    })
    navigate(redirectPath,{replace:true})
    console.log(auth?.user)
  }
  return (
    <div>Wellcom {auth?.user?.accessToken}
    <button onClick={handleLogout}>Logout</button>
    <button onClick={handleRefresh}>referesh</button>
    <button onClick={handleAuth}>Auth</button>
    <button onClick={handleTest}>test</button>

    </div>

  )
}

export default Profile