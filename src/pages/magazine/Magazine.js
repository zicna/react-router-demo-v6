import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Magazine() {

    const location = useLocation()
    const magazine = location.state
  return (
    <h1>{magazine.title}</h1>
  )
}
