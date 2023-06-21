import React from 'react'
import './Todosearch.css'
import { TodoContext } from '../Context'

function TodoSearch() {
  const {SearchValue, setSearchValue} = React.useContext(TodoContext)
  return (
    <input className='Search' placeholder='Tarea' value={SearchValue} onChange={(event) =>{
      setSearchValue(event.target.value)
    }} />
  )
}

export {TodoSearch}