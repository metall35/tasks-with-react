import React from 'react'
import './CreateTodo.css'
import { TodoContext } from '../Context'

function CreateTodo() {
    const {
        setOpenModal,
        openModal
    } = React.useContext(TodoContext)
    return (
        <button className='createTodo' onClick={() => {
            !openModal ? setOpenModal(true) : setOpenModal(false)
        }}> + </button>
    )
}

export { CreateTodo } 