import react, { useState,useEffect } from 'react';
import axios from 'axios';

const Api = (props) => {
    const [pekemon, setPekemon] = useState([]);
    const [click,setClick] = useState(false);
    const [responseData, setResponseData] = useState(null);
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response=>{setPekemon(response.data.results)})
    }, []); 

    const click1 = (e)=> {
        click?setClick(false):setClick(true)
    } 
 
    return (
        <>
             <ul>
        {
                    click ?
                    pekemon.map((peke, index)=>{
                        return (<>
                        <li key={index}>{peke.name} </li>
                        </>
                        );
                    }) :
                    ''
                }
                </ul>
        <button onClick={click1}>Fetch</button>
        </>
    );
}
export default Api;

