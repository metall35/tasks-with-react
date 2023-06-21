import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
const TodoContext = React.createContext()

function TodoProvider({ children }) {
    const [SearchValue, setSearchValue] = React.useState("");
    const {
        item: todos,
        saveItem: savetodos,
        loading,
        error
    } = useLocalStorage('TODO_v1', []);
    const completedTodo = todos.filter((todo) => !!todo.completed).length;
    const totalTodos = todos.length;
    const searchedTodo = todos.filter((todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = SearchValue.toLowerCase();
        return todoText.includes(searchText);
    });
    const [openModal, setOpenModal] = React.useState(true)
    const completeTodo = (text) => {
        const newTodos = [...todos]
        const todoindex = newTodos.findIndex((todo) => todo.text === text)
        newTodos[todoindex].completed = true
        savetodos(newTodos)
    }
    const deleteTodo = (text) => {
        const newTodos = [...todos]
        const todoindex = newTodos.findIndex((todo) => todo.text === text)
        newTodos.splice(todoindex, 1)
        savetodos(newTodos)
    }
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodo,
            totalTodos,
            setSearchValue,
            SearchValue,
            searchedTodo,
            completeTodo,
            deleteTodo,
            setOpenModal,
            openModal
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }