import logo from './logo.svg';
import './App.css';
import HookCounter from './Components/HookCounter';
import HookCounterTwo from './Components/HookCounterTwo';
import HookCounterObj from './Components/HookCounterObj';
import HookCOunterArr from './Components/HookCounterArr';
import HookCounterUE from './Components/HookCounterUE';

function App() {
  return (
    <div className="App">
      <HookCounterUE />
      {/* <HookCOunterArr /> */}
      {/* <HookCounterObj /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounter /> */}
    </div>
  );
}

export default App;
