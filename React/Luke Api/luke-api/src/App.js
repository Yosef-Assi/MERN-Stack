import './App.css';
import Home from './comp/Home';
import { Router } from '@reach/router';
import People from './comp/People';
import Plantes from './comp/Plantes';

function App() {
  return (
    <div className="App">
     <Home/>
     <Router>
      <People path="people/:ida"/>
      <Plantes path="planets/:idp"/>
     </Router>
    </div>
  );
}

export default App;
