import React from 'react'
import { Link } from 'react-router-dom'

export default function MagazineLayout({ filteredData, clearQuery }) {
  const renderMagazineList = filteredData.map((magazine) => {
    return (
      <li key={`magazine${magazine.id}`}>
        <Link
          to={`/magazine/${magazine.id}`}
          onClick={clearQuery}
          state={magazine}
        >
          {magazine.title}
        </Link>
      </li>
    )
  })

  return (
    <>
      <h3>MagazineLayout</h3>
      {renderMagazineList}
    </>
  )
}
