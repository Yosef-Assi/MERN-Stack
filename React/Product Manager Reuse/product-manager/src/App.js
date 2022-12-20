import './App.css';
import ProductManager from './comp/ProductManager';

import ProductsShow from './comp/ProductsShow';
import Detail from './comp/Detail';
import { Router } from '@reach/router';
import Update from './comp/Update';
import Main from './comp/Main';

function App() {
  return (
    <div  className="App">
         <Router >
            <Main path="/"/>
            <ProductsShow path="/products/"/>
            <Detail path="/product/:id"/>
            <Update path="/product/:id/edit"/>
         </Router>
        </div>
  );
}

export default App;
