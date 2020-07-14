import React from 'react';

const InputSubmit=(props)=>{
   return  <>
        <input onClick={props.onClick} type={props.type} value={props.value}></input>
    </>
}
export {InputSubmit}