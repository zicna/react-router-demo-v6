import React from 'react'
import { useLocation } from 'react-router-dom'
// import { useOutletContext } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom';

export default function Book() {
  //* const location = useLocation().state
  //* const book = location.state

  const context = useOutletContext()
  console.log(context)
  const book = useLocation().state
  return (
    <div>
      Book Profile Page
      <h2>{book.title}</h2>
      <p>${book.price} </p>
      <p></p>
    </div>
  )
}
