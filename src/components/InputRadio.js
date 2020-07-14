import React from 'react';

const InputRadio=(props)=> {
 return <>
   
    <label >{props.title}</label>
    <input type={props.type} name={props.name} value= {props.value} onChange={props.onChange}></input>
   </>
   }

   export {InputRadio};