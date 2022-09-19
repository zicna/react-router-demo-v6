import React from 'react'
import { Route, Routes } from 'react-router-dom'

import NavBar from '../components/NavBar'
import BooksList from '../pages/book/BooksList'
import Home from '../pages/Home'
import Book from '../pages/book/Book'
import BooksLayout from '../pages/book/BooksLayout'
import MoviesRoutes from '../pages/moviePages/MoviesRoutes'
import PageNotFound from '../pages/PageNotFound'
import MagazineRoutes from '../pages/magazine/MagazineRoutes'

export default function MainContainer() {
  return (
    <div>
      MainContaine
      <NavBar />
      <Routes>
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BooksLayout />}>
          <Route index element={<BooksList />} />
          <Route path=":id" element={<Book />} />
        </Route>
        <Route path="/movies/*" element={<MoviesRoutes />} />
        <Route path="/magazine/*" element={<MagazineRoutes />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}
