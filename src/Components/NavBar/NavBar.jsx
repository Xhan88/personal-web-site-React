import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../NavBar/NavBar.css'

const NavBar = () => {


  return (


    <>
     <div className='Navbar-container'>
       <Link to='/'>
         <img className='logo-navbar' src="/logo-hover.png" alt="" />
       </Link>
     

      <div className='li-container'>
        <ul className='nav-bar-list'>
          <NavLink to='/Preparation'>
            <li>
            Preparation 
            </li>
          </NavLink>
          
          <NavLink to='/AboutMe'>
            <li>
              About me
            </li>
          </NavLink>
          
          <NavLink to='/Portafolio'> 
             <li>
              Portafolio
             </li>
          </NavLink>
         
          <NavLink to='/Contact' >
            <li>
              Contact
            </li>
          </NavLink>
          

        </ul>
      </div>

      </div>
    </>
  )
}

export default NavBar
