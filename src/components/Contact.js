import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';

let initialValue={
  name:"",
  email:"",
  number:"",
  address:"",
  option:""
}

function Contact() {
  const navigation=useNavigate();

  const[data, setData]=useState(initialValue);

  const handleChange=(e)=>{
    setData({...data, [e.target.name]: e.target.value})
    console.log(data);
  };
  
  const handleSubmit=(e)=>{
    axios
    .post("https://shopping-appss.herokuapp.com/shopping",JSON.stringify(data),
    {
      headers:{
        "Content-type": "application/json"
      }})
      .then(() => setData(initialValue));
  };


  return (<>
    <div className='main-div'>
    <div>
      <label className='input-title'>Enter details</label><br/>

      <input 
      type='text'
      onChange={handleChange}
      name='name'
      placeholder='Enter your full name'
      className='contact-input'
      /><br/>

      <input 
      type='email'
      onChange={handleChange}
      name='email'
      placeholder='Enter your email'
      className='contact-input'
      /><br/>

      <input
      type='number'
      onChange={handleChange}
      name='number'
      placeholder='Enter your phone number'
      className='contact-input'
      /><br/>

      <input 
      type='text'
      onChange={handleChange}
      name='address'
      placeholder='Enter your full address'
      className='contact-input'
      /><br/>

     <select className='contact-input' onClick={handleChange} name='option'>
    <option name="">Please choose any TV or Phone</option>
    <option name="TU8570">TU8570</option>
    <option name="TU8500">TU8500</option>
    <option name="TU8000">TU8000</option>
    <option name="AU8100S">AU8100S</option>
    <option name="Z Flip4">Z Fold4</option>
    <option name="Z Flip5">Z Flip5</option>
    <option name="M13 (4GB RAM)">M13 (4GB RAM)</option>
    <option name="M53 5G (8GB RAM)">M53 5G (8GB RAM)</option>
    </select><br/>

      <button onClick={handleSubmit} className='confirm-button'>Confirm</button><br/>

      <button onClick={()=>{navigation('/')}} className='cancel-button'>Cancel</button><br/>

      <div>click <a href='https://shopping-appss.herokuapp.com/shopping'>here</a> to check the collected data in database</div>

    </div>
    </div>
    
    </>
  )
}

export default Contact