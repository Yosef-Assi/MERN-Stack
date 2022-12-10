import react, { useState } from 'react';
    
const MessageDisplay = (props) => {
   
    return (
        <>
          
           <div 
            style={{
            width: `${props.width}`,
            height:`${props.width}`,
            border: '2px solid green',
            backgroundColor: `${props.color}`
          }}
        >
            </div>
        </>
    );
};
    
export default MessageDisplay;

