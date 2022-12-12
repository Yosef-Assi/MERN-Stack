import './App.css';
import { useState } from 'react';
import AddList from './comp/AddList';
import DisplayList from './comp/DisplayList';

function App() {
  const [todolist,setTodoList]=useState([])
  return (
    <div className="App">
      <AddList lists={setTodoList}/>
     
    </div>
  );
}

export default App;
