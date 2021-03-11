import './App.css';
import Stylesheet from './Components/Styleseet';
import Module from './Components/Module';
import Inline from './Components/Inline';
import Styled from './Components/Styled';

function App() {
  return (
    <div className="App">
      <Stylesheet title="stylesheet" />
      <Module title="module"/>
      <Inline title="inline"/>
      <Styled title="styled"/>
    </div>
  );
}

export default App;
