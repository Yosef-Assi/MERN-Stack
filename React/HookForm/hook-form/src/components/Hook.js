import React, { useState } from  'react';
// rafce
const UserForm = (props) => {
    
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setConfirmPassword] = useState("");  

const style = {
    margin:'0px 35%',
    width:'35%',
    padding: '12px 15px',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    background: '#f6f6f6', 
    color: 'black',
    border: 'none'
};
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname,lastname, email, password,confirmpassword };
        console.log("Welcome", newUser);
    };
    
    return(
    <>
        <form onSubmit={ createUser }>
            <div style={style}>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div style={style}>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div style={style}>
                <label>Email : </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div style={style}>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div >
               <div style={style}>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
        </form>
<h2>Your Form Data</h2>
        <p>first name : {firstname}</p>
        <p>last name : {lastname}</p>
        <p>email : {email}</p>
        <p>password : {password}</p>
        <p>confirm password : {confirmpassword}</p>
</>
    );
};
    
export default UserForm;
