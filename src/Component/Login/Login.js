import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './Login.css'
export default function Login() {
  const navigate = useNavigate();

  const[userName,setUserName]=useState('')
const [count,setCount]=useState(0);
const [increment,setIncrement]=useState(0);
  const onSubmit = (e) => {
    e.preventDefault();
  
   console.log("user",userName)
   setUserName(userName);
    navigate('/quizStart')
   
  }
  
  let user=localStorage.setItem("userName",userName)
  return (
    <div className='container'>
      
      <form className='Login' onSubmit={onSubmit}>
        <div className='div2' >
        <div className='form-group'>
          <label className='label1'>Username</label>
          <input className='form-control form-control-lg' type="text" name='Username' onChange={(e)=>{setUserName(e.target.value)}}  /><br />
          </div>
         <button className='button' type='submit'>submit</button>
      
       
        </div>
       

       
    
      </form>
    </div>
  )
}
