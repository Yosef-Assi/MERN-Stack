import React, { useState } from 'react'
import Chat from '../components/Chat'
import FormName from '../components/FormName'

const Main = (props) => {
    const [name,setName]=useState("")
    const myName=(name)=> {
        setName(name);
    }
  return (
    <div>
        {!name?<FormName myName={myName}/>
        :<Chat name={name}/>
  }
    </div>
  )
}

export default Main