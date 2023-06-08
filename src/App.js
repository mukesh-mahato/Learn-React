import logo from './logo.svg';
import './App.css';
import ClassComponent from './Components/ClassComponent';
import FunctionalComponent from './Components/FunctionalComponent';
import JSX from './Components/JSX';
import State from './Components/State'
import SetStateCounter from './Components/SetStateCounter';

function App() {
  return (
    <div className="App">
      {/* <FunctionalComponent name='Bruce'/>
     <ClassComponent name='Mr. Beast'/> */}
      {/* <JSX/> */}
      {/* <State /> */}
      <SetStateCounter />
    </div>
  );
}

export default App;
