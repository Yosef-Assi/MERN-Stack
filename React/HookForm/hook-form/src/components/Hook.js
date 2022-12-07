import React, { useState } from  'react';
// rafce
const UserForm = (props) => {
    
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setConfirmPassword] = useState("");  

    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname,lastname, email, password,confirmpassword };
        console.log("Welcome", newUser);
    };
    
    return(
    <>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div>
                <label>Email : </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
               <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
        </form>
        <p>first name : {firstname}</p>
        <p>last name : {lastname}</p>
        <p>email : {email}</p>
        <p>password : {password}</p>
        <p>confirm password : {confirmpassword}</p>
</>
    );
};
    
export default UserForm;
