import './App.css';
import { Router } from '@reach/router';
import Update from './comp/Update';
import Main from './comp/Main';
import Create from './comp/Create';

function App() {
  return (
    <div  className="App">
          <h2>Favorite authors</h2>
         <Router >
            <Main path="/"/>
            <Create path="/new/"/>
            <Update path="/update/:id"/>
         </Router>
        </div>
  );
}

export default App;
