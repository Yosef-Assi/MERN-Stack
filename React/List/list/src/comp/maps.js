import React from 'react';
  
const Groceries = (props) => {
    // this could just as easily come from props
    const groceryList = [{"id":1,"name":"yosef"},{"id":1,"name":"saeed"},{"id":1,"name":"yosef"}];
    return ( 
        <ul>
            { groceryList.map( (item, i) => 
                <li key={ i }>{ item.name }</li> ) }
        </ul>
    ); 
}
    
export default Groceries;

