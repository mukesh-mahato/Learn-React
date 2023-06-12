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
import ParentComponent from './Components/ParentComponent';
import ConditionalRendering from './Components/ConditionalRendering';
import StyleSheets from './Components/StyleSheets';
import Inline from './Components/Inline';
// import './Components/appStyles.css';
import style from './Components/appStyles.module.css'
import Form from './Components/Form';
import MountingLifecycleA from './Components/MountingLifecycleA';


function App() {
  return (
    <div className="App">
      <MountingLifecycleA />
      {/* <Form /> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={style.sucess}>Sucess</h1> */}
      {/* <Inline /> */}
      {/* <StyleSheets primary={false} /> */}
      {/* <ConditionalRendering /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
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
