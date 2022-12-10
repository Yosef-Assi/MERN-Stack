import logo from './logo.svg';
import './App.css';
import Groceries from './comp/maps';
import Tabs from './comp/Tabs';

function App() {
  return (
    <div className="App">
      <br></br>
     <Tabs listOfTabs={[
      {name:"Tab1",content:"this is tab1"},
      {name:"Tab2",content:"this is tab2"},
      {name:"Tab3",content:"this is tab3"}
     ]}/>
    </div>
  );
}

export default App;
