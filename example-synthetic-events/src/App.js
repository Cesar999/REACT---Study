import './App.css';
import Clippboard from './Components/Clippboard';
import DragDrop from './Components/DragDrop';
import FormComponent from './Components/Form';
import MouseEvents from './Components/MouseEvents';

function App() {
  return (
    <div className="App">
      <MouseEvents />
      <hr />
      <FormComponent />
      <hr/>
      <Clippboard />
      <hr/>
      <DragDrop />
      <hr/>
    </div>
  );
}

export default App;
