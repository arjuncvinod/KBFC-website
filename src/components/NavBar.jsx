import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav>
      <img src="/images/498.webp" alt=" " />
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/squad">Squad</NavLink></li>
        <li><NavLink to="/photos">Photos</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBar
