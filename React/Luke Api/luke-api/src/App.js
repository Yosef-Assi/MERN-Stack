import './App.css';
import Home from './comp/Home';
import { Router } from '@reach/router';
import People from './comp/People';
import Plantes from './comp/Plantes';
import Error from './comp/Error';

function App() {
  return (
    <div className="App">
     <Home/>
     <Router>
      <People path="people/:ida"/>
      <Plantes path="planets/:idp"/>
      <Error path="/error"/>

     </Router>
    </div>
  );
}

export default App;
