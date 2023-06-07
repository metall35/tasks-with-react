import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoList/TodoItem";
import { CreateTodo } from "../CreateTodo";

function AppUI({ 
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
