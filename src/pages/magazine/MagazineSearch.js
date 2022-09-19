import React from 'react'

export default function MagazineSearch({ query, search }) {
  const searchInputChange = (event) => {
    search(event.target.value)
  }
  return (
    <>
      MagazineSearch
      <div>
        <label htmlFor="">Search for:</label>
        <input type="text" onChange={searchInputChange} value={query}/>
      </div>
    </>
  )
}
