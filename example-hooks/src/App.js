import './App.css';
import UseStateComponent from './Components/UseStateComponent';
import UseEffectComponent from './Components/UseEffectComponent';
import UseEffectListener from './Components/UseEffectListener';
import UseRefComponent from './Components/UseRefComponent';
import CustomUsePrevious from './Components/CustomUsePrevious';
import UseMemoComponent from './Components/UseMemoComponent';
import UseCallbackComponent from './Components/UseCallbackComponent';

function App() {
  return (
    <div className="App">
      <UseStateComponent />
      <UseEffectComponent/>
      <UseEffectListener />
      <UseRefComponent />
      <CustomUsePrevious />
      <UseMemoComponent />
      <UseCallbackComponent />
    </div>
  );
}

export default App;
