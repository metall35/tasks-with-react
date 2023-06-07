import React from 'react'
import './TodoCounter.css'

function TodoCounter({ total, completed}) {
  return (
    <h1 className='title'>
        Has realizado {completed} de {total} tareas
    </h1>
  )
}

export {TodoCounter}