import { TodoCounter } from "./TodoCounter/TodoCounter";
import { TodoSearch } from "./TodoSearch/TodoSearch";
import { TodoList } from "./TodoList/TodoList";
import { TodoItem } from "./TodoList/TodoItem";
import {CreateTodo} from "./CreateTodo/CreateTodo";
const defaultTodo = [
  {text: "cortar cebolla", completed: false},
  {text: "Tomar awa", completed: true},
  {text: "tomar el curso de react", completed: true},
  {text: "Llorar con la Llorona", completed: false},
]
function App() {
  return (
    <div className="container">
      <TodoCounter completed={16} total={25}/>
      <TodoSearch />
      <TodoList>
        {defaultTodo.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>
    <CreateTodo />
    </div>
  );
}

export default App;
