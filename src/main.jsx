import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutMe from './components/AboutMe/AboutMe'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import Works from './components/Works/Works'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(

  <>
  <BrowserRouter>

  <NavBar />
  

  <Routes>
   <Route path='/' element={ <Home /> }/>
   <Route path='/Works' element={ <Works />} />
   <Route path='/AboutMe' element={ <AboutMe />} />
   <Route path='/Contact' element={ <Contact />} />
  </Routes>
  </BrowserRouter>
  </>
)

