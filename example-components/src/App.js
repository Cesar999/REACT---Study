import Functional from './Components/Functional';
import Classy from './Components/Classy';

import './App.css';

const functinalText = 'Functional components are just JavaScript functions. They take in an optional input which are the props. The cant use the state and the lifecycle unleess you use React hooks.';

const classText = 'Class components are based on ES6 javascript classes and they are able to use the State and the lifecycle methods.';

function App() {
  return (
    <div className="App">
      <Functional text={functinalText}/>
      <hr/>
      <Classy text={classText}/>
    </div>
  );
}

export default App;
