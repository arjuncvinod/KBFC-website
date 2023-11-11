import React from 'react'
import logo from "../assets/images/498.webp"

function NavBar() {
  return (
    <nav>
      <img src={logo} alt=" " />
      <ul>
        <li>Home</li>
        <li>Squad</li>
        <li>Gallary</li>
        <li>News</li>
      </ul>
    </nav>
  )
}

export default NavBar
