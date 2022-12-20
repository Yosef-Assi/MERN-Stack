import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DeleteButton from './DeleteButton';
import { Link } from '@reach/router';

const ShowAuthors = () => {
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setAuthors(res.data));
    }, [authors])
    const removeFromDom = personId => {
        setAuthors(authors.filter(person => person._id != personId))
    }
    const style1 ={
        textAligncenter :'center',
        margin:'2% 35%'
    }
    return (
        <div style={style1}>
                    <table border="1">
                        <tr>
                            <th>Author</th>
                            <th>Actions Avalliable</th>
                        </tr>
                    {authors.map((person, idx) => {
                        return (
                        <>
                        
                        <tr>
                            <td>{person.name}</td>
                            <td><button><Link to={"/update/"+person._id}>Edit</Link></button><DeleteButton personId={person._id} successCallback={()=>removeFromDom(person._id)}/></td>

                        </tr>
                        </>
                         )})}
                    </table>
        
             
            
       
    </div>
    )
}

export default ShowAuthors