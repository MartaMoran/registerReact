import React from 'react';

const NewInput =(props)=>{
    return <>
        <label htmlFor={props.for}>{props.title}</label>
        <input type={props.type} id={props.id} onChange={props.onChange}>{props.text}</input>
    </>
}
export {NewInput}