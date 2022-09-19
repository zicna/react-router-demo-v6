import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function PageNotFound() {
  //   return (
  //     <Navigate to="/"/>
  //   )
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 1000)
  }, [])

  return <h2>Page Not Found</h2>
}
