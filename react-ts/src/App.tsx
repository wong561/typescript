import Todos from './Components/Todos';
import './App.css';

function App() {
  return (
    <div>
      <Todos items={['Learn React', 'Learn TypeScript']}/>
    </div>
  );
}

export default App;
