import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { AppUI } from './AppUI'

// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
//   { text: 'Usar estados derivados', completed: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
function App() {
  const [SearchValue, setSearchValue] = React.useState("");
  const {
    item:todos,
    saveItem:savetodos,
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
    <AppUI
    loading={loading}
    error={error}
    completedTodo = {completedTodo}
    totalTodos = {totalTodos} 
    setSearchValue = {setSearchValue} 
    SearchValue = {SearchValue} 
    searchedTodo = {searchedTodo} 
    completeTodo = {completeTodo} 
    deleteTodo = {deleteTodo} 
    />
  );
}

export default App;
