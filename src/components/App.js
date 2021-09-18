import React from 'react'
import SearchBar from './SearchBar'
import axios from 'axios'
import '../index.css'

const App = () => {
  const onSearchSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID sH1dHMPScortciWomIO6561h1-J8AWCGT-zCjgz4k7w',
      },
    })
    console.log(response.data.results)
  }
  return (
    <div className='container'>
      <SearchBar onSubmit={onSearchSubmit} />
    </div>
  )
}

export default App
