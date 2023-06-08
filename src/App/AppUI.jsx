import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoList/TodoItem";
import { CreateTodo } from "../CreateTodo";
import { Loading } from "../Loading";

function AppUI({
    loading,
    error,
    completedTodo, 
    totalTodos, 
    setSearchValue, 
    SearchValue, 
    searchedTodo, 
    completeTodo, 
    deleteTodo }) {
    return (
        <div className="container">
            <TodoCounter completed={completedTodo} total={totalTodos} />
            <TodoSearch setSearchValue={setSearchValue} SearchValue={SearchValue} />
            <TodoList>
                {loading && <Loading />}
                {error && <p>Calmao, hubo un error!!</p>}
                {(!loading && searchedTodo.length === 0) && <h3>Upss. No se encontraron TODOS...</h3>}
                {searchedTodo.map((todo) => (
                    <TodoItem
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
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

export {AppUI}
