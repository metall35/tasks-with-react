import React from "react";
import "./todoform.css"
import { TodoContext } from "../Context";

function TodoForm() {
    const {
        setOpenModal,
        addTodo
    } = React.useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = React.useState("")

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onCancel = () => setOpenModal(false)

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label> Escribe tu tarea </label>
            <textarea placeholder="Cortar cebolla" 
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="button-container">
                <button type="button" onClick={onCancel} className="ButtonForm button-cancelar">
                    Cancelar
                </button>
                <button type="submit" className="ButtonForm button-enviar">
                    Enviar
                </button>
            </div>
        </form>
    )
}
export { TodoForm }