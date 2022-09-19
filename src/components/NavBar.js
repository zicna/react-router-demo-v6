import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">home</Link>
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
