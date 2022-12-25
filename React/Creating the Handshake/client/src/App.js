import './App.css';
import Chat from './components/Chat';
import Main from './views/Main';

function App() {

  const style1 = {border:'2px solid black' ,margin:'2% 20%' ,backgroundColor:'#dddddd'}
  return (
    <div className="App">
      <h2 style={style1}>MERN CHAT</h2>
      <Main/>
    </div>
  );
}

export default App;
