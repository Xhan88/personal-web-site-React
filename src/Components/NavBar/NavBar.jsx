import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../NavBar/NavBar.css'

const NavBar = () => {
  return (
    <div>
      <ul className='NavBar'>

        <Link to='/'>
          <li>home</li>
        </Link>
        

        <NavLink to='/Works'>
          <li>Works</li>
        </NavLink>
        
        <NavLink to='/AboutMe'>
          <li>About Me</li>
        </NavLink>
        
        <NavLink to='/Contact'>
          <li>Contact</li>
        </NavLink>
        
      </ul>
    </div>
  )
}

export default NavBar
