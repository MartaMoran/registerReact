import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {NewInput} from './components/Input';
import { InputSubmit } from './components/InputSubmit';
import { InputRadio } from './components/InputRadio';

function App() {
  const [name, setName]=useState('');
  const [lastName, setLastName]=useState('');
  const [mail, setMail]=useState('')
  const [phone, setPhone]=useState('');
  const [sex, setSex]=useState('');
  const [errorName, setErrorName]=useState('');
  const [errorLAstName, setErrorLastName]=useState('');
  const [errorMail, setErrorMail]=useState('');
  const [errorPhone, setErrorPhone]=useState('');
  
  const handleChangeInputName=(event)=>{
    setName(event.target.value)
  }
  const handleChangeInputLastNAme=(event)=>{
    setLastName(event.target.value)
  }
  const handleChangeInputMail=(event)=>{
    setMail(event.target.value)
  }
  const handleChangeInputPhone=(event)=>{
    setPhone(event.target.value)
  }
  const handleInputSex=(event)=>{
    setSex(event.target.value)
  }

  useEffect(()=>{
    if (name.length<=1){
      setErrorName('Escribe tu nombre')
    }else {
      setErrorName('')
    }

  }, [name]);

  useEffect(()=>{
    if (lastName.length<=1){
      setErrorLastName('Escribe tu apellido')
    }else {
      setErrorLastName('')
    }

  },[lastName]);

  useEffect(()=>{
    if ( mail.includes('@')===false){
      setErrorMail('El email debe contener @')
    if (mail.length<=3){
      setErrorMail('El email debe contener al menos 4 caracteres')
    }
    }else{
      setErrorMail('')
    }
  }, [mail]);

  useEffect(()=>{
    if (isNaN(phone)){
      setErrorPhone('Debes incluir solo números')
    }else{
      setErrorPhone('')
    }
  }, [phone])


  useEffect(()=>{
     setErrorName('')
     setErrorLastName('')
     setErrorMail('')
     setErrorPhone('')
  },([]))


  return (

    <form>
        <NewInput for="fname" type="text" id="fname"  onChange={handleChangeInputName} title="Nombre: "/>
        <h6 style={{color:'red'}}>{errorName}</h6>
        <NewInput for="lname" type="text" id="lname" onChange= {handleChangeInputLastNAme} title="Apellidos: "/>
        <h6 style={{color:'red'}}>{errorLAstName}</h6>
        <NewInput for="mail" type="text" id="mail"  onChange={handleChangeInputMail} title="email: "/>
        <h6 style={{color:'red'}}>{errorMail}</h6>
        <NewInput for= "phone" type="text" id="phone" onChange={handleChangeInputPhone} title="Teléfono"/>
        <h6 style={{color:'red'}}>{errorPhone}</h6>
        <InputRadio title="masculino" type="radio" onChange={handleInputSex} name="sex" value="masc" />
        <InputRadio title="femenino" type="radio" onChange={handleInputSex} name="sex" value="fem" />
        <InputRadio  title="Otro" type="radio" onChange={handleInputSex} name="sex" value="other"/>
        <InputSubmit type="submit" value="Enviar"/>
      
    </form>
  );
}

export default App;
