import './App.css';
import Counter from './Components/Counter/Counter';

import Productos from './views/Productos';
function App() {
  
  return (
    <div className="App text-danger">
      <Counter initialNumber = {0}/>
      <Counter initialNumber = {10}/>
      <Counter initialNumber = {200}/>
      <Productos/>
    </div>
  );
}

export default App;

// TODO: CONTINUAR MINUTO 50:00
