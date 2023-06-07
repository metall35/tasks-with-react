import React from 'react'
import './Todosearch.css'

function TodoSearch({SearchValue, setSearchValue}) {
  return (
    <input className='Search' placeholder='Tarea' value={SearchValue} onChange={(event) =>{
      setSearchValue(event.target.value)
    }} />
  )
}

export {TodoSearch}