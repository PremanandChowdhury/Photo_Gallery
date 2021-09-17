import React from 'react'
import SearchBar from './SearchBar'
import '../index.css'

const App = () => {
  const onSearchSubmit = (term) => {
    console.log(term)
  }
  return (
    <div className='container'>
      <SearchBar onSubmit={onSearchSubmit} />
    </div>
  )
}

export default App
