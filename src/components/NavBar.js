import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./styles.css"

export default function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink end to="/" >home</NavLink>
        </li>
        <li>
          <Link to="/books">books</Link>
        </li>
        <li>
          <Link to="/movies">movies</Link>
        </li>
      </ul>
    </div>
  )
}
