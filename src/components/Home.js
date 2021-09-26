import React, { useState } from "react";
import '../App.css';

function Home(){

    const [submitted , setSubmitted] = useState(false);
    const[valid, setValid] = useState(false);
    const [values , setValues] = useState({
        firstName:"",
        lastName:"",
        email:""
      });
    
    // const [firstName, setFirstName] = useState(null);
    // const [lastName, setlastName] = useState(null);
    // const [email, setEmail] = useState(null);

    // const handleFirstNameChange = (event) => {
    //   setValues({...values, firstName:event.target.value})
    // }

    // const handleLastNameChange = (event) => {
    //   setValues({...values, lastName:event.target.value})
    // }

    // const handleEmailChange = (event) => {
    //   setValues({...values, email:event.target.value})
    // }


    const handleChange = prop => event => {
      setValues({...values, prop: event.target.value})
    }

    const handleSubmit = (event) => {
  
      event.preventDefault();
      if ( values.firstName && values.lastName && values.email){
        setValid(true)
      }
      setSubmitted(true);
    }

    console.log(values.firstName);
    return(
      <>
      <h1>{values.firstName}</h1>
        <div className = "form">
      <form onSubmit = {handleSubmit}>
        {submitted ? <div className="success-emerge">success</div>: null}
        <input 
        value = {values.firstName}
        onChange={() => handleChange('firstName')}
        className="form-field"
        placeholder="First Name"
        name="firstName"></input>
           <br/>
        {submitted && !values.firstName ? <span>Please enter a first name</span> : null}
        <br/>
        <input 
        onChange={() => handleChange('lastName')}
        value = {values.lastName}
        className="form-field"
        placeholder="Last Name"
        name="lastName"></input>
           <br/>
        {submitted && !values.lastName ?<span>Please enter a last name</span> : null}
<br/>
        <input 
        onChange={() => handleChange('email')}
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
      </>
    );

    
}
export default Home;