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
        const handleFirstName = (e) => {
            setFirstName(e.target.value);
            if(e.target.value=="") {
                setFirstName("");
        }
            else if(e.target.value.length < 2) {
                setFirstName("First Name must be 2 characters");
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value=="") {
            setFirstName("");
    }
       else if(e.target.value.length < 2) {
            setLastName("last Name must be 2 characters");
    }
}
const handleEmail = (e) => {
    setEmail(e.target.value);
    if(e.target.value=="") {
        setFirstName("");
}
   else if(e.target.value.length < 5) {
        setEmail("Email must be 5 characters");
}
}
const handlepass = (e) => {
    setPassword(e.target.value);
    if(e.target.value.length > 8) {
        setPassword("Password must be 8 characters");
}
}
const handleConfirmPass = (e) => {
    setConfirmPassword(e.target.value);

    if(e.target.value !== password) {
        setConfirmPassword("Password must equal");
}
}
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
                <input type="text" onChange={ handleFirstName } />
                    {
                    firstname ?
                    <p style={{color:'red'}}>{ firstname }</p> :
                    ''
                }
            </div>
            <div style={style}>
                <label>Last Name: </label> 
                <input type="text" onChange={ handleLastName } />
{
                    lastname ?
                    <p style={{color:'red'}}>{ lastname }</p> :
                    ''
                }
            </div>
            <div style={style}>
                <label>Email : </label> 
                <input type="text" onChange={handleEmail } />
                {
                    email ?
                    <p style={{color:'red'}}>{ email }</p> :
                    ''
                }
            </div>
            <div style={style}>
                <label>Password: </label>
                <input type="text" onChange={ handlepass } />
                {
                    password ?
                    <p style={{color:'red'}}>{ password }</p> :
                    ''
                }
            </div >
               <div style={style}>
                <label>Confirm Password: </label>
                <input type="text" onChange={ handleConfirmPass } />
                {
                    confirmpassword ?
                    <p style={{color:'red'}}>{ confirmpassword }</p> :
                    ''
                }
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
