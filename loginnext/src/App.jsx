import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import React from 'react';

import Login from "./components/login"
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import Profile from './components/Profile';
import Register from './components/Register';
import { AuthProvider } from './hooks/Auth';
import RequireAuth from './components/RequireAuth';

function App() {
  const [theme, setTheme] = useState('light');
  useEffect(() => {

    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        console.log("->dark")
        setTheme("dark")
      }
      //setTheme(localTheme);
      //console.log("lcoal",localTheme)
    }
    console.log("lcoal", localTheme)
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    console.log(theme)
  };


  return (
    <>
    
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Nav toggle={toggleTheme} />}>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />}/> 
            <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>}/>
            <Route path='/product' element={<RequireAuth><Product/></RequireAuth>}/>
            <Route path='/about' element={<About />} />
            <Route path='*' element={<>nomatch</>}/>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App
