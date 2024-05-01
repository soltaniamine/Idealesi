import React from 'react'

const Search = ({filteredResults}) => {
  return (
    filteredResults.map((result) => {
        <p>
          {result.text}
        </p>
      }) 
  )
}

export default Search