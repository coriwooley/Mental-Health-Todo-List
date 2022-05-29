import './App.css';
import TodoList from './components/TodoList';
import Accomplishments from './components/Accomplishments';
import InspirationalQuote from './components/InspirationalQuote';


function App() {
  return (
    <div className="App">
      <InspirationalQuote/>
      <div className='todo-accomplishments'>
        <TodoList/>
        <Accomplishments/>
      </div>
    </div>
  );
}

export default App;
