import RenderProps from './RenderProps/RenderProps';
import ChildrenProps from './ChildrenProps/ChildProps';
import './App.css';

function App(){
  return (
    <div className="App">
      <RenderProps/>
      <hr/>
      <ChildrenProps/>
    </div>
  )
}

export default App;