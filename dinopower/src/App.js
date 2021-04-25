import 'semantic-ui-css/semantic.min.css'
import './App.css';
import GameBar from './components/GameBar';
import SoundBar from './components/SoundBar';

function App() {
  return (
    <div className="App">
      <h1 className="AppHeader"><b> DinoPower </b></h1>
      <div className="Bars">
        <SoundBar />
        <GameBar />
      </div>
    </div>
  );
}

export default App;
