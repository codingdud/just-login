import React from 'react'
import {useAuth} from '../hooks/Auth'
import { Navigate,useLocation } from 'react-router-dom'



function RequireAuth({children}) {
    const location =useLocation()
    const auth=useAuth()
    if(!auth.user.accessToken){
        return(<Navigate to='/login' state={{path:location.pathname}}/>)
    }
  return children
}

export default RequireAuth