import React, { useState } from 'react'
import '../index.css'

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState('')

  const onFormSubmit = (e) => {
    e.preventDefault()
    onSubmit(term)
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
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
