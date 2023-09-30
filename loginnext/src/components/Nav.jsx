import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/Auth'


function Nav({ toggle }) {
    const auth = useAuth()
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            TextDecoration: isActive ? "none" : "underline",
            color: isActive ? "var(--accent)" : "var(--secondary)",
        }
    }
    return (
        <div className='flex flex-col justify-between  w-full items-start'>
            <nav className='flex-no-wrap relative flex flex-row justify-between w-full items-center p-2 shadow-md shadow-black/5'>
                <div>
                    {!auth.user.accessToken ? (
                        <>
                            <NavLink style={navLinkStyles} to="/">Home</NavLink>
                            <NavLink style={navLinkStyles} to='/login'>Login</NavLink>
                            <NavLink style={navLinkStyles} to='/register'>Register</NavLink>
                            <NavLink style={navLinkStyles} to="/about">About</NavLink>
                        </>
                    ) : (
                        <>
                            <NavLink style={navLinkStyles} to="/">Home</NavLink>
                            <NavLink style={navLinkStyles} to="/product">product</NavLink>
                            
                            <NavLink style={navLinkStyles} to="/about">About</NavLink>
                        </>
                    )}
                </div>
                <div>
                <button onClick={toggle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 73 73" fill="none">
                        <circle cx="24" cy="48" r="25" fill="var(--text)" />
                    </svg>
                </button>
                {auth.user.accessToken && (
                    <NavLink style={navLinkStyles} to="/profile">Profile</NavLink>
                )}
                </div>
            </nav>

            <svg className="w-full" xmlns="http://www.w3.org/2000/svg" height="2" viewBox="2" fill="none">
                <path d="M0 1H1800" stroke='var(--text)' />
            </svg>

            <div className=' w-full h-full flex flex-col flex-grow place-content-center'>
                <Outlet />
            </div>
            
        </div>
    )
}

export default Nav