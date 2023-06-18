import logo from './logo.svg';
import './App.css';
import HookCounter from './Components/HookCounter';
import HookCounterTwo from './Components/HookCounterTwo';
import HookCounterObj from './Components/HookCounterObj';
import HookCOunterArr from './Components/HookCounterArr';

function App() {
  return (
    <div className="App">
      <HookCOunterArr />
      {/* <HookCounterObj /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounter /> */}
    </div>
  );
}

export default App;
