import './App.css';
import { Link, Router } from '@reach/router';
import { Main } from './views/Main';
import CreateTeam from './views/CreateTeam';

function App() {
  return (
    <div className="App">
      
      <Router>
            <Main path="/project"/>
            <CreateTeam path="/project/new/"/>
         </Router>
    </div>
  );
}

export default App;
