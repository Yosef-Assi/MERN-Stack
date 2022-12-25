import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import io from 'socket.io-client';

const Chat = (props) => {
    const [socket] = useState(() => io(':8000'));
    const [txt,setTxt]=useState("")
    const [name,setName]=useState("")

    const [messages,setMessage]=useState([])
    useEffect(() => {
      socket.on('chat',data=>setMessage([...messages,data]));
      socket.on('chat',data=>setName(props.name));
        
    }, [messages]);
    const handleSumbit=(e)=> {
        e.preventDefault();
        socket.emit("chat",props.name+" : "+txt)
        // socket.emit("chat",props.name+" has joined the chat")
        setTxt("")
    }
     const style2 = { border:'2px solid black' ,margin:'2% 20%' ,  overflow: 'auto' ,
     padding: '1em',}
     const style21 = {margin:'2% 20%' ,  overflow: 'auto',height:'200px',
     padding: '1em',}
  return (
    <div style={style2}>
        <p>{name+" has joined the chat"}</p>
       <div style={style21}> {messages.map((err, index) => <p  key={index}>{err}</p>)}</div>
        <form onSubmit={handleSumbit}>
            <input type ="text" value={txt} onChange={e=> setTxt(e.target.value)}/>
            <input type ="submit" value="send"/>
        </form>
    </div>
  )
}

export default Chat