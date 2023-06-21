import React from 'react'
import './TodoCounter.css'
import { TodoContext } from '../Context'

function TodoCounter() {
  const {
    completedTodo,
    totalTodos
  } = React.useContext(TodoContext)
  return (
    <h1 className='title'>
        Has realizado {completedTodo} de {totalTodos} tareas
    </h1>
  )
}

export {TodoCounter}