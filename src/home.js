import React from "react";
import './App.css';
import {useState} from 'react';

function    Home(){
    const [values , setValues] = useState({
        firstName:"",
        lastName:"",
        email:""
      });
    const [submitted , setSubmitted] = useState(false);
    const[valid, setValid] = useState(false);
      const handleFirstNameChange = (event) => {
        setValues({...values, firstName:event.target.value})
      }
      const handleLastNameChange = (event) => {
        setValues({...values, lastName:event.target.value})
      }
      const handleEmailChange = (event) => {
        setValues({...values, email:event.target.value})
      }
      const handleSubmit = (event) => {
    
        event.preventDefault();
        if ( values.firstName && values.lastName && values.email){
          setValid(true)
        }
        setSubmitted(true);
      }
    return(
        <div className = "form">
      <form onSubmit = {handleSubmit}>
        {submitted ? <div className="success-emerge">success</div>: null}
        <input 
        value = {values.firstName}
        onChange={handleFirstNameChange}
        className="form-field"
        placeholder="First Name"
        name="firstName"></input>
           <br/>
        {submitted && !values.firstName ? <span>Please enter a first name</span> : null}
        <br/>
        <input 
        onChange={handleLastNameChange}
        value = {values.lastName}
        className="form-field"
        placeholder="Last Name"
        name="lastName"></input>
           <br/>
        {submitted && !values.lastName ?<span>Please enter a last name</span> : null}
<br/>
        <input 
        onChange={handleEmailChange}
        value = {values.email}
        className="form-field"
        placeholder="Email"
        name="email"></input>
           <br/>
        {submitted && !values.email ?<span>Please enter an email</span> : null}
        <br/>
        <button type="submit" className="submit">SUBMIT</button>
      </form>
      </div>
    );

    
}
export default Home;