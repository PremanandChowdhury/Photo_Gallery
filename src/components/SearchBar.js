import React from 'react'
import '../index.css'

const SearchBar = () => {
  return (
    <div>
      <form action='text'>
        <label htmlFor='search'>Write your Search 🔍</label>
        <input type='text' id='search' />
      </form>
    </div>
  )
}

export default SearchBar
