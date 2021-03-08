import './App.css';
import MusicPlayer from './Components/functional/MusicPlayer';
import MusicPlayerPro from './Components/class/MusicPlayerPro';

function App() {
  return (
    <div className="App">
      <MusicPlayer />
      <hr/>
      <MusicPlayerPro />
    </div>
  );
}

export default App;
