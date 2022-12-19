import './App.css';
import ProductManager from './comp/ProductManager';

import ProductsShow from './comp/ProductsShow';
import Detail from './comp/Detail';
import { Router } from '@reach/router';
import Update from './comp/Update';

function App() {
  return (
    <div  className="App">
         <Router >
          <ProductManager path="/"/>

            <ProductsShow path="/products/"/>
            <Detail path="/product/:id"/>
            <Update path="/product/:id/edit"/>
         </Router>
        </div>
  );
}

export default App;
