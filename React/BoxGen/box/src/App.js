import React, { useState } from 'react';
import MessageForm from './comp/MessageForm';
import MessageDisplay from './comp/MessageDisplay';
import './App.css';

function App() {
  const [currentColor, setCurrentColor] = useState();
  const [currentWidth, setCurrentWidth] = useState();


    
    const youveGotMail = ( newColor ) => {
      setCurrentColor( newColor );
    }
    const widthh = ( newWidth ) => {
      setCurrentWidth( newWidth );
    }
  return (
    <>
    <MessageForm onNewColor={ youveGotMail } onNewWidth= {widthh} />
    <MessageDisplay color={ currentColor } width={currentWidth} />
    

</>
  );
}

export default App;
