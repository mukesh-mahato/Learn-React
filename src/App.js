import logo from './logo.svg';
import './App.css';
import ClassComponent from './Components/ClassComponent';
import FunctionalComponent from './Components/FunctionalComponent';
import JSX from './Components/JSX';
import State from './Components/State'
import SetStateCounter from './Components/SetStateCounter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';

function App() {
  return (
    <div className="App">
      <EventBind />
      {/* <ClassClick /> */}
      {/* <FunctionClick/> */}
      {/* <SetStateCounter /> */}
      {/* <State /> */}
      {/* <JSX/> */}
      {/* <FunctionalComponent name='Bruce'/>
     <ClassComponent name='Mr. Beast'/> */}
    </div>
  );
}

export default App;
