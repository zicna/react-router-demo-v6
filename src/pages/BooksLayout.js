import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const bookDammyData = [
  { id: 1, title: 'Hyperspace', price: 9.99 },
  { id: 2, title: 'Black Hole', price: 19.99 },
  { id: 3, title: 'Suprenova', price: 29.99 },
]

export default function BooksLayout() {
  const renderBookLinks = bookDammyData.map((book) => {
    return (
      <li key={book.id}>
        <Link to={`/books/${book.id}`} state={book}>
          {book.title}
        </Link>
      </li>
    )
  })

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/books">back to books</Link>
          </li>
          {renderBookLinks}
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}
