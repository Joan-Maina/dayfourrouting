import React, { Component } from "react";
 import '../App.css';


 const Button = ({name}) => {
     
     return(
         <div>
             <h2>{name}</h2>
             <button>sub</button>
         </div>
     );
 }

 export default Button;