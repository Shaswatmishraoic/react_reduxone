import React from 'react'
import { NavLink } from 'react-router-dom'
import './Compo.css'
function Linkhere() {
  return (
    <div>
        <nav className='navbar'>
        <NavLink exact to="/" >
          Home
        </NavLink>
        <NavLink to="/student" >
          Students
        </NavLink>
        <NavLink to="/contact" >
          Contact
        </NavLink>
        </nav>
    </div>
  )
}

export default Linkhere
