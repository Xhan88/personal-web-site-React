import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import { AboutMe } from './Components/AbaoutMe/AboutMe'
import Contact from './Components/Contact/Contact'
import NavBar from './Components/NavBar/NavBar'
import Portafolio from './Components/portafolio/Portafolio'
import Preparation from './Components/Preparation/Preparation'
// import Proyects from './Components/Proyects/Proyects'
// import { initFirestoreApp } from './Firestore/config'
import './index.css'

// initFirestoreApp() 

ReactDOM.createRoot(document.getElementById('root')).render(

  <>
  <BrowserRouter>

  <NavBar />
  <Routes> 
    
    <Route path='/aboutMe' element={<AboutMe /> } />
    <Route path='/' element={<App />} />
    <Route path='/Portafolio' element={<Portafolio /> } />
    <Route path='/Contact' element={<Contact />} />  
    <Route path='/Preparation' element={<Preparation /> }                                                                                                                                                          />
  </Routes>
    
  </BrowserRouter>
   
  </>
)
