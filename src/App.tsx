
import { Heading } from "./components/Heading";
import {Label} from './components/Label';
import { TodoListItem } from "./components/TodoListItem";

const todos: Todo[] = [{text: 'run', complete: false}, {text: 'walk', complete: true}]

const App: React.FC = () => {

  return (
    <div className="App">
      <h3>Hello let begin Agian!?</h3>
      <Heading title="Hello Props from Heading" />
      <Label title="sada" content="sadsa" />
      <TodoListItem todo={todos[0]}/>
    </div>
  );
}


export default App;
