import './App.css';
import State from './Components/State';
import ParentState from './Components/ParentState';

function App() {
  return (
    <div className="App">
      <State />
      <hr />
      <ParentState />
    </div>
  );
}

export default App;
