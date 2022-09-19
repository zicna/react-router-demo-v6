import { useLocation } from 'react-router-dom'
const Movie = () => {
  const movie = useLocation().state
  return (
    <div>
        Movie page
      <h1>{movie.title}</h1>
      <p>{movie.price}</p>
    </div>
  )
}

export default Movie
