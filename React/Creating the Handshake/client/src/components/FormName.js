import React, { useState } from 'react'

const FormName = (props) => {
    const [name,setName]=useState("")
    const handleSumbit=(e)=> {
        e.preventDefault();
        props.myName(name)
    }

    const style2 = {
        border:'2px solid black' ,margin:'2% 20%' ,

        padding: '1em',
    }
    const button2 = {
        boxShadow: '1px 2px 9px black',
        backgroundColor :'#b6d7a8'
    }
    return (
      <div style={style2}>
        <h4>Get started right now!</h4>
        <h6>I want to start chatting with the name...</h6>
          <form onSubmit={handleSumbit}>
              <input type ="text" onChange={e=> setName(e.target.value)} placeholder="My name..."/>
              <input style={button2} type ="submit" value="Start Chatting"/>
          </form>
      </div>
    )
}

export default FormName