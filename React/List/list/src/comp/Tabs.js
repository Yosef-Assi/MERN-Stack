import React, { useState } from 'react';

const Tabs = (props) => {
    const [index, setIndex] = useState(0);
    const [isHover, setIsHover] = useState(false);

    const onClickHandler = (e, value) => {
        setIndex(value);
    }

   const handleMouseEnter = (e) => {
      setIsHover(true);
   };
   const handleMouseLeave = (e) => {
      setIsHover(false);
   };

    const btnStyle = {
        padding: '12px 15px',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        // background: 'linear-gradient(30deg, rebeccapurple, magenta)', 
        color: '#fff',
        border: 'none',
        marginLeft:'12px',
        background: isHover ? 'lightblue' : 'linear-gradient(30deg, rebeccapurple, magenta)',

    };
    const pStyle = {
        padding: '12px 15px',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        width: '200px',
        height: '200px',
        textAlign: 'center',
        border: '5px solid black',
        marginLeft:'40% ',

    };
    return ( 
        <div>
        {
        props.listOfTabs.map( (item, index) => {
        return(
          <button onClick={ (e) => onClickHandler(e, index) } style={btnStyle} onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>{ item.name } </button>    
        )
        })  
        }
        <div>
            <p style={pStyle}>{props.listOfTabs[index].content}</p>
        </div>
       </div>
    ); 
}
    
export default Tabs;

