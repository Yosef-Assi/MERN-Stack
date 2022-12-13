import './App.css';
import { Router } from '@reach/router';
import Home from './comp/Home'
import Colors from './comp/Colors'
import Number from './comp/Number'


function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"></Home>
        <Colors path="/:hello/:color1/:color2"></Colors>
        <Number path="/:number"></Number>
      </Router>
      
    </div>
  );
}

export default App;
