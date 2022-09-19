import React from 'react'
import { Route, Routes } from 'react-router-dom'

import NavBar from '../components/NavBar'
import BooksList from '../pages/BooksList'
import Home from '../pages/Home'
import Book from '../pages/Book'
import BooksLayout from '../pages/BooksLayout'
import MoviesRoutes from '../pages/MoviesRoutes'
import PageNotFound from '../pages/PageNotFound'

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
        < Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  )
}
