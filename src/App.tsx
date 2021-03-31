import { Heading } from "./components/Heading";
import {Label} from './components/Label';


const App: React.FC = () => {
  return (
    <div className="App">
      <h3>Hello let begin Agian!?</h3>
      <Heading title="Hello Props from Heading" />
      <Label title="Hello" content="Hello Props from Label" />
    </div>
  );
}


export default App;
