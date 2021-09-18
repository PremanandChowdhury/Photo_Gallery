import React, { useState } from 'react'
import SearchBar from './SearchBar'
import unsplash from '../api/unsplash'
import '../index.css'

const App = () => {
  const [images, setImages] = useState([])
  const [len, setLen] = useState(0)

  const onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    })

    setImages({ images: response.data.results })
    setLen(response.data.results.length)
  }
  return (
    <div className='container'>
      <SearchBar onSubmit={onSearchSubmit} />
      Found : {len} images
    </div>
  )
}

export default App
