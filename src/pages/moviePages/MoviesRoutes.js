import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MoviesLayout from '../moviePages/MoviesLayout'
import Movie from '../moviePages/Movie'

export default function MoviesRoutes() {
  return (
    <div>
      <MoviesLayout />
      <Routes>
        <Route path=":id" element={<Movie />}/>
      </Routes>
    </div>
  )
}
