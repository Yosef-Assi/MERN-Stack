import './App.css';
import BigInv from './components/BigInv';
function App() {
  return (
    <div className="App">
    <BigInv firstName="Yousef" lastName="Assi" age={5} hairColor="Black"/>
    <BigInv firstName="Raad" lastName="Tome" age={5} hairColor="Black"/>
    <BigInv firstName="Ahmed" lastName="Hamdan" age={5} hairColor="Black"/>
    <BigInv firstName="Zaki" lastName="Nahhas" age={5} hairColor="Black"/>

    </div>
  );
}

export default App;
