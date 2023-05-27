import React from 'react'
import './CreateTodo.css'

function CreateTodo() {
    return (
        <button className='createTodo' onClick={() => console.log('le diste click')}> + </button>
    )
}

export { CreateTodo } 