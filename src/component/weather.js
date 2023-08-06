import React from "react";

const Weather =(props)=> {
    
        return(
            <div className="info">
               
       {  props.tempreature && 
       <p className="info key">   tempreature:
       <span className="info value">  {props.tempreature} </span>
       </p>   } 
        {  props.city        && 
        <p className="info key">    city :   
            <span className="info value">  {props.city}</span></p> }
      {    props.country     &&
       <p className="info key">    country: 
         <span className="info value"> {props.country}</span></p> }
         { props.humidity    &&
         <p className="info key">    humidity :
            <span className="info value">{props.humidity}</span></p> }
        {  props.descriptions &&
        <p className="info key">   descreptions: 
            <span className="info value">{props.descriptions}</span></p> }
        {  props.error &&
        <p className="info key">   error:
         <span className="info value">{props.error}</span> </p> }
               
            </div>
        )
    }


export default Weather;