import React, { useState } from 'react';
import { TodoListItem } from "./components/TodoListItem";

const initialTodos: Todo[] = [
  {
    text: 'run',
    complete: false
  },
  {
    text: 'walk'
    , complete: true
  }
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    });
    setTodos(newTodos);
  }
  return (
    <ul className="App">
      <h3>Hello let begin Agian!?</h3>
      <TodoListItem todo={todos[0]} toggleTodo={toggleTodo} />
      <TodoListItem todo={todos[1]} toggleTodo={toggleTodo} />
    </ul>
  );
}


export default App;
