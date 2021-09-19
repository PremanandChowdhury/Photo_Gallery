import React, { useState } from 'react'
import SearchBar from './SearchBar'
import unsplash from '../api/unsplash'
import ImageList from './ImageList'
import '../index.css'

const App = () => {
  const [images, setImages] = useState([])

  const onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    })

    setImages([...response.data.results])
  }
  return (
    <div className='container'>
      <div className='search-container'>
        <SearchBar onSubmit={onSearchSubmit} />
      </div>
      <ImageList images={images} />
    </div>
  )
}

export default App
