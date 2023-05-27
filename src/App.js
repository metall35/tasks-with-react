import React from "react";
import { TodoCounter } from "./TodoCounter/TodoCounter";
import { TodoSearch } from "./TodoSearch/TodoSearch";
import { TodoList } from "./TodoList/TodoList";
import { TodoItem } from "./TodoList/TodoItem";
import { CreateTodo } from "./CreateTodo/CreateTodo";
const defaultTodo = [
  { text: "cortar cebolla", completed: false },
  { text: "Tomar awa", completed: true },
  { text: "tomar el curso de react", completed: true },
  { text: "Llorar con la Llorona", completed: false },
];
function App() {
  const [SearchValue, setSearchValue] = React.useState("");
  const [todos, setTodos] = React.useState(defaultTodo);
  const completedTodo = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodo = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = SearchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoindex = newTodos.findIndex((todo)=>todo.text === text)
    newTodos[todoindex].completed = true
    setTodos(newTodos)
  }
  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoindex = newTodos.findIndex((todo)=>todo.text === text)
    newTodos.splice(todoindex, 1)
    setTodos(newTodos)
  }
  
  return (
    <div className="container">
      <TodoCounter completed={completedTodo} total={totalTodos} />
      <TodoSearch setSearchValue={setSearchValue} SearchValue={SearchValue} />
      <TodoList>
        {searchedTodo.map((todo) => (
          <TodoItem
            onComplete ={ () => completeTodo(todo.text)}
            onDelete ={ () => deleteTodo(todo.text)}
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodo />
    </div>
  );
}

export default App;
