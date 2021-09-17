import React, { useState } from 'react'
import '../index.css'

const SearchBar = () => {
  const [term, setTerm] = useState('Search term ....')

  return (
    <div>
      <form action='text'>
        <label htmlFor='search'>Search Images 🔍</label>
        <input
          type='text'
          id='search'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </div>
  )
}

export default SearchBar
