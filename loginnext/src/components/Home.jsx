import React, { useState } from 'react'
import Model from './model.jsx'

function Home() {
 const[open,setopen]=useState(false)
 const hondleClose=()=>{
  setopen(!open)
 }
  return (
    <div className="bg-background min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-center text-accent mb-8">A login Page for all queries</h1>
      <p className="text-lg text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis justo vitae nunc mollis, vel rutrum odio condimentum. Nam euismod eros vel elit tempus, at ultricies nunc malesuada.</p>
      <button onClick={()=>setopen(!open)} className="bg-accent text-text py-2 px-4 rounded hover:bg-accent-dark transition duration-300 ease-in-out">Get Started</button>
      <Model open={open} close={hondleClose}>
        <h1 className='text-text'>this is text</h1>
      </Model>
    </div>
    
  )
}

export default Home