import react, { useState,useEffect } from 'react';


const Api = (props) => {
    const [pekemon, setPekemon] = useState([]);
    const [click,setClick] = useState(false);
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response => response.json())
            .then(response => setPekemon(response.results))
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
                        return (<li key={index}>{peke.name} </li>
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

