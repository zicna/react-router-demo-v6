import React, { useState } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import Magazine from './Magazine'
import MagazineLayout from './MagazineLayout'

import { dummyMagazineData } from './dummyData'
import MagazineSearch from './MagazineSearch'

export default function MagazineRoutes() {
  const [searchQuery, setSearchQuery] = useState('')
  console.log('rendered again')
  const obj = useParams()
  console.log(obj["*"])

  const filteringData = () => {
    if (searchQuery.trim() === '') return dummyMagazineData
    return dummyMagazineData.filter((magazine) => {
      return magazine.title.toLowerCase().includes(searchQuery.trim())
    })
  }

  const filteredData = filteringData()


  const clearQuery = () => {
    setSearchQuery('')
  }

  return (
    <>
      <MagazineSearch query={searchQuery} search={setSearchQuery} />
      <MagazineLayout filteredData={filteredData} clearQuery={clearQuery} />
      <Routes>
        <Route path=":id" element={<Magazine />} />
      </Routes>
    </>
  )
}
