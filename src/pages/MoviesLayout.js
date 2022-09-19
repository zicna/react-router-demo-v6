import React from 'react'
import { Link } from 'react-router-dom'

const dummyMoviesData = [
  {
    id: 1,
    title: 'Casablanca',
    price: 9.99,
  },
  {
    id: 2,
    title: 'Jaws',
    price: 8.99,
  },
  {
    id: 3,
    title: 'Jaws 2',
    price: 19.99,
  },
]

export default function MoviesLayout() {
  const renderLinks = dummyMoviesData.map((movie) => (
    <li key={`movie${movie.id}`}>
      <Link to={`/movies/${movie.id}`} state={movie}>
        {movie.title}
      </Link>
    </li>
  ))

  return (
    <div>
      MoviesLayout
      <ul>{renderLinks}</ul>
    </div>
  )
}
