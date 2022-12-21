import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import ShowAuthors from './ShowAuthors';

export default () => {
    const [author, setAuthor] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setAuthor(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[author]);
    return (
        <div>
        
            <Link to={"/new/"}>Add an author</Link>
            {loaded && <ShowAuthors author={author}/>}
        </div>
    )
}

