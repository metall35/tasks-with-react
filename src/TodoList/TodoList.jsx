import React from 'react'
import './list.css'

function TodoList({children}) {
  return (
    <ul className='list'>
        {children}
    </ul>
  )
}

export {TodoList}