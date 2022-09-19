import React from 'react'
import { Route, Routes } from 'react-router-dom'

import NavBar from '../components/NavBar'
import BooksList from '../pages/BooksList'
import Home from '../pages/Home'
import MoviesList from '../pages/MoviesList'
import Book from '../pages/Book'
import BooksLayout from '../pages/BooksLayout'
// import MoviesLayout from '../pages/MoviesLayout'
// import Movie from '../pages/Movie'
import MoviesRoutes from '../pages/MoviesRoutes'

export default function MainContainer() {
  return (
    <div>
      MainContaine
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BooksLayout />}>
          <Route index element={<BooksList />} />
          <Route path=":id" element={<Book />} />
        </Route>
        <Route path="/movies/*" element={<MoviesRoutes />} />
      </Routes>
    </div>
  )
}
