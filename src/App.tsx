import { TodoListItem } from "./components/TodoListItem";

const todos: Todo[] = [{text: 'run', complete: false}, {text: 'walk', complete: true}]

const App: React.FC = () => {

  return (
    <div className="App">
      <h3>Hello let begin Agian!?</h3>
      <TodoListItem todo={todos[0]} />
      <TodoListItem todo={todos[1]} />
    </div>
  );
}


export default App;
